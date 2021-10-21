const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')


router.get('/', movieController.readMovie)
router.get('/add', movieController.createFormMovie)
router.post('/add', movieController.postCreateFormMovie)
router.get('/:movieId/edit', movieController.editFormMovie)
router.post('/:movieId/edit', movieController.postEditFormMovie)
router.get('/:movieId/delete', movieController.destroyMovie)

module.exports = router