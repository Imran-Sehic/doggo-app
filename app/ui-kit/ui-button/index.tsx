import styles from "./ui-button.module.css";

export interface UIButtonInterface {
  content: string;
  onClick: () => void;
}

const UIButton: React.FC<UIButtonInterface> = ({ content, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {content}
    </button>
  );
};

export default UIButton;
