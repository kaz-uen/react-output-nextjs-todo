import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";
import TodoReducer from "../features/TodoSlice";
import ModalReducer from "../features/ModalSlice";

const store = configureStore({
  reducer: {
    todo: TodoReducer,
    modal: ModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export type AppDispatch = typeof store.dispatch;

console.log(store);
export default store;
