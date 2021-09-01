<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/category' }">
        <app-i18n code="entities.category.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.category.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.category.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-category-view-toolbar
        v-if="record"
      ></app-category-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.name.label" :value="presenter(record, 'name')"></app-view-item-text>

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
import CategoryViewToolbar from '@/modules/category/components/category-view-toolbar.vue';
import { CategoryModel } from '@/modules/category/category-model';

const { fields } = CategoryModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-category-view-page',

  props: ['id'],

  components: {
    'app-category-view-toolbar': CategoryViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'category/view/record',
      loading: 'category/view/loading',
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
      doFind: 'category/view/doFind',
    }),

    presenter(record, fieldName) {
      return CategoryModel.presenter(record, fieldName);
    },
  },
});
</script>
