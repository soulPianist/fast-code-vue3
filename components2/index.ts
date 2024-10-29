import FCForm from './form-module/index.vue'
import FCTable from './table-module/index.vue'
import FCFormDialog from './form-dialog/index.vue'
import type { App } from 'vue';

export {
  FCForm,
  FCTable,
  FCFormDialog
}

const install = (app: App<Element>) => {
  app.component('FCForm', FCForm)
  app.component('FCTable', FCTable)
  app.component('FCFormDialog', FCFormDialog)
}

export default {
  install
}