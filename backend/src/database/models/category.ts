import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const category = sequelize.define(
    'category',
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

  category.associate = (models) => {
    models.category.belongsTo(models.user, {
      as: 'leader',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.category.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.category.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.category.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return category;
}
