<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/calendar' }">
        <app-i18n code="entities.calendar.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.calendar.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.calendar.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.calendar.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.calendar.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-calendar-form
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
import CalendarForm from '@/modules/calendar/components/calendar-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-calendar-form-page',

  props: ['id'],

  components: {
    'app-calendar-form': CalendarForm,
  },

  computed: {
    ...mapGetters({
      record: 'calendar/form/record',
      initLoading: 'calendar/form/initLoading',
      saveLoading: 'calendar/form/saveLoading',
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
      doInit: 'calendar/form/doInit',
      doUpdate: 'calendar/form/doUpdate',
      doCreate: 'calendar/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/calendar');
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
