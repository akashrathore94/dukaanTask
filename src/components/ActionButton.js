import styles from "./ActionButton.module.css";

function ActionButton({ children, type }) {
  return (
    <button className={`${styles.actionBtn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default ActionButton;
