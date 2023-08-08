import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { LinkButton } from '@/components';

export function Error() {
	const error = useRouteError();
	console.log(error);
	let errorMessage: string;

	if (isRouteErrorResponse(error)) {
		// error is type `ErrorResponse`
		errorMessage = error.error?.message || error.statusText;
	} else if (error instanceof Error) {
		errorMessage = error.message;
	} else if (typeof error === 'string') {
		errorMessage = error;
	} else {
		console.error(error);
		errorMessage = 'Unknown error';
	}

	return (
		<div>
			<h1>Oops! Something went wrong!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>{errorMessage}</p>
			<LinkButton to='-1'>&larr; Go back</LinkButton>
		</div>
	);
}
