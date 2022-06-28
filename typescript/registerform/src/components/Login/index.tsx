import { Box, Grid, Link, Typography, Button } from "@mui/material";

export default function Login() {
  return (
    <Box sx={{ width: 1160, margin: "auto" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Box component="h1" sx={{ p: 4 }}>
          <Link
            href="/"
            variant="h1"
            sx={{
              display: "flex",
              alignItems: "flex-end",
              textDecoration: "none",
            }}
          >
            <Typography variant="h4" color="#000">
              WelCome!
            </Typography>
            <Typography variant="subtitle2" color="#000" ml={2} pb={0.5}>
              powered by Crong
            </Typography>
          </Link>
        </Box>
        <Box sx={{ pb: 2 }}>
          <Button variant="contained">Google 로그인</Button>
        </Box>
        <Box>
          <Button variant="contained">GitHub 로그인</Button>
        </Box>
      </Grid>
    </Box>
  );
}
