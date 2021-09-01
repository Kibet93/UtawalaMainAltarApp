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
          code="entities.reservedSeats.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.reservedSeats.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-reserved-seats-view-toolbar
        v-if="record"
      ></app-reserved-seats-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.seatNo.label" :value="presenter(record, 'seatNo')"></app-view-item-text>

        <app-view-item-text :label="fields.reservedFor.label" :value="presenter(record, 'reservedFor')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.serviceBooked.label"
          :permission="fields.serviceBooked.readPermission"
          :url="fields.serviceBooked.viewUrl"
          :value="presenter(record, 'serviceBooked')"
        ></app-view-item-relation-to-one>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import ReservedSeatsViewToolbar from '@/modules/reserved-seats/components/reserved-seats-view-toolbar.vue';
import { ReservedSeatsModel } from '@/modules/reserved-seats/reserved-seats-model';

const { fields } = ReservedSeatsModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-reserved-seats-view-page',

  props: ['id'],

  components: {
    'app-reserved-seats-view-toolbar': ReservedSeatsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'reservedSeats/view/record',
      loading: 'reservedSeats/view/loading',
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
      doFind: 'reservedSeats/view/doFind',
    }),

    presenter(record, fieldName) {
      return ReservedSeatsModel.presenter(record, fieldName);
    },
  },
});
</script>
