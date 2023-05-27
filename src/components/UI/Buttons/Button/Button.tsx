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
  } = props;

  return (
    <button
      type={type}
      onClick={clickHandler}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      className={`${classNames}`}
    >
      {children}
    </button>
  );
}
