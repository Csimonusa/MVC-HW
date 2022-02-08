const withAuth = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect('/login')
  } else {
    next()
  }
  // What functionality are we missing?

};

module.exports = withAuth;
