import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class CategoryPermissions {
  read: boolean;
  import: boolean;
  categoryAutocomplete: boolean;
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
      Permissions.values.categoryRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.categoryImport,
    );
    this.categoryAutocomplete = permissionChecker.match(
      Permissions.values.categoryAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.categoryCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.categoryEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.categoryDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.categoryRead,
    );
  }
}
