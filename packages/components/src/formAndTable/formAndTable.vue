<template>
  <as-form
    :itemList="itemList"
    :form="filterInfo"
    class="filters"
    :formAttrs="{
      labelWidth: 80
    }"
    style="margin-bottom: 10px"
  >
    <template #btns>
      <el-button type="primary" @click="handleSearch()" style="width: 80px"
        >查询</el-button
      >
      <el-button @click="handleSearch(true)">重置</el-button>
    </template>
  </as-form>
  <as-table
    :columns="columns"
    ref="baseTableRef"
    :api="api"
  />
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from "vue";
import useFormItem from "../form/hooks/useFormItem";
import AsForm from '../form/form.vue'
import AsTable from '../table/table.vue'

export default defineComponent({
  name: 'as-form-table',
  setup() {
    const {
      createInput,
      createSelect,
      createSlot,
      createInputNumberRange,
      createDatePicker,
    } = useFormItem({
      colAttrs: {
        span: 8,
      },
    } );

    const filterInfo = ref({
      name: "",
      age: "",
      born: ""
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
          span: 24,
          style: "justify-content: flex-end;display: flex;",
        } ),
      },
    ]);

    const handleSearch = (flag = false) => {
      console.log(filterInfo.value);
    };

    const columns = [
      {
        prop: "time",
        label: "时间",
      },
      {
        prop: "province",
        label: "省份",
      },
    ];

    const api = {
      url: "table",
      method: "get",
      config: {
        baseURL: "http://localhost:7002/",
        withCredentials: false,
      },
    };

    return {
      itemList,
      columns,
      api,
      filterInfo,
      handleSearch,
    };
  },
});
</script>

<style>
</style>