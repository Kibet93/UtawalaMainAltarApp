import Permissions from '@/security/permissions';
import { PermissionChecker } from '@/modules/user/permission-checker';

export class AnnouncementPermissions {
  read: boolean;
  import: boolean;
  announcementAutocomplete: boolean;
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
      Permissions.values.announcementRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.announcementImport,
    );
    this.announcementAutocomplete = permissionChecker.match(
      Permissions.values.announcementAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.announcementCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.announcementEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.announcementDestroy,
    );
    this.lockedForCurrentPlan = permissionChecker.lockedForCurrentPlan(
      Permissions.values.announcementRead,
    );
  }
}
