import sequelize from "../Instances/mysql";
import { Model, DataTypes } from "sequelize";
import { Wallet } from "./Wallet";

interface UserAttributes extends Model{
  id: number;
  cpf: string;
  email: string;
  uuid: string;
  password: string;
}



export const User = sequelize.define<UserAttributes>("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cpf: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
  uuid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  tableName: "User",
  timestamps: false
});

User.hasOne(Wallet);
Wallet.belongsTo(User);

User.sync()
