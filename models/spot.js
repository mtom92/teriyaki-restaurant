'use strict';
module.exports = (sequelize, DataTypes) => {
  const spot = sequelize.define('spot', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    address: DataTypes.STRING,
    specialty: DataTypes.STRING,
    sunday: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});
  spot.associate = function(models) {
    // associations can be defined here
    models.spot.hasMany(models.review)

  };
  return spot;
};
