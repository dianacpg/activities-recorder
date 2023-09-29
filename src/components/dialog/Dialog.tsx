// Style
import styles from "./styles/dialog.module.scss";
// Components
import Button from "../button";

export interface DialogProps {
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

const Dialog = ({ title, description, onConfirm, onCancel }: DialogProps) => (
  <div data-testid="dialog" className={styles["dialog"]}>
    <div className={styles["dialog__content"]}>
      <h2>{title}</h2>
      <p>{description}</p>
      <footer className={styles["dialog__footer"]} data-testid="custom-element">
        <Button data-testid="cancel-dialog" onClick={onCancel}>
          Cancel
        </Button>
        <Button data-testid="confirm-dialog" onClick={onConfirm}>
          Confirm
        </Button>
      </footer>
    </div>
  </div>
);

export default Dialog;
