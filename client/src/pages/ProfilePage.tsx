import { useAppSelector } from "@/context";

export default function ProfilePage() {
  const user = useAppSelector((state) => state.auth.user);
  console.log(user);
  return <div className="grid gap-2 md:gap-4">profile page</div>;
}
