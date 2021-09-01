import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const ReservedSeatsListPage = () =>
  import(
    '@/modules/reserved-seats/components/reserved-seats-list-page.vue'
  );
const ReservedSeatsFormPage = () =>
  import(
    '@/modules/reserved-seats/components/reserved-seats-form-page.vue'
  );
const ReservedSeatsViewPage = () =>
  import(
    '@/modules/reserved-seats/components/reserved-seats-view-page.vue'
  );
const ReservedSeatsImporterPage = () =>
  import(
    '@/modules/reserved-seats/components/reserved-seats-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'reservedSeats',
        path: '/reserved-seats',
        component: ReservedSeatsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.reservedSeatsRead,
        },
      },
      {
        name: 'reservedSeatsNew',
        path: '/reserved-seats/new',
        component: ReservedSeatsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.reservedSeatsCreate,
        },
      },
      {
        name: 'reservedSeatsImporter',
        path: '/reserved-seats/import',
        component: ReservedSeatsImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.reservedSeatsImport,
        },
      },
      {
        name: 'reservedSeatsEdit',
        path: '/reserved-seats/:id/edit',
        component: ReservedSeatsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.reservedSeatsEdit,
        },
        props: true,
      },
      {
        name: 'reservedSeatsView',
        path: '/reserved-seats/:id',
        component: ReservedSeatsViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.reservedSeatsRead,
        },
        props: true,
      },
    ],
  },
];
