import type { TtoComputed } from "../../types/util";
import type { IFormDialog, TDialogConfig } from "../../types/components/form-dialog/index";
import type FormModule from "../form-module/core";
import lodash from 'lodash'

class FormDialog implements IFormDialog {
  static baseOptions: TtoComputed<Partial<IFormDialog>> = {
    formConfig: {
      layout:{
        hideBtn:true
      }
    },
    dialogConfig: {}
  }
  formConfig?: TtoComputed<FormModule>
  dialogConfig?: TtoComputed<TDialogConfig>
  constructor(options: IFormDialog) {
    lodash.merge(this, FormDialog.baseOptions)
    lodash.merge(this.dialogConfig, options.dialogConfig)
    lodash.merge(this.formConfig, options.formConfig)
  }
}

export default FormDialog

