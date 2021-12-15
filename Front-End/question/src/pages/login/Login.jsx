import React from 'react'
import { Link } from 'react-router-dom'

//add question card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
//input
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Login = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 500, m: "auto", mt: 10 }}>
                <CardContent>
                    <Box fullWidth sx={{ height: 60, backgroundColor: '#2196f3', mb: 5 }}>
                        <Typography sx={{ color: 'white', fontSize: 25, pt: 1.5 }}>
                            Login to your account
                        </Typography>
                    </Box>
                    <TextField
                        fullWidth
                        sx={{ mb: 3 }}
                        required
                        type="email"
                        helperText="Please write your email"
                        id="email"
                        label="Email"
                    />
                    <TextField
                        fullWidth
                        sx={{ mb: 3 }}
                        required
                        type="password"
                        helperText="Please write your password."
                        id="password"
                        label="Password"
                    />
                    <Typography sx={{textAlign: 'left', fontSize: 14}}>
                        Did not creat an account ?
                        <Link to="/signup">Sign up</Link>
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button sx={{ m: "auto" }} size="small">Login</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Login
