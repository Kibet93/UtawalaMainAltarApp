import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class ReservedSeatsPermissions {
  read: boolean;
  import: boolean;
  reservedSeatsAutocomplete: boolean;
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
      Permissions.values.reservedSeatsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.reservedSeatsImport,
    );
    this.reservedSeatsAutocomplete = permissionChecker.match(
      Permissions.values.reservedSeatsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.reservedSeatsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.reservedSeatsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.reservedSeatsDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.reservedSeatsRead,
    );
  }
}
