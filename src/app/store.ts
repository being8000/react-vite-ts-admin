import {
  configureStore,
  ThunkAction,
  ReducersMapObject,
  Slice,
  Action,
} from "@reduxjs/toolkit";

const modules = await import.meta.glob("./slice/*.tsx", {
  eager: true,
});
type Mod = {
  default: Slice;
};
const reducer: ReducersMapObject = {};
Object.values(modules).forEach((mod) => {
  const m = mod as Mod;
  reducer[m.default.name] = m.default.reducer;
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
