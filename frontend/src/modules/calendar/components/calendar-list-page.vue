<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.calendar.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.calendar.list.title"
        ></app-i18n>
      </h1>

      <app-calendar-list-toolbar></app-calendar-list-toolbar>
      <app-calendar-list-filter></app-calendar-list-filter>
      <app-calendar-list-table></app-calendar-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import CalendarListFilter from '@/modules/calendar/components/calendar-list-filter.vue';
import CalendarListTable from '@/modules/calendar/components/calendar-list-table.vue';
import CalendarListToolbar from '@/modules/calendar/components/calendar-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-calendar-list-page',

  components: {
    'app-calendar-list-filter': CalendarListFilter,
    'app-calendar-list-table': CalendarListTable,
    'app-calendar-list-toolbar': CalendarListToolbar,
  },
});
</script>

<style></style>
