import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const ServiceAttendanceListPage = () =>
  import(
    '@/modules/service-attendance/components/service-attendance-list-page.vue'
  );
const ServiceAttendanceFormPage = () =>
  import(
    '@/modules/service-attendance/components/service-attendance-form-page.vue'
  );
const ServiceAttendanceViewPage = () =>
  import(
    '@/modules/service-attendance/components/service-attendance-view-page.vue'
  );
const ServiceAttendanceImporterPage = () =>
  import(
    '@/modules/service-attendance/components/service-attendance-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'serviceAttendance',
        path: '/service-attendance',
        component: ServiceAttendanceListPage,
        meta: {
          auth: true,
          permission: Permissions.values.serviceAttendanceRead,
        },
      },
      {
        name: 'serviceAttendanceNew',
        path: '/service-attendance/new',
        component: ServiceAttendanceFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.serviceAttendanceCreate,
        },
      },
      {
        name: 'serviceAttendanceImporter',
        path: '/service-attendance/import',
        component: ServiceAttendanceImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.serviceAttendanceImport,
        },
      },
      {
        name: 'serviceAttendanceEdit',
        path: '/service-attendance/:id/edit',
        component: ServiceAttendanceFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.serviceAttendanceEdit,
        },
        props: true,
      },
      {
        name: 'serviceAttendanceView',
        path: '/service-attendance/:id',
        component: ServiceAttendanceViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.serviceAttendanceRead,
        },
        props: true,
      },
    ],
  },
];
