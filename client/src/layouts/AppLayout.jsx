import { Box } from "@mui/system";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import {
  Backdrop,
  CircularProgress,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function AppLayout() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeOut = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <>
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
          <Outlet />
        </Box>
        {navigation.state === "loading" && <LinearProgress />}
      </Box>

      <Backdrop
        open={loading}
        sx={(theme) => ({
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.background.default,
          zIndex: theme.zIndex.drawer + 1,
        })}
      >
        <Stack alignItems={"center"} gap={6}>
          <Typography
            color="inherit"
            fontSize={24}
            fontWeight={600}
            textTransform={"uppercase"}
          >
            Bazaraki
          </Typography>
          <Stack alignItems={"center"} gap={2}>
            <CircularProgress color="inherit" />
            <Typography color="inherit">Loading</Typography>
          </Stack>
        </Stack>
      </Backdrop>
    </>
  );
}
