import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const CategoryListPage = () =>
  import(
    '@/modules/category/components/category-list-page.vue'
  );
const CategoryFormPage = () =>
  import(
    '@/modules/category/components/category-form-page.vue'
  );
const CategoryViewPage = () =>
  import(
    '@/modules/category/components/category-view-page.vue'
  );
const CategoryImporterPage = () =>
  import(
    '@/modules/category/components/category-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'category',
        path: '/category',
        component: CategoryListPage,
        meta: {
          auth: true,
          permission: Permissions.values.categoryRead,
        },
      },
      {
        name: 'categoryNew',
        path: '/category/new',
        component: CategoryFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.categoryCreate,
        },
      },
      {
        name: 'categoryImporter',
        path: '/category/import',
        component: CategoryImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.categoryImport,
        },
      },
      {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.categoryEdit,
        },
        props: true,
      },
      {
        name: 'categoryView',
        path: '/category/:id',
        component: CategoryViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.categoryRead,
        },
        props: true,
      },
    ],
  },
];
