// type ButtonType = JSX.IntrinsicElements['button']['type'];
type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
// type ButtonType = Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

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
  children: React.ReactNode;
  className?: string;
  clickHandler: () => void;
  type?: ButtonType;
  ariaExpanded?: boolean;
  ariaControls?: string;
};

export function Button(props: ButtonProps) {
  const {
    children,
    clickHandler,
    className,
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
      className={`${className}`}
    >
      {children}
    </button>
  );
}
