import * as TEl from 'element-plus'
import * as TFC from './plus'

export type TAnyEvent = { [key: string]: (...arg: any[]) => any }
export type TAnyProp = { [key: string]: any }

export type TBaseElCom<N, P, E> = {
  props?: Partial<P | TAnyProp>,
  events?: Partial<E | TAnyEvent>,
  component: N
}

export type TElComponent =
  (TBaseElCom<'el-affix', TEl.AffixProps, TEl.AffixEmits>) |
  (TBaseElCom<'el-alert', TEl.AlertProps, TEl.AlertEmits>) |
  (TBaseElCom<'el-form', TEl.FormProps, TEl.FormEmits>) |
  (TBaseElCom<'el-form-item', TEl.FormItemProps, TFC.FormItemEmits>) |
  (TBaseElCom<'el-button', TEl.ButtonProps, TEl.ButtonEmits>) |
  (TBaseElCom<'el-border', TFC.BorderProps, TFC.BorderEmits>) |
  (TBaseElCom<'el-container', TFC.ContainerProps, TFC.ContainerEmits>) |
  (TBaseElCom<'el-icon', TFC.IconProps, TFC.IconEmits>) |
  (TBaseElCom<'el-row', TEl.RowProps, TFC.RowEmits>) |
  (TBaseElCom<'el-link', TEl.LinkProps, TEl.LinkEmits>) |
  (TBaseElCom<'el-text', TEl.TextProps, TFC.TextEmits>) |
  (TBaseElCom<'el-scrollbar', TEl.ScrollbarProps, TEl.ScrollbarEmits>) |
  (TBaseElCom<'el-space', TEl.SpaceProps, TFC.SpaceEmits>) |
  (TBaseElCom<'el-config-provider', TEl.ConfigProviderProps, TFC.ConfigProviderEmits>) |
  (TBaseElCom<'el-autocomplete', TEl.AutocompleteProps, TEl.AutocompleteEmits>) |
  (TBaseElCom<'el-cascader', TEl.CascaderProps, TEl.CascaderEmits>) |
  (TBaseElCom<'el-checkbox', TEl.CheckboxProps, TEl.CheckTagEmits>) |
  (TBaseElCom<'el-color-picker', TEl.ColorPickerProps, TEl.ColorPickerEmits>) |
  (TBaseElCom<'el-date-picker', TEl.DatePickerProps, TFC.DatePickerEmits>) |
  (TBaseElCom<'el-input', TEl.InputProps, TEl.InputEmits>) |
  (TBaseElCom<'el-input-number', TEl.InputNumberProps, TEl.InputNumberEmits>) |
  (TBaseElCom<'el-radio-group', TEl.RadioGroupProps, TEl.RadioGroupEmits>) |
  (TBaseElCom<'el-radio', TEl.RadioProps, TEl.RadioEmits>) |
  (TBaseElCom<'el-rate', TEl.RateProps, TEl.RateEmits>) |
  (TBaseElCom<'el-select', TFC.SelectProps, TFC.SelectEmits>) |
  (TBaseElCom<'el-select-v2', TFC.SelectV2Props, TFC.SelectV2Emits>) |
  (TBaseElCom<'el-slider', TEl.SliderProps, TEl.SliderProps>) |
  (TBaseElCom<'el-switch', TEl.SwitchProps, TEl.SwitchEmits>) |
  (TBaseElCom<'el-time-picker', TFC.TimePickerProps, TFC.TimePickerEmits>) |
  (TBaseElCom<'el-time-select', TFC.TimeSelectProps, TFC.TimeSelectEmits>) |
  (TBaseElCom<'el-transfer', TEl.TransferProps, TEl.TransferEmits>) |
  (TBaseElCom<'el-upload', TEl.UploadProps, TFC.UploadEmits>) |
  (TBaseElCom<'el-avatar', TEl.AvatarProps, TEl.AvatarEmits>) |
  (TBaseElCom<'el-badge', TEl.BadgeProps, TFC.BadgeEmits>) |
  (TBaseElCom<'el-calendar', TEl.CalendarProps, TEl.CalendarEmits>) |
  (TBaseElCom<'el-card', TEl.CardProps, TFC.CardEmits>) |
  (TBaseElCom<'el-carousel', TEl.CarouselProps, TEl.CarouselEmits>) |
  (TBaseElCom<'el-collapse', TEl.CollapseProps, TEl.CollapseEmits>) |
  (TBaseElCom<'el-descriptions', TFC.DescriptionsProps, TFC.DescriptionsEmits>) |
  (TBaseElCom<'el-empty', TEl.EmptyProps, TFC.EmptyEmits>) |
  (TBaseElCom<'el-image', TEl.ImageProps, TEl.ImageEmits>) |
  (TBaseElCom<'el-infinite-scroll', TFC.InfiniteScrollProps, TFC.InfiniteScrollEmits>) |
  (TBaseElCom<'el-pagination', TEl.PaginationProps, TEl.PaginationEmits>) |
  (TBaseElCom<'el-progress', TEl.ProgressProps, TFC.ProgressEmits>) |
  (TBaseElCom<'el-result', TEl.ResultProps, TFC.ResultEmits>) |
  (TBaseElCom<'el-table', TEl.TableProps<any>, TFC.TableEmits>) |
  (TBaseElCom<'el-table-column', TFC.TableColumnProps, TFC.TableColumnEmits>) |
  (TBaseElCom<'el-table-v2', TEl.TableV2Props, TFC.TableV2Emits>) |
  (TBaseElCom<'el-tag', TEl.TagProps, TEl.TagEmits>) |
  (TBaseElCom<'el-timeline', TFC.TimelineProps, TFC.TimelineEmits>) |
  (TBaseElCom<'el-timeline-item', TEl.TimelineItemProps, TFC.TimelineItemEmits>) |
  (TBaseElCom<'el-tree', TFC.TreeProps, TFC.TreeEmits>) |
  (TBaseElCom<'el-tree-select', TFC.TreeSelectProps, TFC.TreeSelectEmits>) |
  (TBaseElCom<'el-tree-v2', TFC.TreeV2Props, TFC.TreeV2Emits>) |
  (TBaseElCom<'el-statistic', TEl.StatisticProps, TFC.StatisticEmits>) |
  (TBaseElCom<'el-backtop', TEl.BacktopProps, TEl.BacktopEmits>) |
  (TBaseElCom<'el-breadcrumb', TEl.BreadcrumbProps, TFC.BreadcrumbEmits>) |
  (TBaseElCom<'el-breadcrumb-item', TEl.BreadcrumbItemProps, TFC.BreadcrumbItemEmits>) |
  (TBaseElCom<'el-dropdown', TFC.DropdownProps, TFC.DropdownEmits>) |
  (TBaseElCom<'el-menu', TEl.MenuProps, TEl.MenuEmits>) |
  (TBaseElCom<'el-page-header', TEl.PageHeaderProps, TEl.PageHeaderEmits>) |
  (TBaseElCom<'el-steps', TEl.StepsProps, TEl.StepsEmits>) |
  (TBaseElCom<'el-step', TEl.StepProps, TFC.StepEmits>) |
  (TBaseElCom<'el-tabs', TEl.TabsProps, TEl.TabsEmits>) |
  (TBaseElCom<'el-tab-pane', TEl.TabPaneProps, TFC.TabPaneEmits>) |
  (TBaseElCom<'el-dialog', TEl.DialogProps, TEl.DialogEmits>) |
  (TBaseElCom<'el-drawer', TEl.DrawerProps, TFC.DrawerEmits>) |
  (TBaseElCom<'el-loading', TFC.LoadingProps, TFC.LoadingEmits>) |
  (TBaseElCom<'el-message', TEl.MessageProps, TEl.MessageEmits>) |
  (TBaseElCom<'el-message-box', TFC.MessageBoxProps, TFC.MessageBoxEmits>) |
  (TBaseElCom<'el-notification', TEl.NotificationProps, TEl.NotificationEmits>) |
  (TBaseElCom<'el-popconfirm', TEl.PopconfirmProps, TEl.PopconfirmEmits>) |
  (TBaseElCom<'el-popover', TEl.PopoverProps, TEl.PopoverEmits>) |
  (TBaseElCom<'el-tooltip', TEl.ElTooltipProps, TFC.ElTooltipEmits>) |
  (TBaseElCom<'el-divider', TEl.DividerProps, TFC.DividerEmits>)