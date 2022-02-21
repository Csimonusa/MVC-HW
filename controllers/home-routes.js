const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
      const postData = await Post.findAll({ include: [User]})
      
      const posts = postData.map((post) => post.get({plain: true}))

      res.render('all-post', {posts})

  } catch (error) {
      res.json(err)
  }
});

// get single post
router.get('/post/:id', async (req, res) => {
 
});

router.get('/login', (req, res) => {

});

router.get('/signup', (req, res) => {
 
});

module.exports = router;
