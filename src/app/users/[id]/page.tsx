"use client";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { Container, Box } from "@mui/material";
import UsersCard from "@/components/UsersCard";
import { fetchUser } from "@/services/users"; // Assuming this is the function to fetch user data
import { ApiResponseSingleUser } from "@/utils/types"; // Assuming this is the type definition for the user data
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/Loader";

export default function UserDetailsPage() {
  const pathname = usePathname();
  const router = useRouter();
  const [userId, setUserId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const userId = pathname.split("/").pop();
    setUserId(userId);
  }, [pathname]);

  const {
    data: user,
    isFetching,
    error,
  } = useQuery<ApiResponseSingleUser, Error>({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
    enabled: !!userId,
  });

  const handleUserChange = (direction: "next" | "previous") => {
    const currentId = parseInt(userId ?? "0", 10);
    if (isNaN(currentId)) return;
    const newId = direction === "next" ? currentId + 1 : currentId - 1;
    setUserId(newId.toString());
    // Sync the URL.
    router.push(`/users/${newId}`);
  };

  useEffect(() => {
    if (error) {
      redirect("/not-found");
    }
  }, [error]);

  if (isFetching) return <Loader />;

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
        <UsersCard user={user} onUserChange={handleUserChange} />
      </Box>
    </Container>
  );
}
