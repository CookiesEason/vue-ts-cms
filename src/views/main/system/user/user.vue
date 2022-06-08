<template>
  <div class="user">
    <page-search
      :searchConfig="searchConfig"
      @restBtnClick="handleRestBtnClick"
      @searchBtnClick="handleSearchBtnClick"
    />
    <page-content
      ref="pageContentRef"
      :contentConfig="contentConfig"
      pageName="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script setup lang="ts">
import { searchConfig, contentConfig, modalConfig } from './config';
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import usePageSearch from '@/hooks/usePageSearch';
import PageModal from '@/components/page-modal';
import usePageModal from '@/hooks/usePageModal';

const [pageContentRef, handleRestBtnClick, handleSearchBtnClick] = usePageSearch();

const newCallback = () => {
  const item = modalConfig.formItems.find((item) => item.field === 'password');
  if (item) {
    item.isHidden = false;
  }
};
const editCallback = () => {
  const item = modalConfig.formItems.find((item) => item.field === 'password');
  if (item) {
    item.isHidden = true;
  }
};
const [defaultInfo, pageModalRef, handleNewData, handleEditData] = usePageModal(
  newCallback,
  editCallback
);
</script>

<style scoped></style>
