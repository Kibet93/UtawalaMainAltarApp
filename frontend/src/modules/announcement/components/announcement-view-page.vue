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
          code="entities.announcement.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.announcement.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-announcement-view-toolbar
        v-if="record"
      ></app-announcement-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.name.label" :value="presenter(record, 'name')"></app-view-item-text>

        <app-view-item-text :label="fields.dueDate.label" :value="presenter(record, 'dueDate')"></app-view-item-text>

        <app-view-item-text :label="fields.message.label" :value="presenter(record, 'message')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.target.label"
          :permission="fields.target.readPermission"
          :url="fields.target.viewUrl"
          :value="presenter(record, 'target')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.announcedBy.label" :value="presenter(record, 'announcedBy')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import AnnouncementViewToolbar from '@/modules/announcement/components/announcement-view-toolbar.vue';
import { AnnouncementModel } from '@/modules/announcement/announcement-model';

const { fields } = AnnouncementModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-announcement-view-page',

  props: ['id'],

  components: {
    'app-announcement-view-toolbar': AnnouncementViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'announcement/view/record',
      loading: 'announcement/view/loading',
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
      doFind: 'announcement/view/doFind',
    }),

    presenter(record, fieldName) {
      return AnnouncementModel.presenter(record, fieldName);
    },
  },
});
</script>
