import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const members = sequelize.define(
    'members',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      membershipStatus: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Visitor",
            "Member",
            "Away",
            "Suspended"
          ]],
        }
      },
      age: {
        type: DataTypes.INTEGER,
      },
      nationalID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      phoneNumber: {
        type: DataTypes.STRING(13),
        validate: {
          len: [10, 13],
        }
      },
      occupation: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      residence: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      fullName: {
        type: DataTypes.STRING(70),
        allowNull: false,
        validate: {
          len: [0, 70],
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

  members.associate = (models) => {
    models.members.belongsTo(models.category, {
      as: 'category',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.members.belongsTo(models.accountabilityGroups, {
      as: 'accountabilityGroup',
      constraints: false,
    });

    models.members.belongsTo(models.homeFellowships, {
      as: 'homeFellowship',
      constraints: false,
    });

    models.members.belongsTo(models.user, {
      as: 'email',
      constraints: false,
    });


    
    models.members.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.members.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.members.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return members;
}
