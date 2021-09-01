<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/announcement' }">
        <app-i18n code="entities.announcement.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.announcement.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.announcement.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.announcement.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.announcement.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-announcement-form
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
import AnnouncementForm from '@/modules/announcement/components/announcement-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-announcement-form-page',

  props: ['id'],

  components: {
    'app-announcement-form': AnnouncementForm,
  },

  computed: {
    ...mapGetters({
      record: 'announcement/form/record',
      initLoading: 'announcement/form/initLoading',
      saveLoading: 'announcement/form/saveLoading',
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
      doInit: 'announcement/form/doInit',
      doUpdate: 'announcement/form/doUpdate',
      doCreate: 'announcement/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/announcement');
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
