"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Fade,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { fetchUser } from "@/services/users";
import { ApiResponseSingleUser } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export default function UsersCard() {
  const pathname = usePathname();
  const [userId, setUser] = useState<string | undefined>(undefined);

  useEffect(() => {
    const userId = pathname.split("/").pop();
    setUser(userId);
  }, [pathname]);

  const { data: user } = useQuery<ApiResponseSingleUser, Error>({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
    enabled: !!userId,
  });

  const handleUserChangeUrl = (direction: "next" | "previous") => {
    if (!userId) return "/users";
    const currentId = parseInt(userId, 10);
    if (isNaN(currentId)) return "/users";
    const newId = direction === "next" ? currentId + 1 : currentId - 1;
    return `/users/${newId}`;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Link href={handleUserChangeUrl("previous")}>
        <Button sx={{ mr: 2, color: "primary.main" }}>
          <ArrowBackIosIcon />
        </Button>
      </Link>
      <Fade in={true} timeout={800}>
        <Card raised sx={{ width: 360, textAlign: "center" }}>
          <Box
            sx={{
              position: "relative",
              height: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar src={user?.data.avatar} sx={{ width: 120, height: 120 }} />
          </Box>
          <CardContent>
            <Typography variant="h5" component="div">
              {user?.data.first_name} {user?.data.last_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user?.data.email}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link href="/" passHref>
                <Button variant="contained">Back to List</Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Fade>
      <Link href={handleUserChangeUrl("next")} passHref>
        <Button sx={{ ml: 2, color: "primary.main" }}>
          <ArrowForwardIosIcon />
        </Button>
      </Link>
    </Box>
  );
}
