import { Model, DataTypes, Sequelize, Optional } from "sequelize";
import { Rating } from "./Rating";

interface MovieAttributes {
    id: number;
    name: string;
    rating: Rating;
}

interface MovieCreationAttributes extends Optional<MovieAttributes, "id"> {}

export class Movie extends Model<MovieAttributes, MovieCreationAttributes> implements MovieAttributes {
    id!:number;
    name!: string;
    rating!: Rating;
}