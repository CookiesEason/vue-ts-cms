<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick">
      <ArrowRightBold v-if="isFold" />
      <ArrowLeftBold v-else />
    </el-icon>
    <div class="content">
      <breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue';
import { useStore } from '@/store';
import UserInfo from './UserInfo.vue';
import Breadcrumb from '@/components/base-ui/breadcrumb';
import { pathMapBreadcrumbs } from '@/utils/map-to-all';
import { useRoute } from 'vue-router';

const emit = defineEmits(['foldChange']);
const store = useStore();
const route = useRoute();
const isFold = ref(false);
const handleFoldClick = () => {
  isFold.value = !isFold.value;
  emit('foldChange', isFold.value);
};

const userMenus = store.state.loginModule.userMenus;
const breadcrumbs = computed(() => pathMapBreadcrumbs(userMenus, route.path));
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
