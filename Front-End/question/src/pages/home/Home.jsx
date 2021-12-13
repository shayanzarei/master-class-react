import { useEffect, useState } from 'react';
import axios from 'axios'

const Home = () => {
    const [questions, setQuestions] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const data = await axios.get('http://localhost:8000/api/home')
            console.log(data.data.question);
            setQuestions(data.data.question)
        }
        fetchData();

    }, [])
    return (
        <div>
            Home page
            {questions.map((question )=>(
                <div key={question._id}>
                    <h1>{question.question}</h1>
                    <h3>{question.description}</h3>
                    <br/>
                    <br/>
                    <br/>
                </div>
            ))}
        </div>
    )
}

export default Home
