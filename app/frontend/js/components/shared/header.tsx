import * as React from 'react';
// material ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

class Header extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" classes="header">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Girls
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Header;
