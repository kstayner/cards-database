import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-72",
	localId: 72,

	// Card informations
	name: {
		en: "Tapu Koko V",
		fr: "Tokorico V",
	},

	hp: 200,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/72/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/72/low.png",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.V,
	],

	illustrator: {
		id: 24,
		name: "PLANETA Tsuji"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Spike Draw",
			fr: "Pique-Pioche",
		},
		text: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunderous Bolt",
			fr: "Éclair du Tonnerre",
		},
		text: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
