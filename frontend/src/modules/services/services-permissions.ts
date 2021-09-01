import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class ServicesPermissions {
  read: boolean;
  import: boolean;
  servicesAutocomplete: boolean;
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
      Permissions.values.servicesRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.servicesImport,
    );
    this.servicesAutocomplete = permissionChecker.match(
      Permissions.values.servicesAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.servicesCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.servicesEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.servicesDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.servicesRead,
    );
  }
}
