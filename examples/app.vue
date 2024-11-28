<template>
  <as-form-table
    :itemList="itemList"
    :form="filterInfo"
    class="filters"
    :formAttrs="{
      labelWidth: 120
    }"
    style="margin-bottom: 10px"
  >
    <template #btns>
      <el-button type="primary" @click="handleSearch()" style="width: 80px"
        >查询</el-button
      >
      <el-button @click="handleSearch(true)">重置</el-button>
    </template>
  </as-form-table>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from "vue";
import { useFormItem } from "@asfor-fun/ui/hooks.js";

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
        span: 24,
        style: "padding-right: 50%",
      },
    } );

    const filterInfo = ref({
      name: "",
      age: "",
    });
    const itemList = ref([
      {
        rowAttrs: {
          gutter: 12,
        },
        name: createInput("name", "姓名"),
        age: createSelect("age", "年龄", {
          attrs: {
            filterable: true,
            children: [
              {
                label: "18-25",
                value: "1",
              },
              {
                label: "25-30",
                value: "2",
              },
            ],
          },
        }),
        born: createDatePicker("born", "出生日期"),
        btns: createSlot("btns", {
          span: 12,
          style: "justify-content: center;display: flex;",
        } ),
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