<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/announcement-targets' }">
        <app-i18n code="entities.announcementTargets.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.announcementTargets.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.announcementTargets.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-announcement-targets-view-toolbar
        v-if="record"
      ></app-announcement-targets-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.name.label" :value="presenter(record, 'name')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import AnnouncementTargetsViewToolbar from '@/modules/announcement-targets/components/announcement-targets-view-toolbar.vue';
import { AnnouncementTargetsModel } from '@/modules/announcement-targets/announcement-targets-model';

const { fields } = AnnouncementTargetsModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-announcement-targets-view-page',

  props: ['id'],

  components: {
    'app-announcement-targets-view-toolbar': AnnouncementTargetsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'announcementTargets/view/record',
      loading: 'announcementTargets/view/loading',
    }),

    fields() {
      return fields;
    },
  },

  async created() {
    await this.doFind(this.id);
  },

  methods: {
    ...mapActions({
      doFind: 'announcementTargets/view/doFind',
    }),

    presenter(record, fieldName) {
      return AnnouncementTargetsModel.presenter(record, fieldName);
    },
  },
});
</script>
