
import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const QuestionCard = ({question}) => {
    return (
        <Grid item xs={5} className="gridDesign" key={question._id}>
            <Card sx={{ minWidth: 275 }} >
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {question.user && question.user.username}
                    </Typography>
                    <Typography sx={{ mb: 2 }} variant="h5" component="div">
                    {question.question}
                    </Typography>
                    <Typography sx={{ mb: 2 }} variant="body2">
                    {question.description}
                    </Typography>
                    <Typography  color="text.secondary">
                        {question.updatedAt}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className="button">Show Question</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default QuestionCard






