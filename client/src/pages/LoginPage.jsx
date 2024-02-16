import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export default function LoginPage() {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100%"}
    >
      <Stack gap={2}>
        <Grid
          container
          alignItems={"center"}
          gap={2}
          color={(theme) => theme.palette.primary.main}
        >
          <LoginIcon fontSize="large" />

          <Typography fontSize={"large"}>Login Here</Typography>
        </Grid>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />

        <Button variant="contained">Sign In</Button>
      </Stack>
    </Grid>
  );
}
