import css from "./Button.module.scss";

const BUTTON_TYPE_CLASSES = {
  approved: css.approved,
  inverted: css.inverted,
};

export default function Button({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`${css.buttonContainer} ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
