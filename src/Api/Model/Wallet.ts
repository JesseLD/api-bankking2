import sequelize from "../Instances/mysql";

import { Model, DataTypes } from "sequelize";
import { User } from "./User";

interface WalletAttributes extends Model {
  id: number;
  balance: number;
  user_id: number;
}

export const Wallet = sequelize.define<WalletAttributes>(
  "Wallet",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "Wallet",
    timestamps: false,
  }
);

Wallet.sync();
