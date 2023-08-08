import { LoaderFunction } from 'react-router-dom';

// Wanted to use for typing a loader function but it just returned 'any'
// const spells = useLoaderData() as LoaderData<typeof spellsLoader>;
// instead I have used:
// const spells = useLoaderData() as Spell[];

export type LoaderData<TLoaderFn extends LoaderFunction> = Awaited<
	ReturnType<TLoaderFn>
> extends Response | infer D
	? D
	: never;
