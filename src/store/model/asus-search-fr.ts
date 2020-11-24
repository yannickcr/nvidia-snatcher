import {Store} from './store';

export const AsusSearchFr: Store = {
	labels: {
		inStock: {
			container: '.listing',
			text: ['Prêt à expédier immédiatement']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://webshop.asus.com/fr/search/index/sSearch/rtx2060s'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url: 'https://webshop.asus.com/fr/search/index/sSearch/3080+strix'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3090',
			url: 'https://webshop.asus.com/fr/search/index/sSearch/3090+strix'
		}
	],
	name: 'asus-search-fr',
	successStatusCodes: [[0, 399], 404]
};
