<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home-fellowships' }">
        <app-i18n code="entities.homeFellowships.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.homeFellowships.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.homeFellowships.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.homeFellowships.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.homeFellowships.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-home-fellowships-form
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
import HomeFellowshipsForm from '@/modules/home-fellowships/components/home-fellowships-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-home-fellowships-form-page',

  props: ['id'],

  components: {
    'app-home-fellowships-form': HomeFellowshipsForm,
  },

  computed: {
    ...mapGetters({
      record: 'homeFellowships/form/record',
      initLoading: 'homeFellowships/form/initLoading',
      saveLoading: 'homeFellowships/form/saveLoading',
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
      doInit: 'homeFellowships/form/doInit',
      doUpdate: 'homeFellowships/form/doUpdate',
      doCreate: 'homeFellowships/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/home-fellowships');
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
