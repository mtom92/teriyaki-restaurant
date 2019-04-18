'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    name: DataTypes.STRING,
    comment: DataTypes.TEXT,
    rating: DataTypes.DECIMAL,
    spotId: DataTypes.INTEGER
  }, {});
  review.associate = function(models) {
    // associations can be defined here
    models.review.belongsTo(models.spot)
  };
  return review;
};
