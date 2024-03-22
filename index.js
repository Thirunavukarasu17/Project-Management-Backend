import express from 'express';
import mongoose from 'mongoose';
import projectsroute from './routes/projectsroute.js';
import cors from 'cors';

const app=express()
app.use(express.json())
app.use(cors())
const PORT=4000
const mongoDBURL='mongodb+srv://backend:Thiru123@projectcollection.ijzu5bt.mongodb.net/test?retryWrites=true&w=majority&appName=PROJECTCOLLECTION'


app.get('/',(req,res)=>{
    return res.status(200).send('Mess age')
})

app.use('/projects',projectsroute)


mongoose.connect(mongoDBURL).then(()=>{
    console.log("ACCEPTED")
    app.listen(PORT,()=>{
        console.log("LISTENING IN "+ PORT)
    })

}).catch((error)=>{console.log(error)})
