<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table :data="dataList" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60px"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="60px"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          :currentPage="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="dataCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from 'vue';
const props = withDefaults(
  defineProps<{
    dataList: any[];
    propList: any[];
    showIndexColumn: boolean;
    showSelectColumn: boolean;
    title: string;
    dataCount: number;
    page: {
      currentPage: number;
      pageSize: number;
    };
  }>(),
  {
    showIndexColumn: false,
    showSelectColumn: false,
    title: '',
    dataCount: 0,
    page: () => ({
      currentPage: 0,
      pageSize: 10,
    }),
  }
);
const emits = defineEmits(['selectionChange', 'update:page']);
const handleSelectionChange = (value: any) => {
  emits('selectionChange', value);
};
const handleSizeChange = (pageSize: number) => {
  emits('update:page', {
    ...props.page,
    pageSize,
  });
};
const handleCurrentChange = (currentPage: number) => {
  emits('update:page', {
    ...props.page,
    currentPage,
  });
};
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
