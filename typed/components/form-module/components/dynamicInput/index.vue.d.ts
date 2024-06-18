declare const _default: import("vue").DefineComponent<{
    border: {
        default: boolean;
        type: BooleanConstructor;
    };
    addButtonPositon: {
        default: string;
        type: StringConstructor;
    };
    limit: {
        default: number;
        type: NumberConstructor;
    };
    disable: {
        default: boolean;
        type: BooleanConstructor;
    };
    dynamic: {
        default: boolean;
        type: BooleanConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
    };
    modelValue: {
        default: () => any[];
        type: ArrayConstructor;
    };
}, any, {}, {
    valueCom: {
        get(): any;
        set(value: any): void;
    };
}, {
    init(): void;
    addItemByLimit(): void;
    delItem(index: any): void;
    addItem(index: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    border: {
        default: boolean;
        type: BooleanConstructor;
    };
    addButtonPositon: {
        default: string;
        type: StringConstructor;
    };
    limit: {
        default: number;
        type: NumberConstructor;
    };
    disable: {
        default: boolean;
        type: BooleanConstructor;
    };
    dynamic: {
        default: boolean;
        type: BooleanConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
    };
    modelValue: {
        default: () => any[];
        type: ArrayConstructor;
    };
}>>, {
    type: string;
    modelValue: unknown[];
    border: boolean;
    limit: number;
    addButtonPositon: string;
    disable: boolean;
    dynamic: boolean;
}, {}>;
export default _default;