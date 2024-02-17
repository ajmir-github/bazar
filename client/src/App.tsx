import { BrowserRouter, Route, Routes } from "react-router-dom";
// layouts
import AppLayout from "./layouts/AppLayout";
// routes
import AddRoute from "./pages/AddRoute";
import SearchRoute from "./pages/SearchRoute";
import SettingsRoute from "./pages/SettingsRoute";
import ProfileRoute from "./pages/ProfileRoute";
import RegisterRoute from "./pages/RegisterRoute";
import ListingsPage from "./pages/ListingsPage";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<ListingsPage />} />
          <Route path="/search" element={<SearchRoute />} />
          <Route path="/add" element={<AddRoute />} />
          <Route path="/settings" element={<SettingsRoute />} />
          <Route path="/profile" element={<ProfileRoute />} />
          {/* <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path=":teamId/edit" element={<EditTeam />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route> */}
          <Route path="/register" element={<RegisterRoute />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
