type ButtonType = JSX.IntrinsicElements['button']['type'];

// Off rule that enforce to use DefaultProps instead of adding default in props
// react/require-default-props
// Example of use:
// ===============
// Button.defaultProps = {
//   type: 'button',
//   ariaExpanded: false,
// };

type ButtonProps = {
  children: React.ReactNode;
  type?: ButtonType;
  clickHandler: () => void;
  ariaExpanded?: boolean;
};

export function Button(props: ButtonProps) {
  const { children, type = 'button', clickHandler, ariaExpanded } = props;

  return (
    <button type={type} onClick={clickHandler} aria-expanded={ariaExpanded}>
      {children}
    </button>
  );
}
