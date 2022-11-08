import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.get('/', (req,res,next)=>{
    res.send("server is running");
    next();
});

app.listen(9000, () => {console.log('sever running')});