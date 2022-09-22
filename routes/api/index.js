const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const CommentRoutes = require('./comment-routes');

router.use('/comments', CommentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;