const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "product",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },

            brand: {
                type: DataTypes.STRING,
            },
            
            stock: {
                type: DataTypes.INTEGER,
            },
            
            name: {
                type: DataTypes.STRING,
            },

            description: {
                type: DataTypes.TEXT,
            },    

            price: {
                type: DataTypes.FLOAT,
            },    

            image: {
                type: DataTypes.STRING,
            },

            categories: {
                type: DataTypes.STRING,
            },

            subcategories: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            },

            owner: {
                type: DataTypes.STRING,
            },

            status: {
                type: DataTypes.ENUM('new', 'nuevo', 'usado', 'used')
            },

            approved: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },

        },
        { timestamps: false, paranoid: true }
    );
};
