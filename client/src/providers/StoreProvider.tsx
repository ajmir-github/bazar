import { store } from "@/context";
import { Provider } from "react-redux";

export default function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
