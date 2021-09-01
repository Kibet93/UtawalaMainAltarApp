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
        :label="fields.event.label"
        :prop="fields.event.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'event') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.startDateOfActivity.label"
        :prop="fields.startDateOfActivity.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'startDateOfActivity') }}</template>
      </el-table-column>

      <el-table-column :label="fields.personInCharge.label" :prop="fields.personInCharge.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.personInCharge.label"
            :permission="fields.personInCharge.readPermission"
            :url="fields.personInCharge.viewUrl"
            :value="presenter(scope.row, 'personInCharge')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>

      <el-table-column :label="fields.participants.label" :prop="fields.participants.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-many
            :label="fields.participants.label"
            :permission="fields.participants.readPermission"
            :url="fields.participants.viewUrl"
            :value="presenter(scope.row, 'participants')"
          ></app-list-item-relation-to-many>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.endDate.label"
        :prop="fields.endDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'endDate') }}</template>
      </el-table-column>

      <el-table-column
        :fixed="isMobile ? undefined : 'right'"
        align="center"
        width="180"
      >
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/calendar/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/calendar/${scope.row.id}/edit`"
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
import { CalendarModel } from '@/modules/calendar/calendar-model';
import { mapGetters, mapActions } from 'vuex';
import { CalendarPermissions } from '@/modules/calendar/calendar-permissions';
import { i18n } from '@/i18n';

const { fields } = CalendarModel;

import Vue from 'vue';
export default Vue.extend({
  name: 'app-calendar-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'calendar/list/rows',
      count: 'calendar/list/count',
      loading: 'calendar/list/loading',
      pagination: 'calendar/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      destroyLoading: 'calendar/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new CalendarPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToDestroy() {
      return new CalendarPermissions(
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
      doChangeSort: 'calendar/list/doChangeSort',
      doChangePaginationCurrentPage:
        'calendar/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'calendar/list/doChangePaginationPageSize',
      doMountTable: 'calendar/list/doMountTable',
      doDestroy: 'calendar/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return CalendarModel.presenter(row, fieldName);
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
