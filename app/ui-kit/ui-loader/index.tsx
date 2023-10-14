import styles from "./ui-loader.module.css";

interface UILoaderInterface {
  isLoading: boolean;
}

const UILoader: React.FC<UILoaderInterface> = ({ isLoading }) => {
  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <div data-testid={"loader"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default UILoader;
