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
          code="entities.accountabilityGroups.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.accountabilityGroups.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-accountability-groups-view-toolbar
        v-if="record"
      ></app-accountability-groups-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.name.label" :value="presenter(record, 'name')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.category.label"
          :permission="fields.category.readPermission"
          :url="fields.category.viewUrl"
          :value="presenter(record, 'category')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.leader.label"
          :permission="fields.leader.readPermission"
          :url="fields.leader.viewUrl"
          :value="presenter(record, 'leader')"
        ></app-view-item-relation-to-one>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import AccountabilityGroupsViewToolbar from '@/modules/accountability-groups/components/accountability-groups-view-toolbar.vue';
import { AccountabilityGroupsModel } from '@/modules/accountability-groups/accountability-groups-model';

const { fields } = AccountabilityGroupsModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-accountability-groups-view-page',

  props: ['id'],

  components: {
    'app-accountability-groups-view-toolbar': AccountabilityGroupsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'accountabilityGroups/view/record',
      loading: 'accountabilityGroups/view/loading',
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
      doFind: 'accountabilityGroups/view/doFind',
    }),

    presenter(record, fieldName) {
      return AccountabilityGroupsModel.presenter(record, fieldName);
    },
  },
});
</script>
