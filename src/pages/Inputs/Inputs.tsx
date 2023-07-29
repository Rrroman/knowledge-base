import { Expand, ExpandCompoundExample, Separator } from '@/components/UI';

export function Inputs() {
	return (
		<>
			<Expand
				title='Expand btn'
				openStyles='p-2'
				transitionStyles='padding'
				renderBody={() => <p>I am hidden! Or not :D</p>}
			/>

			<Separator />

			<ExpandCompoundExample>
				<ExpandCompoundExample.Button>
					Expand Compound Example
				</ExpandCompoundExample.Button>
				<ExpandCompoundExample.Content
					openStyles='p-2'
					transitionStyles='padding'
				>
					Just example of expand compound content
				</ExpandCompoundExample.Content>
			</ExpandCompoundExample>
		</>
	);
}
