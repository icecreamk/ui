<template>
  <div class="as-table">
    <el-table
      :border="true"
      v-loading="loading"
      :data="tableList"
      v-bind="tableAttrs"
      :key="tableUid"
      @selection-change="handleSelectionChange"
    >
      <slot name="expand"></slot>
      <el-table-column v-for="item in columns" v-bind="item" :key="item.prop" />
      <slot name="operation"></slot>
    </el-table>
    <el-pagination
      style="display: flex; justify-content: center; margin: 15px 0"
      v-if="showPagination"
      @size-change="handlePageSizeChange"
      @current-change="handlePageNoChange"
      :current-page="pageInfo.pageNo"
      :page-sizes="[10, 20, 30, 50, 100]"
      :page-size="pageInfo.pageSize"
      layout="total, prev, pager, next, sizes"
      :total="pageInfo.totalNum"
    />
  </div>
</template>
<script lang="tsx" setup>
import { ref, defineComponent } from 'vue'
import TableColumn from "./TableColumn";
// import http from "@/utils/request";
// import { resetPageNoFormDelete } from "./utils";
// import { getResRealData } from "@/utils/base";

defineOptions({
  name: "BaseTable",
});

defineComponent({
  TableColumn,
});

const props = defineProps({
  columns: {
    type: Array<any>,
    default: () => [],
  },
  showPagination: {
    type: Boolean,
    default: true,
  },
  initData: {
    type: Array<any>,
    default: () => [],
  },
  tableAttrs: {
    type: Object,
    default: () => {},
  },
  updateTableId: {
    type: Boolean,
    default: false,
  },
  api: {
    type: Object,
    default: () => {},
  },
  getTableParams: {
    type: Function,
    default: () => {},
  },
});

const emits = defineEmits(["onSelectionChange"]);

const tableUid = ref(Math.random());
const loading = ref(false);
const selectedRows = ref([]);
const tableList = ref(props.initData || []);

const pageInfo = ref({
  pageNo: 1,
  pageSize: 10,
  totalNum: 0,
});

const handleSelectionChange = (val) => {
  selectedRows.value = val;
  emits("onSelectionChange", val);
};

const getPageParams = () => {
  return {
    pageNo: pageInfo.value.pageNo,
    pageSize: pageInfo.value.pageSize,
  };
};

const refreshTable = async ({ extraParams = {}, resetPage = false } = {}) => {
  if (resetPage) {
    pageInfo.value.totalNum = 0;
    pageInfo.value.pageSize = 10;
    pageInfo.value.pageNo = 1;
  }

  try {
    loading.value = true;
    const curParams: any =
      (props.getTableParams && props.getTableParams()) || {};
    // const newPageNo = resetPageNoFormDelete(pageInfo.value);
    const newPageNo = 1
    pageInfo.value.pageNo = newPageNo;

    const { pageNo, pageSize } = pageInfo.value;
    const params: any = {
      ...curParams,
      pageNo,
      pageSize,
      ...extraParams,
    };

    tableList.value = [{ a: 'test' }, { a: 'test' }, { a: 'test' }];

    console.log('tableList', tableList)

    // const res = await http[props.api.method](
    //   props.api.url,
    //   params,
    //   props.api.config || {}
    // );

    // const { data, total = 0 } = getResRealData(res);

    // pageInfo.value.totalNum = Number(total);

    // tableList.value = data;

    // props.updateTableId && (tableUid.value = Math.random());
    loading.value = false;
  } catch (error) {
    console.error(error);
    loading.value = false;
  }
};

const handlePageSizeChange = (val: any) => {
  pageInfo.value.pageSize = val;
  refreshTable({
    extraParams: {
      pageSize: val,
    },
  });
};
const handlePageNoChange = (val: any) => {
  pageInfo.value.pageNo = val;
  refreshTable({
    extraParams: {
      pageNo: val,
    },
  });
};

defineExpose({
  refreshTable,
  getPageParams,
});
</script>
<style>
.as-table table {
  margin: 0;
}
</style>
