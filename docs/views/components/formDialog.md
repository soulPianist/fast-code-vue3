# FormDialog 表单弹窗
弹出表单弹窗，支持表单验证。

## Props 参数
| 属性名        | 说明          | 类型  | 可选值 | 默认值 |
| ------------- | ------------- | ----- | ------ | ------ |
| formConfig     | 表单配置 | [TtoComputed](./../common/TtoComputed)[\<FormModule\>](./formModule) | -  |  - |
| dialogConfig      | 弹窗配置      |  [TtoComputed](./../common/TtoComputed)[\<TDialogConfig\>](#TDialogConfig) | -  | - |

## Events 事件

| 事件名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| reseted | 重置后的回调 | - |
| submited | 表单提交后的回调 | 表单数据 |
| closed | 弹窗关闭时的回调 | - |


## Methods 方法
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| open | 打开弹窗 | any |
| close | 关闭弹窗 | - |
| reset | 重置表单 | - |
| submit | 提交表单 | - |

## Slots 插槽

## 类型
### Class类
```` typescript
declare class FormDialog implements IFormDialog {
    formConfig?: TtoComputed<FormModule>;
    dialogConfig?: TtoComputed<TDialogConfig>;
    constructor(options: IFormDialog);
}
````
### TDialogConfig {#TDialogConfig}
```` typescript
import * as TEl from 'element-plus'

type TDialogConfig = {
  props?:TEl.DialogProps,
  events?:TEl.DialogEmits,
  resetBtn?:{
    hide?:boolean,
    label?:string
    props?:TEl.ButtonProps,
    events?:TEl.ButtonEmits
  },
  submitBtn?:{
    hide?:boolean,
    label?:string
    props?:TEl.ButtonProps,
    events?:TEl.ButtonEmits
  }
}
````
