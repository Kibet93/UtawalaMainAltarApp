import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const AnnouncementTargetsListPage = () =>
  import(
    '@/modules/announcement-targets/components/announcement-targets-list-page.vue'
  );
const AnnouncementTargetsFormPage = () =>
  import(
    '@/modules/announcement-targets/components/announcement-targets-form-page.vue'
  );
const AnnouncementTargetsViewPage = () =>
  import(
    '@/modules/announcement-targets/components/announcement-targets-view-page.vue'
  );
const AnnouncementTargetsImporterPage = () =>
  import(
    '@/modules/announcement-targets/components/announcement-targets-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'announcementTargets',
        path: '/announcement-targets',
        component: AnnouncementTargetsListPage,
        meta: {
          auth: true,
          permission: Permissions.values.announcementTargetsRead,
        },
      },
      {
        name: 'announcementTargetsNew',
        path: '/announcement-targets/new',
        component: AnnouncementTargetsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.announcementTargetsCreate,
        },
      },
      {
        name: 'announcementTargetsImporter',
        path: '/announcement-targets/import',
        component: AnnouncementTargetsImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.announcementTargetsImport,
        },
      },
      {
        name: 'announcementTargetsEdit',
        path: '/announcement-targets/:id/edit',
        component: AnnouncementTargetsFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.announcementTargetsEdit,
        },
        props: true,
      },
      {
        name: 'announcementTargetsView',
        path: '/announcement-targets/:id',
        component: AnnouncementTargetsViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.announcementTargetsRead,
        },
        props: true,
      },
    ],
  },
];
