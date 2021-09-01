import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class LiveServicePermissions {
  read: boolean;
  import: boolean;
  liveServiceAutocomplete: boolean;
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
      Permissions.values.liveServiceRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.liveServiceImport,
    );
    this.liveServiceAutocomplete = permissionChecker.match(
      Permissions.values.liveServiceAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.liveServiceCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.liveServiceEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.liveServiceDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.liveServiceRead,
    );
  }
}
