import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import SearchPage from "./pages/SearchPage";
import AddPostPage from "./pages/AddPostPage";
import WishlistPage from "./pages/WishlistPage";
import SinglePostPage from "./pages/SinglePostPage";
import RegisterPage from "./pages/RegisterPage";
import ListingsPage, { listingsPageLoader } from "./pages/ListingsPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<ListingsPage />} loader={listingsPageLoader} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/add-post" element={<AddPostPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/post/:id" element={<SinglePostPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Route>
  )
);

export default router;
