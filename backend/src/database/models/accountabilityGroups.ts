import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const accountabilityGroups = sequelize.define(
    'accountabilityGroups',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
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

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  accountabilityGroups.associate = (models) => {
    models.accountabilityGroups.belongsTo(models.category, {
      as: 'category',
      constraints: false,
    });

    models.accountabilityGroups.belongsTo(models.user, {
      as: 'leader',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.accountabilityGroups.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.accountabilityGroups.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.accountabilityGroups.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return accountabilityGroups;
}
