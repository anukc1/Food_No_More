module.exports = function(sequelize, Sequelize){
    var UserFood = sequelize.define("UserFood",{
        firstname:{
            type: Sequelize.STRING,
			allowNull: false
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        portion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        kcal: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        
    });
    return UserFood;

};