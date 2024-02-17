import {
  BrowserRouter,
  Route,
  Routes,
  createRoutesFromElements,
} from "react-router-dom";
// layouts
import AppLayout from "./layouts/AppLayout";
// routes
// import AddRoute from "./pages/AddRoute";
import SearchRoute from "./pages/SearchRoute";
// import SettingsRoute from "./pages/SettingsRoute";
// import ProfileRoute from "./pages/ProfileRoute";
// import RegisterRoute from "./pages/RegisterRoute";
import ListingsPage from "./pages/ListingsPage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<ListingsPage />} />

      <Route
        path="/search"
        element={<SearchRoute />}
        loader={async () =>
          await new Promise((done) => {
            setTimeout(() => {
              done([]);
            }, 2000);
          })
        }
      />
      {/* 
  <Route path="/add" element={<AddRoute />} />
  <Route path="/settings" element={<SettingsRoute />} />
  <Route path="/profile" element={<ProfileRoute />} /> */}
      {/* <Route path="teams" element={<Teams />}>
<Route path=":teamId" element={<Team />} />
<Route path=":teamId/edit" element={<EditTeam />} />
<Route path="new" element={<NewTeamForm />} />
<Route index element={<LeagueStandings />} />
</Route> */}
      {/* <Route path="/register" element={<RegisterRoute />} /> */}
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
