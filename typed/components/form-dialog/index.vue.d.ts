import type { TFormDialog } from "../../types/components/form-dialog/index";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<TFormDialog & {
    modelValue: Record<string, any>;
}>, {
    open: (data: any) => Promise<void>;
    close: () => void;
    reset: () => void;
    submit: () => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    closed: (...args: any[]) => void;
    reseted: (...args: any[]) => void;
    submited: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<TFormDialog & {
    modelValue: Record<string, any>;
}>>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onClosed?: (...args: any[]) => any;
    onReseted?: (...args: any[]) => any;
    onSubmited?: (...args: any[]) => any;
}, {}, {}>, Partial<Record<any, (_: any) => any>> & {
    header?(_: {}): any;
    default?(_: {}): any;
    addbtnTop?(_: {}): any;
    addbtnCenter?(_: {}): any;
    addbtnBottom?(_: {}): any;
    deleteBtn?(_: {}): any;
    footer?(_: {}): any;
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
