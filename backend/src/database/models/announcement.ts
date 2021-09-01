import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const announcement = sequelize.define(
    'announcement',
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
      dueDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('dueDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('dueDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      announcedBy: {
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

  announcement.associate = (models) => {
    models.announcement.belongsTo(models.announcementTargets, {
      as: 'target',
      constraints: false,
    });


    
    models.announcement.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.announcement.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.announcement.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return announcement;
}
