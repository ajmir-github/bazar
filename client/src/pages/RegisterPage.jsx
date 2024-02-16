import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function RegisterPage() {
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
          <PersonAddIcon fontSize="large" />

          <Typography fontSize={"large"}>Register Here</Typography>
        </Grid>
        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
        />

        <Button variant="contained">Sign In</Button>
      </Stack>
    </Grid>
  );
}
