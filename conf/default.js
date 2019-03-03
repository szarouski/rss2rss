module.exports = {
	port: process.env.PORT || 80,
	base: '',
	feeds: [
		{
			url: 'habr',
			source: 'https://habrahabr.ru/rss/feed/posts/all/02c22642248aca2e9dcc8ae9506e8c66/',
			filters: [
				{
					key: 'title',
					regex: /\bangular\b/ig,
				}, {
					key: 'title',
					regex: /Дайджест свежих материалов из мира фронтенда за последнюю неделю/ig,
				}, {
					key: 'title',
					regex: /Полезное дизайнеру/ig,
				}, {
					key: 'title',
					regex: /\bVirtualBox\b/ig,
				}, {
					key: 'title',
					regex: /\bFlask\b/ig,
				}, {
					key: 'title',
					regex: /ASP.NET/ig,
				}, {
					key: 'title',
					regex: /\bphp\b/ig,
				}, {
					key: 'title',
					regex: /\bbootstrap\b/ig,
				}, {
					key: 'title',
					regex: /\bvue\b/ig,
				}, {
					key: 'title',
					regex: /\bjava\b/ig,
				}, {
					key: 'title',
					regex: /\bpolymer\b/ig,
				}, {
					key: 'title',
					regex: /\bkotlin\b/ig,
				}, {
					key: 'title',
					regex: /\brails\b/ig,
				}, {
					key: 'title',
					regex: /\bwordpress\b/ig,
				}, {
					key: 'title',
					regex: /\bruby\b/ig,
				}, {
					key: 'title',
					regex: /\byii2\b/ig,
				}, {
					key: 'title',
					regex: /Разработка изоморфного RealWorld приложения с SSR и Progressive Enhancement/ig,
				}
			]
		}, {
			url: 'npm',
			source: 'http://blog.npmjs.org/rss',
			filters: [
				{
					key: 'title',
					regex: /Customer Convo/ig,
				}
			]
		}, {
			url: 'css-live',
			source: 'http://css-live.ru/feed',
			filters: [
				{
					key: 'title',
					regex: /Еженедельная подборка красивых эффектов/ig,
				}
			]
		}
	]
};
