<template>
  <div>
    <hl-form v-bind="props.searchConfig" v-model="modelValue">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button :icon="Refresh">重置</el-button>
          <el-button type="primary" :icon="Search">搜索</el-button>
        </div>
      </template>
    </hl-form>
  </div>
</template>

<script setup lang="ts">
import { Search, Refresh } from '@element-plus/icons-vue';
import HlForm from '@/components/base-ui/form';
import { ref, defineProps } from 'vue';

const props = defineProps<{ searchConfig: any }>();
const modelValue = ref({
  name: '',
  password: '',
  sport: '',
  createTime: '',
});
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
