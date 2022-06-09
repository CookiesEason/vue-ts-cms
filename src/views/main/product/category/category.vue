<template>
  <div class="category">
    <page-search :searchConfig="searchConfig" />
    <page-content
      ref="pageContentRef"
      pageName="category"
      :contentConfig="contentConfig"
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import { searchConfig, contentConfig } from './config';
</script>

<style scoped></style>
