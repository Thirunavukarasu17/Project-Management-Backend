import express  from "express";
import {Project}  from "../models/projectmodel.js";
 
const router=express.Router()



//ROUTE FOR NEW PROJECT

router.post('/',async(req,res)=>{
    try{
        if(!req.body.title || !req.body.members||!req.body.days){
            return res.status(400).send({message:'Fill all the required fields'})
        }
        const newProject={
            title:req.body.title,
            members:req.body.members,
            days:req.body.days
        }
        const project=await Project.create(newProject)
        return res.status(201).send(project)
    }
    catch(error){
        return res.status(500).send({message:error.message})
    }
})

//GET ALL PROJECTS

router.get('/',async(req,res)=>{
    try{
        const projects=await Project.find({})
        return res.status(200).send({count:projects.length,data:projects})
    }
    catch(error){
        return res.status(500).send({message:error.message})
    }
})

//GET one PROJECT by ID

router.get('/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const project=await Project.findById(id)
        return res.status(200).send(project)
    }
    catch(error){
        return res.status(500).send({message:error.message})
    }
})

//UPDATE A PROJECT

router.put('/:id',async(req,res)=>{
    try{
        if(!req.body.title || !req.body.author||!req.body.publishYear){
            return res.status(400).send({message:'send all the required fields'})
        }
        const {id}=req.params
        const updateProject=await Project.findByIdAndUpdate(id,req.body)
        if (!updateProject){
            return res.status(404).send({message:'projects not found'})
        }
        else{
            return res.status(200).send({message:'projects was Updated'})
        }    }
    catch(error){
        return res.status(500).send({message:error.message})
    }
})

//Delete a PROJECT

router.delete('/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const deleteBook=await Project.findByIdAndDelete(id)
        if (!deleteBook){
            return res.status(404).send({message:'Project not found'})
        }else{
        return res.status(200).send('Deleted SuCcessfully')}
    }
    catch(error){
        return res.status(500).send({message:error.message})
    }
})

export default router;
