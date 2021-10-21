const {Movie} = require("../models")


class movieController {
    static readMovie(req,res){
        Movie.findAll({
            order: [['createdAt','DESC']]
        })
        .then((data)=>{res.render('movies/showMovies', {data, user:req.session.user })})
        .catch((err)=>{res.send(err.message)})
    }

    static createFormMovie(req, res){
        res.render('movies/formAddMovie', {user:req.session.user })
    }
    
    static postCreateFormMovie(req, res){
        console.log (req.body)
        let newMovies = {
            title: req.body.title,
            posterUrl: req.body.posterURL,
            pgRating: req.body.pgRating,
            genre: req.body.genre,
            synopsis: req.body.synopsis,
            releaseDate: req.body.date,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        Movie.create(newMovies)
        .then((data) => {res.redirect('/movies')})
        .catch((err) => {res.send(err)})
    }
    
    static editFormMovie(req, res){
        let id = req.params.movieId
        Movie.findByPk(id)
        .then((data) => {res.render('movies/formEditMovies', {data, user:req.session.user })})
        .catch((err)=> res.send(err))
    }

    static postEditFormMovie(req,res){
        console.log (req.body)
        let id = req.params.movieId
        let newMovies = {
            title: req.body.title,
            posterUrl: req.body.posterURL,
            pgRating: req.body.pgRating,
            genre: req.body.genre,
            synopsis: req.body.synopsis,
            releaseDate: req.body.date,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        Movie.update(newMovies, {where: {id:id}})
        .then((data)=>{res.redirect('/movies')})
        .catch((err)=>{res.send(err)})
    }

    static destroyMovie(req,res){
        let id = req.params.movieId
        // console.log(id)
        Movie.destroy({ where: { id: id}})
         .then(() => {res.redirect('/movies')})
         .catch((err)=>{res.send(err)})
    }
}

module.exports = movieController