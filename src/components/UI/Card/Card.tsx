import { ReactNode } from 'react';

export function Card({
	styles = '',
	children,
}: {
	styles?: string;
	children: ReactNode;
}) {
	return (
		<div
			className={`w-full rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-500 dark:bg-gray-800 sm:p-6 md:p-8 ${styles}`}
		>
			{children}
		</div>
	);
}
