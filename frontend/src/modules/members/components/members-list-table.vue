<template>
  <div>
    <el-table
      :border="true"
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column
        type="selection"
        width="55"
      ></el-table-column>

      <el-table-column :label="fields.category.label" :prop="fields.category.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.category.label"
            :permission="fields.category.readPermission"
            :url="fields.category.viewUrl"
            :value="presenter(scope.row, 'category')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.accountabilityGroup.label" :prop="fields.accountabilityGroup.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.accountabilityGroup.label"
            :permission="fields.accountabilityGroup.readPermission"
            :url="fields.accountabilityGroup.viewUrl"
            :value="presenter(scope.row, 'accountabilityGroup')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.membershipStatus.label"
        :prop="fields.membershipStatus.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'membershipStatus') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.age.label"
        :prop="fields.age.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'age') }}</template>
      </el-table-column>

      <el-table-column :label="fields.homeFellowship.label" :prop="fields.homeFellowship.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.homeFellowship.label"
            :permission="fields.homeFellowship.readPermission"
            :url="fields.homeFellowship.viewUrl"
            :value="presenter(scope.row, 'homeFellowship')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.nationalID.label"
        :prop="fields.nationalID.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'nationalID') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.phoneNumber.label"
        :prop="fields.phoneNumber.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'phoneNumber') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.occupation.label"
        :prop="fields.occupation.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'occupation') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.residence.label"
        :prop="fields.residence.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'residence') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.fullName.label"
        :prop="fields.fullName.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'fullName') }}</template>
      </el-table-column>

      <el-table-column :label="fields.email.label" :prop="fields.email.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.email.label"
            :permission="fields.email.readPermission"
            :url="fields.email.viewUrl"
            :value="presenter(scope.row, 'email')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :fixed="isMobile ? undefined : 'right'"
        align="center"
        width="180"
      >
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/members/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/members/${scope.row.id}/edit`"
              v-if="hasPermissionToEdit"
            >
              <el-button type="text">
                <app-i18n code="common.edit"></app-i18n>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="text"
              v-if="hasPermissionToDestroy"
            >
              <app-i18n code="common.destroy"></app-i18n>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-pagination-wrapper">
      <el-pagination
        :current-page="pagination.currentPage || 1"
        :disabled="loading"
        :layout="paginationLayout"
        :total="count"
        @current-change="doChangePaginationCurrentPage"
        @size-change="doChangePaginationPageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { MembersModel } from '@/modules/members/members-model';
import { mapGetters, mapActions } from 'vuex';
import { MembersPermissions } from '@/modules/members/members-permissions';
import { i18n } from '@/i18n';

const { fields } = MembersModel;

import Vue from 'vue';
export default Vue.extend({
  name: 'app-members-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'members/list/rows',
      count: 'members/list/count',
      loading: 'members/list/loading',
      pagination: 'members/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      destroyLoading: 'members/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new MembersPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToDestroy() {
      return new MembersPermissions(
        this.currentTenant,
        this.currentUser,
      ).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'members/list/doChangeSort',
      doChangePaginationCurrentPage:
        'members/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'members/list/doChangePaginationPageSize',
      doMountTable: 'members/list/doMountTable',
      doDestroy: 'members/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return MembersModel.presenter(row, fieldName);
    },

    async doDestroyWithConfirm(id) {
      try {
        await this.$confirm(
          i18n('common.areYouSure'),
          i18n('common.confirm'),
          {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          },
        );

        return this.doDestroy(id);
      } catch (error) {
        // no
      }
    },
  },
});
</script>

<style></style>
