import * as TEl from 'element-plus'
import * as TFC from '../../plus'
import type { TElComponent } from '../../FCElement'
import type { TtoComputed } from '../../util'

type TLayout = {
  table?: {
    events?: Partial<TEl.TableEmits>,
    props?: Partial<TEl.TableProps>
  },
  actions?: {
    props?: Partial<TEl.TableProps>
  },
  header?: {
    title?: string
  },
  pagination?: {
    hide?: boolean,
    props?: Partial<TEl.PaginationProps>,
    events?: Partial<TEl.PaginationEmits>
  },
  search?: {
    row?: boolean,
    form?:{
      cols?:number,
      props?:Partial<TEl.FormProps>,
      events?:Partial<TEl.FormEmits>
    },
    searchBtn?: {
      label?: string
    } & Partial<TEl.ButtonProps>,
    resetBtn?: {
      label?: string
    } & Partial<TEl.ButtonProps>
  }
}

type TTabs = {
  events?: Partial<TEl.TabsEmits>
  props?: Partial<TEl.TabsProps>
  key: string,
  options: Array<{
    label: string,
    value: string | number,
    props?: Partial<TEl.TabPaneProps>,
    events?: Partial<TEl.TabPaneEmits>
  }>
}

type TActions = Array<{
  label: string,
  props?: Partial<TEl.ButtonProps>,
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
  props?:Partial<TFC.TableColumnProps>
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