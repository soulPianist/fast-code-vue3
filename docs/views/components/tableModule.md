# TableModule 列表模块
列表模块，展示列表数据。

## Props 参数
| 属性名  | 说明         | 类型                                                                      | 可选值 | 默认值 |
| ------- | ------------ | ------------------------------------------------------------------------- | ------ | ------ |
| getData | 获取数据，第一个参数为表单筛选数据 | (...arg: any[]) => any           | -      | -      |
| inputs  | 搜索项   | [TtoComputed](./../common/TtoComputed)[\<TInputs\>](#TInputs)             | -      | -      |
| columns  | 列表项  | [TtoComputed](./../common/TtoComputed)[\<TColumns\>](#TColumns) | -      | -      |
| tabs     | tab切换   | [TtoComputed](./../common/TtoComputed)[\<TTabs\>](#TTabs) | -      | -      |
| actions  | 数据操作  | [TtoComputed](./../common/TtoComputed)[\<TActions\>](#TActions) | -      | -      |
| layout  | table布局  | [TtoComputed](./../common/TtoComputed)[\<TLayout\>](#TLayout) | -      | -      |
| btns   | 多按钮配置  | [TtoComputed](./../common/TtoComputed)[\<TActions\>](#TActions) | -      | -      |

## Events 事件

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| -      | -    | -        |


## Methods 方法
| 事件名   | 说明     | 参数              |
| -------- | -------- | ----------------- |
| setStatus | 设置列表状态 | - |
| search    | 搜索 | -    |
| reset   | 重置 | -     |
| antiShakeSearch   | 防抖搜索 | - |

## Slots 插槽

## 类型
### Class类
```` typescript
import type { TtoComputed } from "../../types/util";
import type { ITableModule, TInputs, TColumns, TActions, TTabs, TLayout } from "../../types/components/table-module/index";
declare class TableModule implements ITableModule {
    getData: (...arg: any[]) => any;
    inputs?: TtoComputed<TInputs>;
    columns?: TtoComputed<TColumns>;
    tabs?: TtoComputed<TTabs>;
    actions?: TtoComputed<TActions>;
    layout?: TtoComputed<TLayout>;
    btns?: TtoComputed<TActions>;
    constructor(options: ITableModule);
}
export default TableModule;
````
### TInputs {#TInputs}
```` typescript
import type { TElComponent } from '../../FCElement'
//element-plus 所有的组件
type TInputs = Array<((TElComponent & {
  label: string,
  prop: string,
  hide?: boolean
}) | {
  label: string,
  prop: string,
  hide?: boolean,
  component: 'slot',
})>
````

### TColumns {#TColumns}
```` typescript
import * as TFC from '../../plus' 
// TFC是element-plus的组件没有暴露出来的类型，本组件库补充写的类型
type TColumns = Array<({
  slotName?: string,
  prop: string,
  label: string,
  hide?: boolean,
  props?: TFC.TableColumnProps
})>
````

### TTabs {#TTabs}
```` typescript
import * as TEl from 'element-plus'
type TTabs = {
  events?: TEl.TabsEmits
  props?: TEl.TabsProps
  key: string,
  options: Array<{
    label: string,
    value: string | number,
    props?: TEl.TabPaneProps,
    events?: TEl.TabPaneEmits
  }>
}
````
### TActions {#TActions}
```` typescript
import * as TEl from 'element-plus'
type TActions = Array<{
  label: string,
  props: TEl.ButtonProps,
  hide?: boolean | ((params: any) => boolean),
  action: (...arg: any[]) => any
}>
````

### TLayout {#TLayout}
```` typescript
type TLayout = {
  table?: {
    events?: TEl.TableEmits,
    props?: TEl.TableProps
  },
  actions?: {
    props?: TEl.TableProps
  },
  header?: {
    title?: string
  },
  pagination?: {
    hide?: boolean,
    props?: TEl.PaginationProps,
    events?: TEl.PaginationEmits
  },
  search?: {
    row?: boolean,
    form?:{
      cols?:number,
      props?:TEl.FormProps,
      events?:TEl.FormEmits
    },
    searchBtn?: {
      label?: string
    } & TEl.ButtonProps,
    resetBtn?: {
      label?: string
    } & TEl.ButtonProps
  }
}
````


