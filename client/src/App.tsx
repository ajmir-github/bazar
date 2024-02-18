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
import SearchPage from "./pages/SearchPage";
// import SettingsRoute from "./pages/SettingsRoute";
// import ProfileRoute from "./pages/ProfileRoute";
// import RegisterRoute from "./pages/RegisterRoute";
import ListingsPage from "./pages/ListingsPage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<ListingsPage />} />
      <Route path="/categories" element={<CategoriesPage />} />

      <Route path="/search" element={<SearchPage />} />
      <Route path="/about" element={<AboutPage />} />

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
