import React from 'react'
import axios from 'axios'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const AnswerCard = ({data}) => {
    if(data){
        console.log(data.answers)
    }

    const handleDelete = (e) =>{
        axios.post(`/api/answer/${e.currentTarget.id}/delete`)
            .then(res => {
                window.location.reload(false);
            })
            .catch(err => console.log(err))
    }

    return (
        <List sx={{ width: '100%',bgcolor: 'background.paper' }}>
            { data && 
                data.answers.map((answer) => (
                    <React.Fragment key={answer._id}>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary={answer.answer}
                                secondary={
                                    <React.Fragment>
                                        {answer.user && answer.user.username}
                                    </React.Fragment>
                                }
                            />
                            <Stack direction="row">
                                <IconButton id={answer._id} onClick={handleDelete} aria-label="delete">
                                    <DeleteIcon sx={{ color: "#EB0014" }} />
                                </IconButton>
                                <IconButton color="primary" aria-label="delete">
                                    <EditIcon color="primary" />
                                </IconButton>
                                </Stack>
                        </ListItem>
                        
                        <Divider  component="li" />
                    </React.Fragment>
                ))
            }
        </List>
    )
}

export default AnswerCard
