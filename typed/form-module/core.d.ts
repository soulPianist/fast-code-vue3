import type { TObjToComputed, TtoComputed } from "../../types/util";
import type { IFormModule, TBtn, TForm, THeader, TLayout } from "../../types/components/form-module/index";
import type { TOption, TOptions } from "../../types/components/form-module/options";
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
export default FormModule;
