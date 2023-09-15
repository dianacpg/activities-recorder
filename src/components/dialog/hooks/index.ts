// React
import { useContext } from "react";
// Context
import { DialogContext, DialogContextProps } from "../DialogContext";

/**
 * A custom hook for accessing the Dialog context.
 *
 * @returns An object containing functions to set the context value and open the Dialog.
 */
export const useDialog = (): DialogContextProps => {
  const { setConfirmationDialog, openConfirmation, isDialogOpen, setDialogOpen } =
    useContext(DialogContext);

  return {
    setConfirmationDialog,
    openConfirmation,
    isDialogOpen,
    setDialogOpen,
  };
};
