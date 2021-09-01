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
        :label="fields.event.label"
        :prop="fields.event.name"
        :required="fields.event.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.event.name]" :placeholder="fields.event.placeholder" ref="focus" />

          <div
            v-if="fields.event.hint"
            class="app-form-hint"
          >
            {{ fields.event.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.startDateOfActivity.label"
        :prop="fields.startDateOfActivity.name"
        :required="fields.startDateOfActivity.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-date-picker type="date" v-model="model[fields.startDateOfActivity.name]" :placeholder="fields.startDateOfActivity.placeholder"></el-date-picker>

          <div
            v-if="fields.startDateOfActivity.hint"
            class="app-form-hint"
          >
            {{ fields.startDateOfActivity.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.personInCharge.label"
        :prop="fields.personInCharge.name"
        :required="fields.personInCharge.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-user-autocomplete-input
            :fetchFn="fields.personInCharge.fetchFn"
            :mapperFn="fields.personInCharge.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.personInCharge.name]"
            :placeholder="fields.personInCharge.placeholder"
            mode="multiple"
          ></app-user-autocomplete-input>

          <div
            v-if="fields.personInCharge.hint"
            class="app-form-hint"
          >
            {{ fields.personInCharge.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.participants.label"
        :prop="fields.participants.name"
        :required="fields.participants.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-category-autocomplete-input
            :fetchFn="fields.participants.fetchFn"
            :mapperFn="fields.participants.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.participants.name]"
            :placeholder="fields.participants.placeholder"
            mode="multiple"
          ></app-category-autocomplete-input>

          <div
            v-if="fields.participants.hint"
            class="app-form-hint"
          >
            {{ fields.participants.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.endDate.label"
        :prop="fields.endDate.name"
        :required="fields.endDate.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-date-picker type="date" v-model="model[fields.endDate.name]" :placeholder="fields.endDate.placeholder"></el-date-picker>

          <div
            v-if="fields.endDate.hint"
            class="app-form-hint"
          >
            {{ fields.endDate.hint }}
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
import { CalendarModel } from '@/modules/calendar/calendar-model';

const { fields } = CalendarModel;
const formSchema = new FormSchema([
  fields.event,
  fields.startDateOfActivity,
  fields.personInCharge,
  fields.participants,
  fields.endDate,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-calendar-form',

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
