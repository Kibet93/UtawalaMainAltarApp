import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const CalendarListPage = () =>
  import(
    '@/modules/calendar/components/calendar-list-page.vue'
  );
const CalendarFormPage = () =>
  import(
    '@/modules/calendar/components/calendar-form-page.vue'
  );
const CalendarViewPage = () =>
  import(
    '@/modules/calendar/components/calendar-view-page.vue'
  );
const CalendarImporterPage = () =>
  import(
    '@/modules/calendar/components/calendar-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'calendar',
        path: '/calendar',
        component: CalendarListPage,
        meta: {
          auth: true,
          permission: Permissions.values.calendarRead,
        },
      },
      {
        name: 'calendarNew',
        path: '/calendar/new',
        component: CalendarFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.calendarCreate,
        },
      },
      {
        name: 'calendarImporter',
        path: '/calendar/import',
        component: CalendarImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.calendarImport,
        },
      },
      {
        name: 'calendarEdit',
        path: '/calendar/:id/edit',
        component: CalendarFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.calendarEdit,
        },
        props: true,
      },
      {
        name: 'calendarView',
        path: '/calendar/:id',
        component: CalendarViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.calendarRead,
        },
        props: true,
      },
    ],
  },
];
