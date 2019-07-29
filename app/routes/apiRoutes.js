var db = require('../models');
var sequelize = require('sequelize');
module.exports = function(app) {
  app.post('/api/userfood', function(req, res) {
    console.log(req.body);
    db.UserFood.create({
      firstname: req.body.firstname,
      name: req.body.name,
      portions: req.body.portions,
      kcal: req.body.kcal
    }).then(function(dbUserFood) {
      res.json(dbUserFood);
    });
  });
  app.get('/searchfood/:foodName', function(req, res) {
    var food = req.params.foodName;
    console.log("food in the api route: " +food);
    db.Food.findAll({
      where: {
        name: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('name')),
          'LIKE',
          '%' + food + '%'
        )
      }
    }).then(function(dbData) {
 
   console.log(dbData)
      res.render('results', {foodResults: dbData})
    });
  });
  // function updataCal(calOfFood){
  //   db.UserFood.up
  // }
  // Delete an example by id
  app.delete('/api/userfood/:id', function(req, res) {
    db.UserFood.destroy({ where: { id: req.params.id } }).then(function(
      dbUserFood
    ) {
      res.json(dbUserFood);
    });
  });
  //   db.push()
};

