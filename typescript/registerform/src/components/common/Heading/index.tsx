import { Box, Divider, Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export default function Heading({ children }: Props) {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography component="h2" variant="h5" sx={{ p: 1 }}>
        {children}
      </Typography>
      <Divider />
    </Box>
  );
}
