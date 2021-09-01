<template>
  <div class="filter">
    <app-filter-preview
      :values="model"
      :fields="fields"
      :expanded="expanded"
      @click="doToggleExpanded()"
      @remove="doRemove($event)"
    ></app-filter-preview>
    <el-form
      :label-position="labelPosition"
      :label-width="labelWidthFilter"
      :model="model"
      :rules="rules"
      @submit.native.prevent="doFilter"
      ref="form" 
      v-if="expanded"
    >
      <el-row type="flex">
               <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.fullName.label" :prop="fields.fullName.name">
            <el-input v-model="model[fields.fullName.name]"/>
          </el-form-item>
        </el-col>
    <el-col :lg="12" :md="16" :sm="24">
          <el-form-item
            :label="fields.nationalIDRange.label"
            :prop="fields.nationalIDRange.name"
          >
            <app-number-range-input v-model="model[fields.nationalIDRange.name]"/>
          </el-form-item>
        </el-col>

        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.phoneNumber.label" :prop="fields.phoneNumber.name">
            <el-input v-model="model[fields.phoneNumber.name]"/>
          </el-form-item>
        </el-col>
        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.email.label" :prop="fields.email.name">
            <app-autocomplete-one-input
              :fetchFn="fields.email.fetchFn"
              v-model="model[fields.email.name]"
            ></app-autocomplete-one-input>
          </el-form-item>
        </el-col>
        <!-- <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.category.label" :prop="fields.category.name">
            <app-autocomplete-one-input
              :fetchFn="fields.category.fetchFn"
              v-model="model[fields.category.name]"
            ></app-autocomplete-one-input>
          </el-form-item>
        </el-col> 

        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.accountabilityGroup.label" :prop="fields.accountabilityGroup.name">
            <app-autocomplete-one-input
              :fetchFn="fields.accountabilityGroup.fetchFn"
              v-model="model[fields.accountabilityGroup.name]"
            ></app-autocomplete-one-input>
          </el-form-item>
        </el-col>

         <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.membershipStatus.label" :prop="fields.membershipStatus.name">
            <el-select placeholder v-model="model[fields.membershipStatus.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.membershipStatus.options"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item
            :label="fields.ageRange.label"
            :prop="fields.ageRange.name"
          >
            <app-number-range-input v-model="model[fields.ageRange.name]"/>
          </el-form-item>
        </el-col> 

        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.homeFellowship.label" :prop="fields.homeFellowship.name">
            <app-autocomplete-one-input
              :fetchFn="fields.homeFellowship.fetchFn"
              v-model="model[fields.homeFellowship.name]"
            ></app-autocomplete-one-input>
          </el-form-item>
        </el-col>

    

        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.occupation.label" :prop="fields.occupation.name">
            <el-input v-model="model[fields.occupation.name]"/>
          </el-form-item>
        </el-col>

        <el-col :lg="12" :md="16" :sm="24">
          <el-form-item :label="fields.residence.label" :prop="fields.residence.name">
            <el-input v-model="model[fields.residence.name]"/>
          </el-form-item>
        </el-col> -->

 
      </el-row>

      <div class="filter-buttons">
        <el-button
          :disabled="loading"
          @click="doFilter"
          icon="el-icon-fa-search"
          type="primary"
        >
          <app-i18n code="common.search"></app-i18n>
        </el-button>

        <el-button
          :disabled="loading"
          @click="doResetFilter"
          icon="el-icon-fa-undo"
        >
          <app-i18n code="common.reset"></app-i18n>
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { FilterSchema } from '@/shared/form/filter-schema';
import { MembersModel } from '@/modules/members/members-model';

const { fields } = MembersModel;

const filterSchema = new FilterSchema([
  fields.category,
  fields.accountabilityGroup,
  fields.membershipStatus,
  fields.ageRange,
  fields.homeFellowship,
  fields.nationalIDRange,
  fields.phoneNumber,
  fields.occupation,
  fields.residence,
  fields.fullName,
  fields.email,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-members-list-filter',

  data() {
    return {
      expanded: false,
      rules: filterSchema.rules(),
      model: {},
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthFilter: 'layout/labelWidthFilter',
      loading: 'members/list/loading',
      rawFilter: 'members/list/rawFilter',
    }),

    fields() {
      return fields;
    },
  },

  async mounted() {
    this.model = filterSchema.initialValues(
      this.rawFilter,
      this.$route.query,
    );

    const filter = filterSchema.cast(this.model);
    return this.doFetch({
      filter,
    });
  },

  methods: {
    ...mapActions({
      doReset: 'members/list/doReset',
      doFetch: 'members/list/doFetch',
    }),

    doToggleExpanded() {
      this.expanded = !this.expanded;
    },

    doRemove(field) {
      this.model[field] = null;
      this.expanded = false;
      const rawFilter = this.model;
      const filter = filterSchema.cast(this.model);
      return this.doFetch({
        filter,
        rawFilter,
      });
    },

    async doResetFilter() {
      this.expanded = false;
      this.model = filterSchema.initialValues();
      this.$refs.form.clearValidate();
      return this.doReset();
    },

    async doFilter() {
      try {
        await this.$refs.form.validate();
        this.$refs.form.clearValidate();
      } catch (error) {
        return;
      }

      this.expanded = false;
      const rawFilter = this.model;
      const filter = filterSchema.cast(this.model);
      return this.doFetch({
        filter,
        rawFilter,
      });
    },
  },
});
</script>

<style></style>