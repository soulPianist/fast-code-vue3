import type { TtoComputed } from "../../../types/util";
import * as TEl from 'element-plus'
import { IFormModule } from "../form-module";

export type TDialogConfig = {
  props?: Partial<TEl.DialogProps>,
  events?:Partial<TEl.DialogEmits>,
  resetBtn?:{
    hide?:boolean,
    label?:string
    props?:Partial<TEl.ButtonProps>,
    events?:Partial<TEl.ButtonEmits>
  },
  submitBtn?:{
    hide?:boolean,
    label?:string
    props?:Partial<TEl.ButtonProps>,
    events?:Partial<TEl.ButtonEmits>
  },
}

export type TFormDialog = {
  formConfig?:TtoComputed<IFormModule>,
  dialogConfig?:TtoComputed<TDialogConfig>
}

export interface IFormDialog {
  formConfig?:TtoComputed<IFormModule>,
  dialogConfig?:TtoComputed<TDialogConfig>
}