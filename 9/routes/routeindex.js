const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Post = require('../model/post');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

router.get('/', async function(req,res){
  let posts = await Post.find();
  res.render('index', {posts, months});
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

router.post('/newPost', async (req, res) => {
  console.log("Received: ", req.body);

  let newPost = Post(req.body);

  await newPost.save()
  res.redirect('/')
})

router.get('/edit/:id', async (req, res) => {
  let post = await Post.findById(req.params.id)
  let del = false
  res.render('edit', {post, del})
})

router.post('/edit/:id', async (req, res) => {
  await Post.updateOne({_id: req.params.id}, req.body);
  res.redirect('/')
})

router.get('/delete/:id',  async (req, res) => {
  let post = await Post.findById(req.params.id)
  let del = true
  res.render('edit', {post, del})
})
router.post('/delete/:id', async (req, res) => {
  await Post.remove({_id: req.params.id})
  res.redirect('/')
})



module.exports = router;
