import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const AnnouncementListPage = () =>
  import(
    '@/modules/announcement/components/announcement-list-page.vue'
  );
const AnnouncementFormPage = () =>
  import(
    '@/modules/announcement/components/announcement-form-page.vue'
  );
const AnnouncementViewPage = () =>
  import(
    '@/modules/announcement/components/announcement-view-page.vue'
  );
const AnnouncementImporterPage = () =>
  import(
    '@/modules/announcement/components/announcement-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'announcement',
        path: '/announcement',
        component: AnnouncementListPage,
        meta: {
          auth: true,
          permission: Permissions.values.announcementRead,
        },
      },
      {
        name: 'announcementNew',
        path: '/announcement/new',
        component: AnnouncementFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.announcementCreate,
        },
      },
      {
        name: 'announcementImporter',
        path: '/announcement/import',
        component: AnnouncementImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.announcementImport,
        },
      },
      {
        name: 'announcementEdit',
        path: '/announcement/:id/edit',
        component: AnnouncementFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.announcementEdit,
        },
        props: true,
      },
      {
        name: 'announcementView',
        path: '/announcement/:id',
        component: AnnouncementViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.announcementRead,
        },
        props: true,
      },
    ],
  },
];
