<template>
  <div class="page-content">
    <x-table :dataList="dataList" v-bind="contentConfig">
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>
      <template #status="scope">
        <el-button
          color="#626aef"
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #handler>
        <div class="hanler-btns">
          <el-button size="small" text bg type="primary">编辑</el-button>
          <el-button size="small" text bg type="primary">删除</el-button>
        </div>
      </template>
    </x-table>
  </div>
</template>

<script setup lang="ts">
import xTable from '@/components/base-ui/table';
import { useStore } from '@/store';
import { computed, defineProps } from 'vue';
const props = defineProps<{
  contentConfig: any;
  pageName: string;
}>();
const store = useStore();
store.dispatch('systemModule/getPageListAction', {
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 10,
  },
});
const dataList = computed(() => store.getters[`systemModule/getPageListData`](props.pageName));
// const userCount = computed(() => store.state.systemModule.userCount);
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
