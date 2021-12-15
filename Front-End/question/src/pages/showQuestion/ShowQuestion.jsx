import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ShowQuestionCard from './components/ShowQuestionCard';




const ShowQuestion = () => {
    let { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await axios.get(`/api/question/get/${id}`)
            setData(data.data)
        }
        fetchData();

    }, [])


    return (
        <div>
            <ShowQuestionCard data={data}/>
        </div>
    )
}

export default ShowQuestion
