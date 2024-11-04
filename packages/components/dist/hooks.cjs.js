'use strict';

const createCommonReq = async ({ url, method, params = {}, config = {}, labelKey = "label", valueKey = "value", callback, }) => {
};
const idGenerator = () => {
    return `_${Math.floor(Math.random() * 1000000 + Math.random() * 50000 + Math.random() * 6000)}`;
};
function useFormItem({ colAttrs = {
    span: 8,
    offset: 0,
}, } = {}) {
    const createInput = (prop, label, { attrs = {}, events = {}, customCollAttrs = {}, hideLabel = false, slots = {}, } = {}) => {
        return {
            hideLabel,
            colAttrs: {
                ...colAttrs,
                ...customCollAttrs,
            },
            label,
            inner: {
                is: "el-input",
                clearable: true,
                placeholder: `请输入${label}`,
                ...attrs,
            },
            events,
            prop,
            slots,
        };
    };
    const createInputNumberRange = (prop, label, { attrs = {}, events = {}, customCollAttrs = {}, hideLabel = false } = {}) => {
        return {
            hideLabel,
            colAttrs: {
                ...colAttrs,
                ...customCollAttrs,
            },
            label,
            inner: {
                is: "CustomInputNumberRange",
                ...attrs,
            },
            events,
            prop,
        };
    };
    const createInputNumber = (prop, label, { attrs = {}, events = {}, customCollAttrs = {}, hideLabel = false } = {}) => {
        return {
            hideLabel,
            colAttrs: {
                ...colAttrs,
                ...customCollAttrs,
            },
            label,
            inner: {
                is: "el-input-number",
                ...attrs,
            },
            events,
            prop,
        };
    };
    const createRadio = (prop, label, { attrs = {}, events = {}, api = {}, customCollAttrs = {}, hideLabel = false, } = {}) => {
        const info = {
            hideLabel,
            colAttrs: {
                ...colAttrs,
                ...customCollAttrs,
            },
            label,
            inner: {
                is: "el-radio-group",
                childIs: "el-radio",
                children: [
                // {
                //   label: "选项1",
                //   value: "1",
                // },
                ],
                ...attrs,
            },
            events,
            prop,
        };
        createCommonReq(api);
        return info;
    };
    const createSelect = (prop, label, { attrs = {}, events = {}, api = {}, customCollAttrs = {}, hideLabel = false, } = {}) => {
        const info = {
            hideLabel,
            colAttrs: {
                ...colAttrs,
                ...customCollAttrs,
            },
            label,
            inner: {
                is: "el-select",
                childIs: "el-option",
                clearable: true,
                filterable: true,
                placeholder: `请选择${label}`,
                children: [
                // {
                //   label: "选项1",
                //   value: "1",
                // },
                // {
                //   label: "选项2",
                //   value: "2",
                // },
                ],
                ...attrs,
            },
            events,
            prop,
        };
        createCommonReq(api);
        return info;
    };
    const createSwitch = (prop, label, { attrs = {}, events = {}, customCollAttrs = {}, hideLabel = false } = {}) => {
        return {
            hideLabel,
            colAttrs: {
                ...colAttrs,
                ...customCollAttrs,
            },
            label,
            inner: {
                is: "el-switch",
                ...attrs,
            },
            events,
            prop,
        };
    };
    const createBtn = ({ customCollAttrs = {}, slots = {}, attrs = {}, events = {}, } = {}) => {
        return {
            colAttrs: {
                ...colAttrs,
                ...customCollAttrs,
            },
            slots: {
                default: () => {
                    return "提交";
                },
                ...slots,
            },
            inner: {
                is: "el-button",
                ...attrs,
            },
            events,
        };
    };
    const createItemList = (list = [], { customCollAttrs = {}, hideLabel = true, uid = idGenerator() } = {}) => {
        return {
            uid,
            colAttrs: {
                ...colAttrs,
                ...customCollAttrs,
            },
            hideLabel,
            list,
        };
    };
    const createSlot = (name, colAttrs = {
        span: 8,
        labelWidth: "0px",
    }, hideLabel = true) => {
        return {
            slot: name,
            colAttrs,
            hideLabel,
        };
    };
    const createDatePicker = (prop, label, { attrs = {}, events = {}, customCollAttrs = {} } = {}) => {
        return {
            colAttrs: {
                ...colAttrs,
                ...customCollAttrs,
            },
            label,
            inner: {
                is: "el-date-picker",
                type: "date",
                clearable: true,
                startPlaceholder: "开始时间",
                endPlaceholder: "结束时间",
                rangeSeparator: "至",
                valueFormat: "YYYY-MM-DD HH:mm:ss",
                ...attrs,
            },
            events,
            prop,
        };
    };
    const createTimePicker = (prop, label, { attrs = {}, events = {}, customCollAttrs = {}, hideLabel = false } = {}) => {
        return {
            colAttrs: {
                ...colAttrs,
                ...customCollAttrs,
            },
            hideLabel,
            label,
            inner: {
                is: "el-time-picker",
                type: "time",
                clearable: true,
                isRange: true,
                startPlaceholder: "开始时间",
                endPlaceholder: "结束时间",
                rangeSeparator: "至",
                valueFormat: "HH:mm:ss",
                ...attrs,
            },
            events,
            prop,
        };
    };
    return {
        createInput,
        createInputNumber,
        createInputNumberRange,
        createSelect,
        createRadio,
        createDatePicker,
        createTimePicker,
        createSwitch,
        createSlot,
        createItemList,
        createBtn,
    };
}

exports.useFormItem = useFormItem;
