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
        :label="fields.member.label"
        :prop="fields.member.name"
        :required="fields.member.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-user-autocomplete-input
            :fetchFn="fields.member.fetchFn"
            :mapperFn="fields.member.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.member.name]"
            :placeholder="fields.member.placeholder"
            mode="single"
          ></app-user-autocomplete-input>

          <div
            v-if="fields.member.hint"
            class="app-form-hint"
          >
            {{ fields.member.hint }}
          </div>
        </el-col>
      </el-form-item>

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
        :label="fields.service.label"
        :prop="fields.service.name"
        :required="fields.service.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-services-autocomplete-input
            :fetchFn="fields.service.fetchFn"
            :mapperFn="fields.service.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.service.name]"
            :placeholder="fields.service.placeholder"
            mode="single"
          ></app-services-autocomplete-input>

          <div
            v-if="fields.service.hint"
            class="app-form-hint"
          >
            {{ fields.service.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.temperatureReading.label"
        :prop="fields.temperatureReading.name"
        :required="fields.temperatureReading.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.temperatureReading.scale" :step="0.1" v-model="model[fields.temperatureReading.name]" :placeholder="fields.temperatureReading.placeholder" ></el-input-number>

          <div
            v-if="fields.temperatureReading.hint"
            class="app-form-hint"
          >
            {{ fields.temperatureReading.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.saetNumber.label"
        :prop="fields.saetNumber.name"
        :required="fields.saetNumber.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="0" :step="1" v-model="model[fields.saetNumber.name]" :placeholder="fields.saetNumber.placeholder" ></el-input-number>

          <div
            v-if="fields.saetNumber.hint"
            class="app-form-hint"
          >
            {{ fields.saetNumber.hint }}
          </div>
        </el-col>
      </el-form-item>

      <!-- <el-form-item
        :label="fields.comment.label"
        :prop="fields.comment.name"
        :required="fields.comment.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input :rows="4" type="textarea" v-model="model[fields.comment.name]" :placeholder="fields.comment.placeholder" />

          <div
            v-if="fields.comment.hint"
            class="app-form-hint"
          >
            {{ fields.comment.hint }}
          </div>
        </el-col>
      </el-form-item> -->

     

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
import { ServiceAttendanceModel } from '@/modules/service-attendance/service-attendance-model';

const { fields } = ServiceAttendanceModel;
const formSchema = new FormSchema([
  fields.name,
  fields.service,
  fields.temperatureReading,
  fields.saetNumber,
  fields.comment,
  fields.member,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-service-attendance-form',

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
