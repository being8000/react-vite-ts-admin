import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";

import ErrorPage from "@/error-page";
// import Dashboard from "./routes/dashboard";
// import CounterRoute from "@/routes/counter/counter";
import LoginRoute from "@/routes/login/index";
import ThemeProvider from "@/components/Theme/default";

const router = createHashRouter(
  [
    {
      path: "/",
      async lazy() {
        const { loader, Root } = await import("@/routes/Root");
        return {
          loader: loader,
          Component: Root,
        };
      },
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          async lazy() {
            const { loader, Dashboard } = await import("@/routes/dashboard");
            return {
              loader: loader,
              Component: Dashboard,
            };
          },
        },
        {
          path: "contacts",
          async lazy() {
            const { loader, Root } = await import("@/routes/contact/index");
            return {
              loader: loader,
              Component: Root,
            };
          },
        },
        {
          path: "counter",
          async lazy() {
            const { loader, CounterRoute } = await import(
              "@/routes/counter/counter"
            );
            return {
              loader: loader,
              Component: CounterRoute,
            };
          },
        },
      ],
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
    <ThemeProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ThemeProvider>
  );
}
