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
          code="entities.liveService.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.liveService.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.liveService.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.liveService.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-live-service-form
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
import LiveServiceForm from '@/modules/live-service/components/live-service-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-live-service-form-page',

  props: ['id'],

  components: {
    'app-live-service-form': LiveServiceForm,
  },

  computed: {
    ...mapGetters({
      record: 'liveService/form/record',
      initLoading: 'liveService/form/initLoading',
      saveLoading: 'liveService/form/saveLoading',
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
      doInit: 'liveService/form/doInit',
      doUpdate: 'liveService/form/doUpdate',
      doCreate: 'liveService/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/live-service');
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
