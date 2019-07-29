module.exports = function(sequelize, Sequelize){
    var UserFood = sequelize.define("UserFood",{
        userId: Sequelize.STRING,
        foodId: Sequelize.STRING,
        portions: Sequelize.STRING,
        kcal: Sequelize.INTEGER
    });
   UserFood.associate = function(models) {
       UserFood.belongsTo(models.Food, {
        foreignKey: "foodId",
        targetKey: "id"
       })
   }
    return UserFood;
};