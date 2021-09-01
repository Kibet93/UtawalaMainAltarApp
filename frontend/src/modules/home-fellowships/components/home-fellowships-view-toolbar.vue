<template>
  <div class="app-page-toolbar">
    <router-link
      :to="{ path: `/home-fellowships/${record.id}/edit` }"
      v-if="record && hasPermissionToEdit"
    >
      <el-button icon="el-icon-fa-edit" type="primary">
        <app-i18n code="common.edit"></app-i18n>
      </el-button>
    </router-link>

    <el-button
      :disabled="destroyLoading"
      @click="doDestroyWithConfirm"
      icon="el-icon-fa-trash"
      type="primary"
      v-if="record && hasPermissionToDestroy"
    >
      <app-i18n code="common.destroy"></app-i18n>
    </el-button>

    <router-link
      :to="{
        path: '/audit-logs',
        query: { entityId: record.id },
      }"
      v-if="record && hasPermissionToAuditLogs"
    >
      <el-button icon="el-icon-fa-history">
        <app-i18n code="auditLog.menu"></app-i18n>
      </el-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { HomeFellowshipsPermissions } from '@/modules/home-fellowships/home-fellowships-permissions';
import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
import { mapGetters, mapActions } from 'vuex';
import { i18n } from '@/i18n';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-home-fellowships-view-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      record: 'homeFellowships/view/record',
      loading: 'homeFellowships/view/loading',
      destroyLoading: 'homeFellowships/destroy/loading',
    }),

    hasPermissionToEdit() {
      return new HomeFellowshipsPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToImport() {
      return new HomeFellowshipsPermissions(
        this.currentTenant,
        this.currentUser,
      ).import;
    },

    hasPermissionToDestroy() {
      return new HomeFellowshipsPermissions(
        this.currentTenant,
        this.currentUser,
      ).destroy;
    },

    hasPermissionToAuditLogs() {
      return new AuditLogPermissions(
        this.currentTenant,
        this.currentUser,
      ).read;
    },
  },

  methods: {
    ...mapActions({
      doDestroy: 'homeFellowships/destroy/doDestroy',
    }),

    async doDestroyWithConfirm() {
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

        return this.doDestroy(this.record.id);
      } catch (error) {
        // no
      }
    },
  },
});
</script>

<style></style>
