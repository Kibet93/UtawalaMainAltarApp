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

      <el-table-column
        :label="fields.dueDate.label"
        :prop="fields.dueDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'dueDate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.message.label"
        :prop="fields.message.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'message') }}</template>
      </el-table-column>

      <el-table-column :label="fields.target.label" :prop="fields.target.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.target.label"
            :permission="fields.target.readPermission"
            :url="fields.target.viewUrl"
            :value="presenter(scope.row, 'target')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.announcedBy.label"
        :prop="fields.announcedBy.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'announcedBy') }}</template>
      </el-table-column>

      <el-table-column
        :fixed="isMobile ? undefined : 'right'"
        align="center"
        width="180"
      >
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/announcement/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/announcement/${scope.row.id}/edit`"
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
import { AnnouncementModel } from '@/modules/announcement/announcement-model';
import { mapGetters, mapActions } from 'vuex';
import { AnnouncementPermissions } from '@/modules/announcement/announcement-permissions';
import { i18n } from '@/i18n';

const { fields } = AnnouncementModel;

import Vue from 'vue';
export default Vue.extend({
  name: 'app-announcement-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'announcement/list/rows',
      count: 'announcement/list/count',
      loading: 'announcement/list/loading',
      pagination: 'announcement/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      destroyLoading: 'announcement/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new AnnouncementPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToDestroy() {
      return new AnnouncementPermissions(
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
      doChangeSort: 'announcement/list/doChangeSort',
      doChangePaginationCurrentPage:
        'announcement/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'announcement/list/doChangePaginationPageSize',
      doMountTable: 'announcement/list/doMountTable',
      doDestroy: 'announcement/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return AnnouncementModel.presenter(row, fieldName);
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
