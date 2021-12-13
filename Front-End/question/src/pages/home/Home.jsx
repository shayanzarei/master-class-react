import { useEffect, useState } from 'react';
import axios from 'axios';
import './homeStyle.css';
import QuestionCard from './components/QuestionCard';

//package grid
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const Home = () => {
    const [questions, setQuestions] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const data = await axios.get('/api/question')
            console.log(data.data.question);
            setQuestions(data.data.question)
        }
        fetchData();

    }, [])
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} className="boxDesign">
                <Grid container spacing={3} columns={15} >
                    {questions.map((question )=>(
                        <QuestionCard question={question}/>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}

export default Home
