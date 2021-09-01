import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const HomeFellowshipsListPage = () =>
  import(
    '@/modules/home-fellowships/components/home-fellowships-list-page.vue'
  );
const HomeFellowshipsFormPage = () =>
  import(
    '@/modules/home-fellowships/components/home-fellowships-form-page.vue'
  );
const HomeFellowshipsViewPage = () =>
  import(
    '@/modules/home-fellowships/components/home-fellowships-view-page.vue'
  );
const HomeFellowshipsImporterPage = () =>
  import(
    '@/modules/home-fellowships/components/home-fellowships-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'homeFellowships',
        path: '/home-fellowships',
        component: HomeFellowshipsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.homeFellowshipsRead,
        },
      },
      {
        name: 'homeFellowshipsNew',
        path: '/home-fellowships/new',
        component: HomeFellowshipsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.homeFellowshipsCreate,
        },
      },
      {
        name: 'homeFellowshipsImporter',
        path: '/home-fellowships/import',
        component: HomeFellowshipsImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.homeFellowshipsImport,
        },
      },
      {
        name: 'homeFellowshipsEdit',
        path: '/home-fellowships/:id/edit',
        component: HomeFellowshipsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.homeFellowshipsEdit,
        },
        props: true,
      },
      {
        name: 'homeFellowshipsView',
        path: '/home-fellowships/:id',
        component: HomeFellowshipsViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.homeFellowshipsRead,
        },
        props: true,
      },
    ],
  },
];
