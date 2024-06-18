declare const _default: import("vue").DefineComponent<Readonly<{
    modelValue?: any;
    item?: any;
}>, any, {}, {
    value: {
        get(): any;
        set(value: any): void;
    };
    props: () => {
        clearable: boolean;
        disabled: any;
    };
    events: () => {};
    disabledCom: () => (props: any) => any;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    modelValue?: any;
    item?: any;
}>>>, {
    readonly modelValue?: any;
    readonly item?: any;
}, {}>;
export default _default;
