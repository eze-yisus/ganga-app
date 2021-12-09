const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "order",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      userInfo: { // cellphone, mail, price, address
        type: DataTypes.JSON
      },

      productInfo: { // amount, price
        type: DataTypes.ARRAY(DataTypes.JSON)
      },

      info: { // state
        type: DataTypes.TEXT
      },

      total: {
        type: DataTypes.FLOAT
      }
    },
    { timestamps: true, paranoid: true }
  );
};
