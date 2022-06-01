<template>
  <div class="user">
    <page-search :searchConfig="config" />
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import { config } from './config';
import PageSearch from '@/components/page-search/src/PageSearch.vue';
</script>

<style scoped></style>
