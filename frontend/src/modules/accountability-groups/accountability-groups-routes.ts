import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const AccountabilityGroupsListPage = () =>
  import(
    '@/modules/accountability-groups/components/accountability-groups-list-page.vue'
  );
const AccountabilityGroupsFormPage = () =>
  import(
    '@/modules/accountability-groups/components/accountability-groups-form-page.vue'
  );
const AccountabilityGroupsViewPage = () =>
  import(
    '@/modules/accountability-groups/components/accountability-groups-view-page.vue'
  );
const AccountabilityGroupsImporterPage = () =>
  import(
    '@/modules/accountability-groups/components/accountability-groups-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'accountabilityGroups',
        path: '/accountability-groups',
        component: AccountabilityGroupsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.accountabilityGroupsRead,
        },
      },
      {
        name: 'accountabilityGroupsNew',
        path: '/accountability-groups/new',
        component: AccountabilityGroupsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.accountabilityGroupsCreate,
        },
      },
      {
        name: 'accountabilityGroupsImporter',
        path: '/accountability-groups/import',
        component: AccountabilityGroupsImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.accountabilityGroupsImport,
        },
      },
      {
        name: 'accountabilityGroupsEdit',
        path: '/accountability-groups/:id/edit',
        component: AccountabilityGroupsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.accountabilityGroupsEdit,
        },
        props: true,
      },
      {
        name: 'accountabilityGroupsView',
        path: '/accountability-groups/:id',
        component: AccountabilityGroupsViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.accountabilityGroupsRead,
        },
        props: true,
      },
    ],
  },
];
