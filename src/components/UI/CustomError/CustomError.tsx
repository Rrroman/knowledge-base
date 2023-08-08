import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { LinkButton } from '@/components';

type RouteError = Error | string | unknown;

// Type guard function
function isError(error: RouteError): error is Error {
	return error instanceof Error;
}

export function CustomError() {
	const error = useRouteError();
	let errorMessage: string;

	if (isRouteErrorResponse(error)) {
		errorMessage = error.error?.message || error.statusText;
	} else if (isError(error)) {
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
