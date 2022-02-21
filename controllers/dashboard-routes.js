const router = require('express').Router();
const withAuth = require('../utils/auth')
const {Post} = require('../models/')
//Require the correct files from the models and authorizations

router.get('/', withAuth, async (req, res) => {
  //Create the correct asychronous get route for this function
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId
      }
    })
    const posts = postData.map((post) => post.get({plain:true}))
    res.render('all-post-admin', {
      layout: 'dashboard',
      posts
    })
  } catch (error) {
    res.redirect('login')
  }
});

router.get('/new', withAuth, (req, res) => {
  // Create the correct get route
});

router.get('/edit/:id', withAuth, async (req, res) => {
  // Create the correct get route functionality using an asychronous function
});

module.exports = router;
