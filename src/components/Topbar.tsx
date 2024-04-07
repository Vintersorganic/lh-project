'use client'
import { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box, Snackbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Image from 'next/image';
import Link from 'next/link';
import UserCreationModalForm from './UserCreationModal';

export default function Topbar() {
  const [modalOpen, setModalOpen] = useState(false);

  const primaryBlue = '#007BFF';

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#ffffff' }}>
        <Toolbar>
          {/* Probably no need to get fancy on dynamically setting the width and height */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Link href={'/'}>
              <Image src="/assets/Legit-Health_logo.png" alt="Logo" width={225} height={30} priority layout="fixed" />
            </Link>
          </Box>

          <IconButton aria-label="add" sx={{ color: primaryBlue }} onClick={handleModalOpen}>
            <AddBoxIcon />
          </IconButton>

          {/* TODO: Search Input Field */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            paddingLeft: '10px',
            paddingRight: '10px',
            borderRadius: '5px',
            marginLeft: '20px'
          }}>
            <SearchIcon sx={{ color: primaryBlue }} />
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ ml: 1, flex: 1, color: primaryBlue }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* TODO: Better handling of modals. See: https://levelup.gitconnected.com/mastering-modals-in-next-js-a-comprehensive-guide-475c0d1629ab */}
      <UserCreationModalForm open={modalOpen} handleClose={handleModalClose} />
    </Box>
  );
}
