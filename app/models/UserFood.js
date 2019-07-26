module.exports = function(sequelize,DataTypes){
    var UserFood = sequelize.define("UserFood",{
        food_names: DataTypes.array(DataTypes.TEXT),
        portions: DataTypes.STRING,
        kcal: DataTypes.INTEGER,
        name: DataTypes.STRING
    });
    return UserFood;

};