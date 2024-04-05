import * as React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Image from 'next/image';

export default function Topbar() {
  const primaryBlue = '#007BFF'; // Change later

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
        <Toolbar>
          {/* Probably no need to get fancy on dynamically setting the width and height */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Image src="/assets/Legit-Health_logo.png" alt="Logo" width={225} height={30} priority layout="fixed" />
          </Box>

          {/* Add button for creating user */}
          <IconButton aria-label="add" sx={{ color: primaryBlue }}>
            <AddBoxIcon />
          </IconButton>

          {/* Search Input Field, might do later */}
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
    </Box>
  );
}
