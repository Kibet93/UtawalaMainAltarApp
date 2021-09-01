<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/accountability-groups' }">
        <app-i18n code="entities.accountabilityGroups.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.accountabilityGroups.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.accountabilityGroups.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.accountabilityGroups.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.accountabilityGroups.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-accountability-groups-form
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
import AccountabilityGroupsForm from '@/modules/accountability-groups/components/accountability-groups-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-accountability-groups-form-page',

  props: ['id'],

  components: {
    'app-accountability-groups-form': AccountabilityGroupsForm,
  },

  computed: {
    ...mapGetters({
      record: 'accountabilityGroups/form/record',
      initLoading: 'accountabilityGroups/form/initLoading',
      saveLoading: 'accountabilityGroups/form/saveLoading',
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
      doInit: 'accountabilityGroups/form/doInit',
      doUpdate: 'accountabilityGroups/form/doUpdate',
      doCreate: 'accountabilityGroups/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/accountability-groups');
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
