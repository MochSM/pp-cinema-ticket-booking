const { Op } = require('sequelize');
const { Movie } = require("../models");
const { formatDate } = require("../helpers/dateFormatter");

class HomeController {
  static readMovie(req, res) {
    const { genre, search } = req.query;
    const filterQuery = {}
    if(genre) filterQuery.genre = { [Op.not]: genre }
    if(search) filterQuery.title = { [Op.iLike]: '%' + search + '%' }
  
    console.log(filterQuery);

    Movie.findAll({ 
      where: filterQuery,
      order : [['id']]
    })
      .then((data) => res.render("home", { data, loggedIn:req.session.userId, user:req.session, formatDate }))
      .catch((err) => res.send(err.message));
  }

}

module.exports = HomeController;
