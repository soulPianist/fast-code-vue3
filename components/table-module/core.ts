import type { TtoComputed } from "../../types/util";
import type { ITableModule, TInputs, TColumns,TActions, TTabs, TLayout } from "../../types/components/table-module/index"
import lodash from "lodash"
class TableModule implements ITableModule {
  static baseOptions: TtoComputed<Partial<ITableModule>> = {}
  getData: (...arg: any[]) => any
  inputs?: TtoComputed<TInputs>
  columns?: TtoComputed<TColumns>
  tabs?: TtoComputed<TTabs>
  actions?: TtoComputed<TActions>
  layout?: TtoComputed<TLayout>
  btns?: TtoComputed<TActions> 
  constructor(options: ITableModule) {
    lodash.merge(this, TableModule.baseOptions)
    lodash.merge(this.getData, options.getData)
    lodash.merge(this.inputs, options.inputs)
    lodash.merge(this.columns, options.columns)
    lodash.merge(this.tabs, options.tabs)
    lodash.merge(this.actions, options.actions)
    lodash.merge(this.layout, options.layout)
    lodash.merge(this.btns, options.btns)
    // this.getData = options.getData
    // this.inputs = options.inputs
    // this.columns = options.columns
    // this.tabs = options.tabs
    // this.actions = options.actions
    // this.layout = options.layout
    // this.btns = options.btns
  }
}

export default TableModule