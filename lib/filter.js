const jsonpath = require('jsonpath');

module.exports = function (filters, xmlObj, onError = defaultOnError, sourceUrl) {
	const items = jsonpath.query(xmlObj, '$.rss.channel[0].item[*]');
	return items.filter(item =>
		filters.every((opts) => {
			const node = item[opts.key || 'description'];
			if (!node) {
				onError(opts);
			}
			const shouldKeepItem = !node ||
				(opts.include ?
				node.some(x => x.match(opts.regex)) :
				node.every(x => !x.match(opts.regex)));
			if (!shouldKeepItem) {
				recordCustomEvent({
					sourceUrl,
					regex: opts.regex.toString(),
					shouldKeep: !!opts.include,
					nodeName: opts.key,
					nodeValue: node.toString()
				});
			}
			return shouldKeepItem;
		}));
};

function defaultOnError(opts) {
	// eslint-disable-next-line no-console
	console.error('something bad happened', opts);
}

const isRunningUnitTests = process.env.NODE_ENV === 'test';
function recordCustomEvent(data) {
	if (isRunningUnitTests) {
		console.error('filter out', data);
	} else {
		require("newrelic").recordCustomEvent('FeedFilter', data);
	}
}
