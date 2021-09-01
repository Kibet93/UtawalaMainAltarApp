import Roles from '@/security/roles';
import Plans from '@/security/plans';
import Storage from '@/security/storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin, roles.protocol, roles.category],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin, roles.protocol, roles.usher, roles.accountability],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      categoryImport: {
        id: 'categoryImport',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoryCreate: {
        id: 'categoryCreate',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      categoryEdit: {
        id: 'categoryEdit',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      categoryDestroy: {
        id: 'categoryDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      categoryRead: {
        id: 'categoryRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoryAutocomplete: {
        id: 'categoryAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      accountabilityGroupsImport: {
        id: 'accountabilityGroupsImport',
        allowedRoles: [roles.admin, roles.category],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      accountabilityGroupsCreate: {
        id: 'accountabilityGroupsCreate',
        allowedRoles: [roles.admin, roles.category],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      accountabilityGroupsEdit: {
        id: 'accountabilityGroupsEdit',
        allowedRoles: [roles.admin, roles.category],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      accountabilityGroupsDestroy: {
        id: 'accountabilityGroupsDestroy',
        allowedRoles: [roles.admin, roles.category],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      accountabilityGroupsRead: {
        id: 'accountabilityGroupsRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      accountabilityGroupsAutocomplete: {
        id: 'accountabilityGroupsAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      servicesImport: {
        id: 'servicesImport',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      servicesCreate: {
        id: 'servicesCreate',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      servicesEdit: {
        id: 'servicesEdit',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      servicesDestroy: {
        id: 'servicesDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      servicesRead: {
        id: 'servicesRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      servicesAutocomplete: {
        id: 'servicesAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      announcementTargetsImport: {
        id: 'announcementTargetsImport',
        allowedRoles: [roles.admin, roles.category, roles.protocol, roles.accountability],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      announcementTargetsCreate: {
        id: 'announcementTargetsCreate',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      announcementTargetsEdit: {
        id: 'announcementTargetsEdit',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      announcementTargetsDestroy: {
        id: 'announcementTargetsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      announcementTargetsRead: {
        id: 'announcementTargetsRead',
        allowedRoles: [roles.admin, roles.category, roles.protocol, roles.accountability, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      announcementTargetsAutocomplete: {
        id: 'announcementTargetsAutocomplete',
        allowedRoles: [roles.admin, roles.category, roles.protocol, roles.accountability, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      announcementImport: {
        id: 'announcementImport',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      announcementCreate: {
        id: 'announcementCreate',
        allowedRoles: [roles.admin, roles.protocol, roles.category],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      announcementEdit: {
        id: 'announcementEdit',
        allowedRoles: [roles.admin, roles.category, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      announcementDestroy: {
        id: 'announcementDestroy',
        allowedRoles: [roles.admin, roles.protocol, roles.category],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      announcementRead: {
        id: 'announcementRead',
        allowedRoles: [roles.admin, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      announcementAutocomplete: {
        id: 'announcementAutocomplete',
        allowedRoles: [roles.admin, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      serviceAttendanceImport: {
        id: 'serviceAttendanceImport',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      serviceAttendanceCreate: {
        id: 'serviceAttendanceCreate',
        allowedRoles: [roles.admin, roles.protocol, roles.accountability, roles.usher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      serviceAttendanceEdit: {
        id: 'serviceAttendanceEdit',
        allowedRoles: [roles.admin, roles.accountability,roles.usher, roles.category, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      serviceAttendanceDestroy: {
        id: 'serviceAttendanceDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      serviceAttendanceRead: {
        id: 'serviceAttendanceRead',
        allowedRoles: [roles.admin, roles.accountability, roles.protocol, roles.category],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      serviceAttendanceAutocomplete: {
        id: 'serviceAttendanceAutocomplete',
        allowedRoles: [roles.admin, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      membersImport: {
        id: 'membersImport',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      membersCreate: {
        id: 'membersCreate',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      membersEdit: {
        id: 'membersEdit',
        allowedRoles: [roles.admin, roles.protocol, roles.category],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      membersDestroy: {
        id: 'membersDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      membersRead: {
        id: 'membersRead',
        allowedRoles: [roles.admin, roles.accountability, roles.category, roles.usher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      membersAutocomplete: {
        id: 'membersAutocomplete',
        allowedRoles: [roles.admin, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      homeFellowshipsImport: {
        id: 'homeFellowshipsImport',
        allowedRoles: [roles.admin, roles.category],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      homeFellowshipsCreate: {
        id: 'homeFellowshipsCreate',
        allowedRoles: [roles.admin, roles.category],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      homeFellowshipsEdit: {
        id: 'homeFellowshipsEdit',
        allowedRoles: [roles.admin, roles.category],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      homeFellowshipsDestroy: {
        id: 'homeFellowshipsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      homeFellowshipsRead: {
        id: 'homeFellowshipsRead',
        allowedRoles: [roles.admin, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      homeFellowshipsAutocomplete: {
        id: 'homeFellowshipsAutocomplete',
        allowedRoles: [roles.admin, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      reservedSeatsImport: {
        id: 'reservedSeatsImport',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      reservedSeatsCreate: {
        id: 'reservedSeatsCreate',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      reservedSeatsEdit: {
        id: 'reservedSeatsEdit',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      reservedSeatsDestroy: {
        id: 'reservedSeatsDestroy',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      reservedSeatsRead: {
        id: 'reservedSeatsRead',
        allowedRoles: [roles.admin, roles.protocol, roles.usher],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      reservedSeatsAutocomplete: {
        id: 'reservedSeatsAutocomplete',
        allowedRoles: [roles.admin, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      calendarImport: {
        id: 'calendarImport',
        allowedRoles: [roles.admin, roles.category, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      calendarCreate: {
        id: 'calendarCreate',
        allowedRoles: [roles.admin, roles.category],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      calendarEdit: {
        id: 'calendarEdit',
        allowedRoles: [roles.admin, roles.category],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      calendarDestroy: {
        id: 'calendarDestroy',
        allowedRoles: [roles.admin, roles.category],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      calendarRead: {
        id: 'calendarRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      calendarAutocomplete: {
        id: 'calendarAutocomplete',
        allowedRoles: [roles.admin, roles.member],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      liveServiceImport: {
        id: 'liveServiceImport',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      liveServiceCreate: {
        id: 'liveServiceCreate',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      liveServiceEdit: {
        id: 'liveServiceEdit',
        allowedRoles: [roles.admin, roles.protocol],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      liveServiceDestroy: {
        id: 'liveServiceDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      liveServiceRead: {
        id: 'liveServiceRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      liveServiceAutocomplete: {
        id: 'liveServiceAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },      
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
