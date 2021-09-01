import importerStore from '@/shared/importer/importer-store';
import { MembersService } from '@/modules/members/members-service';
import membersImporterFields from '@/modules/members/members-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  MembersService.import,
  membersImporterFields,
  i18n('entities.members.importer.fileName'),
  i18n('entities.members.importer.hint'),
);
