import { Card } from '@/components';
import { Counter } from '@/components/UI/Counter/Counter';
import { CounterContextProvider } from '@/store/CounterProvider';

export function Cards() {
	return (
		<CounterContextProvider>
			<Card>
				<h1>Card</h1>
				<Counter />
				<Card styles='max-w-7xl'>
					<h2>Nested Card</h2>
					<div className='grid grid-cols-2 gap-4 border border-purple-700 p-5'>
						<Card styles='max-w-xl'>
							<Counter />
							<h3>Even more nested Card</h3>
						</Card>
						<Card styles='max-w-xl'>
							<h3>Lobotomized Owl * + * not good here GRID</h3>
						</Card>
						<Card styles='max-w-xl'>
							<Counter />
							<h3>Even more nested Card</h3>
						</Card>
						<Card styles='max-w-xl'>
							<h3>Lobotomized Owl * + * bug with first GRID child</h3>
						</Card>
					</div>
				</Card>
				<Card styles='max-w-7xl'>
					<h2>Nested Card</h2>
					<div className='flex gap-4 border border-purple-700'>
						<Card styles='max-w-xl'>
							<h3>Even more nested Card</h3>
						</Card>
						<Card styles='max-w-xl'>
							<Counter />
							<h3>Lobotomized Owl * + * bug with first FLEX child</h3>
						</Card>
					</div>
				</Card>
			</Card>
		</CounterContextProvider>
	);
}
