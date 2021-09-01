<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.announcement.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.announcement.list.title"
        ></app-i18n>
      </h1>

      <app-announcement-list-toolbar></app-announcement-list-toolbar>
      <app-announcement-list-filter></app-announcement-list-filter>
      <app-announcement-list-table></app-announcement-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import AnnouncementListFilter from '@/modules/announcement/components/announcement-list-filter.vue';
import AnnouncementListTable from '@/modules/announcement/components/announcement-list-table.vue';
import AnnouncementListToolbar from '@/modules/announcement/components/announcement-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-announcement-list-page',

  components: {
    'app-announcement-list-filter': AnnouncementListFilter,
    'app-announcement-list-table': AnnouncementListTable,
    'app-announcement-list-toolbar': AnnouncementListToolbar,
  },
});
</script>

<style></style>
