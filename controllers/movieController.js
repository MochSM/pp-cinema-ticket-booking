const {Movie} = require("../models")


class movieController {
    static readMovie(req,res){
        Movie.findAll()
        .then((data)=>{res.send(data)})
        .catch((err)=>{res.send(err.message)})
    }

    
    static createFormMovie(req, res){
        res.render('formAddMovie', {loggedIn:false})
    }
    
    static postCreateFormMovie(req, res){
        // res.send('masuuukk')
        // let newMovies = {
        //     title: req.body.title
        //     posterURL: req.body.
        // }
    }
    
    static readMovieById(req,res){
        let id = req.params.movieId
        Movie.findByPk(id)
    }
    
    static editFormMovie(req, res){

    }

    static postEditFormMovie(req,res){

    }

    static destroyMovie(req,res){

    }

}

module.exports = movieController