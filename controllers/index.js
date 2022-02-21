const router = require('express').Router();

//Create the api routes and require them to use them within the controllers
const apiRoutes = require('./api')
const homeRoutes = require('./home-routes')
const dashboardRoutes = require('./dashboard-routes')

router.use('/api', apiRoutes)
router.use('/', homeRoutes)
router.use('/dashboard', dashboardRoutes)

module.exports = router;
