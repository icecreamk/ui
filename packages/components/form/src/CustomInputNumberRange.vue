<template>
  <div class="inputNumbox">
    <el-input-number v-model="proxys[prop_start]" v-bind="getCompAttrs(info)" />
    <span style="text-align: center">--</span>
    <el-input-number v-model="proxys[prop_end]" v-bind="getCompAttrs(info)" />
  </div>
  <span style="padding: 0 5px">ms</span>
</template>

<script setup>
import { defineComponent } from "vue";
import { get, set } from "lodash-es";

defineComponent({
  name: "CustomInputNumberRange",
});

const props = defineProps({
  myForm: {
    type: Object,
    required: true,
  },
  info: {
    type: Object,
  },
  getCompAttrs: {
    type: Function,
  },
});

const prop = props.info && props.info.prop;

const prop_start = `${prop}_start`;
const prop_end = `${prop}_end`;
const getCompAttrs = (info) => {
  return (props.getCompAttrs && props.getCompAttrs(info)) || {};
};

const proxys = new Proxy(props.myForm, {
  get: function (target, property) {
    return get(target, property);
  },
  set: function (target, property, value) {
    set(target, property, value);
    return true;
  },
});
</script>
<!-- TODO -->
<!-- <style lang="scss" scoped>
.inputNumbox {
  width: calc(100% - 30px);
  display: grid;
  grid-template-columns: 40% auto 40%;
  :deep(.el-input-number) {
    width: 100%;
    .el-input-number__decrease,
    .el-input-number__increase {
      width: 24px;
    }
    .el-input__wrapper {
      padding-left: 0;
      padding-right: 24px;
    }
  }
}
</style> -->
