export declare const createCommonReq: ({ url, method, params, config, labelKey, valueKey, callback, }: {
    url: any;
    method: any;
    params?: {};
    config?: {};
    labelKey?: string;
    valueKey?: string;
    callback: any;
}) => Promise<void>;
export declare const idGenerator: () => string;
export default function useFormItem({ colAttrs, }?: {
    colAttrs?: {
        span: number;
        offset: number;
    };
}): {
    createInput: (prop: any, label: any, { attrs, events, customCollAttrs, hideLabel, slots, }?: {
        attrs?: {};
        events?: {};
        customCollAttrs?: {};
        hideLabel?: boolean;
        slots?: {};
    }) => {
        hideLabel: boolean;
        colAttrs: {
            span: number;
            offset: number;
        };
        label: any;
        inner: {
            is: string;
            clearable: boolean;
            placeholder: string;
        };
        events: {};
        prop: any;
        slots: {};
    };
    createInputNumber: (prop: any, label: any, { attrs, events, customCollAttrs, hideLabel }?: {
        attrs?: {};
        events?: {};
        customCollAttrs?: {};
        hideLabel?: boolean;
    }) => {
        hideLabel: boolean;
        colAttrs: {
            span: number;
            offset: number;
        };
        label: any;
        inner: {
            is: string;
        };
        events: {};
        prop: any;
    };
    createInputNumberRange: (prop: any, label: any, { attrs, events, customCollAttrs, hideLabel }?: {
        attrs?: {};
        events?: {};
        customCollAttrs?: {};
        hideLabel?: boolean;
    }) => {
        hideLabel: boolean;
        colAttrs: {
            span: number;
            offset: number;
        };
        label: any;
        inner: {
            is: string;
        };
        events: {};
        prop: any;
    };
    createSelect: (prop: any, label: any, { attrs, events, api, customCollAttrs, hideLabel, }?: {
        attrs?: {};
        events?: {};
        api?: {};
        customCollAttrs?: {};
        hideLabel?: boolean;
    }) => {
        hideLabel: boolean;
        colAttrs: {
            span: number;
            offset: number;
        };
        label: any;
        inner: {
            is: string;
            childIs: string;
            clearable: boolean;
            filterable: boolean;
            placeholder: string;
            children: any[];
        };
        events: {};
        prop: any;
    };
    createRadio: (prop: any, label: any, { attrs, events, api, customCollAttrs, hideLabel, }?: {
        attrs?: {};
        events?: {};
        api?: {};
        customCollAttrs?: {};
        hideLabel?: boolean;
    }) => {
        hideLabel: boolean;
        colAttrs: {
            span: number;
            offset: number;
        };
        label: any;
        inner: {
            is: string;
            childIs: string;
            children: any[];
        };
        events: {};
        prop: any;
    };
    createDatePicker: (prop: any, label: any, { attrs, events, customCollAttrs }?: {
        attrs?: {};
        events?: {};
        customCollAttrs?: {};
    }) => {
        colAttrs: {
            span: number;
            offset: number;
        };
        label: any;
        inner: {
            is: string;
            type: string;
            clearable: boolean;
            startPlaceholder: string;
            endPlaceholder: string;
            rangeSeparator: string;
            valueFormat: string;
            style: string;
        };
        events: {};
        prop: any;
    };
    createTimePicker: (prop: any, label: any, { attrs, events, customCollAttrs, hideLabel }?: {
        attrs?: {};
        events?: {};
        customCollAttrs?: {};
        hideLabel?: boolean;
    }) => {
        colAttrs: {
            span: number;
            offset: number;
        };
        hideLabel: boolean;
        label: any;
        inner: {
            is: string;
            type: string;
            clearable: boolean;
            isRange: boolean;
            startPlaceholder: string;
            endPlaceholder: string;
            rangeSeparator: string;
            valueFormat: string;
        };
        events: {};
        prop: any;
    };
    createSwitch: (prop: any, label: any, { attrs, events, customCollAttrs, hideLabel }?: {
        attrs?: {};
        events?: {};
        customCollAttrs?: {};
        hideLabel?: boolean;
    }) => {
        hideLabel: boolean;
        colAttrs: {
            span: number;
            offset: number;
        };
        label: any;
        inner: {
            is: string;
        };
        events: {};
        prop: any;
    };
    createSlot: (name: any, colAttrs?: {
        span: number;
        labelWidth: string;
    }, hideLabel?: boolean) => {
        slot: any;
        colAttrs: {
            span: number;
            labelWidth: string;
        };
        hideLabel: boolean;
    };
    createItemList: (list?: any[], { customCollAttrs, hideLabel, uid }?: {
        customCollAttrs?: {};
        hideLabel?: boolean;
        uid?: string;
    }) => {
        uid: string;
        colAttrs: {
            span: number;
            offset: number;
        };
        hideLabel: boolean;
        list: any[];
    };
    createBtn: ({ customCollAttrs, slots, attrs, events, }?: {
        customCollAttrs?: {};
        slots?: {};
        attrs?: {};
        events?: {};
    }) => {
        colAttrs: {
            span: number;
            offset: number;
        };
        slots: {
            default: () => string;
        };
        inner: {
            is: string;
        };
        events: {};
    };
};
