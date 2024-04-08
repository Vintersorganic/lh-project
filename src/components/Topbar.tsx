"use client";
import { useState } from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Image from "next/image";
import Link from "next/link";
import UserCreationModalForm from "./UserCreationModal";
import UserSearch from "./UserSearch";

export default function Topbar() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Probably no need to get fancy on dynamically setting the width and height */}
          <Link href={"/"} style={{ display: "flex" }}>
            <Image
              src="/assets/Legit-Health_logo.png"
              alt="Logo"
              width={225}
              height={30}
              priority
            />
          </Link>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              aria-label="add"
              color="primary"
              onClick={handleModalOpen}
            >
              <AddBoxIcon fontSize={"large"} />
            </IconButton>

            <UserSearch />
          </Box>
        </Toolbar>
      </AppBar>

      {/* TODO: Better handling of modals. See: https://levelup.gitconnected.com/mastering-modals-in-next-js-a-comprehensive-guide-475c0d1629ab */}
      <UserCreationModalForm open={modalOpen} handleClose={handleModalClose} />
    </Box>
  );
}
