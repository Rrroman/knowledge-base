// import { useEffect, useState } from 'react';
import { LoaderFunction, useLoaderData, useNavigation } from 'react-router-dom';

// Swagger - https://wizard-world-api.herokuapp.com/swagger/index.html
const url = 'https://wizard-world-api.herokuapp.com/Spells';

type Spell = {
	id: string;
	name: string;
	incantation: string;
	effect: string;
	canBeVerbal: boolean;
	type: string;
	light: string;
	creator: null | string;
};

export function ReactRouterLoaderExample() {
	const spells = useLoaderData() as Spell[];

	// const navigation = useNavigation();
	const { state } = useNavigation();

	if (state === 'loading') {
		return <p>Is loading...</p>;
	}

	return (
		<ul>
			{spells.map((spell) => (
				<li key={spell.id}>
					Spell: {spell.name}({spell.type}). {spell.incantation} -{' '}
					{spell.effect}
				</li>
			))}
		</ul>
	);
}

export const spellsLoader = (async () => {
	// throw new Error('Oh no where are my spells?');
	const cachedSpells = localStorage.getItem('spells');
	if (cachedSpells) {
		return JSON.parse(cachedSpells);
	}
	try {
		const response = await fetch(url);
		const data = await response.json();
		localStorage.setItem('spells', JSON.stringify(data.splice(0, 10)));
		return data;
	} catch (err: any) {
		console.error(err);
		throw err;
	}
}) satisfies LoaderFunction;
