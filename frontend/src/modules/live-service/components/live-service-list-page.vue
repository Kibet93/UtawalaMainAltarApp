<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.liveService.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.liveService.list.title"
        ></app-i18n>
      </h1>

      <app-live-service-list-toolbar></app-live-service-list-toolbar>
      <app-live-service-list-filter></app-live-service-list-filter>
      <app-live-service-list-table></app-live-service-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import LiveServiceListFilter from '@/modules/live-service/components/live-service-list-filter.vue';
import LiveServiceListTable from '@/modules/live-service/components/live-service-list-table.vue';
import LiveServiceListToolbar from '@/modules/live-service/components/live-service-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-live-service-list-page',

  components: {
    'app-live-service-list-filter': LiveServiceListFilter,
    'app-live-service-list-table': LiveServiceListTable,
    'app-live-service-list-toolbar': LiveServiceListToolbar,
  },
});
</script>

<style></style>
