const { Sequelize } = require('sequelize');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const certificate = path.resolve(__dirname, '../certificate/us-east-1-bundle.pem');

const sequelize = new Sequelize(
    process.env.DATABASE_POSTGRES_NAME,
    process.env.DATABASE_POSTGRES_USER, 
    process.env.DATABASE_POSTGRES_PASS,
    {
        host: process.env.DATABASE_POSTGRES_HOST,
        port: 5432,
        dialect: 'postgres',
        define: {
            freezeTableName: true,
            timestamps: false,
        },
        dialectOptions: {
            ssl: {
              ca: fs.readFileSync(certificate).toString()
            }
        }
    }
);

module.exports = sequelize;