import express from 'express';
import mongoose from 'mongoose';

const port = 9000;
const url = "mongodb+srv://root:root@cluster0.ew1hmfn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);

const app = express();

app.get('/', (req,res,next)=>{
    res.send("");
    next();
});

app.listen(port, () => {console.log(port)});