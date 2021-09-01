import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class HomeFellowshipsPermissions {
  read: boolean;
  import: boolean;
  homeFellowshipsAutocomplete: boolean;
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
      Permissions.values.homeFellowshipsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.homeFellowshipsImport,
    );
    this.homeFellowshipsAutocomplete = permissionChecker.match(
      Permissions.values.homeFellowshipsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.homeFellowshipsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.homeFellowshipsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.homeFellowshipsDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.homeFellowshipsRead,
    );
  }
}
