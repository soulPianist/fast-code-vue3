import type { TtoComputed } from "../../../types/util";
import * as TEl from 'element-plus'

export type TDialogConfig = {
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
  },
}

export type TFormDialog = {
  formConfig?:TtoComputed<FormModule>,
  dialogConfig?:TtoComputed<TDialogConfig>
}

export interface IFormDialog {
  formConfig?:TtoComputed<FormModule>,
  dialogConfig?:TtoComputed<TDialogConfig>
}