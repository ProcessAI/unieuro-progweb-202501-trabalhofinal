import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../../database'; // Adjust the path as necessary

class Laudo extends Model {
  public id!: number;
  public descricao!: string;
  public tipoEquipamentoId!: number; // Foreign key to tipoeq
}

Laudo.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoEquipamentoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'laudos',
});

export default Laudo;