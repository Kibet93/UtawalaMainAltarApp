import { AnnouncementTargetsService } from '@/modules/announcement-targets/announcement-targets-service';
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

        await AnnouncementTargetsService.destroyAll([id]);

        commit('DESTROY_SUCCESS');

        Message.success(
          i18n('entities.announcementTargets.destroy.success'),
        );

        routerAsync().push('/announcement-targets');

        dispatch(
          `announcementTargets/list/doFetch`,
          rootGetters[`announcementTargets/list/filter`],
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

        await AnnouncementTargetsService.destroyAll(ids);

        commit('DESTROY_ALL_SUCCESS');

        dispatch(`announcementTargets/list/doUnselectAll`, null, {
          root: true,
        });

        Message.success(
          i18n('entities.announcementTargets.destroyAll.success'),
        );

        routerAsync().push('/announcement-targets');

        dispatch(
          `announcementTargets/list/doFetch`,
          rootGetters[`announcementTargets/list/filter`],
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
