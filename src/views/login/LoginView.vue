<template>
  <div class="login">
    <LoginPanelVue />
  </div>
</template>

<script setup lang="ts">
import LoginPanelVue from './cpns/LoginPanel.vue';
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
