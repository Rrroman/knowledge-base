type ButtonType = JSX.IntrinsicElements['button']['type'];
// type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
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
  type?: ButtonType;
  clickHandler: () => void;
  ariaExpanded?: boolean;
  ariaControls?: string;
};

export function Button(props: ButtonProps) {
  const {
    children,
    type = 'button',
    clickHandler,
    ariaExpanded,
    ariaControls,
  } = props;

  return (
    <button
      type={type}
      onClick={clickHandler}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {children}
    </button>
  );
}
