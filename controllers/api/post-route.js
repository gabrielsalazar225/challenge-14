const router = require('express').Router();
const { Post } = require('../../models');

router.post('/dashboard' , async(req,res) => {
    try{
        const{ title, description} = req.body;
        if(!title || !description){
            return res.status(400).json({message: 'Title and description are required'});
        }

        const dbPostData = await Post.create({
            title,
            description,
            iserId: req.session.userId
        });
        res.status(201).json({message: 'Post created succesfully'});
    } catch(err){
        console.log('Error creating the post:', err);
        res.status(500).json({message: 'An error ocurred while creating the post ', error: err,message})
    }
});

module.exports = router;
