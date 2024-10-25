<template>
  <div class="as-form">
    <el-form
      :model="myProp.form"
      ref="baseFormRef"
      v-bind="getFormAttrs()"
      :rules="myProp.rules"
    >
      <el-row
        v-for="(fItem, rIdx) in newItemList"
        v-bind="getRowAttrs(rIdx)"
        :key="rIdx"
      >
        <el-col
          v-for="[key, info] in getColItem(fItem)"
          :key="key"
          v-show="!info.colAttrs.hidden"
          v-bind="getColAttrs(info)"
        >
          <slot v-if="info.slot" :name="info.slot"></slot>
          <FormItem
            v-else
            :info="info"
            :myForm="myProp.form"
            :formItemRef="formItemRef"
          />
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script  setup>
import { ref, useAttrs, watch } from "vue";
import { toPairs, omit, cloneDeep } from "lodash-es";
import FormItem from "./FormItem.vue";
import { createNewItemForm, getColAttrs } from "./utils";

defineOptions({
  name: "as-form",
});

const myProp = defineProps({
  form: Object,
  itemList: Array,
  rules: Object,
  formAttrs: Object,
})

// const myProp = defineProps<{
//   form: any;
//   itemList: any;
//   rules?: any;
//   formAttrs?: any;
// }>();
const formItemRef = {};
const newItemList = ref({});
const allRowInfos = ref({});
const slots = defineSlots();
const myAttrs = useAttrs();
const baseFormRef = ref();
const getColItem = (item) => {
  return toPairs(item.value);
};

const genNewItemForm = () => {
  const rowAttrsList = {};
  const cloneItems = cloneDeep(myProp.itemList);
  const list = cloneItems.map((originItem, rowIdx) => {
    const formItem = omit(originItem, ["rowAttrs"]);
    const keys = Object.keys(formItem);
    const newFormItem = ref({});

    newFormItem.value = { ...formItem };
    createNewItemForm(
      formItemRef,
      myProp.form,
      newFormItem,
      formItem,
      slots,
      keys
    );
    rowAttrsList[rowIdx] = originItem["rowAttrs"] || { gutter: 10 };
    allRowInfos.value = cloneDeep(rowAttrsList);
    return newFormItem;
  });
  return list;
};

watch(
  () => myProp.itemList,
  () => {
    newItemList.value = genNewItemForm();
  },
  {
    deep: true,
    immediate: true,
  }
);

const getRowAttrs = (rowIdx) => {
  return allRowInfos.value[rowIdx];
};

const getFormAttrs = () => {
  return myProp.formAttrs || {};
};
const clearValidate = () => {
  baseFormRef.value.clearValidate()
}

defineExpose({
  baseFormRef,
  clearValidate
});
</script>
