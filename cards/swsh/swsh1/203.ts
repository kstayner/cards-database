import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-203",
	localId: 203,

	dexId: 131,

	// Card informations
	name: {
		en: "Lapras VMAX",
		fr: "Lokhlass VMAX",
	},

	hp: 320,

	type: [
		Type.WATER,
	],



	evolveFrom: {
		en: "Lapras V",
		fr: "Lokhlass V",
	},

	tags: [
		Tag.VMAX,
	],

	illustrator: {
		id: 39,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "G-Max Pump",
			fr: "Pompe G-Max",
		},
		text: {
			en: "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
		},
		damage: "90+"
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareRainbow,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
