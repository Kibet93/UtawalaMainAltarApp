<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.serviceAttendance.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.serviceAttendance.list.title"
        ></app-i18n>
      </h1>

      <app-service-attendance-list-toolbar></app-service-attendance-list-toolbar>
      <app-service-attendance-list-filter></app-service-attendance-list-filter>
      <app-service-attendance-list-table></app-service-attendance-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import ServiceAttendanceListFilter from '@/modules/service-attendance/components/service-attendance-list-filter.vue';
import ServiceAttendanceListTable from '@/modules/service-attendance/components/service-attendance-list-table.vue';
import ServiceAttendanceListToolbar from '@/modules/service-attendance/components/service-attendance-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-service-attendance-list-page',

  components: {
    'app-service-attendance-list-filter': ServiceAttendanceListFilter,
    'app-service-attendance-list-table': ServiceAttendanceListTable,
    'app-service-attendance-list-toolbar': ServiceAttendanceListToolbar,
  },
});
</script>

<style></style>
