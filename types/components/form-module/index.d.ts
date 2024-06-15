import * as TEl from 'element-plus'
import type { TOptions } from './options'
import type { TtoComputed } from '../../util'
type TLayout = {
  cols?:number
  hideBtn?: boolean
  header?: {

  },
  btn?: {
    
  },
  card?: {
    props:TEl.CardProps,
  }
}

type THeader = {
  title?: string,
}

type TForm = {
  props?: TEl.FormProps,
  events?: TEl.FormEmits
}

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

export type TFormModule = {
  options?: TtoComputed<TOptions>
  layout?: TtoComputed<TLayout>
  form?: TtoComputed<TForm>
  btn?: TtoComputed<TBtn>
  header?: TtoComputed<THeader>
  submit?: (...arg: any[]) => any
  reset?: (...arg: any[]) => any
}

export interface IFormModule {
  options?: TtoComputed<TOptions>
  layout?: TtoComputed<TLayout>
  form?: TtoComputed<TForm>
  btn?: TtoComputed<TBtn>
  header?: TtoComputed<THeader>
  submit?: (...arg: any[]) => any
  reset?: (...arg: any[]) => any
}