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
          code="entities.calendar.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.calendar.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-calendar-view-toolbar
        v-if="record"
      ></app-calendar-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.event.label" :value="presenter(record, 'event')"></app-view-item-text>

        <app-view-item-text :label="fields.startDateOfActivity.label" :value="presenter(record, 'startDateOfActivity')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.personInCharge.label"
          :permission="fields.personInCharge.readPermission"
          :url="fields.personInCharge.viewUrl"
          :value="presenter(record, 'personInCharge')"
        ></app-view-item-relation-to-many>

        <app-view-item-relation-to-many
          :label="fields.participants.label"
          :permission="fields.participants.readPermission"
          :url="fields.participants.viewUrl"
          :value="presenter(record, 'participants')"
        ></app-view-item-relation-to-many>

        <app-view-item-text :label="fields.endDate.label" :value="presenter(record, 'endDate')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import CalendarViewToolbar from '@/modules/calendar/components/calendar-view-toolbar.vue';
import { CalendarModel } from '@/modules/calendar/calendar-model';

const { fields } = CalendarModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-calendar-view-page',

  props: ['id'],

  components: {
    'app-calendar-view-toolbar': CalendarViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'calendar/view/record',
      loading: 'calendar/view/loading',
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
      doFind: 'calendar/view/doFind',
    }),

    presenter(record, fieldName) {
      return CalendarModel.presenter(record, fieldName);
    },
  },
});
</script>
