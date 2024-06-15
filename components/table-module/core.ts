import type { TtoComputed } from "../../types/util";
import type { ITableModule, TInputs, TColumns,TActions, TTabs, TLayout } from "../../types/components/table-module/index"

class TableModule implements ITableModule {
  getData: (...arg: any[]) => any
  inputs?: TtoComputed<TInputs>
  columns?: TtoComputed<TColumns>
  tabs?: TtoComputed<TTabs>
  actions?: TtoComputed<TActions>
  layout?: TtoComputed<TLayout>
  btns?: TtoComputed<TActions> 
  constructor(options: ITableModule) {
    this.getData = options.getData
    this.inputs = options.inputs
    this.columns = options.columns
    this.tabs = options.tabs
    this.actions = options.actions
    this.layout = options.layout
    this.btns = options.btns
  }
}

export default TableModule