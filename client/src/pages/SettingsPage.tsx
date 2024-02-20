import { authActions, useAppDispatch } from "@/context";
import PageLayout from "@/layouts/PageLayout";
import { LogOutIcon } from "lucide-react";

const Themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

export default function SettingsPage() {
  const dispatch = useAppDispatch();

  return (
    <PageLayout
      quickOptions={
        <>
          <button
            className="btn btn-ghost"
            onClick={() => dispatch(authActions.signOut())}
          >
            <LogOutIcon />
            Sign out
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => dispatch(authActions.signOut())}
          >
            <LogOutIcon />
            Sign out
          </button>
        </>
      }
      options={"asd"}
    >
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
      <h1 className="text-5xl">asdasd</h1>
    </PageLayout>
  );
}
