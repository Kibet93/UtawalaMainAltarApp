import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const reservedSeats = sequelize.define(
    'reservedSeats',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      seatNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      reservedFor: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,    
        validate: {
          len: [0, 255],
        },    
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  reservedSeats.associate = (models) => {
    models.reservedSeats.belongsTo(models.services, {
      as: 'serviceBooked',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.reservedSeats.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.reservedSeats.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.reservedSeats.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return reservedSeats;
}
