module.exports = {
	port: 80,
	base: '',
	feeds: [{
		url: 'habr',
		source: 'https://habrahabr.ru/rss/feed/posts/all/02c22642248aca2e9dcc8ae9506e8c66/',
		filters: [{
			key: 'title',
			regex: /angular/ig,
		}]
	}]
};
