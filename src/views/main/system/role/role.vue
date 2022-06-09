<template>
  <div class="role">
    <page-search :searchConfig="searchConfig" />
    <page-content
      :content-config="contentConfig"
      page-name="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      pageName="role"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content';
import PageModal from '@/components/page-modal';
import PageSearch from '@/components/page-search';
import usePageModal from '@/hooks/usePageModal';
import { searchConfig, contentConfig, modalConfig } from './config';
import { useStore } from '@/store';
import { computed, nextTick, ref } from 'vue';
import { ElTree } from 'element-plus';
import { menuMapLeafKeys } from '@/utils/map-to-all';

const elTreeRef = ref<InstanceType<typeof ElTree>>();
const editCallback = (item: any) => {
  const leafKeys = menuMapLeafKeys(item.menuList);
  nextTick(() => {
    elTreeRef.value?.setCheckedKeys(leafKeys, false);
  });
};
const [defaultInfo, pageModalRef, handleNewData, handleEditData] = usePageModal(
  undefined,
  editCallback
);

const store = useStore();
const menus = computed(() => store.state.entireMenu);
const otherInfo = ref({});
const handleCheckChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys;
  const halfCheckedKeys = data2.halfCheckedKeys;
  const menuList = [...checkedKeys, ...halfCheckedKeys];
  otherInfo.value = { menuList };
};
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
