<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.members.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.members.list.title"
        ></app-i18n>
      </h1>

      <app-members-list-toolbar></app-members-list-toolbar>
      <app-members-list-filter></app-members-list-filter>
      <app-members-list-table></app-members-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import MembersListFilter from '@/modules/members/components/members-list-filter.vue';
import MembersListTable from '@/modules/members/components/members-list-table.vue';
import MembersListToolbar from '@/modules/members/components/members-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-members-list-page',

  components: {
    'app-members-list-filter': MembersListFilter,
    'app-members-list-table': MembersListTable,
    'app-members-list-toolbar': MembersListToolbar,
  },
});
</script>

<style></style>
