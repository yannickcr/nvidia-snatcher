import {Store} from './store';

export const AsusFr: Store = {
	labels: {
		inStock: {
			container: '.buy-btn--cart-add',
			text: ['Ajouter au']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://webshop.asus.com/fr/composants/cartes-graphiques/serie-nvidia/3194/asus-cerberus-gtx1050ti-a4g'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://webshop.asus.com/fr/composants/cartes-graphiques/serie-nvidia/3579/asus-tuf-rtx3080-10g-gaming'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://webshop.asus.com/fr/composants/cartes-graphiques/serie-nvidia/3581/asus-tuf-rtx3080-o10g-gaming'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url:
				'https://webshop.asus.com/fr/composants/cartes-graphiques/serie-nvidia/3582/asus-tuf-rtx3090-24g-gaming'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url:
				'https://webshop.asus.com/fr/composants/cartes-graphiques/serie-nvidia/3583/asus-tuf-rtx3090-o24g-gaming'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url:
				'https://webshop.asus.com/fr/composants/cartes-graphiques/serie-nvidia/3588/rog-strix-rtx3080-10g-gaming'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url:
				'https://webshop.asus.com/fr/composants/cartes-graphiques/serie-nvidia/3585/rog-strix-rtx3080-o10g-gaming'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3090',
			url:
				'https://webshop.asus.com/fr/composants/cartes-graphiques/serie-nvidia/3587/rog-strix-rtx3090-24g-gaming'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3090',
			url:
				'https://webshop.asus.com/fr/composants/cartes-graphiques/serie-nvidia/3584/rog-strix-rtx3090-o24g-gaming'
		}
	],
	name: 'asus-fr',
	successStatusCodes: [[0, 399], 404]
};
