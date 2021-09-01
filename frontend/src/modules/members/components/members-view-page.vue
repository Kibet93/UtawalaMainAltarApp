<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/members' }">
        <app-i18n code="entities.members.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.members.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.members.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-members-view-toolbar
        v-if="record"
      ></app-members-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-relation-to-one
          :label="fields.category.label"
          :permission="fields.category.readPermission"
          :url="fields.category.viewUrl"
          :value="presenter(record, 'category')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.accountabilityGroup.label"
          :permission="fields.accountabilityGroup.readPermission"
          :url="fields.accountabilityGroup.viewUrl"
          :value="presenter(record, 'accountabilityGroup')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.membershipStatus.label" :value="presenter(record, 'membershipStatus')"></app-view-item-text>

        <app-view-item-text :label="fields.age.label" :value="presenter(record, 'age')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.homeFellowship.label"
          :permission="fields.homeFellowship.readPermission"
          :url="fields.homeFellowship.viewUrl"
          :value="presenter(record, 'homeFellowship')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.nationalID.label" :value="presenter(record, 'nationalID')"></app-view-item-text>

        <app-view-item-text :label="fields.phoneNumber.label" :value="presenter(record, 'phoneNumber')"></app-view-item-text>

        <app-view-item-text :label="fields.occupation.label" :value="presenter(record, 'occupation')"></app-view-item-text>

        <app-view-item-text :label="fields.residence.label" :value="presenter(record, 'residence')"></app-view-item-text>

        <app-view-item-text :label="fields.fullName.label" :value="presenter(record, 'fullName')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.email.label"
          :permission="fields.email.readPermission"
          :url="fields.email.viewUrl"
          :value="presenter(record, 'email')"
        ></app-view-item-relation-to-one>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import MembersViewToolbar from '@/modules/members/components/members-view-toolbar.vue';
import { MembersModel } from '@/modules/members/members-model';

const { fields } = MembersModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-members-view-page',

  props: ['id'],

  components: {
    'app-members-view-toolbar': MembersViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'members/view/record',
      loading: 'members/view/loading',
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
      doFind: 'members/view/doFind',
    }),

    presenter(record, fieldName) {
      return MembersModel.presenter(record, fieldName);
    },
  },
});
</script>
