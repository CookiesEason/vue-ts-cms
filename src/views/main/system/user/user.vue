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
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import { searchConfig, contentConfig } from './config';
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import usePageSearch from '@/hooks/usePageSearch';

const [pageContentRef, handleRestBtnClick, handleSearchBtnClick] = usePageSearch();
</script>

<style scoped></style>
