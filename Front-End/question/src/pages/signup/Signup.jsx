import React from 'react'
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
//input
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Signup = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 500, m: "auto", mt: 5 }}>
                <CardContent>
                    <Box fullWidth sx={{ height: 60, backgroundColor: '#2196f3', mb: 5 }}>
                        <Typography sx={{ color: 'white', fontSize: 25, pt: 1.5 }}>
                            SignUp in our website
                        </Typography>
                    </Box>
                    <TextField
                        fullWidth
                        sx={{ mb: 3 }}
                        required
                        type="text"
                        helperText="Please write your username"
                        id="demo-helper-text-aligned"
                        label="Username"
                    />
                    <TextField
                        fullWidth
                        sx={{ mb: 3 }}
                        required
                        type="email"
                        helperText="Please write your email"
                        id="demo-helper-text-aligned"
                        label="Email"
                    />
                    <TextField
                        fullWidth
                        sx={{ mb: 3 }}
                        required
                        type="password"
                        helperText="Please write your password."
                        id="demo-helper-text-aligned"
                        label="Password"
                    />
                    <TextField
                        fullWidth
                        sx={{ mb: 3 }}
                        required
                        type="password"
                        helperText="Please write your password."
                        id="demo-helper-text-aligned"
                        label="Password"
                    />
                    <Typography sx={{textAlign: 'left', fontSize: 14}}>
                        Did you creat an account before?
                        <Link to="/login">Login</Link>
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button sx={{ m: "auto" }} size="small">SignUp</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Signup
