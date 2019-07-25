var db = require("../models");
module.exports = function (app){
app.post("/api/userfood", function(req, res) {
    console.log(req.body);
    db.UserFood.create({  
      name: req.body.name,
      food_name: req.body.food_name,
      portions: req.body.portions,
      kcal: req.body.kcal,
    })
    .then(function(dbUserFood) {
      res.json(dbUserFood);
    });
  });
  
  // Delete an example by id
  app.delete("/api/userfood/:id", function(req, res) {
    db.UserFood.destroy({ where: { id: req.params.id } }).then(function(dbUserFood) {
      res.json(dbUserFood);
    });
  });
//   db.push()
};
