import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.get('/', (req,res,next)=>{
    res.send("<p>This is a test</p>");
});

app.listen(9000, () => {console.log('sever running')});