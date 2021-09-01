<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.services.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.services.list.title"
        ></app-i18n>
      </h1>

      <app-services-list-toolbar></app-services-list-toolbar>
      <app-services-list-filter></app-services-list-filter>
      <app-services-list-table></app-services-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import ServicesListFilter from '@/modules/services/components/services-list-filter.vue';
import ServicesListTable from '@/modules/services/components/services-list-table.vue';
import ServicesListToolbar from '@/modules/services/components/services-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-services-list-page',

  components: {
    'app-services-list-filter': ServicesListFilter,
    'app-services-list-table': ServicesListTable,
    'app-services-list-toolbar': ServicesListToolbar,
  },
});
</script>

<style></style>
