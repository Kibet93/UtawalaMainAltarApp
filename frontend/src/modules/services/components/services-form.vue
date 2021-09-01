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
        :label="fields.date.label"
        :prop="fields.date.name"
        :required="fields.date.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-date-picker type="date" v-model="model[fields.date.name]" :placeholder="fields.date.placeholder"></el-date-picker>

          <div
            v-if="fields.date.hint"
            class="app-form-hint"
          >
            {{ fields.date.hint }}
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
import { ServicesModel } from '@/modules/services/services-model';

const { fields } = ServicesModel;
const formSchema = new FormSchema([
  fields.name,
  fields.date,
  fields.status,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-services-form',

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
