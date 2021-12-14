const express = require('express')
require('./config/mongoose')
const cookieParser =require('cookie-parser')

const questionRouter = require('./api/question')
const answerRouter = require('./api/answer')

// const {checkUser} = require('./middleware/authMiddleware')
// const mainRoute = require('./routes/mainRoute')
// const authRoute = require('./routes/authRoute')
// const questionRoute = require('./routes/questionRoute')


const app = express() ;

app.use(cookieParser());

//Body parser
app.use(express.urlencoded({ extended: false }))

app.use(express.json());

// //global vars
// app.use((req,res ,next) =>{
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     next();
// });




//Routers
// app.all('*' , checkUser)


app.use("/api/question",questionRouter);
app.use("/api/answer",answerRouter);


// app.use(authRoute);
// app.use(questionRoute);


app.listen(8000,() => console.log('port 8000 ready'))