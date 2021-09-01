<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.announcementTargets.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.announcementTargets.list.title"
        ></app-i18n>
      </h1>

      <app-announcement-targets-list-toolbar></app-announcement-targets-list-toolbar>
      <app-announcement-targets-list-filter></app-announcement-targets-list-filter>
      <app-announcement-targets-list-table></app-announcement-targets-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import AnnouncementTargetsListFilter from '@/modules/announcement-targets/components/announcement-targets-list-filter.vue';
import AnnouncementTargetsListTable from '@/modules/announcement-targets/components/announcement-targets-list-table.vue';
import AnnouncementTargetsListToolbar from '@/modules/announcement-targets/components/announcement-targets-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-announcement-targets-list-page',

  components: {
    'app-announcement-targets-list-filter': AnnouncementTargetsListFilter,
    'app-announcement-targets-list-table': AnnouncementTargetsListTable,
    'app-announcement-targets-list-toolbar': AnnouncementTargetsListToolbar,
  },
});
</script>

<style></style>
