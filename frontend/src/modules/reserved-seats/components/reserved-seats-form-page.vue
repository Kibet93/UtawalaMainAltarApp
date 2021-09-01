<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/reserved-seats' }">
        <app-i18n code="entities.reservedSeats.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.reservedSeats.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.reservedSeats.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.reservedSeats.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.reservedSeats.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-reserved-seats-form
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
import ReservedSeatsForm from '@/modules/reserved-seats/components/reserved-seats-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-reserved-seats-form-page',

  props: ['id'],

  components: {
    'app-reserved-seats-form': ReservedSeatsForm,
  },

  computed: {
    ...mapGetters({
      record: 'reservedSeats/form/record',
      initLoading: 'reservedSeats/form/initLoading',
      saveLoading: 'reservedSeats/form/saveLoading',
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
      doInit: 'reservedSeats/form/doInit',
      doUpdate: 'reservedSeats/form/doUpdate',
      doCreate: 'reservedSeats/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/reserved-seats');
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
