import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromChildren(<App />));

export default function Router() {
  return <RouterProvider router={router} />;
}
