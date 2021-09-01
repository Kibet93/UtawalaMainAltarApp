import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class AccountabilityGroupsPermissions {
  read: boolean;
  import: boolean;
  accountabilityGroupsAutocomplete: boolean;
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
      Permissions.values.accountabilityGroupsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.accountabilityGroupsImport,
    );
    this.accountabilityGroupsAutocomplete = permissionChecker.match(
      Permissions.values.accountabilityGroupsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.accountabilityGroupsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.accountabilityGroupsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.accountabilityGroupsDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.accountabilityGroupsRead,
    );
  }
}
