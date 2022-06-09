import PageModal from '@/components/page-modal';
import { ref, Ref } from 'vue';

type CallbackType = (item?: any) => void;

export default function usePageModal(
  newCallback?: CallbackType,
  editCallback?: CallbackType
): [Ref<any>, Ref<any>, () => void, (queryInfo: any) => void] {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const handleNewData = () => {
    defaultInfo.value = {};
    if (pageModalRef.value) pageModalRef.value.dialogVisible = true;
    newCallback && newCallback();
  };
  const defaultInfo = ref({});
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item };
    if (pageModalRef.value) pageModalRef.value.dialogVisible = true;
    editCallback && editCallback(item);
  };
  return [defaultInfo, pageModalRef, handleNewData, handleEditData];
}
