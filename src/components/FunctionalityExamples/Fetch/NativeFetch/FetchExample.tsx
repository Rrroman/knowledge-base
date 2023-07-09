import { useEffect, useState } from 'react';

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

type CachedSpell = Spell[];

export function FetchExample() {
  const [spells, setSpells] = useState<CachedSpell>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const cachedSpells = localStorage.getItem('spells');
    if (cachedSpells) {
      setSpells(JSON.parse(cachedSpells));
      return;
    }

    async function getSpells() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setSpells(data);
        localStorage.setItem('spells', JSON.stringify(data.splice(0, 10)));
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getSpells();
  }, []);

  return (
    <>
      {loading && !error && <h1>Loading...</h1>}
      <h2 className='mb-4'>Native Fetch with useEffect()</h2>
      <ul>
        {spells.map((spell) => (
          <li key={spell.id}>
            Spell: {spell.name}({spell.type}). {spell.incantation} -{' '}
            {spell.effect}
          </li>
        ))}
      </ul>
      {error && <h1>Something went wrong while downloading spells: {error}</h1>}
    </>
  );
}

// In case of api broken just sample of 10 spells

// const spells = [
//   {
//       "id": "fbd3cb46-c174-4843-a07e-fd83545dce58",
//       "name": "Opening Charm",
//       "incantation": "Aberto",
//       "effect": "Opens doors",
//       "canBeVerbal": true,
//       "type": "Charm",
//       "light": "Blue",
//       "creator": null
//   },
//   {
//       "id": "5eb39a99-72cd-4d40-b4aa-b0f5dd195100",
//       "name": "Water-Making Spell",
//       "incantation": "Aguamenti",
//       "effect": "Conjures water",
//       "canBeVerbal": true,
//       "type": "Conjuration",
//       "light": "IcyBlue",
//       "creator": null
//   },
//   {
//       "id": "ab3a8dfe-1e56-4706-a20d-26afee011ed7",
//       "name": "Alarte Ascendare",
//       "incantation": "Alarte Ascendare",
//       "effect": "Rockets target upward",
//       "canBeVerbal": true,
//       "type": "Charm",
//       "light": "Red",
//       "creator": null
//   },
//   {
//       "id": "c6898622-b914-4609-b3a0-8659ed2ca08a",
//       "name": "Animagus Spell",
//       "incantation": "Amato Animo Animato Animagus",
//       "effect": "Used as part of the ritual to become an Animagus",
//       "canBeVerbal": true,
//       "type": "Transfiguration",
//       "light": "Gold",
//       "creator": null
//   },
//   {
//       "id": "0a11bbf5-702c-45ab-bdd6-20debf00ed39",
//       "name": "Anteoculatia",
//       "incantation": "Anteoculatia",
//       "effect": "Grows antlers on head",
//       "canBeVerbal": true,
//       "type": "DarkCharm",
//       "light": "Red",
//       "creator": null
//   },
//   {
//       "id": "9963acbe-ad74-4ef5-9dd0-34ed5689c063",
//       "name": "Anti-Cheating Spell",
//       "incantation": null,
//       "effect": "Prevents cheating",
//       "canBeVerbal": true,
//       "type": "Charm",
//       "light": "Purple",
//       "creator": null
//   },
//   {
//       "id": "3ba417ce-8165-464d-9f29-daf23da1b2bc",
//       "name": "Albus Dumbledore's forceful spell",
//       "incantation": null,
//       "effect": "Great force",
//       "canBeVerbal": null,
//       "type": "Spell",
//       "light": "Transparent",
//       "creator": null
//   },
//   {
//       "id": "aede8168-528c-4888-8c14-a38b6c5e6a97",
//       "name": "Unlocking Charm",
//       "incantation": "Alohomora",
//       "effect": "Unlocks objects",
//       "canBeVerbal": true,
//       "type": "Charm",
//       "light": "Transparent",
//       "creator": "Ancient African sorcerer"
//   },
//   {
//       "id": "7930c98d-f993-41e6-875e-a26d7ee56c55",
//       "name": "Anapneo",
//       "incantation": "Anapneo",
//       "effect": "Clears target's airway",
//       "canBeVerbal": true,
//       "type": "HealingSpell",
//       "light": "Transparent",
//       "creator": null
//   },
//   {
//       "id": "e840eec1-38fa-4231-9488-c752c62c53a9",
//       "name": "Anti-Disapparition Jinx",
//       "incantation": null,
//       "effect": "Prevents Disapparition within a certain area",
//       "canBeVerbal": true,
//       "type": "Jinx",
//       "light": "None",
//       "creator": null
//   }
// ];
