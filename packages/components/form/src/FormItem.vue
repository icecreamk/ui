<template>
  <el-row v-if="isArray(info)">
    <el-col
      v-for="(item, listIdx) in info"
      :key="item.prop"
      v-bind="getColAttrs(item)"
    >
      <!-- {{ listIdx }}"listIdx"
      {{ pIdx }} -->
      <template v-if="isArray(item.list)">
        <component
          v-for="(child, idx) in item.list"
          :key="idx"
          :is="getCompType(child)"
          v-bind="getCompAttrs(child, { uid: item.uid, idx: pIdx })"
        >
          <template v-if="child.slots && child.slots.default" #default="scope">
            <!-- <ColumSlot :slots="child.slots.default" :scope="scope" /> -->
          </template> </component
      ></template>
      <form-item
        v-else
        :pIdx="listIdx"
        :info="item"
        :myForm="myForm"
        :formItemRef="formItemRef"
      />
    </el-col>
  </el-row>
  <slot v-else-if="info.slot" :name="info.slot"></slot>
  <el-form-item v-else v-bind="getFormItemAttrs(info)" :ref="formItemRef[uKey]">
    <template #label>
      <span>{{ info.hideLabel === true ? "" : info.label }}</span>
    </template>
    <component
      :is="getCompType(info)"
      v-model="proxys[info.prop]"
      v-bind="getCompAttrs(info)"
      :info="info"
      :getCompAttrs="getCompAttrs"
      :myForm="myForm"
    >
      <template v-if="info.inner.children">
        <component
          v-for="cItem in info.inner.children"
          :key="cItem.value"
          :is="getChildCompType(info)"
          v-bind="omit(cItem, ['is'])"
        />
      </template>
      <template v-if="info.slots && info.slots.suffix" #suffix>
        {{ info.slots.suffix }}
      </template>
    </component>
  </el-form-item>
</template>
<script setup>
import { omit, get, set, isArray } from "lodash-es";
import { getColAttrs } from "./utils";
// import ColumSlot from "../BaseTable/ColumSlot";
import CustomInputNumberRange from './CustomInputNumberRange.vue'

defineOptions({
  name: "FormItem",
  components: {
    // ColumSlot,
    CustomInputNumberRange,
  },
});

const props = defineProps({
  info: {
    type: Object,
    default: () => {},
  },
  formItemRef: {
    type: Object,
    default: () => {},
  },
  myForm: {
    type: Object,
    default: () => {},
  },
  uKey: {
    type: String,
    default: "",
  },
  pIdx: {
    type: Number,
    default: 0,
  },
});

// 代理form，用于在v-model上使用prop表示路径
const proxys = new Proxy(props.myForm, {
  get: function (target, property) {
    return get(target, property);
  },
  set: function (target, property, value) {
    set(target, property, value);
    return true;
  },
});

const getItemListEvents = ({ uid, idx }, events = {}) => {
  if (uid === "-1") {
    return events;
  }
  /**
   * 创建一个包装函数，用于在调用原始函数时附加额外的参数。
   *
   * @param {Function} func 原始函数，将被包装函数调用。
   * @param {any} uid 需要附加到原始函数调用的唯一标识符。
   * @returns {Function} 返回一个新的包装函数，它接受任意数量的参数，并在调用原始函数时附加uid。
   */
  const collectArguments = (func, { uid, idx }) => {
    return function (...args) {
      // 在这里，args就是传给内部函数的所有参数
      // 调用原始函数并传递所有收集到的参数
      return func(...args, { uid, idx });
    };
  };

  const newEvents = {};
  Object.keys(events).forEach((key) => {
    const func = events[key];
    newEvents[key] = collectArguments(func, { uid, idx });
  });
  return newEvents;
};

const getCompAttrs = (value, { uid = "-1", idx = 0 } = {}) => {
  return {
    ...omit(value.inner, [
      "is",
      "childIs",
      "children",
      "hideLabel",
      "slots",
      "rules",
      "event"
    ]),
    ...getItemListEvents({ uid, idx }, value.events),
  };
};

const getCompType = (value) => {
  return value.inner.is;
};
const getChildCompType = (value) => {
  return value.inner.childIs;
};

const getFormItemAttrs = (value) => {
  return {
    label: value.label,
    prop: value.prop,
    rules: value.inner.rules || [],
    'label-width': value.inner['label-width'] || ""
  };
};
</script>
