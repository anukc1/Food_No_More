module.exports = function (sequelize, DataTypes) {
    var Food = sequelize.define("Food", {
        name: DataTypes.STRING,
    
        portions: DataTypes.STRING,

        kcal: DataTypes.INTEGER

    });


     return Food;
};
