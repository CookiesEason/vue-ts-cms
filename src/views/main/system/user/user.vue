<template>
  <div class="user">
    <hl-form v-bind="config" />
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import HlForm from '@/components/base-ui/form';
import { config } from './config';
</script>

<style scoped></style>
