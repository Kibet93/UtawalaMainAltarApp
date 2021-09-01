import { ServiceAttendanceService } from '@/modules/service-attendance/service-attendance-service';
import Errors from '@/shared/error/errors';
import { routerAsync } from '@/app-module';
import Message from '@/shared/message/message';
import { i18n } from '@/i18n';

export default {
  namespaced: true,

  state: {
    loading: false,
  },

  getters: {
    loading: (state) => Boolean(state.loading),
  },

  mutations: {
    DESTROY_ALL_STARTED(state) {
      state.loading = true;
    },

    DESTROY_ALL_SUCCESS(state) {
      state.loading = false;
    },

    DESTROY_ALL_ERROR(state) {
      state.loading = false;
    },

    DESTROY_STARTED(state) {
      state.loading = true;
    },

    DESTROY_SUCCESS(state) {
      state.loading = false;
    },

    DESTROY_ERROR(state) {
      state.loading = false;
    },
  },

  actions: {
    async doDestroy({ commit, dispatch, rootGetters }, id) {
      try {
        commit('DESTROY_STARTED');

        await ServiceAttendanceService.destroyAll([id]);

        commit('DESTROY_SUCCESS');

        Message.success(
          i18n('entities.serviceAttendance.destroy.success'),
        );

        routerAsync().push('/service-attendance');

        dispatch(
          `serviceAttendance/list/doFetch`,
          rootGetters[`serviceAttendance/list/filter`],
          {
            root: true,
          },
        );
      } catch (error) {
        Errors.handle(error);
        commit('DESTROY_ERROR');
      }
    },

    async doDestroyAll(
      { commit, dispatch, rootGetters },
      ids,
    ) {
      try {
        commit('DESTROY_ALL_STARTED');

        await ServiceAttendanceService.destroyAll(ids);

        commit('DESTROY_ALL_SUCCESS');

        dispatch(`serviceAttendance/list/doUnselectAll`, null, {
          root: true,
        });

        Message.success(
          i18n('entities.serviceAttendance.destroyAll.success'),
        );

        routerAsync().push('/service-attendance');

        dispatch(
          `serviceAttendance/list/doFetch`,
          rootGetters[`serviceAttendance/list/filter`],
          {
            root: true,
          },
        );
      } catch (error) {
        Errors.handle(error);
        commit('DESTROY_ALL_ERROR');
      }
    },
  },
};
