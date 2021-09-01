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
        :label="fields.status.label"
        :prop="fields.status.name"
        :required="fields.status.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-select v-model="model[fields.status.name]" :placeholder="fields.status.placeholder || ''">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.status.options"
            ></el-option>
          </el-select>

          <div
            v-if="fields.status.hint"
            class="app-form-hint"
          >
            {{ fields.status.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.url.label"
        :prop="fields.url.name"
        :required="fields.url.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.url.name]" :placeholder="fields.url.placeholder" />

          <div
            v-if="fields.url.hint"
            class="app-form-hint"
          >
            {{ fields.url.hint }}
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
import { LiveServiceModel } from '@/modules/live-service/live-service-model';

const { fields } = LiveServiceModel;
const formSchema = new FormSchema([
  fields.name,
  fields.status,
  fields.url,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-live-service-form',

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
