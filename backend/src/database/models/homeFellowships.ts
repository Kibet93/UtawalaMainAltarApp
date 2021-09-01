import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const homeFellowships = sequelize.define(
    'homeFellowships',
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

  homeFellowships.associate = (models) => {
    models.homeFellowships.belongsToMany(models.user, {
      as: 'fellowshipPastor',
      constraints: false,
      through: 'homeFellowshipsFellowshipPastorUser',
    });


    
    models.homeFellowships.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.homeFellowships.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.homeFellowships.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return homeFellowships;
}
