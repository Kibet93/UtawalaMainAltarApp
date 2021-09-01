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

      <el-table-column :label="fields.service.label" :prop="fields.service.date">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.service.label"
            :permission="fields.service.readPermission"
            :url="fields.service.viewUrl"
            :value="presenter(scope.row, 'service')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.temperatureReading.label"
        :prop="fields.temperatureReading.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'temperatureReading') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.saetNumber.label"
        :prop="fields.saetNumber.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'saetNumber') }}</template>
      </el-table-column>


      <el-table-column :label="fields.member.label" :prop="fields.member.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.member.label"
            :permission="fields.member.readPermission"
            :url="fields.member.viewUrl"
            :value="presenter(scope.row, 'member')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <!-- <el-table-column
        :label="fields.comment.label"
        :prop="fields.comment.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'comment') }}</template>
      </el-table-column> -->

      <el-table-column
        :fixed="isMobile ? undefined : 'right'"
        align="center"
        width="180"
      >
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/service-attendance/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/service-attendance/${scope.row.id}/edit`"
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
import { ServiceAttendanceModel } from '@/modules/service-attendance/service-attendance-model';
import { mapGetters, mapActions } from 'vuex';
import { ServiceAttendancePermissions } from '@/modules/service-attendance/service-attendance-permissions';
import { i18n } from '@/i18n';

const { fields } = ServiceAttendanceModel;

import Vue from 'vue';
export default Vue.extend({
  name: 'app-service-attendance-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'serviceAttendance/list/rows',
      count: 'serviceAttendance/list/count',
      loading: 'serviceAttendance/list/loading',
      pagination: 'serviceAttendance/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      destroyLoading: 'serviceAttendance/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new ServiceAttendancePermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToDestroy() {
      return new ServiceAttendancePermissions(
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
      doChangeSort: 'serviceAttendance/list/doChangeSort',
      doChangePaginationCurrentPage:
        'serviceAttendance/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'serviceAttendance/list/doChangePaginationPageSize',
      doMountTable: 'serviceAttendance/list/doMountTable',
      doDestroy: 'serviceAttendance/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return ServiceAttendanceModel.presenter(row, fieldName);
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
