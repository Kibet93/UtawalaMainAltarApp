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

      <el-table-column :label="fields.fellowshipPastor.label" :prop="fields.fellowshipPastor.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.fellowshipPastor.label"
            :permission="fields.fellowshipPastor.readPermission"
            :url="fields.fellowshipPastor.viewUrl"
            :value="presenter(scope.row, 'fellowshipPastor')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>

      <el-table-column
        :fixed="isMobile ? undefined : 'right'"
        align="center"
        width="180"
      >
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/home-fellowships/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/home-fellowships/${scope.row.id}/edit`"
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
import { HomeFellowshipsModel } from '@/modules/home-fellowships/home-fellowships-model';
import { mapGetters, mapActions } from 'vuex';
import { HomeFellowshipsPermissions } from '@/modules/home-fellowships/home-fellowships-permissions';
import { i18n } from '@/i18n';

const { fields } = HomeFellowshipsModel;

import Vue from 'vue';
export default Vue.extend({
  name: 'app-home-fellowships-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'homeFellowships/list/rows',
      count: 'homeFellowships/list/count',
      loading: 'homeFellowships/list/loading',
      pagination: 'homeFellowships/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      destroyLoading: 'homeFellowships/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new HomeFellowshipsPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToDestroy() {
      return new HomeFellowshipsPermissions(
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
      doChangeSort: 'homeFellowships/list/doChangeSort',
      doChangePaginationCurrentPage:
        'homeFellowships/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'homeFellowships/list/doChangePaginationPageSize',
      doMountTable: 'homeFellowships/list/doMountTable',
      doDestroy: 'homeFellowships/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return HomeFellowshipsModel.presenter(row, fieldName);
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
