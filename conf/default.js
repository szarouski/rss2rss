const habrFilters = [
	{
		key: 'title',
		regex: /\bangular\b/ig,
	}, {
		key: 'title',
		regex: /\bангуляр\b/ig,
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
	}
];

module.exports = {
	port: process.env.PORT || 80,
	base: '',
	feeds: [
		{
			url: 'habr-css',
			source: 'https://habr.com/ru/rss/hub/css/top/weekly/?fl=ru',
			filters: habrFilters
		}, {
			url: 'habr-webdev',
			source: 'https://habr.com/ru/rss/hub/webdev/top/weekly/?fl=ru',
			filters: habrFilters
		}, {
			url: 'habr-chrome',
			source: 'https://habr.com/ru/rss/hub/google_chrome/top/weekly/?fl=ru',
			filters: habrFilters
		}, {
			url: 'habr-html',
			source: 'https://habr.com/ru/rss/hub/html5/top/weekly/?fl=ru',
			filters: habrFilters
		}, {
			url: 'habr-js',
			source: 'https://habr.com/ru/rss/hub/javascript/top/weekly/?fl=ru',
			filters: habrFilters
		}, {
			url: 'habr-k8s',
			source: 'https://habr.com/ru/rss/hub/kubernetes/top/weekly/?fl=ru',
			filters: habrFilters
		}, {
			url: 'habr-node',
			source: 'https://habr.com/ru/rss/hub/nodejs/top/weekly/?fl=ru',
			filters: habrFilters
		}, {
			url: 'habr-reactjs',
			source: 'https://habr.com/ru/rss/hub/reactjs/top/weekly/?fl=ru',
			filters: habrFilters
		}, {
			url: 'habr-safari',
			source: 'https://habr.com/ru/rss/hub/safari/top/weekly/?fl=ru',
			filters: habrFilters
		}, {
			url: 'habr-wasm',
			source: 'https://habr.com/ru/rss/hub/webassembly/top/weekly/?fl=ru',
			filters: habrFilters
		}, {
			url: 'habr-browsers',
			source: 'https://habr.com/ru/rss/hub/browsers/top/weekly/?fl=ru',
			filters: habrFilters
		}, {
			url: 'habr-code',
			source: 'https://habr.com/ru/rss/hub/complete_code/top/weekly/?fl=ru',
			filters: habrFilters
		}, {
			url: 'habr-a11y',
			source: 'https://habr.com/ru/rss/hub/accessibility/top/weekly/?fl=ru',
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
