const express = require('express')
const router = express.Router()
const movieRoute = require('../controllers/movieController')


router.get('/', movieRoute.readMovie)
// router.get('/add', movieRoute.createFormMovie)
// router.post('add/', movieRoute.updateFormMovie)
// router.get('/:movieId/', movieRoute.readMovieById)
// router.get('/:movieId/edit', movieRoute.editFormMovie)
// router.post('/:movieId/edit', movieRoute.updateFormMovie)
// router.get('/:movieId/delete', movieRoute.destroyMovie)

module.exports = router