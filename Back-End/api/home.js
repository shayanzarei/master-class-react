const homeRouter = require('express').Router();
const QuestionModel = require('../model/questionModel')

homeRouter.get('/home', async (req, res) => {
    const question = await QuestionModel.find().populate('user').sort({ createdAt: -1 });
    res.json({ 
        question
    })
});


module.exports = homeRouter;

