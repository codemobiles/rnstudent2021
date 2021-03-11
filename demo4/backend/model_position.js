const Sequelize = require("sequelize");
const sequelize = require("./db_instance");

const position = sequelize.define(
    "position",
    {
      // attributes
      latitude: {
        type: Sequelize.NUMBER,
        allowNull: false
      },
      longitude: {
        type: Sequelize.NUMBER,
        allowNull: false
      }
    },
    {
      // options
    }
  );
  

(async () => {
  await position.sync({ force: false });    
})();

module.exports = position;
