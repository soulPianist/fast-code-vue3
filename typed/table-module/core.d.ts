import type { TtoComputed } from "../../types/util";
import type { ITableModule, TInputs, TColumns, TActions, TTabs, TLayout } from "../../types/components/table-module/index";
declare class TableModule implements ITableModule {
    getData: (...arg: any[]) => any;
    inputs?: TtoComputed<TInputs>;
    columns?: TtoComputed<TColumns>;
    tabs?: TtoComputed<TTabs>;
    actions?: TtoComputed<TActions>;
    layout?: TtoComputed<TLayout>;
    btns?: TtoComputed<TActions>;
    constructor(options: ITableModule);
}
export default TableModule;
