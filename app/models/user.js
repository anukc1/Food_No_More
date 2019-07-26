module.exports = function(sequelize, Sequelize) {
	var User = sequelize.define("User", {
		firstname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		lastname: {
			type: Sequelize.STRING,
			allowNull: false
		},
		username: {
			type: Sequelize.TEXT
		},
		
		email: {
			type: Sequelize.STRING,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		
		status: {
			type: Sequelize.ENUM("active", "inactive"),
			defaultValue: "active"
		}
	});

	return User;
};
