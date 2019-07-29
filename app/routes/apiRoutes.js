var db = require('../models');
var sequelize = require('sequelize');
module.exports = function(app) {
  app.post('/fooddata/post', function(req, res) {
    console.log(req.body);
    db.UserFood.create({userId: req.body.userId,
    foodId: req.body.foodId}).then(function(dbUserFood) {
      res.json(dbUserFood);
    });
  });

  app.put('/fooddata/post/:portions/:kcal', function(req, res) {
    db.UserFood.update({
      portions: req.params.portions,
      kcal: req.params.kcal
  },{where: {
    id: req.body.id
  }})
    .then(function(updateFoodInfo) {
      res.json(updateFoodInfo);
    })
  })
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


  app.get('/dashboard/:userId?', function(req, res) {
    var food = req.params.userId;
    console.log("food in the api route: " +food);
    db.UserFood.findAll({
      where: {
       userId: food
      }, include: [db.Food]
    }).then(function(dbData) {
      console.log(dbData)
      res.render('dashboard', {foodResults: dbData})
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

  //  
  


};

