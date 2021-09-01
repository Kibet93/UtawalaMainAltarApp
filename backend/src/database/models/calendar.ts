import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const calendar = sequelize.define(
    'calendar',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      event: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      startDateOfActivity: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('startDateOfActivity')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('startDateOfActivity'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('endDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('endDate'))
                .format('YYYY-MM-DD')
            : null;
        },
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

  calendar.associate = (models) => {
    models.calendar.belongsToMany(models.user, {
      as: 'personInCharge',
      constraints: false,
      through: 'calendarPersonInChargeUser',
    });

    models.calendar.belongsToMany(models.category, {
      as: 'participants',
      constraints: false,
      through: 'calendarParticipantsCategory',
    });


    
    models.calendar.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.calendar.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.calendar.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return calendar;
}
