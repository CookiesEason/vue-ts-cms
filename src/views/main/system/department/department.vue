<template>
  <div class="department">
    <page-search :searchConfig="searchFormConfig" />
    <page-content
      pageName="department"
      ref="pageContentRef"
      :contentConfig="contentConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="modalInfo"
      :modalConfig="modalConfigRef"
      pageName="department"
    ></page-modal>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content';
import PageModal from '@/components/page-modal';
import PageSearch from '@/components/page-search';
import { computed } from 'vue';
import { searchFormConfig, contentConfig, modalConfig } from './config';
import { useStore } from '@/store';
import usePageModal from '@/hooks/usePageModal';

const store = useStore();
const modalConfigRef = computed(() => {
  const parentIdItem = modalConfig.formItems?.find((item) => item.field === 'parentId');
  if (parentIdItem) {
    parentIdItem.options = store.state.entireDepartment.map((item) => {
      return { title: item.name, value: item.id };
    });
  }
  return modalConfig;
});

const [modalInfo, pageModalRef, handleNewData, handleEditData] = usePageModal();
</script>

<style scoped></style>
