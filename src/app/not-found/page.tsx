"use client";
import { useEffect, useRef } from "react";
import { Container, Typography, Link as MUILink, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import lottie from "lottie-web";
import Link from "next/link";

const ErrorPage = () => {
  const router = useRouter();
  const animationContainer = useRef(null);

  useEffect(() => {
    // Ensure the container exists before attempting to use it to avoid container error
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        // Not the most beautiful lottie animation but it works for the given purpose.
        path: "/assets/404.json",
      });

      // Cleanup function to stop and destroy the animation when the component unmounts
      return () => anim.destroy();
    }
  }, []);

  const handleGoRandomUser = () => {
    const randomUserId = Math.floor(Math.random() * 12) + 1;
    router.push(`/users/${randomUserId}`);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <div ref={animationContainer} style={{ width: "100%", height: 350 }} />

        <Typography variant="h5" component="h1" gutterBottom>
          Oops, the resource you're looking for doesn't exist.
        </Typography>
        <Typography textAlign="center">
          Try going back to the <Link href={"/"}>user list</Link> and find what
          you were looking for or go to a{" "}
          <Typography
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={handleGoRandomUser}
            color="secondary"
          >
            go to a random user.
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
};

export default ErrorPage;
