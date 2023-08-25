import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  // createHashRouter,
} from "react-router-dom";

import ErrorPage from "@/error-page";
// import Dashboard from "./routes/dashboard";
import Root from "@/routes/Root";
import Contacts from "@/routes/contact/index";
import CounterRoute from "@/routes/counter/counter";
import LoginRoute from "@/routes/login/index";
import { store } from "@/app/store";
import Dashboard from "./routes/dashboard";
import { userInfo, clearUserInfo } from "./app/slice/UserSlice";

async function loader() {
  if (!store.getState().user.user) {
    await store.dispatch(userInfo());
  }
  if (!store.getState().user.user) {
    await store.dispatch(clearUserInfo());
    return redirect("/login");
  }
  return store.getState().user.user;
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: loader,
      children: [Dashboard, Contacts, CounterRoute],
    },
    LoginRoute,
  ],
  {
    future: {
      // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
      v7_normalizeFormMethod: true,
    },
  }
);

// router.subscribe((state) => console.log("new state", state));
export default function App() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}
