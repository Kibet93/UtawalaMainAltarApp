<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.reservedSeats.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.reservedSeats.list.title"
        ></app-i18n>
      </h1>

      <app-reserved-seats-list-toolbar></app-reserved-seats-list-toolbar>
      <app-reserved-seats-list-filter></app-reserved-seats-list-filter>
      <app-reserved-seats-list-table></app-reserved-seats-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import ReservedSeatsListFilter from '@/modules/reserved-seats/components/reserved-seats-list-filter.vue';
import ReservedSeatsListTable from '@/modules/reserved-seats/components/reserved-seats-list-table.vue';
import ReservedSeatsListToolbar from '@/modules/reserved-seats/components/reserved-seats-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-reserved-seats-list-page',

  components: {
    'app-reserved-seats-list-filter': ReservedSeatsListFilter,
    'app-reserved-seats-list-table': ReservedSeatsListTable,
    'app-reserved-seats-list-toolbar': ReservedSeatsListToolbar,
  },
});
</script>

<style></style>
