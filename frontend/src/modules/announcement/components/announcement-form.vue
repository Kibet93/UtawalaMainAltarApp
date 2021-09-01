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
        :label="fields.dueDate.label"
        :prop="fields.dueDate.name"
        :required="fields.dueDate.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-date-picker type="date" v-model="model[fields.dueDate.name]" :placeholder="fields.dueDate.placeholder"></el-date-picker>

          <div
            v-if="fields.dueDate.hint"
            class="app-form-hint"
          >
            {{ fields.dueDate.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.message.label"
        :prop="fields.message.name"
        :required="fields.message.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input :rows="4" type="textarea" v-model="model[fields.message.name]" :placeholder="fields.message.placeholder" />

          <div
            v-if="fields.message.hint"
            class="app-form-hint"
          >
            {{ fields.message.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.target.label"
        :prop="fields.target.name"
        :required="fields.target.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-announcement-targets-autocomplete-input
            :fetchFn="fields.target.fetchFn"
            :mapperFn="fields.target.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.target.name]"
            :placeholder="fields.target.placeholder"
            mode="single"
          ></app-announcement-targets-autocomplete-input>

          <div
            v-if="fields.target.hint"
            class="app-form-hint"
          >
            {{ fields.target.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.announcedBy.label"
        :prop="fields.announcedBy.name"
        :required="fields.announcedBy.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.announcedBy.name]" :placeholder="fields.announcedBy.placeholder" />

          <div
            v-if="fields.announcedBy.hint"
            class="app-form-hint"
          >
            {{ fields.announcedBy.hint }}
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
import { AnnouncementModel } from '@/modules/announcement/announcement-model';

const { fields } = AnnouncementModel;
const formSchema = new FormSchema([
  fields.name,
  fields.dueDate,
  fields.message,
  fields.target,
  fields.announcedBy,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-announcement-form',

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
