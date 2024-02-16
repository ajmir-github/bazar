import { Box } from "@mui/system";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import { LinearProgress, Paper } from "@mui/material";

export function appLoader() {}

export default function AppLayout() {
  const navigation = useNavigation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column-reverse",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Paper elevation={24}>
        {navigation.state === "loading" && <LinearProgress />}
        <Navbar />
      </Paper>

      <Box
        sx={{
          height: "100%",
          overflowY: "scroll",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
