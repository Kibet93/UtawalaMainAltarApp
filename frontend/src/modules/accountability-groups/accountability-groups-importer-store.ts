import importerStore from '@/shared/importer/importer-store';
import { AccountabilityGroupsService } from '@/modules/accountability-groups/accountability-groups-service';
import accountabilityGroupsImporterFields from '@/modules/accountability-groups/accountability-groups-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  AccountabilityGroupsService.import,
  accountabilityGroupsImporterFields,
  i18n('entities.accountabilityGroups.importer.fileName'),
  i18n('entities.accountabilityGroups.importer.hint'),
);
