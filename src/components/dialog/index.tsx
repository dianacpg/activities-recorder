// React
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
// Components
import Dialog from "./Dialog";
// Hooks
import { useDialog } from "./hooks";
// Context
import { DialogContextDefaults } from "./DialogContext";

export interface DialogProps {
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

const DialogPortal = () => {
  const [dialogProps, setDialogProps] = useState<DialogProps>();

  const { setConfirmationDialog, setDialogOpen, isDialogOpen } = useDialog();

  useEffect(() => {
    setConfirmationDialog({
      ...DialogContextDefaults,
      openConfirmation: (props) => {
        setDialogOpen(true);
        setDialogProps({
          ...props,
          onCancel: (): void => {
            props.onCancel && props.onCancel();
            setDialogOpen(false);
          },
          onConfirm: (): void => {
            props.onConfirm && props.onConfirm();
            setDialogOpen(false);
          },
        });
      },
    });
  }, [setConfirmationDialog, setDialogOpen]);

  if (!isDialogOpen || !dialogProps) return;

  return createPortal(<Dialog {...dialogProps} />, document.body);
};

export default DialogPortal;
