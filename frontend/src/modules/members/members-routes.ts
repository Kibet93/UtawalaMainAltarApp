import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const MembersListPage = () =>
  import(
    '@/modules/members/components/members-list-page.vue'
  );
const MembersFormPage = () =>
  import(
    '@/modules/members/components/members-form-page.vue'
  );
const MembersViewPage = () =>
  import(
    '@/modules/members/components/members-view-page.vue'
  );
const MembersImporterPage = () =>
  import(
    '@/modules/members/components/members-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'members',
        path: '/members',
        component: MembersListPage,
        meta: {
          auth: true,
          permission: Permissions.values.membersRead,
        },
      },
      {
        name: 'membersNew',
        path: '/members/new',
        component: MembersFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.membersCreate,
        },
      },
      {
        name: 'membersImporter',
        path: '/members/import',
        component: MembersImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.membersImport,
        },
      },
      {
        name: 'membersEdit',
        path: '/members/:id/edit',
        component: MembersFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.membersEdit,
        },
        props: true,
      },
      {
        name: 'membersView',
        path: '/members/:id',
        component: MembersViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.membersRead,
        },
        props: true,
      },
    ],
  },
];
