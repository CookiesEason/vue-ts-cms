import { IForm } from '@/components/base-ui/form';

export const contentConfig = {
  title: '部门列表',
  propList: [
    { prop: 'name', label: '部门名称', minWidth: '120' },
    { prop: 'leader', label: '部门领导', minWidth: '120' },
    { prop: 'parentId', label: '上级部门', minWidth: '120' },
    { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'create' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'update' },
    { label: '操作', minWidth: '120', slotName: 'handler' },
  ],
  newBtnName: '新建部门',
  showIndexColumn: true,
  showSelectColumn: true,
};

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称',
      rules: [],
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导',
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

export const modalConfig: IForm = {
  title: '新建部门',
  formItems: [
    { field: 'name', type: 'input', label: '部门名称', placeholder: '请输入部门名称' },
    {
      field: 'parentId',
      type: 'select',
      label: '上级部门',
      placeholder: '请选择上级部门',
      options: [],
    },
    { field: 'leader', type: 'input', label: '领导名称', placeholder: '请输入领导名称' },
  ],
  colLayout: { span: 24 },
  itemStyle: { padding: 0 },
};
