import { Sequelize, Options, DataTypes } from 'sequelize';
import { Movie } from '../models/Movie';
const environment = require('../environment');

const sequelize = new Sequelize(environment.dbConfig as Options);

Movie.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
    name: DataTypes.STRING,
    rating: DataTypes.STRING
}, {
    sequelize
})

export default sequelize;