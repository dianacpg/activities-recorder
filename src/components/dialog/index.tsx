// React
import React, { useEffect, useState } from "react";

import { createPortal } from "react-dom";
// Style
import styles from "./styles/dialog.module.scss";
// Components
import Button from "../button";
import { useDialog } from "./hooks";
// Context
import { DialogContextDefaults } from "./DialogContext";

export interface DialogProps {
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

const Dialog = () => {
  const [dialogProps, setDialogProps] = useState<DialogProps>();

  const { setConfirmationDialog, setDialogOpen, isDialogOpen } = useDialog();

  useEffect(() => {
    setConfirmationDialog({
      ...DialogContextDefaults,
      openConfirmation: (props) => {
        setDialogOpen(true);
        setDialogProps({
          ...props,
        });
      },
    });
  }, [setConfirmationDialog, setDialogOpen]);

  if (!isDialogOpen) return;

  return createPortal(
    <div data-testid="dialog" className={styles["dialog"]}>
      <div className={styles["dialog__content"]}>
        <h2>{dialogProps?.title}</h2>
        <p>{dialogProps?.description}</p>
        <footer className={styles["dialog__footer"]} data-testid="custom-element">
          <Button
            data-testid="cancel-dialog"
            onClick={(): void => {
              setDialogOpen(false);
              dialogProps?.onCancel && dialogProps?.onCancel();
            }}
          >
            Cancel
          </Button>
          <Button
            data-testid="confirm-dialog"
            onClick={(): void => {
              setDialogOpen(false);
              dialogProps?.onConfirm();
            }}
          >
            Confirm
          </Button>
        </footer>
      </div>
    </div>,
    document.body
  );
};

export default Dialog;
