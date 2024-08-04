const router = require('express').Router();

const userRoutes = require('./user-route');
const postRoutes = require('./post-route');

router.use('/', userRoutes);
router.use('/', postRoutes);

module.exports = router;