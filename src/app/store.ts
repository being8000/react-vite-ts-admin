import {
  configureStore,
  ThunkAction,
  Reducer,
  ReducersMapObject,
  Action,
} from "@reduxjs/toolkit";

const modules = await import.meta.glob("./slice/*.tsx", {
  eager: true,
});
type Mod = {
  slice: {
    name: string;
  };
  default: Reducer;
};
const reducer: ReducersMapObject = {};
Object.values(modules).forEach((mod) => {
  const m = mod as Mod;
  reducer[m.slice.name] = m.default;
});

export const store = configureStore({
  reducer,
});

console.log(store, "reducer2");
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
