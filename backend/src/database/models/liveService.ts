import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const liveService = sequelize.define(
    'liveService',
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
      status: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Live Now",
            "Ended"
          ]],
        }
      },
      url: {
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

  liveService.associate = (models) => {



    
    models.liveService.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.liveService.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.liveService.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return liveService;
}
