import { IForm } from '@/components/base-ui/form';

export const searchConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '类别名称',
      placeholder: '请输入类别名称',
      rules: [],
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      rules: [],
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange',
      },
    },
  ],
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' },
  colLayout: { span: 8 },
};

export const contentConfig = {
  title: '类别列表',
  newBtnName: '新建类别',
  propList: [
    { prop: 'name', label: '角色名称', minWidth: '120' },
    { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'create' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'update' },
    { label: '操作', minWidth: '120', slotName: 'handler' },
  ],
  showIndexColumn: true,
  showSelectColumn: true,
};
