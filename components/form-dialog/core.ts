import type { TtoComputed } from "../../types/util";
import type { IFormDialog,TDialogConfig } from "../../types/components/form-dialog/index";
import type FormModule from "../form-module/core";

class FormDialog implements IFormDialog {
  formConfig?:TtoComputed<FormModule>
  dialogConfig?:TtoComputed<TDialogConfig>
  constructor(options:IFormDialog){
    this.dialogConfig = options.dialogConfig
    this.formConfig = options.formConfig
  }
}

export default FormDialog