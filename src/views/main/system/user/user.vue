<template>
  <div class="user">
    <page-search :searchConfig="searchConfig" />
    <page-content :contentConfig="contentConfig" pageName="user"></page-content>
  </div>
</template>

<script setup lang="ts">
import { searchConfig, contentConfig } from './config';
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
</script>

<style scoped></style>
