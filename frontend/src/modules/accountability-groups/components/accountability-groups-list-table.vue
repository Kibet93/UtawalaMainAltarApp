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

      <el-table-column
        :label="fields.name.label"
        :prop="fields.name.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'name') }}</template>
      </el-table-column>

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

      <el-table-column :label="fields.leader.label" :prop="fields.leader.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.leader.label"
            :permission="fields.leader.readPermission"
            :url="fields.leader.viewUrl"
            :value="presenter(scope.row, 'leader')"
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
            <router-link :to="`/accountability-groups/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/accountability-groups/${scope.row.id}/edit`"
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
import { AccountabilityGroupsModel } from '@/modules/accountability-groups/accountability-groups-model';
import { mapGetters, mapActions } from 'vuex';
import { AccountabilityGroupsPermissions } from '@/modules/accountability-groups/accountability-groups-permissions';
import { i18n } from '@/i18n';

const { fields } = AccountabilityGroupsModel;

import Vue from 'vue';
export default Vue.extend({
  name: 'app-accountability-groups-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'accountabilityGroups/list/rows',
      count: 'accountabilityGroups/list/count',
      loading: 'accountabilityGroups/list/loading',
      pagination: 'accountabilityGroups/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      destroyLoading: 'accountabilityGroups/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new AccountabilityGroupsPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToDestroy() {
      return new AccountabilityGroupsPermissions(
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
      doChangeSort: 'accountabilityGroups/list/doChangeSort',
      doChangePaginationCurrentPage:
        'accountabilityGroups/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'accountabilityGroups/list/doChangePaginationPageSize',
      doMountTable: 'accountabilityGroups/list/doMountTable',
      doDestroy: 'accountabilityGroups/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return AccountabilityGroupsModel.presenter(row, fieldName);
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
