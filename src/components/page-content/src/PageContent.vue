<template>
  <div class="page-content">
    <x-table
      :dataList="dataList"
      :dataCount="dataCount"
      v-bind="contentConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate">新建用户</el-button>
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
          <el-button size="small" text bg type="primary" v-if="isUpdate">编辑</el-button>
          <el-button size="small" text bg type="primary" v-if="isDelete">删除</el-button>
        </div>
      </template>
      <template v-for="item in otherPropsSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot
        ></template>
      </template>
    </x-table>
  </div>
</template>

<script setup lang="ts">
import xTable from '@/components/base-ui/table';
import { useStore } from '@/store';
import { computed, defineProps, defineExpose, ref, watch } from 'vue';
import { userPermission } from '@/hooks/usePermissions';
const props = defineProps<{
  contentConfig: any;
  pageName: string;
}>();
const pageInfo = ref({
  currentPage: 1,
  pageSize: 10,
});
const store = useStore();

const isCreate = userPermission(props.pageName, 'create');
const isUpdate = userPermission(props.pageName, 'update');
const isDelete = userPermission(props.pageName, 'delete');
const isQuery = userPermission(props.pageName, 'query');

const getPagData = (queryInfo: any = {}) => {
  if (!isQuery) return;
  store.dispatch('systemModule/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo,
    },
  });
};
const dataList = computed(() => store.getters[`systemModule/getPageListData`](props.pageName));
const dataCount = computed(() =>
  store.getters[`systemModule/getPageListCountData`](props.pageName)
);
const otherPropsSlots = props.contentConfig?.propList.filter((item: any) => {
  if (
    item.slotName === 'status' ||
    item.slotName === 'createAt' ||
    item.slotName === 'updateAt' ||
    item.slotName === 'handler'
  ) {
    return false;
  }
  return true;
});

getPagData();
watch(pageInfo, () => getPagData());

defineExpose({
  getPagData,
});
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
