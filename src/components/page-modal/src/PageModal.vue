<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center destroy-on-close>
      <HlForm v-bind="modalConfig" v-model="formData"></HlForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import HlForm from '@/components/base-ui/form';
import { ref, defineProps, defineExpose, watch } from 'vue';
const props = defineProps<{
  modalConfig: any;
  defaultInfo: any;
}>();
const dialogVisible = ref(false);
const formData = ref<any>({});

watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`];
    }
    // formData.value = newValue;
  }
);

defineExpose({
  dialogVisible,
});
</script>

<style scoped></style>
