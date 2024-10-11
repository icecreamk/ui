import {
  set,
  has,
  mapKeys,
  startCase,
  kebabCase,
  defaultsDeep,
} from "lodash-es";
import {ref} from 'vue'

export function createNewItemForm(
  formItemRef,
  form,
  newFormItem,
  formItem,
  slots,
  keys
) {
  for (let key of keys) {
    // 预处理
    set(formItemRef, key, ref());
    // 预处理
    let column = formItem[key];
    if (typeof column === "string") {
      set(newFormItem.value, key, {
        key: key,
        prop: key,
        label: column,
        inner: { is: "el-input", event: {} },
      });
    }
    if (typeof column === "object") {
      // 设置默认属性
      defaultsDeep(column, {
        key: key,
        prop: key,
        label: key,
        inner: { is: "el-input", event: {} },
      });

      if (has(column, "event")) {
        if (Object.keys(column.event)) {
          column.event = mapKeys(
            column.event,
            (_, key) => "on" + startCase(key)
          );
        }
      }

      // 处理prop属性
      if (Array.isArray(column["prop"])) {
        // 作用 ["a", "b", "c"] ====> a.b.c
        // column["prop"] = pathArrToString(column["prop"]);
      }

      // 处理default属性。
      // 直接对form进行修改，赋初始值，在保证有prop后进行。prop标识属性在form中的位置
      if (has(column, "default")) {
        set(form, column.prop, column.default);
      }

      // 处理slot属性，slot属性为一个插槽对象
      const slotKeys = Object.keys(slots);
      for (let key of slotKeys) {
        const res = key.match(/^(\S+)-(\S+)/);
        // 作用 default-input1 ====> default inpu1
        if (res && res[2] == column.key) {
          if (!has(column, "slot")) {
            set(column, "slot", {});
          }
          set(column.slot, res[1], slots[key]);
        }
      }
      if (has(column, "slot") && has(column, "inner")) {
        console.warn("slot已存在，inner将不被渲染");
      }

      // 处理inner属性
      if (has(column, "inner") && !has(column, "slot")) {
        if (typeof column.inner === "string") {
          set(column, "inner", { is: column.inner, event: {} });
        }
        if (has(column, "inner.is.name")) {
          // inner.is支持具名组件
          column.inner.is = kebabCase(column.inner.is.name);
        }
        // if(has(column.inner.event))
        if (Object.keys(column.inner.event)) {
          column.inner.event = mapKeys(
            column.inner.event,
            (_, key) => "on" + startCase(key)
          );
        }
      }
    }
  }
}

export const getColAttrs = (value) => {
  const { colAttrs: { span = 24, offset = 0, style } = {} } = value;
  return {
    span,
    offset,
    style: style || {},
  };
};
