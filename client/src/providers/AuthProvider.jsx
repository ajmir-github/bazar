import { Backdrop, CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { localToken } from "../utils/localStore";

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);

  const checkAuth = (token) => {
    if (!token) setLoading(false);
  };

  useEffect(() => {
    checkAuth(localToken.get());
  }, []);

  if (loading)
    return (
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
    );

  return children;
}
