
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import path from 'path';
import userRouter from './routes/user/';
let app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost/burdyDb');
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');    //(extende javascript)templating / server side templating/ html+ js

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/user', userRouter);

app.listen('3030', (req, res) => {
    console.log('Server is running');
})

// error handler

app.use((err, req, res, next)=> {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.message);
})
