import { RouteObject, redirect } from "react-router-dom";
import { store } from "@/app/store";
import { clearUserInfo, getToken } from "@/app/slice/UserSlice";
import Login from "./Login";

async function loader() {
  const useInfo = store.getState().user.user;
  const token = getToken();
  if (useInfo || token) {
    return redirect("/");
  } else {
    await store.dispatch(clearUserInfo());
    return {};
  }
}

export default {
  path: "/login",
  element: <Login />,
  loader: loader,
} as RouteObject;
