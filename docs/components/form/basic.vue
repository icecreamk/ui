<template>
  <as-form
    :itemList="itemList"
    :form="filterInfo"
    class="filters"
    label-position="right"
    label-width="150px"
    style="margin-bottom: 10px"
  >
    <template #btns>
      <el-button type="primary" @click="handleSearch()" style="width: 80px"
        >查询</el-button
      >
      <el-button @click="handleSearch(true)">重置</el-button>
    </template>
  </as-form>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from "vue";

import { useFormItem } from "../../../packages/components/dist/hooks.esm.js";

export default defineComponent({
  setup() {
    const {
      createInput,
      createSelect,
      createSlot,
      createInputNumberRange,
      createDatePicker,
    } = useFormItem({
      colAttrs: {
        span: 12,
        offset: 0,
      },
    });

    const filterInfo = ref({
      provinceCode: "", // 省份
    });
    const itemList = ref([
      {
        rowAttrs: {
          gutter: 12,
        },
        provinceCode: createSelect("provinceCode", "服务是否调用成功", {
          customCollAttrs: { style: "padding-right: 10px" },
          attrs: {
            filterable: true,
            children: [
              {
                label: "全部",
                value: "all",
              },
            ],
          },
        }),
        btns: createSlot("btns", {
          span: 12,
          style: "justify-content: flex-end;display: flex;",
        }),
      },
    ]);

    const handleSearch = (flag = false) => {};

    return {
      itemList,
      filterInfo,
      handleSearch,
    };
  },
});
</script>

<style>
</style>