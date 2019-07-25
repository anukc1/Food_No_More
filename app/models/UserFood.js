module.exports = function(sequelize,DataTypes){
    var UserFood = sequelize.define("UserFood",{
        food_name: DataTypes.STRING,
        portions: DataTypes.STRING,
        kcal: DataTypes.INTEGER,
        name: DataTypes.STRING

    });
    return UserFood;

};