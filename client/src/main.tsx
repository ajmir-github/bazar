import React, { useEffect } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

function Root() {
  const navigation = useNavigation();
  return (
    <div>
      <div>Root Element</div>
      <div>
        {" "}
        {navigation.state === "loading" && (
          <div className="loading loading-dots" />
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <div>HomePage</div>
      <div>
        <Link to={"/post/2"}>post id:2</Link>
        <Link to={"/about"}>about</Link>
      </div>
    </div>
  );
}
function AboutPage() {
  return (
    <div>
      <div>AboutPage</div>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
}
function PostsPage() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <div>PostsPage</div>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<div>Root level error</div>}
    >
      <Route path="/" index element={<HomePage />} />
      <Route
        path="/post/:id"
        loader={async ({ params }) => {
          console.log({ params });
          return await new Promise((resolve) => {
            setTimeout(() => resolve(["postA", "postB"]), 2000);
          });
        }}
        element={<PostsPage />}
      />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
