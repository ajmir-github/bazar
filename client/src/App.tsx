import { Route, createRoutesFromElements } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// layouts
import AppLayout from "./layouts/AppLayout";
// routes
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import WishlistPage from "./pages/WishlistPage";
import PostPage from "./pages/PostPage";
import ProtectRoute from "./components/ProtectRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/wishlist"
        element={
          <ProtectRoute>
            <WishlistPage />
          </ProtectRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectRoute>
            <ProfilePage />
          </ProtectRoute>
        }
      />
      <Route
        path="/post"
        element={
          <ProtectRoute>
            <PostPage />
          </ProtectRoute>
        }
      />

      <Route path="/login" element={<LoginPage />} />
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
