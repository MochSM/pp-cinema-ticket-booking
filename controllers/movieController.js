const {Movie} = require("../models")


class movieController {
    static readMovie(req,res){
        Movie.findAll()
        .then((data)=>{res.render('showMovies', {data, loggedIn:false})})
        .catch((err)=>{res.send(err.message)})
    }

    static createFormMovie(req, res){
        res.render('formAddMovie', {loggedIn:false})
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
        .then((data) => {res.redirect('showMovies')})
        .catch((err) => {res.send(err)})
    }
    
    static editFormMovie(req, res){
        let id = req.params.movieId
        Movie.findByPk(id)
        .then((data) => {res.render('formEditMovies', {data, loggedIn:false})})
        .catch((err)=> res.send(err))
    }

    static postEditFormMovie(req,res){

    }

    static destroyMovie(req,res){
        // let id = req.params.movieId
        // console.log(id)
        // Movie.destroyMovie({ where: { id: id}})
        //  .then((data) => {res.redirect()})
        //  .catch((err)=>{res.send(err)})
    }

}

module.exports = movieController