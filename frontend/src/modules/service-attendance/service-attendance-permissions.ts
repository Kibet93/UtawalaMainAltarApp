import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class ServiceAttendancePermissions {
  read: boolean;
  import: boolean;
  serviceAttendanceAutocomplete: boolean;
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
      Permissions.values.serviceAttendanceRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.serviceAttendanceImport,
    );
    this.serviceAttendanceAutocomplete = permissionChecker.match(
      Permissions.values.serviceAttendanceAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.serviceAttendanceCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.serviceAttendanceEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.serviceAttendanceDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.serviceAttendanceRead,
    );
  }
}
