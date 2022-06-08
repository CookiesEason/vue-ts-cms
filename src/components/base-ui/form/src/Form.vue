<template>
  <div class="hl-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
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
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, ref, watch } from 'vue';
import { IFormItem } from '../type/type';
const props = withDefaults(
  defineProps<{
    formItems: IFormItem[];
    labelWidth?: string;
    itemStyle?: object;
    colLayout?: object;
    modelValue: any;
  }>(),
  {
    colLayout: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24,
    }),
    itemStyle: () => ({
      padding: '20px 40px',
    }),
  }
);
const emits = defineEmits(['update:modelValue']);

const formData = ref({ ...props.modelValue });
watch(
  formData,
  (newValue) => {
    emits('update:modelValue', newValue);
  },
  {
    deep: true,
  }
);
watch(
  () => props.modelValue,
  (newValue) => {
    formData.value = newValue;
  },
  {
    deep: true,
  }
);

// const formData = computed({
//   get: () => props.modelValue,
//   set: (val) => emits('update:modelValue', val),
// });

// const handleValueChange = (value: any, field: string) => {
//   emits('update:modelValue', { ...props.modelValue, [field]: value });
// };
</script>

<style scoped>
.hl-form {
  padding-top: 22px;
}
</style>
