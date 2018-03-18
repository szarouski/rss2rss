const filter = require('./filter');

const xml = {
	rss: {
		channel: [
			{
				item: [
					{
						title: ['Дайджест свежих материалов из мира фронтенда за последнюю неделю №305 (5 — 11 марта 2018)'],
						category: [
							'Разработка веб-сайтов',
							'JavaScript',
							'HTML',
							'CSS',
							'Блог компании Zfort Group',
							'дайджест',
							'фронтенд',
							'css',
							'js',
							'es6',
							'vue',
							'react',
							'angular',
							'html5',
							'браузеры',
							'ссылки',
							'подкасты'
						]
					},
					{
						title: [
							'[Из песочницы] Аналоговые часы, CSS и ничего больше'
						],
						category: [
							'JavaScript',
							'HTML',
							'CSS',
							'CSS',
							'HTML',
							'JavaScript'
						]
					}
				]
			}
		]
	}
};
const items = xml.rss.channel[0].item;

describe('filter test', () => {
	test(`WHEN filter regex don't match THEN all results should be returned`, () => {
		expect(filterXml([{
			key: 'title', regex: /angular/ig,
		}])).toEqual(items);
	});
	test(`WHEN filter key don't match THEN all results should be returned AND error should be reported`, () => {
		expect.assertions(3);
		const filters = [{key: 'xtitle', regex: /Дайджест/ig}];
		expect(filterXml(filters, (opts) => {
			expect(opts).toBe(filters[0]);
		}).length).toBe(items.length);
	});
	test(`WHEN filter matches THEN item should be filtered out`, () => {
		const result = filterXml([{key: 'title', regex: /Дайджест/ig}]);
		expect(result.length).toBe(items.length - 1);
		expect(result.find(x => x.title[0].includes('Дайджест'))).toBeUndefined();
	});
	test(`WHEN filter matches at least one item in array THEN item should be filtered out`, () => {
		const result = filterXml([{
			key: 'category', regex: /^css$/g,
		}]);
		expect(result.length).toBe(items.length - 1);
		expect(result.find(findCategory('css'))).toBeUndefined();
	});
	test(`GIVEN there are multiple filters WHEN at least one item in array matches THEN item should be filtered out`, () => {
		const result = filterXml([
			{key: 'category', regex: /^css$/g},
			{key: 'category', regex: /^xcss$/g}
		]);
		expect(result.length).toBe(items.length - 1);
		expect(result.find(findCategory('css'))).toBeUndefined();
	});
});

/** @return Array*/
function filterXml(filters, ...rest) {
	return filter(filters, xml, ...rest);
}

function findCategory(cat) {
	return function _findCategory(x) {
		return x.category.includes(cat);
	};
}
