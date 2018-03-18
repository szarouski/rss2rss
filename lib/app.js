const newrelic = require('newrelic');
const express = require('express');
const winston = require('winston');
const urljoin = require('url-join');
const request = require('request');
const xml2js = require('xml2js');
const jsonpath = require('jsonpath');
const config = require('../conf/default');
const requestID = require('express-request-id')();
const filter = require('./filter');

const parseString = xml2js.parseString;
const app = express();
const builder = new xml2js.Builder({
	renderOpts: {
		pretty: false
	}
});

winston.level = 'debug';

if (!config.feeds || !config.feeds.length) {
	const error = new Error('No configured feeds to serve. Add some to config.feeds in conf/default.js and try again');
	reportError(error);
	process.exit(0);
}
function setFeedItems(xml, items) {
	const channel = jsonpath.query(xml, '$.rss.channel[0]')[0];
	channel.item = items;
}

function sendResponse(req, res, err, xml) {
	if (err || !xml) {
		const error = err || new Error('No XML sent with response');
		reportError(error);
		return res.status(500).send();
	}
	res.contentType('text/xml');
	return res.status(200).send(xml);
}

// set a request ID for caching
app.use(requestID);

config.feeds.forEach((feed) => {
	const url = urljoin(config.base || '', feed.url);
	winston.info('Configuring source', feed.source, 'on', url);
	app.get(url, (req, res) => {
		winston.info('request for', url);
		request(feed.source, (err, result) => {
			if (err) {
				return sendResponse(req, res, err);
			}
			if (!feed.filters || !feed.filters.length) {
				// send back original feed
				winston.info('No filters specified for feed');
				return sendResponse(res, null, result.body);
			}
			parseString(result.body, (parseErr, xmlObj) => {
				if (parseErr) {
					return sendResponse(req, res, parseErr);
				}
				const itemsToReturn = filter(feed.filters, xmlObj, (opts) => {
					reportError(new Error(`can't find ${opts.key} in ${url} feed`));
				});
				setFeedItems(xmlObj, itemsToReturn);
				const XMLString = builder.buildObject(xmlObj);
				return sendResponse(req, res, null, XMLString);
			});
		});
	});
});

app.listen(config.port || 80, () => {
	winston.info('rss2rss listening on port', config.port || 80);
});

function reportError(err) {
	newrelic.noticeError(err);
	winston.error(err);
}
