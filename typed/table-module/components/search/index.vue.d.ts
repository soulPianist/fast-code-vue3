import lodash from "lodash";
import type { ITableModule } from "../../../../types/components/table-module/index";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<ITableModule & {
    modelValue: Record<string, any>;
    pageLoading: boolean;
}>, {
    reset: () => Promise<void>;
    search: () => Promise<void>;
    antiShakeSearch: lodash.DebouncedFunc<() => Promise<void>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "update:pageLoading": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ITableModule & {
    modelValue: Record<string, any>;
    pageLoading: boolean;
}>>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onUpdate:pageLoading"?: (...args: any[]) => any;
}, {}, {}>, Partial<Record<`${any}`, (_: any) => any>> & {
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
