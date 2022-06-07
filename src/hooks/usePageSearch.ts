import PageContent from '@/components/page-content';
import { Ref, ref } from 'vue';

export default function usePageSearch(): [Ref<any>, () => void, (queryInfo: any) => void] {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();

  const handleRestBtnClick = () => {
    pageContentRef.value?.getPagData();
  };
  const handleSearchBtnClick = (queryInfo: any) => {
    pageContentRef.value?.getPagData(queryInfo);
  };
  return [pageContentRef, handleRestBtnClick, handleSearchBtnClick];
}
