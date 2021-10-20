const {Movie} = require("../models")


class movieController {
    static readMovie(req,res){
        Movie.findAll()
        .then((data)=>{res.send(data)})
        .catch((err)=>{res.send(err.message)})
    }

    
    static createFormMovie(req, res){
        
    }
    
    static updateFormMovie(req, res){
        
    }
    
    static readMovieById(req,res){

    }
    
    static editFormMovie(req, res){

    }

    static updateFormMovie(req,res){

    }

    static destroyMovie(req,res){

    }

}

module.exports = movieController