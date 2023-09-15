import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// Types
import { AppDispatch, AppState } from ".";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;
