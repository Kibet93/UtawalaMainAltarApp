<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.category.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.category.list.title"
        ></app-i18n>
      </h1>

      <app-category-list-toolbar></app-category-list-toolbar>
      <app-category-list-filter></app-category-list-filter>
      <app-category-list-table></app-category-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import CategoryListFilter from '@/modules/category/components/category-list-filter.vue';
import CategoryListTable from '@/modules/category/components/category-list-table.vue';
import CategoryListToolbar from '@/modules/category/components/category-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-category-list-page',

  components: {
    'app-category-list-filter': CategoryListFilter,
    'app-category-list-table': CategoryListTable,
    'app-category-list-toolbar': CategoryListToolbar,
  },
});
</script>

<style></style>
