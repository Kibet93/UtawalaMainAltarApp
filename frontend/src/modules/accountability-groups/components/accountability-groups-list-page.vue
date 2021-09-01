<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.accountabilityGroups.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.accountabilityGroups.list.title"
        ></app-i18n>
      </h1>

      <app-accountability-groups-list-toolbar></app-accountability-groups-list-toolbar>
      <app-accountability-groups-list-filter></app-accountability-groups-list-filter>
      <app-accountability-groups-list-table></app-accountability-groups-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import AccountabilityGroupsListFilter from '@/modules/accountability-groups/components/accountability-groups-list-filter.vue';
import AccountabilityGroupsListTable from '@/modules/accountability-groups/components/accountability-groups-list-table.vue';
import AccountabilityGroupsListToolbar from '@/modules/accountability-groups/components/accountability-groups-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-accountability-groups-list-page',

  components: {
    'app-accountability-groups-list-filter': AccountabilityGroupsListFilter,
    'app-accountability-groups-list-table': AccountabilityGroupsListTable,
    'app-accountability-groups-list-toolbar': AccountabilityGroupsListToolbar,
  },
});
</script>

<style></style>
