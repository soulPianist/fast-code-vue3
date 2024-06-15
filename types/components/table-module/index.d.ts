import * as TEl from 'element-plus'
import * as TFC from '../../plus'
import type { TElComponent } from '../../FCElement'
import type { TtoComputed } from '../../util'

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

type TActions = Array<{
  label: string,
  props: TEl.ButtonProps,
  hide?: boolean | ((params: any) => boolean),
  action: (...arg: any[]) => any
}>

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

type TColumns = Array<({
  slotName?: string,
  prop: string,
  label: string,
  hide?: boolean,
  props?: TFC.TableColumnProps
})>

export type TTableModule = {
  getData: (...arg: any[]) => any
  inputs?: TtoComputed<TInputs>
  columns?: TtoComputed<TColumns>
  tabs?: TtoComputed<TTabs>
  actions?: TtoComputed<TActions>
  layout?: TtoComputed<TLayout>
  btns?: TtoComputed<TActions>
}

export interface ITableModule {
  getData: (...arg: any[]) => any
  inputs?: TtoComputed<TInputs>
  columns?: TtoComputed<TColumns>
  tabs?: TtoComputed<TTabs>
  actions?: TtoComputed<TActions>
  layout?: TtoComputed<TLayout>
  btns?: TtoComputed<TActions>
}