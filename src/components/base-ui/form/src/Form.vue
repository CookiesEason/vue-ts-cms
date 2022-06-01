<template>
  <div class="hl-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :rules="item.rules" :style="itemStyle">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker style="width: 100%" v-bind="item.otherOptions"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, withDefaults } from 'vue';
import { IFormItem } from '../type/type';
const props = withDefaults(
  defineProps<{
    formItems: IFormItem[];
    labelWidth: string;
    itemStyle: object;
    colLayout: object;
  }>(),
  {
    colLayout: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24,
    }),
  }
);
const { formItems, labelWidth } = toRefs(props);
</script>

<style scoped>
.hl-form {
  padding-top: 22px;
}
</style>
