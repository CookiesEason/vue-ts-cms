<template>
  <div class="login-panel">
    <h1 class="title">Vue3.2 + TS 后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginAccount from './LoginAccount.vue';
import LoginPhone from './LoginPhone.vue';

import localCache from '@/utils/cache';

let currentTab = ref('account');
let isKeepPassword = ref(localCache.getCache('isKeepPassword') ?? false);
const accountRef = ref<InstanceType<typeof LoginAccount>>();
const phoneRef = ref<InstanceType<typeof LoginPhone>>();

const handleLoginClick = () => {
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isKeepPassword.value);
  } else {
    console.log('手机登录', phoneRef);
  }
};
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 400px;

  .title {
    text-align: center;
  }

  .custom-tabs-label {
    .el-icon {
      vertical-align: middle;
    }
  }

  .custom-tabs-label {
    span {
      vertical-align: middle;
      margin-left: 4px;
    }
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
