// React
import React, { useState, createContext, Dispatch, SetStateAction } from "react";
import { DialogProps } from ".";

/**
 * Props for the Dialog context.
 */
export interface DialogContextProps {
  /** Function to open the Dialog with the specified properties. */
  openConfirmation: (props: DialogProps) => void;
  /** Function to set the props value for the Dialog. */
  setConfirmationDialog: Dispatch<SetStateAction<DialogContextProps>>;
  /** Indicates whether the Dialog is currently open. */
  isDialogOpen: boolean;
  /** Function to set the state of the Dialog open status. */
  setDialogOpen: Dispatch<SetStateAction<DialogContextProps["isDialogOpen"]>>;
}

/**
 * Default values for the Dialog context.
 */
export const DialogContextDefaults: DialogContextProps = {
  openConfirmation: (): void => undefined,
  setConfirmationDialog: (): void => undefined,
  isDialogOpen: false,
  setDialogOpen: (): void => undefined,
};

/**
 * Context for managing the Dialog state.
 */
export const DialogContext = createContext(DialogContextDefaults);

/**
 * Provider component for the  Dialog context.
 */
export const DialogProvider = ({
  children,
}: {
  /** The child components that will have access to the Dialog context. */
  children: React.ReactNode;
}): React.ReactElement => {
  const [value, setConfirmationDialog] = useState(DialogContextDefaults);
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <DialogContext.Provider
      value={{ ...value, setConfirmationDialog, isDialogOpen, setDialogOpen }}
    >
      {children}
    </DialogContext.Provider>
  );
};
