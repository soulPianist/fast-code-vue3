import type { ITableModule } from "../../types/components/table-module/index";
type TStatus = "list" | "card";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<ITableModule & {
    modelValue: Record<string, any>;
}>, {
    setStatus: (_status: TStatus) => Promise<void>;
    search: () => Promise<void>;
    reset: () => Promise<void>;
    antiShakeSearch: () => void;
    listRef: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ITableModule & {
    modelValue: Record<string, any>;
}>>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {}, {}>, Partial<Record<string, (_: any) => any>> & Partial<Record<string, (_: any) => any>> & {
    status?(_: {
        setStatus: (...arg: any[]) => any;
        status: "card" | "list";
    }): any;
    leftInputs?(_: {}): any;
    statistic?(_: {}): any;
    illustrate?(_: {}): any;
    content?(_: {
        data: any[];
        status: "card";
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
