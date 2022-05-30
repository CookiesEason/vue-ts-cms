<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick">
      <ArrowRightBold v-if="isFold" />
      <ArrowLeftBold v-else />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['foldChange']);
const isFold = ref(false);
const handleFoldClick = () => {
  isFold.value = !isFold.value;
  emit('foldChange', isFold.value);
};
</script>

<style scoped lang="less"></style>
