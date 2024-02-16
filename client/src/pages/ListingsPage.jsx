import { Stack } from "@mui/material";
import ListingsOptions from "../components/ListingsOptions";

export const listingsPageLoader = async () => {
  return [];
};

export default function ListingsPage() {
  return (
    <Stack>
      <ListingsOptions />
    </Stack>
  );
}
