const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
      const postData = await Post.findAll({ include: [User]})

      const posts = postData.map((post) => post.get({plain: true}))

      res.render('all-post', {posts})

  } catch (error) {
      res.json(error)
  }
});

// get single post
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User] 
                }
            ]
        })

        if (postData) {
            const post = postData.get({plain: true})
            res.render('single-post', {post})
        }
    } catch (error) {
        res.json(error)
    } 
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return
    }
    res.render('login')
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return
    }
    res.render('signup')
});

module.exports = router;
