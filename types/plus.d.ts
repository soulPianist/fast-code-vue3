import type { Component } from "vue"

export type FormItemEmits = {
  //无
}
//----------------------
export type BorderProps = {
  //无
}

export type BorderEmits = {
  //无
}
//----------------------
export type ContainerProps = {
  direction?: 'horizontal' | 'vertical'
}

export type ContainerEmits = {
  //无
}
//-----------------------
export type IconProps = {
  //无
}

export type IconEmits = {
  //无
}
//------------------------
export type RowEmits = {
  //无
}
//------------------------
export type TextEmits = {
  //无
}
//------------------------
export type SpaceEmits = {
  //无
}
//------------------------
export type ConfigProviderEmits = {
  //无
}
//------------------------
export type DatePickerEmits = {
  change?: (val: any) => any
  blur?: (e: FocusEvent) => any
  focus?: (e: FocusEvent) => any
  'calendar-change'?: (val: [Date, Date]) => any
  'panel-change'?: (date:any, mode:any, view:any) => any
  'visible-change'?: (visibility: boolean) => any
}
//------------------------
export type SelectProps = {
  'model-value'?: string | number | boolean | object | any[]
  multiple?: boolean
  disabled?: boolean
  'value-key'?: string
  size?: '' | 'large' | 'default' | 'small'
  clearable?: boolean
  'collapse-tags'?: boolean
  'collapse-tags-tooltip'?: boolean
  'multiple-limit'?: number
  name?: string
  effect?: 'dark' | 'light' | string
  // ...
}
export type SelectEmits = {
  blur?: (e: FocusEvent) => any
  change?: (val: any) => any
  clear?: (e: MouseEvent) => any
  focus?: (e: FocusEvent) => any
  'remove-tag': (tag: any) => any
  'visible-change'?: (visible: boolean) => any
}
//------------------------
export type SelectV2Props = {
  'model-value'?: string | number | boolean | object | any[]
  options: any[]
  multiple?: boolean
  disabled?: boolean
  props?: object
  'value-key'?: string
  size?: '' | 'large' | 'default' | 'small'
  clearable?: boolean
  'collapse-tags'?: boolean
  'collapse-tags-tooltip'?: boolean
  'multiple-limit'?: number
  name?: string
  'clear-icon'?: string | Component
  effect?: string
  'max-collapse-tags'?: number
  'no-data-text'?: string,
  'popper-class'?: string
  'popper-append-to-body'?: boolean
  'popper-options'?: object
  autocomplete?: string
  placeholder?: string
  filterable?: boolean
  'allow-create'?: boolean,
  'reserve-keyword'?: boolean
  teleported?: boolean
  persistent?: boolean
  'automatic-dropdown'?: boolean
  height?: number,
  'item-height'?: number,
  'scrollbar-always-on'?: boolean
  'remote'?: boolean
  'remote-method'?: (keyword: string) => any
  'validate-event'?: boolean
  placement?: '' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
}
export type SelectV2Emits = {
  clear?: () => any,
  blur?: (e: FocusEvent) => any
  change?: (val: any) => any
  focus?: (e: FocusEvent) => any
  'remove-tag': (tag: any) => any
  'visible-change'?: (visible: boolean) => any
}
//------------------------
export type TimePickerProps = {
  'format'?: string
  readonly?: boolean
  disabled?: boolean
  size?: '' | 'large' | 'default' | 'small'
  'clearable'?: boolean
  editeble?: boolean
  'start-placeholder'?: string
  'end-placeholder'?: string
  'range-separator'?: string
  'is-range'?: boolean
  'arrow-control'?: boolean
  'popper-class'?: string
  'default-value'?: Date | object | [Date, Date]
  id?: string | object | [string, string]
  name?: string,
  'label'?: string
  'prefix-icon'?: string | Component
  'clear-icon'?: string | Component
  'disabled-hours'?: () => any
  'disabled-minutes'?: () => any
  'disabled-seconds'?: () => any
  'is-arrow-control'?: boolean
  'model-value'?: string | number | object | Date | [Date, Date] | [string, string] | [number, number]
  'value-format'?: string
  'placeholder'?: string
  'teleported'?: boolean
  'tabindex'?: string | number
}
export type TimePickerEmits = {
  change?: (val: number | string | Date | [number, number] | [string, string] | [Date, Date]) => void
  blur?: (e: FocusEvent) => any
  focus?: (e: FocusEvent) => any
  'visible-change'?: (visibility: boolean) => any
}
//-------------------------
export type TimeSelectProps = {
  'model-value'?: string
  disabled?: boolean
  size?: '' | 'large' | 'default' | 'small'
  'clearable'?: boolean
  editeble?: boolean
  'placeholder'?: string,
  name?: string
  effect?: string | 'dark' | 'light'
  'prefix-icon'?: string | Component
  'clear-icon'?: string | Component
  start?: string
  end?: string
  step?: string
  'min-time'?: string
  'max-time'?: string
  format?: string
}
export type TimeSelectEmits = {
  change?: (val: string) => void
  blur?: (e: FocusEvent) => any
  focus?: (e: FocusEvent) => any
}
//-------------------------
export type UploadEmits = {
  //无
} //element-plus el-upload
//-------------------------
export type BadgeEmits = {
  //无
} //element-plus 
//-------------------------
export type CardEmits = {
  //无
}
//-------------------------
export type DescriptionsProps = {
  'border'?: boolean,
  'column'?: number,
  'direction'?: 'horizontal' | 'vertical',
  'size'?: '' | 'large' | 'small' | 'default'
  'title'?: string,
  'extra'?: string,
} //element-plus descriptions

export type DescriptionsEmits = {
  //无
}
//-------------------------
export type EmptyEmits = {
  //无
}
//-------------------------
export type InfiniteScrollProps = {
  //无
}

export type InfiniteScrollEmits = {
  //无
}
//------------------------
export type ProgressEmits = {
  //无
}
//------------------------
export type ResultEmits = {
  //无
}
//------------------------
export type TableEmits = {
  clearSelection?: () => any,
  getSelectionRows?: () => any,
  toggleRowSelection?: (row: any, selected: any) => any,
  toggleAllSelection?: () => any,
  toggleRowExpansion?: (row: any, expanded: any) => any,
  setCurrentRow?: (row: any) => any,
  clearSort?: () => any,
  clearFilter?: (columnKeys: any) => any,
  doLayout?: () => any,
  sort: (prop: string, order: string) => any,
  scrollTo?: (x: number | any, y: number) => any,
  setScrollTop?: (top: any) => any
  setScrollLeft?: (left: any) => any
}

//------------------------
export type TableColumnProps = {
  type?: string,
  index?: number | ((index: any) => any),
  prop?: string,
  label?: string,
  'column-key'?: string,
  width?: string,
  formatter?: (row: any, column: any, cellValue: any, index: any) => any,
  minWidth?: string,
  renderHeader?: Function,
  sortable?: boolean,
  sortBy?: string,
  sortOrders?: any[],
  sortMethod?: Function,
  resizable?: boolean,
  fixed?: boolean,
  align?: string,
  headerAlign?: string,
  showOverflowTooltip?: boolean,
  className?: string
  labelClassName?: string,
  selectable?: (row: any, index: any) => any,
  'reserve-selection'?: boolean,
  filters?: Array<{ text: string, value: string }>,
  filterMethod?: (value: any, row: any, column: any) => any,
  'filter-placement'?: string,
  'filter-value'?: any[],
  'filter-multiple'?: boolean
}

export type TableColumnEmits = {}
//------------------------
export type TableV2Emits = {
  'column-sort'?: (params: any) => any,
  'expanded-rows-change'?: (params: Array<KeyType>) => any,
  'end-reached'?: () => any,
  scroll?: (params: any) => any,
  'rows-rendered'?: (params: any) => any,
  'row-expand'?: (params: any) => any,
  'row-event-handlers'?: (params: any) => any,
}
//--------------------------
export type TimelineProps = {}

export type TimelineEmits = {}
//--------------------------
export type TimelineItemEmits = {}
//--------------------------
export type TreeProps = {
  'data'?: any,
  emptyText?: string,
  'node-key'?: string,
  'props'?: any,
  'render-after-expand'?: boolean,
  'load'?: (node: any, resolve: any) => any,
  'render-content'?: (h: any, node: any) => any,
  'highlight-current'?: boolean,
  'default-expand-all'?: boolean,
  expandOnClickNode?: boolean,
  checkOnClickNode?: boolean,
  'auto-expand-parent'?: boolean,
  'default-expanded-keys': any[],
  'default-checked-keys': any[],
  'show-checkbox'?: boolean,
  checkStrictly?: boolean,
  'current-node-key'?: string,
  filterNodeMethod?: (value: any, data: any, node: any) => any,
  accordion?: boolean,
  indent?: number,
  icon?: string | Component,
  'lazy'?: boolean,
  draggable?: boolean,
  'allow-drag'?: (node: any) => any
  'allow-drop'?: (draggingNode: any, dropNode: any, type: any) => any,
}

export type TreeEmits = {
  'node-click'?: (...args: any[]) => any,
  'node-contextmenu'?: (...args: any[]) => any,
  'check-change'?: (...args: any[]) => any,
  check?: (...args: any[]) => any,
  'current-change'?: (...args: any[]) => any,
  'node-expand'?: (...args: any[]) => any,
  'node-collapse'?: (...args: any[]) => any,
  'node-drag-start'?: (...args: any[]) => any,
  'node-drag-enter'?: (...args: any[]) => any,
  'node-drag-leave'?: (...args: any[]) => any,
  'node-drag-over'?: (...args: any[]) => any,
  'node-drag-end'?: (...args: any[]) => any,
  'node-drop'?: (...args: any[]) => any,
}
//--------------------------
export type TreeSelectProps = Partial<TreeProps & SelectProps>
export type TreeSelectEmits = Partial<TreeEmits & SelectEmits>
//--------------------------
export type TreeV2Props = {
  'data'?: any[]
  'empty-text'?: string
  'props'?: any
  'highlight-current'?: boolean
  'expand-on-click-node'?: boolean
  'check-on-click-node'?: boolean
  'default-expanded-keys'?: any[]
  'show-checkbox'?: boolean
  'check-strictly'?: boolean
  'default-checked-keys'?: any[]
  'current-node-key'?: string | number
  'filter-method'?: (value: any, data: any) => any
  'indent'?: number
  'icon'?: string | Component
  'item-size': number
}

export type TreeV2Emits = {
  'node-click'?: (...args: any[]) => any,
  'node-contextmenu'?: (...args: any[]) => any,
  'check-change'?: (...args: any[]) => any,
  check?: (...args: any[]) => any,
  'current-change'?: (...args: any[]) => any,
  'node-expand'?: (...args: any[]) => any,
  'node-collapse'?: (...args: any[]) => any,
}
//--------------------------
export type StatisticEmits = {}
//--------------------------
export type BreadcrumbEmits = {}

//--------------------------
export type BreadcrumbItemEmits = {}
//-------------------------
export type DropdownProps = {
'type'?:string
'size'?:'large' | 'default' | 'small'
'max-height'?:string | number
'split-button'?:boolean
'disabled'?:boolean
'placement'?:'top'| 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
'trigger'?:'hover'| 'click' | 'contextmenu'
'hide-on-click'?:boolean
'show-timeout'?:number
'hide-timeout'?:string
"role"?:string
'tabindex'?:number
'popper-class'?:string
'popper-options'?:any
'teleported'?:boolean
}

export type DropdownEmits = {
  'click'?: (...args: any[]) => any,
  'command'?: (...args: any[]) => any,
  'visible-change'?: (...args: any[]) => any,
}
//--------------------------
export type DrawerEmits = {
  'open'?: (...args: any[]) => any,
  'opened'?: (...args: any[]) => any,
  'close'?: (...args: any[]) => any,
  'closed'?: (...args: any[]) => any,
}

//--------------------------
export type StepEmits = {}

//--------------------------
export type TabPaneEmits = {}
//--------------------------
export type LoadingProps = {}
export type LoadingEmits = {}
//--------------------------
export type MessageBoxProps = {}
export type MessageBoxEmits = {}
//--------------------------
export type ElTooltipEmits = {}
//--------------------------
export type DividerEmits = {}
