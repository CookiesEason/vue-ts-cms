<template>
  <div>
    <hl-form v-bind="props.searchConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button :icon="Refresh" @click="handleReset">重置</el-button>
          <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
        </div>
      </template>
    </hl-form>
  </div>
</template>

<script setup lang="ts">
import { Search, Refresh } from '@element-plus/icons-vue';
import HlForm, { IForm } from '@/components/base-ui/form';
import { ref, defineProps, unref, defineEmits } from 'vue';

const props = defineProps<{ searchConfig: IForm }>();
const emits = defineEmits(['restBtnClick', 'searchBtnClick']);
const formItems = unref(props.searchConfig.formItems);
const formOriginData: any = {};
for (const item of formItems) {
  formOriginData[item.field] = '';
}
const formData = ref({ ...formOriginData });
const handleReset = () => {
  for (const item of formItems) {
    formData.value[item.field] = '';
  }
  // formData.value = { ...formOriginData };
  emits('restBtnClick');
};
const handleSearch = () => {
  emits('searchBtnClick', formData.value);
};
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
