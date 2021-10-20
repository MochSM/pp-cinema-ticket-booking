'use strict';


let data = require("../data/movies.json")
data.forEach(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
})
console.log (data)

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("Movies", data, {})
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Movies", null, {})
  }
};
