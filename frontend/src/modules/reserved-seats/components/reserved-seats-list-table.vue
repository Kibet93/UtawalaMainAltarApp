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
        :label="fields.seatNo.label"
        :prop="fields.seatNo.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'seatNo') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.reservedFor.label"
        :prop="fields.reservedFor.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'reservedFor') }}</template>
      </el-table-column>

      <el-table-column :label="fields.serviceBooked.label" :prop="fields.serviceBooked.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.serviceBooked.label"
            :permission="fields.serviceBooked.readPermission"
            :url="fields.serviceBooked.viewUrl"
            :value="presenter(scope.row, 'serviceBooked')"
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
            <router-link :to="`/reserved-seats/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/reserved-seats/${scope.row.id}/edit`"
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
import { ReservedSeatsModel } from '@/modules/reserved-seats/reserved-seats-model';
import { mapGetters, mapActions } from 'vuex';
import { ReservedSeatsPermissions } from '@/modules/reserved-seats/reserved-seats-permissions';
import { i18n } from '@/i18n';

const { fields } = ReservedSeatsModel;

import Vue from 'vue';
export default Vue.extend({
  name: 'app-reserved-seats-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'reservedSeats/list/rows',
      count: 'reservedSeats/list/count',
      loading: 'reservedSeats/list/loading',
      pagination: 'reservedSeats/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      destroyLoading: 'reservedSeats/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new ReservedSeatsPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToDestroy() {
      return new ReservedSeatsPermissions(
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
      doChangeSort: 'reservedSeats/list/doChangeSort',
      doChangePaginationCurrentPage:
        'reservedSeats/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'reservedSeats/list/doChangePaginationPageSize',
      doMountTable: 'reservedSeats/list/doMountTable',
      doDestroy: 'reservedSeats/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return ReservedSeatsModel.presenter(row, fieldName);
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
