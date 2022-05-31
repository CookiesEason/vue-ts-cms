<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick">
      <ArrowRightBold v-if="isFold" />
      <ArrowLeftBold v-else />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import UserInfo from './UserInfo.vue';

const emit = defineEmits(['foldChange']);
const isFold = ref(false);
const handleFoldClick = () => {
  isFold.value = !isFold.value;
  emit('foldChange', isFold.value);
};
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
