const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const sequelize = require('./database/database');
const { PIZZA } = require('./models/models');

async function connectDatabase() {
    try {
        // await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        const pizza = await PIZZA.findAll();
        console.log('pizza', pizza);
        return pizza;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw new Error(error);
    }
}

exports.pizza_restaurant = async (event) => {
    try {
        const data = await connectDatabase();
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: data
            }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error,
            })
        };
    }
}