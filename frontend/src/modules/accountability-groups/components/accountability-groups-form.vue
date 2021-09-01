<template>
  <div>
    <el-form
      :label-position="labelPosition"
      :label-width="labelWidthForm"
      :model="model"
      :rules="rules"
      @submit.native.prevent="doSubmit"
      class="form"
      ref="form"
      v-if="model"
    >
      <el-form-item
        :label="fields.name.label"
        :prop="fields.name.name"
        :required="fields.name.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.name.name]" :placeholder="fields.name.placeholder" ref="focus" />

          <div
            v-if="fields.name.hint"
            class="app-form-hint"
          >
            {{ fields.name.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.category.label"
        :prop="fields.category.name"
        :required="fields.category.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-category-autocomplete-input
            :fetchFn="fields.category.fetchFn"
            :mapperFn="fields.category.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.category.name]"
            :placeholder="fields.category.placeholder"
            mode="single"
          ></app-category-autocomplete-input>

          <div
            v-if="fields.category.hint"
            class="app-form-hint"
          >
            {{ fields.category.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.leader.label"
        :prop="fields.leader.name"
        :required="fields.leader.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-user-autocomplete-input
            :fetchFn="fields.leader.fetchFn"
            :mapperFn="fields.leader.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.leader.name]"
            :placeholder="fields.leader.placeholder"
            mode="single"
          ></app-user-autocomplete-input>

          <div
            v-if="fields.leader.hint"
            class="app-form-hint"
          >
            {{ fields.leader.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item>
        <div class="form-buttons">
          <el-button
            :disabled="saveLoading"
            @click="doSubmit"
            icon="el-icon-fa-floppy-o"
            type="primary"
          >
            <app-i18n code="common.save"></app-i18n>
          </el-button>

          <el-button
            :disabled="saveLoading"
            @click="doReset"
            icon="el-icon-fa-undo"
          >
            <app-i18n code="common.reset"></app-i18n>
          </el-button>

          <el-button
            :disabled="saveLoading"
            @click="doCancel"
            icon="el-icon-fa-close"
          >
            <app-i18n code="common.cancel"></app-i18n>
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { AccountabilityGroupsModel } from '@/modules/accountability-groups/accountability-groups-model';

const { fields } = AccountabilityGroupsModel;
const formSchema = new FormSchema([
  fields.name,
  fields.category,
  fields.leader,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-accountability-groups-form',

  props: ['isEditing', 'record', 'saveLoading', 'modal'],

  data() {
    return {
      rules: formSchema.rules(),
      model: null,
    };
  },

  created() {
    this.model = formSchema.initialValues(
      this.record || {},
    );
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
    }),

    fields() {
      return fields;
    },
  },

  methods: {
    doReset() {
      this.model = formSchema.initialValues(this.record);
    },

    doCancel() {
      this.$emit('cancel');
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      return this.$emit('submit', {
        id: this.record && this.record.id,
        values: formSchema.cast(this.model),
      });
    },
  },
});
</script>

<style></style>
