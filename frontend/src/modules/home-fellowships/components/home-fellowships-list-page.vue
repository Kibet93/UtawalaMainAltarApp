<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.homeFellowships.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.homeFellowships.list.title"
        ></app-i18n>
      </h1>

      <app-home-fellowships-list-toolbar></app-home-fellowships-list-toolbar>
      <app-home-fellowships-list-filter></app-home-fellowships-list-filter>
      <app-home-fellowships-list-table></app-home-fellowships-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import HomeFellowshipsListFilter from '@/modules/home-fellowships/components/home-fellowships-list-filter.vue';
import HomeFellowshipsListTable from '@/modules/home-fellowships/components/home-fellowships-list-table.vue';
import HomeFellowshipsListToolbar from '@/modules/home-fellowships/components/home-fellowships-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-home-fellowships-list-page',

  components: {
    'app-home-fellowships-list-filter': HomeFellowshipsListFilter,
    'app-home-fellowships-list-table': HomeFellowshipsListTable,
    'app-home-fellowships-list-toolbar': HomeFellowshipsListToolbar,
  },
});
</script>

<style></style>
