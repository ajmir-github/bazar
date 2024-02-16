import { Box } from "@mui/system";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import { Paper } from "@mui/material";

export default function ProtectedLayout() {
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
        <Navbar />
      </Paper>
      <Box
        sx={{
          height: "100%",
          overflowY: "scroll",
        }}
      >
        {navigation.state === "loading" ? <div>loading...</div> : <Outlet />}
      </Box>
    </Box>
  );
}
