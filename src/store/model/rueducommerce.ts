import {Store} from './store';

export const RueDuCommerce: Store = {
	labels: {
		outOfStock: {
			container: '.tab1',
			text: ['Bientôt disponible', 'Épuisé']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.rueducommerce.fr/produit/asus-geforce-rtx-rog-strix-2080s-o8g-gaming-83499004/offre-217110051'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url:
				'https://www.rueducommerce.fr/produit/asus-rog-strix-rtx-3080-oc-triple-fan-10go-108855827/offre-224716390'
		}
	],
	name: 'rueducommerce'
};
