import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const ServicesListPage = () =>
  import(
    '@/modules/services/components/services-list-page.vue'
  );
const ServicesFormPage = () =>
  import(
    '@/modules/services/components/services-form-page.vue'
  );
const ServicesViewPage = () =>
  import(
    '@/modules/services/components/services-view-page.vue'
  );
const ServicesImporterPage = () =>
  import(
    '@/modules/services/components/services-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'services',
        path: '/services',
        component: ServicesListPage,
        meta: {
          auth: true,
          permission: Permissions.values.servicesRead,
        },
      },
      {
        name: 'servicesNew',
        path: '/services/new',
        component: ServicesFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.servicesCreate,
        },
      },
      {
        name: 'servicesImporter',
        path: '/services/import',
        component: ServicesImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.servicesImport,
        },
      },
      {
        name: 'servicesEdit',
        path: '/services/:id/edit',
        component: ServicesFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.servicesEdit,
        },
        props: true,
      },
      {
        name: 'servicesView',
        path: '/services/:id',
        component: ServicesViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.servicesRead,
        },
        props: true,
      },
    ],
  },
];
