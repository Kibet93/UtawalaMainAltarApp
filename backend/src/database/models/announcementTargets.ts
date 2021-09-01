import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const announcementTargets = sequelize.define(
    'announcementTargets',
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

  announcementTargets.associate = (models) => {



    
    models.announcementTargets.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.announcementTargets.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.announcementTargets.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return announcementTargets;
}
