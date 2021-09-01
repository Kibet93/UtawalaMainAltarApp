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
          code="entities.homeFellowships.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.homeFellowships.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-home-fellowships-view-toolbar
        v-if="record"
      ></app-home-fellowships-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.name.label" :value="presenter(record, 'name')"></app-view-item-text>

        <app-view-item-relation-to-many
          :label="fields.fellowshipPastor.label"
          :permission="fields.fellowshipPastor.readPermission"
          :url="fields.fellowshipPastor.viewUrl"
          :value="presenter(record, 'fellowshipPastor')"
        ></app-view-item-relation-to-many>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import HomeFellowshipsViewToolbar from '@/modules/home-fellowships/components/home-fellowships-view-toolbar.vue';
import { HomeFellowshipsModel } from '@/modules/home-fellowships/home-fellowships-model';

const { fields } = HomeFellowshipsModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-home-fellowships-view-page',

  props: ['id'],

  components: {
    'app-home-fellowships-view-toolbar': HomeFellowshipsViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'homeFellowships/view/record',
      loading: 'homeFellowships/view/loading',
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
      doFind: 'homeFellowships/view/doFind',
    }),

    presenter(record, fieldName) {
      return HomeFellowshipsModel.presenter(record, fieldName);
    },
  },
});
</script>
