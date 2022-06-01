<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in props.breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IBreadcrumb } from '../type';

const props = defineProps<{
  breadcrumbs: IBreadcrumb[];
}>();
</script>

<style scoped></style>
