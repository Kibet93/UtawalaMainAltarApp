import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const services = sequelize.define(
    'services',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      date: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('date')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('date'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Active",
            "Live Now",
            "Ended"
          ]],
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

  services.associate = (models) => {



    
    models.services.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.services.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.services.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return services;
}
