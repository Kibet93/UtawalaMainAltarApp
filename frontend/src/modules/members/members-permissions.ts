import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class MembersPermissions {
  read: boolean;
  import: boolean;
  membersAutocomplete: boolean;
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
      Permissions.values.membersRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.membersImport,
    );
    this.membersAutocomplete = permissionChecker.match(
      Permissions.values.membersAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.membersCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.membersEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.membersDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.membersRead,
    );
  }
}
