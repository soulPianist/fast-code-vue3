import type { TElComponent } from "../../FCElement"
import type { TFormModule } from "./index"


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
    addButtonPositon?: 'top center bottom' | 'center bottom' | 'top bottom' | 'top center' | 'center' | 'top' | 'bottom',
    limit?: number,
    disable?: boolean,
    dynamic?:boolean,
    type?: "Object" | "String" | "Number" | "Array"
  },
  item: TOption,
  component: 'fc-list',
}>

type TFormOption = TBaseOption<({
  component: 'fc-form',
} & TFormModule)>

type TElOption = TBaseOption<TElComponent>

export type TOption = TSlotOption | TDynamicOption | TFormOption | TElOption

type TOptions = Array<TOption>