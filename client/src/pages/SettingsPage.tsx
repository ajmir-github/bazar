import { authActions, useAppDispatch } from "@/context";

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
    <div className="grid gap-2 p-2">
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(authActions.signOut())}
      >
        Sign out
      </button>
    </div>
  );
}
