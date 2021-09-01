<template>
  <div style="display: flex;">
    <app-autocomplete-one-input
      :fetchFn="fetchFn"
      v-if="mode !== 'multiple'"
      v-model="model"
      :placeholder="placeholder"
    ></app-autocomplete-one-input>
    <app-autocomplete-many-input
      :fetchFn="fetchFn"
      v-if="mode === 'multiple'"
      v-model="model"
      :placeholder="placeholder"
    ></app-autocomplete-many-input>
    <el-button
      @click="doOpenModal()"
      icon="el-icon-plus"
      style="margin-left: 16px;"
      type="primary"
      v-if="hasPermissionToCreate && showCreate"
    ></el-button>
    <portal to="modal">
      <app-services-form-modal
        :visible="dialogVisible"
        @close="onModalClose"
        @success="onModalSuccess"
        v-if="dialogVisible"
      ></app-services-form-modal>
    </portal>
  </div>
</template>

<script lang="ts">
import ServicesFormModal from '@/modules/services/components/services-form-modal.vue';
import { ServicesPermissions } from '@/modules/services/services-permissions';
import { mapGetters } from 'vuex';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-services-autocomplete-input',
  props: [
    'value',
    'mode',
    'fetchFn',
    'mapperFn',
    'showCreate',
    'placeholder'
  ],

  components: {
    'app-services-form-modal': ServicesFormModal,
  },

  data() {
    return {
      dialogVisible: false,
    };
  },

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
    }),

    model: {
      get: function () {
        return this.value;
      },

      set: function (value) {
        this.$emit('input', value);
      },
    },

    hasPermissionToCreate() {
      return new ServicesPermissions(
        this.currentTenant,
        this.currentUser,
      ).create;
    },
  },

  methods: {
    doOpenModal() {
      this.dialogVisible = true;
    },

    onModalSuccess(record) {
      if (this.mode === 'multiple') {
        this.model = [...this.model, this.mapperFn(record)];
      } else {
        this.model = this.mapperFn(record);
      }

      this.onModalClose();
    },

    onModalClose() {
      this.dialogVisible = false;
    },
  },
});
</script>

<style>
.el-form-item .el-form-item {
  margin-bottom: 22px;
}
</style>
