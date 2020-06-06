const habrFilters = [
	{
		key: 'category',
		regex: /(\b(css|Accessibility|WebAssembly|JavaScript|Google Chrome|HTML|Node.JS|ReactJS|Kubernetes|Docker|Браузеры|Совершенный код|Разработка веб-сайтов|Microsoft Azure)\b|^(api|C#|firefox)$)/i,
		include: true,
	},
	{
		key: 'title',
		regex: /\bdjango\b/ig,
	},
	{
		key: 'title',
		regex: /\b(angular|ангуляр)\b/ig,
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
		regex: /\bjoomla\b/ig,
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
	}, 	{
		key: 'dc:creator',
		regex: /\bfillpackart\b/ig
	}
];

module.exports = {
	port: process.env.PORT || 80,
	base: '',
	feeds: [
		{
			url: 'habr-best-weekly',
			source: 'https://habr.com/ru/rss/best/weekly/?fl=ru&limit=100',
			filters: habrFilters
		},
		{
			url: 'habr-best-daily',
			source: 'https://habr.com/ru/rss/best/daily/?fl=ru&limit=100',
			filters: habrFilters
		}, {
			url: 'habr-all-top100',
			source: 'https://habr.com/ru/rss/all/top100/?fl=ru',
			filters: habrFilters
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
