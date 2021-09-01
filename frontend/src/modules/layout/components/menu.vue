<template>
  <el-aside :width="asideWidth">
    <h1 class="logo">
      <router-link to="/">
        <img
          v-if="logoUrl"
          :src="logoUrl"
          width="164px"
          alt=""
          :style="{ verticalAlign: 'middle' }"
        />
        <app-i18n
          v-if="!logoUrl"
          code="app.title"
        ></app-i18n>
      </router-link>
    </h1>

    <el-menu
      background-color="#001529"
      text-color="rgba(255,255,255,0.65)"
      :class="{
        'el-menu-side-nav': true,
        collapsed: collapsed,
      }"
      :collapse="collapsed"
      :collapse-transition="false"
      :router="true"
      @select="collapseMenuIfMobile()"
    >
      <el-menu-item
        :class="classFor('/', true)"
        :route="{ path: '/' }"
        index="/"
      >
        <i class="el-icon-fa-tachometer"></i>
        <span slot="title">
          <app-i18n code="dashboard.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/plan')"
        :route="{ path: '/plan' }"
        index="/plan"
        v-if="hasPermissionToPlan || planLocked"
        :disabled="planLocked"
      >
        <i class="el-icon-fa-credit-card"></i>
        <span slot="title">
          <app-i18n code="plan.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/user')"
        :route="{ path: '/user' }"
        index="/user"
        v-if="hasPermissionToUser || userLocked"
        :disabled="userLocked"
      >
        <i class="el-icon-fa-user-plus"></i>
        <span slot="title">
          <app-i18n code="user.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/audit-logs')"
        :route="{ path: '/audit-logs' }"
        index="/audit-logs"
        v-if="hasPermissionToAuditLog || auditLogLocked"
        :disabled="auditLogLocked"
      >
        <i class="el-icon-fa-history"></i>
        <span slot="title">
          <app-i18n code="auditLog.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/settings')"
        :route="{ path: '/settings' }"
        index="/settings"
        v-if="hasPermissionToSettings || settingsLocked"
        :disabled="settingsLocked"
      >
        <i class="el-icon-fa-cog"></i>
        <span slot="title">
          <app-i18n code="settings.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/category')"
        :route="{ path: '/category' }"
        index="/category"
        v-if="hasPermissionToCategory || categoryLocked"
        :disabled="categoryLocked"
      >
        <i class="el-icon-fa-server"></i>
        <span slot="title">
          <app-i18n code="entities.category.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/accountability-groups')"
        :route="{ path: '/accountability-groups' }"
        index="/accountability-groups"
        v-if="hasPermissionToAccountabilityGroups || accountabilityGroupsLocked"
        :disabled="accountabilityGroupsLocked"
      >
        <i class="el-icon-fa-umbrella"></i>
        <span slot="title">
          <app-i18n code="entities.accountabilityGroups.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/services')"
        :route="{ path: '/services' }"
        index="/services"
        v-if="hasPermissionToServices || servicesLocked"
        :disabled="servicesLocked"
      >
        <i class="el-icon-fa-slideshare"></i>
        <span slot="title">
          <app-i18n code="entities.services.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/announcement-targets')"
        :route="{ path: '/announcement-targets' }"
        index="/announcement-targets"
        v-if="hasPermissionToAnnouncementTargets || announcementTargetsLocked"
        :disabled="announcementTargetsLocked"
      >
        <i class="el-icon-fa-comments"></i>
        <span slot="title">
          <app-i18n code="entities.announcementTargets.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/announcement')"
        :route="{ path: '/announcement' }"
        index="/announcement"
        v-if="hasPermissionToAnnouncement || announcementLocked"
        :disabled="announcementLocked"
      >
        <i class="el-icon-fa-bullhorn"></i>
        <span slot="title">
          <app-i18n code="entities.announcement.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/service-attendance')"
        :route="{ path: '/service-attendance' }"
        index="/service-attendance"
        v-if="hasPermissionToServiceAttendance || serviceAttendanceLocked"
        :disabled="serviceAttendanceLocked"
      >
        <i class="el-icon-fa-id-card-o"></i>
        <span slot="title">
          <app-i18n code="entities.serviceAttendance.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/members')"
        :route="{ path: '/members' }"
        index="/members"
        v-if="hasPermissionToMembers || membersLocked"
        :disabled="membersLocked"
      >
        <i class="el-icon-fa-users"></i>
        <span slot="title">
          <app-i18n code="entities.members.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/home-fellowships')"
        :route="{ path: '/home-fellowships' }"
        index="/home-fellowships"
        v-if="hasPermissionToHomeFellowships || homeFellowshipsLocked"
        :disabled="homeFellowshipsLocked"
      >
        <i class="el-icon-fa-home"></i>
        <span slot="title">
          <app-i18n code="entities.homeFellowships.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/reserved-seats')"
        :route="{ path: '/reserved-seats' }"
        index="/reserved-seats"
        v-if="hasPermissionToReservedSeats || reservedSeatsLocked"
        :disabled="reservedSeatsLocked"
      >
        <i class="el-icon-fa-check-square-o"></i>
        <span slot="title">
          <app-i18n code="entities.reservedSeats.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/calendar')"
        :route="{ path: '/calendar' }"
        index="/calendar"
        v-if="hasPermissionToCalendar || calendarLocked"
        :disabled="calendarLocked"
      >
        <i class="el-icon-fa-calendar"></i>
        <span slot="title">
          <app-i18n code="entities.calendar.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/live-service')"
        :route="{ path: '/live-service' }"
        index="/live-service"
        v-if="hasPermissionToLiveService || liveServiceLocked"
        :disabled="liveServiceLocked"
      >
        <i class="el-icon-fa-youtube-square"></i>
        <span slot="title">
          <app-i18n code="entities.liveService.menu"></app-i18n>
        </span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { SettingsPermissions } from '@/modules/settings/settings-permissions';
import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
import { UserPermissions } from '@/modules/user/user-permissions';
import { PlanPermissions } from '@/modules/plan/plan-permissions';
import { CategoryPermissions } from '@/modules/category/category-permissions';
import { AccountabilityGroupsPermissions } from '@/modules/accountability-groups/accountability-groups-permissions';
import { ServicesPermissions } from '@/modules/services/services-permissions';
import { AnnouncementTargetsPermissions } from '@/modules/announcement-targets/announcement-targets-permissions';
import { AnnouncementPermissions } from '@/modules/announcement/announcement-permissions';
import { ServiceAttendancePermissions } from '@/modules/service-attendance/service-attendance-permissions';
import { MembersPermissions } from '@/modules/members/members-permissions';
import { HomeFellowshipsPermissions } from '@/modules/home-fellowships/home-fellowships-permissions';
import { ReservedSeatsPermissions } from '@/modules/reserved-seats/reserved-seats-permissions';
import { CalendarPermissions } from '@/modules/calendar/calendar-permissions';
import { LiveServicePermissions } from '@/modules/live-service/live-service-permissions';
import config from '@/config';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-menu',

  computed: {
    ...mapGetters({
      collapsed: 'layout/menuCollapsed',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      logoUrl: 'auth/logoUrl',
    }),

    hasPermissionToPlan() {
      return (
        config.isPlanEnabled &&
        new PlanPermissions(
          this.currentTenant,
          this.currentUser,
        ).read
      );
    },

    hasPermissionToSettings() {
      return new SettingsPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToAuditLog() {
      return new AuditLogPermissions(
        this.currentTenant,
        this.currentUser,
      ).read;
    },

    hasPermissionToUser() {
      return new UserPermissions(
        this.currentTenant,
        this.currentUser,
      ).read;
    },

    hasPermissionToCategory() {
      return new CategoryPermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToAccountabilityGroups() {
      return new AccountabilityGroupsPermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToServices() {
      return new ServicesPermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToAnnouncementTargets() {
      return new AnnouncementTargetsPermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToAnnouncement() {
      return new AnnouncementPermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToServiceAttendance() {
      return new ServiceAttendancePermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToMembers() {
      return new MembersPermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToHomeFellowships() {
      return new HomeFellowshipsPermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToReservedSeats() {
      return new ReservedSeatsPermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToCalendar() {
      return new CalendarPermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToLiveService() {
      return new LiveServicePermissions(this.currentTenant, this.currentUser).read;
    },

    planLocked() {
      return (
        config.isPlanEnabled &&
        new PlanPermissions(
          this.currentTenant,
          this.currentUser,
        ).lockedForCurrentPlan
      );
    },

    settingsLocked() {
      return new SettingsPermissions(
        this.currentTenant,
        this.currentUser,
      ).lockedForCurrentPlan;
    },

    auditLogLocked() {
      return new AuditLogPermissions(
        this.currentTenant,
        this.currentUser,
      ).lockedForCurrentPlan;
    },

    userLocked() {
      return new UserPermissions(
        this.currentTenant,
        this.currentUser,
      ).lockedForCurrentPlan;
    },

    categoryLocked() {
      return new CategoryPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    accountabilityGroupsLocked() {
      return new AccountabilityGroupsPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    servicesLocked() {
      return new ServicesPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    announcementTargetsLocked() {
      return new AnnouncementTargetsPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    announcementLocked() {
      return new AnnouncementPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    serviceAttendanceLocked() {
      return new ServiceAttendancePermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    membersLocked() {
      return new MembersPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    homeFellowshipsLocked() {
      return new HomeFellowshipsPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    reservedSeatsLocked() {
      return new ReservedSeatsPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    calendarLocked() {
      return new CalendarPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    liveServiceLocked() {
      return new LiveServicePermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },

    asideWidth() {
      if (this.isMobile && !this.collapsed) {
        return '100%';
      }

      if (!this.collapsed) {
        return '200px';
      }

      return '0px';
    },
  },

  methods: {
    ...mapActions({
      collapseMenu: 'layout/collapseMenu',
    }),

    collapseMenuIfMobile() {
      if (this.isMobile) {
        this.collapseMenu();
      }
    },

    classFor(path, exact = false) {
      if (exact) {
        return {
          active: this.$route.path === path,
        };
      }

      const routePath = this.$route.path;
      const active =
        routePath === path ||
        routePath.startsWith(path + '/');

      return {
        active,
      };
    },
  },
});
</script>

<style scoped>
.el-menu.collapsed span {
  visibility: hidden;
}
</style>
