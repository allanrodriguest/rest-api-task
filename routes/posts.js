const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// Routes

// GET ALL POSTS
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.json({
      message: `${err.status(404)}
    Invalid Parameters`
    })
  }
})

// POST A NEW DOCUMENT
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })
  try {
    const savedPost = await post.save()
    res.status(200).json(savedPost)
  } catch (err) {
    res.status(404).json({ message: 'Invalid Parameters' })
  }
  //res.redirect('/')
})

// GET SPECIFIC POST
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  } catch (err) {
    res.status(404).json({ message: 'Id not found' })
  }
})

// Delete Post

router.delete('/:postId', async (req, res) => {
  try {
    const post = await Post.deleteOne({ _id: req.params.postId })
    res.json(post)
  } catch (err) {
    res.status(404).json({ message: 'Error, please try again.' })
  }
})

//update a post

router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    )
    res.json(updatedPost)
  } catch (err) {
    res.status(404).json({ message: 'Error, please try again.' })
  }
})

module.exports = router
