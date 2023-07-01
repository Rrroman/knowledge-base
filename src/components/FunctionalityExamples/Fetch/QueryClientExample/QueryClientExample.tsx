import { useQuery } from '@tanstack/react-query';

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

function useSpells() {
  return useQuery({
    queryKey: ['spells'],
    queryFn: async () => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    },
  });
}

export function QueryClientExample() {
  const { isLoading, data, error, isFetching } = useSpells();

  if (isLoading) {
    return <h2>'Loading...'</h2>;
  }

  if (error) {
    return <h2>'Something went wrong while downloading spells'</h2>;
  }

  return (
    <>
      <h2>Native Fetch -{'>'} useEffect example Example</h2>
      <ul>
        {data.slice(10, 20).map((spell: Spell) => (
          <li key={spell.id}>
            Spell: {spell.name}({spell.type}). {spell.incantation} -{' '}
            {spell.effect}
          </li>
        ))}
      </ul>
    </>
  );
}
