import type { TObjToComputed, TtoComputed } from "../../types/util";
import type { IFormModule, TBtn, TForm, THeader, TLayout } from "../../types/components/form-module/index";
import type { TOption, TOptions } from "../../types/components/form-module/options";
import { unref } from "vue";
import lodash from 'lodash'

class FormModule implements IFormModule {
  static baseOptions: TtoComputed<Partial<IFormModule>> = {};
  options?: TtoComputed<TOptions> = [];
  layout?: TtoComputed<TLayout> = {};
  form?: TtoComputed<TForm> = {};
  btn?: TtoComputed<TBtn> = {};
  header?: TtoComputed<THeader> = {};
  submit?: (...arg: any[]) => any
  reset?: (...arg: any[]) => any
  constructor(options: IFormModule) {
    lodash.merge(this, FormModule.baseOptions)
    lodash.merge(this.options, options.options)
    lodash.merge(this.layout, options.layout)
    lodash.merge(this.form, options.form)
    lodash.merge(this.btn, options.btn)
    lodash.merge(this.header, options.header)
    lodash.merge(this.submit, options.submit)
    lodash.merge(this.reset, options.reset)
  }
  getOption(prop: string): TObjToComputed<TOption> | undefined {
    const options = unref(this.options)
    if (options?.length) {
      // @ts-ignore: 类型实例化过深，且可能无限。
      return options?.find(item => unref(item)?.prop === prop)
    }
    return
  }
}

export default FormModule