import {Store} from './store';

export const Cybertek: Store = {
	labels: {
		inStock: {
			container: '.menu_fiche_produit',
			text: ['ajouter au panier']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.cybertek.fr/carte-graphique/msi/31209.aspx'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.cybertek.fr/carte-graphique/asus/48306.aspx'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url: 'https://www.cybertek.fr/carte-graphique/asus/50052.aspx'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.cybertek.fr/carte-graphique/asus/50610.aspx'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.cybertek.fr/carte-graphique/asus/48307.aspx'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3090',
			url: 'https://www.cybertek.fr/carte-graphique/asus/50053.aspx'
		}
	],
	name: 'cybertek'
};
