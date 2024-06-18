import type { TtoComputed } from "../../types/util";
import type { IFormDialog, TDialogConfig } from "../../types/components/form-dialog/index";
import type FormModule from "../form-module/core";
declare class FormDialog implements IFormDialog {
    static baseOptions: TtoComputed<Partial<IFormDialog>>;
    formConfig?: TtoComputed<FormModule>;
    dialogConfig?: TtoComputed<TDialogConfig>;
    constructor(options: IFormDialog);
}
export default FormDialog;
