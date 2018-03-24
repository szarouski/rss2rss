const jsonpath = require('jsonpath');
const newrelic = require('newrelic');

module.exports = filter;

function filter(filters, xmlObj, onError = defaultOnError, sourceUrl) {
	const items = jsonpath.query(xmlObj, '$.rss.channel[0].item[*]');
	return items.filter(item =>
		filters.every((opts) => {
			const node = item[opts.key || 'description'];
			if (!node) {
				onError(opts);
			}
			const shouldKeepItem = !node || node.every(x => !x.match(opts.regex));
			if (!shouldKeepItem) {
				newrelic.recordCustomEvent('FeedFilter', {
					sourceUrl,
					regex: opts.regex.toString(),
					nodeName: opts.key,
					nodeValue: node.toString()
				});
			}
			return shouldKeepItem;
		}));
}

function defaultOnError(opts) {
	// eslint-disable-next-line no-console
	console.error('something bad happened', opts);
}
