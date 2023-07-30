import { ButtonHTMLAttributes, ReactNode } from 'react';

// type ButtonType = JSX.IntrinsicElements['button']['type'];
type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>['type'];
// type ButtonType = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

// Off rule that enforce to use DefaultProps instead of adding default in props
// react/require-default-props
// Example of use:
// ===============
// Button.defaultProps = {
//   type: 'button',
//   ariaExpanded: false,
// };
//

type ButtonProps = {
	children: ReactNode;
	classNames?: string;
	clickHandler: () => void;
	type?: ButtonType;
	buttonType?: 'primary';
	ariaExpanded?: boolean;
	ariaControls?: string;
};

export function Button(props: ButtonProps) {
	const {
		children,
		clickHandler,
		classNames,
		type = 'button',
		ariaExpanded,
		ariaControls,
		buttonType = '',
	} = props;

	const buttonTypes = {
		primary:
			'dark:focus:ring-purple-900" mb-2 mr-2 rounded-lg border border-purple-700 px-5 py-2.5 text-center text-sm font-medium text-purple-700 hover:bg-purple-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white',
	};

	return (
		<button
			type={type}
			onClick={clickHandler}
			aria-expanded={ariaExpanded}
			aria-controls={ariaControls}
			className={buttonType ? classNames + buttonTypes[buttonType] : classNames}
		>
			{children}
		</button>
	);
}
