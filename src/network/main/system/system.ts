import { IDataType } from './../../type';
import Request from '../../index';

export function getPageListData(url: string, queryInfo: any) {
  return Request.post<IDataType>({
    url: url,
    data: queryInfo,
  });
}
