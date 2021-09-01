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
        :label="fields.fullName.label"
        :prop="fields.fullName.name"
        :required="fields.fullName.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.fullName.name]" :placeholder="fields.fullName.placeholder" />

          <div
            v-if="fields.fullName.hint"
            class="app-form-hint"
          >
            {{ fields.fullName.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.email.label"
        :prop="fields.email.name"
        :required="fields.email.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-user-autocomplete-input
            :fetchFn="fields.email.fetchFn"
            :mapperFn="fields.email.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.email.name]"
            :placeholder="fields.email.placeholder"
            mode="single"
          ></app-user-autocomplete-input>

          <div
            v-if="fields.email.hint"
            class="app-form-hint"
          >
            {{ fields.email.hint }}
          </div>
        </el-col>
      </el-form-item>


      <el-form-item
        :label="fields.nationalID.label"
        :prop="fields.nationalID.name"
        :required="fields.nationalID.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="0" :step="1" v-model="model[fields.nationalID.name]" :placeholder="fields.nationalID.placeholder" ></el-input-number>

          <div
            v-if="fields.nationalID.hint"
            class="app-form-hint"
          >
            {{ fields.nationalID.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.phoneNumber.label"
        :prop="fields.phoneNumber.name"
        :required="fields.phoneNumber.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.phoneNumber.name]" :placeholder="fields.phoneNumber.placeholder" />

          <div
            v-if="fields.phoneNumber.hint"
            class="app-form-hint"
          >
            {{ fields.phoneNumber.hint }}
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
        :label="fields.accountabilityGroup.label"
        :prop="fields.accountabilityGroup.name"
        :required="fields.accountabilityGroup.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-accountability-groups-autocomplete-input
            :fetchFn="fields.accountabilityGroup.fetchFn"
            :mapperFn="fields.accountabilityGroup.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.accountabilityGroup.name]"
            :placeholder="fields.accountabilityGroup.placeholder"
            mode="single"
          ></app-accountability-groups-autocomplete-input>

          <div
            v-if="fields.accountabilityGroup.hint"
            class="app-form-hint"
          >
            {{ fields.accountabilityGroup.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.membershipStatus.label"
        :prop="fields.membershipStatus.name"
        :required="fields.membershipStatus.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-select v-model="model[fields.membershipStatus.name]" :placeholder="fields.membershipStatus.placeholder || ''">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.membershipStatus.options"
            ></el-option>
          </el-select>

          <div
            v-if="fields.membershipStatus.hint"
            class="app-form-hint"
          >
            {{ fields.membershipStatus.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.age.label"
        :prop="fields.age.name"
        :required="fields.age.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="0" :step="1" v-model="model[fields.age.name]" :placeholder="fields.age.placeholder" ></el-input-number>

          <div
            v-if="fields.age.hint"
            class="app-form-hint"
          >
            {{ fields.age.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.homeFellowship.label"
        :prop="fields.homeFellowship.name"
        :required="fields.homeFellowship.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-home-fellowships-autocomplete-input
            :fetchFn="fields.homeFellowship.fetchFn"
            :mapperFn="fields.homeFellowship.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.homeFellowship.name]"
            :placeholder="fields.homeFellowship.placeholder"
            mode="single"
          ></app-home-fellowships-autocomplete-input>

          <div
            v-if="fields.homeFellowship.hint"
            class="app-form-hint"
          >
            {{ fields.homeFellowship.hint }}
          </div>
        </el-col>
      </el-form-item>


      <el-form-item
        :label="fields.occupation.label"
        :prop="fields.occupation.name"
        :required="fields.occupation.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.occupation.name]" :placeholder="fields.occupation.placeholder" />

          <div
            v-if="fields.occupation.hint"
            class="app-form-hint"
          >
            {{ fields.occupation.hint }}
          </div>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.residence.label"
        :prop="fields.residence.name"
        :required="fields.residence.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.residence.name]" :placeholder="fields.residence.placeholder" />

          <div
            v-if="fields.residence.hint"
            class="app-form-hint"
          >
            {{ fields.residence.hint }}
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
import { MembersModel } from '@/modules/members/members-model';

const { fields } = MembersModel;
const formSchema = new FormSchema([
  fields.category,
  fields.accountabilityGroup,
  fields.membershipStatus,
  fields.age,
  fields.homeFellowship,
  fields.nationalID,
  fields.phoneNumber,
  fields.occupation,
  fields.residence,
  fields.fullName,
  fields.email,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-members-form',

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
