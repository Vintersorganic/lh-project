import { Box, Container } from "@mui/material";
import UsersCard from "@/components/UsersCard";

export default function UserDetailsPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: `calc(100vh - ${64}px)`,
      }}
    >
      <Box
        sx={{
          my: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <UsersCard />
      </Box>
    </Container>
  );
}
