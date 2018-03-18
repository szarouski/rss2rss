const jsonpath = require('jsonpath');

module.exports = filter;

function filter(filters, xmlObj, onError = defaultOnError) {
	const items = jsonpath.query(xmlObj, '$.rss.channel[0].item[*]');
	return items.filter(item =>
		filters.every((opts) => {
			const node = item[opts.key || 'description'];
			if (!node) {
				onError(opts);
			}
			return !node || node.every(x => !x.match(opts.regex));
		}));
}

function defaultOnError(opts) {
	// eslint-disable-next-line no-console
	console.error('something bad happened', opts);
}
