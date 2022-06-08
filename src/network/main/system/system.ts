import { IDataType } from './../../type';
import Request from '../../index';

export function getPageListData(url: string, queryInfo: any) {
  return Request.post<IDataType>({
    url: url,
    data: queryInfo,
  });
}

export function deletePageDataById(url: string) {
  return Request.delete<IDataType>({
    url,
  });
}

export function createPageData(url: string, newData: any) {
  return Request.post<IDataType>({
    url: url,
    data: newData,
  });
}

export function editPageData(url: string, editData: any) {
  return Request.patch<IDataType>({
    url: url,
    data: editData,
  });
}
