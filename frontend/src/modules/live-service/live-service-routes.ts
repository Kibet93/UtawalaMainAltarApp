import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const LiveServiceListPage = () =>
  import(
    '@/modules/live-service/components/live-service-list-page.vue'
  );
const LiveServiceFormPage = () =>
  import(
    '@/modules/live-service/components/live-service-form-page.vue'
  );
const LiveServiceViewPage = () =>
  import(
    '@/modules/live-service/components/live-service-view-page.vue'
  );
const LiveServiceImporterPage = () =>
  import(
    '@/modules/live-service/components/live-service-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'liveService',
        path: '/live-service',
        component: LiveServiceListPage,
        meta: {
          auth: true,
          permission: Permissions.values.liveServiceRead,
        },
      },
      {
        name: 'liveServiceNew',
        path: '/live-service/new',
        component: LiveServiceFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.liveServiceCreate,
        },
      },
      {
        name: 'liveServiceImporter',
        path: '/live-service/import',
        component: LiveServiceImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.liveServiceImport,
        },
      },
      {
        name: 'liveServiceEdit',
        path: '/live-service/:id/edit',
        component: LiveServiceFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.liveServiceEdit,
        },
        props: true,
      },
      {
        name: 'liveServiceView',
        path: '/live-service/:id',
        component: LiveServiceViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.liveServiceRead,
        },
        props: true,
      },
    ],
  },
];
