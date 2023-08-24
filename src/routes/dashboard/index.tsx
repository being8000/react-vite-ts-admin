import { RouteObject } from "react-router-dom";

function Dashboard() {
  return <div>Dashboard</div>;
}

export default {
  index: true,
  element: <Dashboard />,
} as RouteObject;
