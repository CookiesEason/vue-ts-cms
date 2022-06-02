<template>
  <div class="role">
    <page-search :searchConfig="searchConfig" />
    <page-content :content-config="contentConfig" page-name="role"></page-content>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content';
import PageSearch from '@/components/page-search';
import { searchConfig, contentConfig } from './config';
</script>

<style scoped></style>
