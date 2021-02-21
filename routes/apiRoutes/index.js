const router = require('express').Router();
const { apiPost, apiDelete } = require('../../controllers/apiController.js');

router.post('/books', apiPost);

router.delete('/books/:id', apiDelete);

module.exports = router;