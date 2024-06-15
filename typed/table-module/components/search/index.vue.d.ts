import lodash from 'lodash';
import type { ITableModule } from '../../../../types/components/table-module/index';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<ITableModule & {
    modelValue: Record<string, any>;
}>, {
    reset: () => Promise<void>;
    search: () => Promise<void>;
    antiShakeSearch: lodash.DebouncedFunc<() => Promise<void>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ITableModule & {
    modelValue: Record<string, any>;
}>>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {}, {}>, Partial<Record<`${any}_input_slot`, (_: {
    searchForm: Record<string, any>;
    config: ((import("../../../../types/FCElement").TBaseElCom<"el-affix", import("element-plus").AffixProps, {
        scroll: ({ scrollTop, fixed }: {
            scrollTop: number;
            fixed: boolean;
        }) => boolean;
        change: (fixed: boolean) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-alert", import("element-plus").AlertProps, {
        close: (evt: MouseEvent) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-form", import("element-plus").FormProps, {
        validate: (prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-form-item", import("element-plus").FormItemProps, import("../../../../types/plus").FormItemEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-button", import("element-plus").ButtonProps, {
        click: (evt: MouseEvent) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-border", import("../../../../types/plus").BorderProps, import("../../../../types/plus").BorderEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-container", import("../../../../types/plus").ContainerProps, import("../../../../types/plus").ContainerEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-icon", import("../../../../types/plus").IconProps, import("../../../../types/plus").IconEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-row", import("element-plus").RowProps, import("../../../../types/plus").RowEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-link", import("element-plus").LinkProps, {
        click: (evt: MouseEvent) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-text", import("element-plus").TextProps, import("../../../../types/plus").TextEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-scrollbar", import("element-plus").ScrollbarProps, {
        scroll: ({ scrollTop, scrollLeft, }: {
            scrollTop: number;
            scrollLeft: number;
        }) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-space", import("element-plus").SpaceProps, import("../../../../types/plus").SpaceEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-config-provider", import("element-plus").ConfigProviderProps, import("../../../../types/plus").ConfigProviderEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-autocomplete", import("element-plus").AutocompleteProps, {
        "update:modelValue": (value: string) => boolean;
        input: (value: string) => boolean;
        change: (value: string) => boolean;
        focus: (evt: FocusEvent) => boolean;
        blur: (evt: FocusEvent) => boolean;
        clear: () => boolean;
        select: (item: Record<string, any>) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-cascader", import("element-plus").CascaderProps, {
        "update:modelValue": (val: import("element-plus").CascaderValue) => boolean;
        change: (val: import("element-plus").CascaderValue) => boolean;
        focus: (evt: FocusEvent) => boolean;
        blur: (evt: FocusEvent) => boolean;
        visibleChange: (val: boolean) => boolean;
        expandChange: (val: import("element-plus").CascaderValue) => boolean;
        removeTag: (val: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | import("element-plus/es/components/cascader-panel/src/node").CascaderNodePathValue) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-checkbox", import("element-plus").CheckboxProps, {
        'update:checked': (value: boolean) => boolean;
        change: (value: boolean) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-color-picker", import("element-plus").ColorPickerProps, {
        "update:modelValue": (val: string) => boolean;
        change: (val: string) => boolean;
        activeChange: (val: string) => boolean;
        focus: (event: FocusEvent) => boolean;
        blur: (event: FocusEvent) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-date-picker", import("element-plus").DatePickerProps, import("../../../../types/plus").DatePickerEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-input", import("element-plus").InputProps, {
        "update:modelValue": (value: string) => boolean;
        input: (value: string) => boolean;
        change: (value: string) => boolean;
        focus: (evt: FocusEvent) => boolean;
        blur: (evt: FocusEvent) => boolean;
        clear: () => boolean;
        mouseleave: (evt: MouseEvent) => boolean;
        mouseenter: (evt: MouseEvent) => boolean;
        keydown: (evt: Event | KeyboardEvent) => boolean;
        compositionstart: (evt: CompositionEvent) => boolean;
        compositionupdate: (evt: CompositionEvent) => boolean;
        compositionend: (evt: CompositionEvent) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-input-number", import("element-plus").InputNumberProps, {
        change: (cur: number, prev: number) => boolean;
        blur: (e: FocusEvent) => boolean;
        focus: (e: FocusEvent) => boolean;
        input: (val: number) => boolean;
        "update:modelValue": (val: number) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-radio-group", import("element-plus").RadioGroupProps, {
        "update:modelValue": (val: string | number | boolean) => boolean;
        change: (val: string | number | boolean) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-radio", import("element-plus").RadioProps, {
        "update:modelValue": (val: string | number | boolean) => boolean;
        change: (val: string | number | boolean) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-rate", import("element-plus").RateProps, {
        change: (value: number) => boolean;
        "update:modelValue": (value: number) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-select", import("../../../../types/plus").SelectProps, import("../../../../types/plus").SelectEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-select-v2", import("../../../../types/plus").SelectV2Props, import("../../../../types/plus").SelectV2Emits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-slider", import("element-plus").SliderProps, import("element-plus").SliderProps> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-switch", import("element-plus").SwitchProps, {
        "update:modelValue": (val: string | number | boolean) => boolean;
        change: (val: string | number | boolean) => boolean;
        input: (val: string | number | boolean) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-time-picker", import("../../../../types/plus").TimePickerProps, import("../../../../types/plus").TimePickerEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-time-select", import("../../../../types/plus").TimeSelectProps, import("../../../../types/plus").TimeSelectEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-transfer", import("element-plus").TransferProps, {
        change: (value: import("element-plus").TransferKey[], direction: import("element-plus").TransferDirection, movedKeys: import("element-plus").TransferKey[]) => boolean;
        "update:modelValue": (value: import("element-plus").TransferKey[]) => boolean;
        "left-check-change": (value: import("element-plus").TransferKey[], movedKeys?: import("element-plus").TransferKey[]) => boolean;
        "right-check-change": (value: import("element-plus").TransferKey[], movedKeys?: import("element-plus").TransferKey[]) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-upload", import("element-plus").UploadProps, import("../../../../types/plus").UploadEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-avatar", import("element-plus").AvatarProps, {
        error: (evt: Event) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-badge", import("element-plus").BadgeProps, import("../../../../types/plus").BadgeEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-calendar", import("element-plus").CalendarProps, {
        "update:modelValue": (value: Date) => boolean;
        input: (value: Date) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-card", import("element-plus").CardProps, import("../../../../types/plus").CardEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-carousel", import("element-plus").CarouselProps, {
        change: (current: number, prev: number) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-collapse", import("element-plus").CollapseProps, {
        "update:modelValue": (value: import("element-plus").CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
        change: (value: import("element-plus").CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-descriptions", import("../../../../types/plus").DescriptionsProps, import("../../../../types/plus").DescriptionsEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-empty", import("element-plus").EmptyProps, import("../../../../types/plus").EmptyEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-image", import("element-plus").ImageProps, {
        load: (evt: Event) => boolean;
        error: (evt: Event) => boolean;
        switch: (val: number) => boolean;
        close: () => boolean;
        show: () => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-infinite-scroll", import("../../../../types/plus").InfiniteScrollProps, import("../../../../types/plus").InfiniteScrollEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-pagination", import("element-plus").PaginationProps, {
        'update:current-page': (val: number) => boolean;
        'update:page-size': (val: number) => boolean;
        'size-change': (val: number) => boolean;
        'current-change': (val: number) => boolean;
        'prev-click': (val: number) => boolean;
        'next-click': (val: number) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-progress", import("element-plus").ProgressProps, import("../../../../types/plus").ProgressEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-result", import("element-plus").ResultProps, import("../../../../types/plus").ResultEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-table", import("element-plus/es/components/table/src/table/defaults").TableProps<any>, import("../../../../types/plus").TableEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-table-column", import("../../../../types/plus").TableColumnProps, import("../../../../types/plus").TableColumnEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-table-v2", import("element-plus").TableV2Props, import("../../../../types/plus").TableV2Emits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-tag", import("element-plus").TagProps, {
        close: (evt: MouseEvent) => boolean;
        click: (evt: MouseEvent) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-timeline", import("../../../../types/plus").TimelineProps, import("../../../../types/plus").TimelineEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-timeline-item", import("element-plus").TimelineItemProps, import("../../../../types/plus").TimelineItemEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-tree", import("../../../../types/plus").TreeProps, import("../../../../types/plus").TreeEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-tree-select", Partial<import("../../../../types/plus").TreeProps & import("../../../../types/plus").SelectProps>, Partial<import("../../../../types/plus").TreeEmits & import("../../../../types/plus").SelectEmits>> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-tree-v2", import("../../../../types/plus").TreeV2Props, import("../../../../types/plus").TreeV2Emits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-statistic", import("element-plus").StatisticProps, import("../../../../types/plus").StatisticEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-backtop", import("element-plus").BacktopProps, {
        click: (evt: MouseEvent) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-breadcrumb", import("element-plus").BreadcrumbProps, import("../../../../types/plus").BreadcrumbEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-breadcrumb-item", import("element-plus").BreadcrumbItemProps, import("../../../../types/plus").BreadcrumbItemEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-dropdown", import("../../../../types/plus").DropdownProps, import("../../../../types/plus").DropdownEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-menu", import("element-plus").MenuProps, {
        close: (index: string, indexPath: string[]) => boolean;
        open: (index: string, indexPath: string[]) => boolean;
        select: (index: string, indexPath: string[], item: import("element-plus").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-page-header", import("element-plus").PageHeaderProps, {
        back: () => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-steps", import("element-plus").StepsProps, {
        change: (newVal: number, oldVal: number) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-step", import("element-plus").StepProps, import("../../../../types/plus").StepEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-tabs", import("element-plus").TabsProps, {
        "update:modelValue": (name: import("element-plus").TabPaneName) => boolean;
        tabClick: (pane: {
            uid: number;
            slots: Readonly<{
                [name: string]: import("vue").Slot<any>;
            }>;
            props: {
                readonly label: string;
                readonly disabled: boolean;
                readonly closable: boolean;
                readonly lazy: boolean;
                readonly name?: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            };
            paneName: string | number;
            active: boolean;
            index: string;
            isClosable: boolean;
        }, ev: Event) => boolean;
        tabChange: (name: import("element-plus").TabPaneName) => boolean;
        edit: (paneName: import("element-plus").TabPaneName, action: "add" | "remove") => boolean;
        tabRemove: (name: import("element-plus").TabPaneName) => boolean;
        tabAdd: () => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-tab-pane", import("element-plus").TabPaneProps, import("../../../../types/plus").TabPaneEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-dialog", import("element-plus").DialogProps, {
        open: () => boolean;
        opened: () => boolean;
        close: () => boolean;
        closed: () => boolean;
        "update:modelValue": (value: boolean) => boolean;
        openAutoFocus: () => boolean;
        closeAutoFocus: () => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-drawer", import("element-plus").DrawerProps, import("../../../../types/plus").DrawerEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-loading", import("../../../../types/plus").LoadingProps, import("../../../../types/plus").LoadingEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-message", import("element-plus").MessageProps, {
        destroy: () => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-message-box", import("../../../../types/plus").MessageBoxProps, import("../../../../types/plus").MessageBoxEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-notification", import("element-plus").NotificationProps, {
        destroy: () => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-popconfirm", import("element-plus").PopconfirmProps, {
        confirm: (e: MouseEvent) => boolean;
        cancel: (e: MouseEvent) => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-popover", import("element-plus").PopoverProps, {
        'update:visible': (value: boolean) => boolean;
        'before-enter': () => boolean;
        'before-leave': () => boolean;
        'after-enter': () => boolean;
        'after-leave': () => boolean;
    }> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-tooltip", import("element-plus").ElTooltipProps, import("../../../../types/plus").ElTooltipEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | (import("../../../../types/FCElement").TBaseElCom<"el-divider", import("element-plus").DividerProps, import("../../../../types/plus").DividerEmits> & {
        label: string;
        prop: string;
        hide?: boolean;
    }) | {
        label: string;
        prop: string;
        hide?: boolean;
        component: "slot";
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("element-plus").AffixProps> | import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp>;
        events?: import("../../../../types/util").TObjToComputed<{
            scroll: ({ scrollTop, fixed }: {
                scrollTop: number;
                fixed: boolean;
            }) => boolean;
            change: (fixed: boolean) => boolean;
        }> | import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent>;
        component: import("../../../../types/util").TBaseToComputed<"el-affix">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").AlertProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            close: (evt: MouseEvent) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-alert">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("element-plus").FormProps> | import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp>;
        events?: import("../../../../types/util").TObjToComputed<{
            validate: (prop: import("element-plus").FormItemProp, isValid: boolean, message: string) => boolean;
        }> | import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent>;
        component: import("../../../../types/util").TBaseToComputed<"el-form">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").FormItemProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").FormItemEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-form-item">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("element-plus").ButtonProps> | import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            click: (evt: MouseEvent) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-button">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").BorderProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").BorderEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-border">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").ContainerProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").ContainerEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-container">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").IconProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").IconEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-icon">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").RowProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").RowEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-row">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").LinkProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            click: (evt: MouseEvent) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-link">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").TextProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TextEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-text">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").ScrollbarProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            scroll: ({ scrollTop, scrollLeft, }: {
                scrollTop: number;
                scrollLeft: number;
            }) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-scrollbar">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").SpaceProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").SpaceEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-space">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").ConfigProviderProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").ConfigProviderEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-config-provider">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").AutocompleteProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            "update:modelValue": (value: string) => boolean;
            input: (value: string) => boolean;
            change: (value: string) => boolean;
            focus: (evt: FocusEvent) => boolean;
            blur: (evt: FocusEvent) => boolean;
            clear: () => boolean;
            select: (item: Record<string, any>) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-autocomplete">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").CascaderProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            "update:modelValue": (val: import("element-plus").CascaderValue) => boolean;
            change: (val: import("element-plus").CascaderValue) => boolean;
            focus: (evt: FocusEvent) => boolean;
            blur: (evt: FocusEvent) => boolean;
            visibleChange: (val: boolean) => boolean;
            expandChange: (val: import("element-plus").CascaderValue) => boolean;
            removeTag: (val: import("element-plus/es/components/cascader-panel/src/node").CascaderNodeValue | import("element-plus/es/components/cascader-panel/src/node").CascaderNodePathValue) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-cascader">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").CheckboxProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            'update:checked': (value: boolean) => boolean;
            change: (value: boolean) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-checkbox">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").ColorPickerProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            "update:modelValue": (val: string) => boolean;
            change: (val: string) => boolean;
            activeChange: (val: string) => boolean;
            focus: (event: FocusEvent) => boolean;
            blur: (event: FocusEvent) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-color-picker">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").DatePickerProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").DatePickerEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-date-picker">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").InputProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            "update:modelValue": (value: string) => boolean;
            input: (value: string) => boolean;
            change: (value: string) => boolean;
            focus: (evt: FocusEvent) => boolean;
            blur: (evt: FocusEvent) => boolean;
            clear: () => boolean;
            mouseleave: (evt: MouseEvent) => boolean;
            mouseenter: (evt: MouseEvent) => boolean;
            keydown: (evt: Event | KeyboardEvent) => boolean;
            compositionstart: (evt: CompositionEvent) => boolean;
            compositionupdate: (evt: CompositionEvent) => boolean;
            compositionend: (evt: CompositionEvent) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-input">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").InputNumberProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            change: (cur: number, prev: number) => boolean;
            blur: (e: FocusEvent) => boolean;
            focus: (e: FocusEvent) => boolean;
            input: (val: number) => boolean;
            "update:modelValue": (val: number) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-input-number">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").RadioGroupProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            "update:modelValue": (val: string | number | boolean) => boolean;
            change: (val: string | number | boolean) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-radio-group">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").RadioProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            "update:modelValue": (val: string | number | boolean) => boolean;
            change: (val: string | number | boolean) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-radio">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").RateProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            change: (value: number) => boolean;
            "update:modelValue": (value: number) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-rate">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").SelectProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").SelectEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-select">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").SelectV2Props>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").SelectV2Emits>;
        component: import("../../../../types/util").TBaseToComputed<"el-select-v2">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").SliderProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("element-plus").SliderProps>;
        component: import("../../../../types/util").TBaseToComputed<"el-slider">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").SwitchProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            "update:modelValue": (val: string | number | boolean) => boolean;
            change: (val: string | number | boolean) => boolean;
            input: (val: string | number | boolean) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-switch">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TimePickerProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TimePickerEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-time-picker">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TimeSelectProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TimeSelectEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-time-select">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").TransferProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            change: (value: import("element-plus").TransferKey[], direction: import("element-plus").TransferDirection, movedKeys: import("element-plus").TransferKey[]) => boolean;
            "update:modelValue": (value: import("element-plus").TransferKey[]) => boolean;
            "left-check-change": (value: import("element-plus").TransferKey[], movedKeys?: import("element-plus").TransferKey[]) => boolean;
            "right-check-change": (value: import("element-plus").TransferKey[], movedKeys?: import("element-plus").TransferKey[]) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-transfer">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").UploadProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").UploadEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-upload">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").AvatarProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            error: (evt: Event) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-avatar">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").BadgeProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").BadgeEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-badge">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").CalendarProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            "update:modelValue": (value: Date) => boolean;
            input: (value: Date) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-calendar">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").CardProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").CardEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-card">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").CarouselProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            change: (current: number, prev: number) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-carousel">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").CollapseProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            "update:modelValue": (value: import("element-plus").CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
            change: (value: import("element-plus").CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-collapse">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").DescriptionsProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").DescriptionsEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-descriptions">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").EmptyProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").EmptyEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-empty">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").ImageProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            load: (evt: Event) => boolean;
            error: (evt: Event) => boolean;
            switch: (val: number) => boolean;
            close: () => boolean;
            show: () => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-image">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").InfiniteScrollProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").InfiniteScrollEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-infinite-scroll">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").PaginationProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            'update:current-page': (val: number) => boolean;
            'update:page-size': (val: number) => boolean;
            'size-change': (val: number) => boolean;
            'current-change': (val: number) => boolean;
            'prev-click': (val: number) => boolean;
            'next-click': (val: number) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-pagination">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").ProgressProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").ProgressEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-progress">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").ResultProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").ResultEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-result">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus/es/components/table/src/table/defaults").TableProps<any>>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TableEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-table">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TableColumnProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TableColumnEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-table-column">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").TableV2Props>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TableV2Emits>;
        component: import("../../../../types/util").TBaseToComputed<"el-table-v2">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").TagProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            close: (evt: MouseEvent) => boolean;
            click: (evt: MouseEvent) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-tag">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TimelineProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TimelineEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-timeline">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").TimelineItemProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TimelineItemEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-timeline-item">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TreeProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TreeEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-tree">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<Partial<import("../../../../types/plus").TreeProps & import("../../../../types/plus").SelectProps>>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<Partial<import("../../../../types/plus").TreeEmits & import("../../../../types/plus").SelectEmits>>;
        component: import("../../../../types/util").TBaseToComputed<"el-tree-select">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TreeV2Props>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TreeV2Emits>;
        component: import("../../../../types/util").TBaseToComputed<"el-tree-v2">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").StatisticProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").StatisticEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-statistic">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").BacktopProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            click: (evt: MouseEvent) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-backtop">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").BreadcrumbProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").BreadcrumbEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-breadcrumb">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").BreadcrumbItemProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").BreadcrumbItemEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-breadcrumb-item">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").DropdownProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").DropdownEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-dropdown">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").MenuProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            close: (index: string, indexPath: string[]) => boolean;
            open: (index: string, indexPath: string[]) => boolean;
            select: (index: string, indexPath: string[], item: import("element-plus").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-menu">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").PageHeaderProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            back: () => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-page-header">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").StepsProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            change: (newVal: number, oldVal: number) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-steps">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").StepProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").StepEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-step">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("element-plus").TabsProps> | import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp>;
        events?: import("../../../../types/util").TObjToComputed<{
            "update:modelValue": (name: import("element-plus").TabPaneName) => boolean;
            tabClick: (pane: {
                uid: number;
                slots: Readonly<{
                    [name: string]: import("vue").Slot<any>;
                }>;
                props: {
                    readonly label: string;
                    readonly disabled: boolean;
                    readonly closable: boolean;
                    readonly lazy: boolean;
                    readonly name?: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                };
                paneName: string | number;
                active: boolean;
                index: string;
                isClosable: boolean;
            }, ev: Event) => boolean;
            tabChange: (name: import("element-plus").TabPaneName) => boolean;
            edit: (paneName: import("element-plus").TabPaneName, action: "add" | "remove") => boolean;
            tabRemove: (name: import("element-plus").TabPaneName) => boolean;
            tabAdd: () => boolean;
        }> | import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent>;
        component: import("../../../../types/util").TBaseToComputed<"el-tabs">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").TabPaneProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").TabPaneEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-tab-pane">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("element-plus").DialogProps> | import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp>;
        events?: import("../../../../types/util").TObjToComputed<{
            open: () => boolean;
            opened: () => boolean;
            close: () => boolean;
            closed: () => boolean;
            "update:modelValue": (value: boolean) => boolean;
            openAutoFocus: () => boolean;
            closeAutoFocus: () => boolean;
        }> | import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent>;
        component: import("../../../../types/util").TBaseToComputed<"el-dialog">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").DrawerProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").DrawerEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-drawer">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").LoadingProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").LoadingEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-loading">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").MessageProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            destroy: () => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-message">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").MessageBoxProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").MessageBoxEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-message-box">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").NotificationProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            destroy: () => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-notification">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").PopconfirmProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            confirm: (e: MouseEvent) => boolean;
            cancel: (e: MouseEvent) => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-popconfirm">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").PopoverProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<{
            'update:visible': (value: boolean) => boolean;
            'before-enter': () => boolean;
            'before-leave': () => boolean;
            'after-enter': () => boolean;
            'after-leave': () => boolean;
        }>;
        component: import("../../../../types/util").TBaseToComputed<"el-popover">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").ElTooltipProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").ElTooltipEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-tooltip">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        props?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyProp> | import("../../../../types/util").TObjToComputed<import("element-plus").DividerProps>;
        events?: import("../../../../types/util").TObjToComputed<import("../../../../types/FCElement").TAnyEvent> | import("../../../../types/util").TObjToComputed<import("../../../../types/plus").DividerEmits>;
        component: import("../../../../types/util").TBaseToComputed<"el-divider">;
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
    } | {
        label: import("../../../../types/util").TBaseToComputed<string>;
        prop: import("../../../../types/util").TBaseToComputed<string>;
        hide?: import("../../../../types/util").TBaseToComputed<false> | import("../../../../types/util").TBaseToComputed<true>;
        component: import("../../../../types/util").TBaseToComputed<"slot">;
    }) & {
        props: {
            clearable: boolean;
        };
        events: {};
    } & {
        props: any;
    };
    prop: import("../../../../types/util").TBaseToComputed<string>;
}) => any>> & {
    leftInputs?(_: {}): any;
    statistic?(_: {}): any;
    illustrate?(_: {}): any;
    content?(_: {
        data: any[];
    }): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
