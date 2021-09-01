import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class CalendarPermissions {
  read: boolean;
  import: boolean;
  calendarAutocomplete: boolean;
  create: boolean;
  edit: boolean;
  destroy: boolean;
  lockedForCurrentPlan: boolean;

  constructor(currentTenant, currentUser) {
    const permissionChecker = new PermissionChecker(
      currentTenant,
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.calendarRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.calendarImport,
    );
    this.calendarAutocomplete = permissionChecker.match(
      Permissions.values.calendarAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.calendarCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.calendarEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.calendarDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.calendarRead,
    );
  }
}
