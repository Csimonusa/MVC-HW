const router = require('express').Router();
const {Comment} = require('../../models')
const withAuth = require('../../utils/auth')

//Require the correct files from the models and authorizations

router.post('/', withAuth, async (req, res) => {
  // Complete the asynchronous function for router.post
  try {
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.userId
    })
    res.json(newComment)
  } catch (error) {
    res.json(error)
  }
});

module.exports = router;
