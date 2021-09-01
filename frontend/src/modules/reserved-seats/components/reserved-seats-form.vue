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
        :label="fields.seatNo.label"
        :prop="fields.seatNo.name"
        :required="fields.seatNo.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="0" :step="1" v-model="model[fields.seatNo.name]" :placeholder="fields.seatNo.placeholder" ref="focus" ></el-input-number>

          <div
            v-if="fields.seatNo.hint"
            class="app-form-hint"
          >
            {{ fields.seatNo.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.reservedFor.label"
        :prop="fields.reservedFor.name"
        :required="fields.reservedFor.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.reservedFor.name]" :placeholder="fields.reservedFor.placeholder" />

          <div
            v-if="fields.reservedFor.hint"
            class="app-form-hint"
          >
            {{ fields.reservedFor.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.serviceBooked.label"
        :prop="fields.serviceBooked.name"
        :required="fields.serviceBooked.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-services-autocomplete-input
            :fetchFn="fields.serviceBooked.fetchFn"
            :mapperFn="fields.serviceBooked.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.serviceBooked.name]"
            :placeholder="fields.serviceBooked.placeholder"
            mode="single"
          ></app-services-autocomplete-input>

          <div
            v-if="fields.serviceBooked.hint"
            class="app-form-hint"
          >
            {{ fields.serviceBooked.hint }}
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
import { ReservedSeatsModel } from '@/modules/reserved-seats/reserved-seats-model';

const { fields } = ReservedSeatsModel;
const formSchema = new FormSchema([
  fields.seatNo,
  fields.reservedFor,
  fields.serviceBooked,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-reserved-seats-form',

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
