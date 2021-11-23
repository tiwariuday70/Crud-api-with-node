const express=require('express');
const app=express();
const db=require('./connection');
require('dotenv').config();
const postModel= require('./postModel.js');
app.use(express.urlencoded({extended:true}));
app.use(express.json());




db();

//CRUD Application
app.post('/', async (req,res)=>{
    // const{title,content}=req.body;
    try{
        const newPost= await postModel.create(req.body)
        res.json(newPost)
    }catch(error){
        res.status(500).send(error)
        console.log(error)
    }

    // console.log(req.body)
    

});

app.get('/posts',async(req,res)=>{
    try{
        const posts= await postModel.find();
        res.json(posts);
       }catch(error){
        res.status(500).send(error) 
        console.log(error)  
       }
    console.log('object')
})
app.get('/:id',async(req,res)=>{
    const {id}= req.params;
    try{
        const post=await postModel.findById(id);
        res.json(post);
    }catch(error){
        res.status(500).send(error)
    }
})

app.put('/:id',async(req, res)=>{
    const{id}=req.params;
    const{title, content}= req.body;
    try {
        const post= await postModel.findById(id);
        await post.remove();
        res.json(post)

        
    } catch (error) {
      res.status(500).send(error)
        
    }

})

app.delete('/:id', async(req,res)=>{
    const{id}=req.params;
    try {
        const post= await postModel.findByIdAndDelete(id, {title,content});
        res.json('Deleted Successfully')
    } catch (error) {
        res.status(500).send(error)
        
    }
})




app.listen(3000, ()=>{
    console.log('Listening on 3000');
})


