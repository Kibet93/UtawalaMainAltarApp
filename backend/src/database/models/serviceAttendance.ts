import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const serviceAttendance = sequelize.define(
    'serviceAttendance',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      temperatureReading: {
        type: DataTypes.DECIMAL,
        validate: {

        }
      },
      saetNumber: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
        }
      },
      comment: {
        type: DataTypes.TEXT,
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
        {
          unique: true,
          fields: ['memberId', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  serviceAttendance.associate = (models) => {
    models.serviceAttendance.belongsTo(models.services, {
      as: 'service',
      constraints: false,
    });

    models.serviceAttendance.belongsTo(models.user, {
      as: 'member',
      constraints: false,
    });


    
    models.serviceAttendance.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.serviceAttendance.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.serviceAttendance.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return serviceAttendance;
}
