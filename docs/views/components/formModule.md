# FormModule 表单模块
表单，支持表单验证。

## Props 参数
| 属性名  | 说明         | 类型                                                                      | 可选值 | 默认值 |
| ------- | ------------ | ------------------------------------------------------------------------- | ------ | ------ |
| options | 各子组件配置 | [TtoComputed](./../common/TtoComputed)[\<TOptions\>](#TOptions)           | -      | -      |
| layout  | 布局配置     | [TtoComputed](./../common/TtoComputed)[\<TLayout\>](#TLayout)             | -      | -      |
| form    | 表单整体配置     | [TtoComputed](./../common/TtoComputed)[\<TForm\>](#TForm) | -      | -      |
| btn     | 按钮配置     | [TtoComputed](./../common/TtoComputed)[\<TBtn\>](#TBtn) | -      | -      |
| header  | 表单头配置     | [TtoComputed](./../common/TtoComputed)[\<THeader\>](#THeader) | -      | -      |
| submit  | 提交按钮事件，会先表单验证(目前第一个参数为表单数据，不要求返回值)  | (...arg: any[]) => any | -      | -      |
| reset   | 重置按钮事件(目前无参数，不要求返回值)  | (...arg: any[]) => any | -      | 重置表单的方法      |

## Events 事件

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| -      | -    | -        |


## Methods 方法
| 事件名   | 说明     | 参数              |
| -------- | -------- | ----------------- |
| validate | 关闭弹窗 | callback:Function |
| reset    | 重置表单 | -                 |
| submit   | 提交表单 | -                 |

## Slots 插槽

## 类型
### Class类
```` typescript
declare class FormModule implements IFormModule {
    options?: TtoComputed<TOptions>;
    layout?: TtoComputed<TLayout>;
    form?: TtoComputed<TForm>;
    btn?: TtoComputed<TBtn>;
    header?: TtoComputed<THeader>;
    submit?: (...arg: any[]) => any;
    reset?: (...arg: any[]) => any;
    constructor(options: IFormModule);
    getOption(prop: string): TObjToComputed<TOption> | undefined;
}
````
### TOptions {#TOptions}
```` typescript
import type { TElComponent } from "../../FCElement" //el-element-plus所有组件
import type { TFormModule } from "./index.d.ts" //表单配置

type TBaseOption<T> = T & {
  prop: string,
  label?: string,
  topText?: string,
  beforText?: string,
  afterText?: string,
  bottomText?: string,
  props?:Record<string,any>,
  events?:Record<string,any>,
  itemProps?:Record<string,any>,
  itemEvents?:Record<string,any>,
  hide?:(...arg:any[])=>any
}

type TSlotOption = TBaseOption<{
  component: 'slot',
  slotName: string
}>

type TDynamicOption = TBaseOption<{
  props?: {
    border?: boolean,
    addTypes?: string,
    limit?: number,
    disable?: boolean,
    dynamic?:boolean,
    type?: string
  },
  item: TOption,
  component: 'fc-list',
}>

type TFormOption = TBaseOption<({
  component: 'fc-form',
} & TFormModule)>

type TElOption = TBaseOption<TElComponent>

type TOption = TSlotOption | TDynamicOption | TFormOption | TElOption

type TOptions = Array<TOption>
````

### TLayout {#TLayout}
```` typescript
type TLayout = {
  cols?:number //默认值1
  hideBtn?: boolean //默认值false
  header?: {

  },
  btn?: {
    
  },
  card?: {
    props:TEl.CardProps,
  }
}
````

### TForm {#TForm}
```` typescript
import * as TEl from 'element-plus'
type TForm = {
  props?: TEl.FormProps,
  events?: TEl.FormEmits
}
````
### TBtn {#TBtn}
```` typescript
import * as TEl from 'element-plus'
type TBtn = {
  submit?: {
    hide?: boolean,
    title?: string,
    action: (...arg: any[]) => any,
    props?: TEl.ButtonProps
  },
  reset?: {
    hide?: boolean,
    title?: string,
    action?: (...arg: any[]) => any,
    props?: TEl.ButtonProps
  }
}
````

### THeader {#THeader}
```` typescript
type THeader = {
  title?: string,
}
````


