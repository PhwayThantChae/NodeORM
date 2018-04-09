const todosController = require('../controllers/todo');
const express = require('express');
const router = express.Router();

router.get('/api', (req,res) => res.status(200).send({
    message: 'Welcome to the Todos API',
}));

router.post('/api/todos',todosController.create);
router.get('/api/todos',todosController.list);

module.exports = router;

