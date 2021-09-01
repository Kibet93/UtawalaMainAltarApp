import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class AnnouncementTargetsPermissions {
  read: boolean;
  import: boolean;
  announcementTargetsAutocomplete: boolean;
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
      Permissions.values.announcementTargetsRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.announcementTargetsImport,
    );
    this.announcementTargetsAutocomplete = permissionChecker.match(
      Permissions.values.announcementTargetsAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.announcementTargetsCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.announcementTargetsEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.announcementTargetsDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.announcementTargetsRead,
    );
  }
}
