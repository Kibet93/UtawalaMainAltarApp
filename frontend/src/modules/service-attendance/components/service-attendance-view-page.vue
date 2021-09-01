<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/service-attendance' }">
        <app-i18n code="entities.serviceAttendance.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.serviceAttendance.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.serviceAttendance.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-service-attendance-view-toolbar
        v-if="record"
      ></app-service-attendance-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.name.label" :value="presenter(record, 'name')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.service.label"
          :permission="fields.service.readPermission"
          :url="fields.service.viewUrl"
          :value="presenter(record, 'service')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.temperatureReading.label" :value="presenter(record, 'temperatureReading')"></app-view-item-text>

        <app-view-item-text :label="fields.saetNumber.label" :value="presenter(record, 'saetNumber')"></app-view-item-text>

        <app-view-item-text :label="fields.comment.label" :value="presenter(record, 'comment')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.member.label"
          :permission="fields.member.readPermission"
          :url="fields.member.viewUrl"
          :value="presenter(record, 'member')"
        ></app-view-item-relation-to-one>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import ServiceAttendanceViewToolbar from '@/modules/service-attendance/components/service-attendance-view-toolbar.vue';
import { ServiceAttendanceModel } from '@/modules/service-attendance/service-attendance-model';

const { fields } = ServiceAttendanceModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-service-attendance-view-page',

  props: ['id'],

  components: {
    'app-service-attendance-view-toolbar': ServiceAttendanceViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'serviceAttendance/view/record',
      loading: 'serviceAttendance/view/loading',
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
      doFind: 'serviceAttendance/view/doFind',
    }),

    presenter(record, fieldName) {
      return ServiceAttendanceModel.presenter(record, fieldName);
    },
  },
});
</script>
