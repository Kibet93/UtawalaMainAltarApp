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
          code="entities.announcementTargets.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.announcementTargets.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.announcementTargets.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.announcementTargets.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-announcement-targets-form
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
import AnnouncementTargetsForm from '@/modules/announcement-targets/components/announcement-targets-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-announcement-targets-form-page',

  props: ['id'],

  components: {
    'app-announcement-targets-form': AnnouncementTargetsForm,
  },

  computed: {
    ...mapGetters({
      record: 'announcementTargets/form/record',
      initLoading: 'announcementTargets/form/initLoading',
      saveLoading: 'announcementTargets/form/saveLoading',
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
      doInit: 'announcementTargets/form/doInit',
      doUpdate: 'announcementTargets/form/doUpdate',
      doCreate: 'announcementTargets/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/announcement-targets');
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
