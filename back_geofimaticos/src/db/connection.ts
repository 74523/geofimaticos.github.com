import { Sequelize } from "sequelize";


const sequelize = new Sequelize('geofimaticos', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',   
});

// const sequelize = new Sequelize('prueba1', 'Administrador', 'Gesner12345', {
//     host: 'database-prueba.mysql.database.azure.com',
//     dialect: 'mysql',
// });

export default sequelize;