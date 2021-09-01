<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/live-service' }">
        <app-i18n code="entities.liveService.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.liveService.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.liveService.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-live-service-view-toolbar
        v-if="record"
      ></app-live-service-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.name.label" :value="presenter(record, 'name')"></app-view-item-text>

        <app-view-item-text :label="fields.status.label" :value="presenter(record, 'status')"></app-view-item-text>

        <app-view-item-text :label="fields.url.label" :value="presenter(record, 'url')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import LiveServiceViewToolbar from '@/modules/live-service/components/live-service-view-toolbar.vue';
import { LiveServiceModel } from '@/modules/live-service/live-service-model';

const { fields } = LiveServiceModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-live-service-view-page',

  props: ['id'],

  components: {
    'app-live-service-view-toolbar': LiveServiceViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'liveService/view/record',
      loading: 'liveService/view/loading',
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
      doFind: 'liveService/view/doFind',
    }),

    presenter(record, fieldName) {
      return LiveServiceModel.presenter(record, fieldName);
    },
  },
});
</script>
