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
          code="entities.serviceAttendance.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.serviceAttendance.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.serviceAttendance.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.serviceAttendance.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-service-attendance-form
        :isEditing="isEditing"
        :record="record"
        :saveLoading="saveLoading"
        @cancel="doCancel"
        @submit="doSubmit"
        v-if="!initLoading"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import ServiceAttendanceForm from '@/modules/service-attendance/components/service-attendance-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-service-attendance-form-page',

  props: ['id'],

  components: {
    'app-service-attendance-form': ServiceAttendanceForm,
  },

  computed: {
    ...mapGetters({
      record: 'serviceAttendance/form/record',
      initLoading: 'serviceAttendance/form/initLoading',
      saveLoading: 'serviceAttendance/form/saveLoading',
    }),

    isEditing() {
      return Boolean(this.id);
    },
  },

  async created() {
    await this.doInit(this.id);
  },

  methods: {
    ...mapActions({
      doInit: 'serviceAttendance/form/doInit',
      doUpdate: 'serviceAttendance/form/doUpdate',
      doCreate: 'serviceAttendance/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/service-attendance');
    },

    async doSubmit(payload) {
      if (this.isEditing) {
        return this.doUpdate(payload);
      } else {
        return this.doCreate(payload.values);
      }
    },
  },
});
</script>

<style></style>
