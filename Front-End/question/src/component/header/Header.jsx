import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { NavLink } from 'react-router-dom'



const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button component={NavLink} to="/" color="inherit">Home</Button>
                    <Button component={NavLink} to="/add-question" color="inherit">Add Question</Button>
                </Box>

                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }}}>
                    <Button component={NavLink} to="/login" color="inherit">Login</Button>
                    <Button component={NavLink} to="/signup" color="inherit">SignUp</Button>
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
