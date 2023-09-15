// Styles
import styles from "./styles/loading-spinner.module.scss";

const LoadingSpinner = () => (
  <div className={styles["loading-spinner"]} data-testid="loading-spinner">
    <div className={styles["spinner"]} />
  </div>
);

export default LoadingSpinner;
