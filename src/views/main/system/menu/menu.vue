<template>
  <div class="menu">
    <page-content :contentConfig="contentConfig" pageName="menu"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyMenu',
});
</script>
<script setup lang="ts">
import { contentConfig } from './config';
import PageContent from '@/components/page-content';
</script>

<style scoped></style>
