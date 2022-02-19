import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Link style={{
              textDecoration: 'none',
              color: 'white'
            }} to="/">
              <Typography variant="h5">Dinner Time</Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Container style={{ marginTop: 24, marginBottom: 24 }} maxWidth="md">
        <Outlet />
      </Container>
    </div >
  )
}

export default App;
