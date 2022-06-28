import { Alert, Stack } from "@mui/material";

export default function NotFound() {
  return (
    <Stack sx={{ width: "100%", mt: 3 }}>
      <Alert severity="error">404: Page Not Found</Alert>
    </Stack>
  );
}
