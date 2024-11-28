<template>
  <as-form
    ref="formRef"
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
  </as-form>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from "vue";
import { useFormItem } from "@asfor-fun/ui/hooks.js";
import { ElMessage } from "element-plus";

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
      born: ""
    });
    const itemList = ref([
      {
        rowAttrs: {
          gutter: 12,
        },
        name: createInput("name", "姓名", {
          attrs: {
            rules: [{
              required: true,
              message: '请输入姓名',
              trigger: 'blur'
            }]
          }
        }),
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

    const handleSearch = (flag = false) => {
      const { curFormRef } = getBaseFormRef();
      if (!curFormRef) return;
      curFormRef.validate((valid, fields) => {
        if (!valid) {
          ElMessage.error("表单校验失败");
          return;
        }
      });
    };

    const formRef: any = ref(null)
    const getBaseFormRef = () => {
      return {
        curFormRef:
          formRef.value && formRef.value ? formRef.value.baseFormRef : null,
      };
    };

    return {
      itemList,
      filterInfo,
      formRef,
      handleSearch,
    };
  },
});
</script>

<style>
</style>