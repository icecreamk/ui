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
      <TableColumn :columns="columns" />
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
<script setup>
import { ref, defineComponent } from 'vue'
import http from "axios";
import TableColumn from './tableColumn.vue';
import { getResRealData, resetPageNoFormDelete } from "./utils";

defineOptions({
  name: "BaseTable",
});

defineComponent({
  TableColumn,
});

const props = defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
  showPagination: {
    type: Boolean,
    default: true,
  },
  initData: {
    type: Array,
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
    const curParams =
      (props.getTableParams && props.getTableParams()) || {};
    const newPageNo = resetPageNoFormDelete(pageInfo.value);
    pageInfo.value.pageNo = newPageNo;

    const { pageNo, pageSize } = pageInfo.value;
    const params = {
      ...curParams,
      pageNo,
      pageSize,
      ...extraParams,
    };


    try {
      const res = await http({
        method: props.api.method || "get",
        url: props.api.url || '/',
        params,
        ...props.api.config || {}
      })
      
      const { data, total = 0 } = getResRealData(res);
      pageInfo.value.totalNum = Number(total);
      tableList.value = data;
      props.updateTableId && (tableUid.value = Math.random());
      loading.value = false;
    } catch (error) {
      loading.value = false;
      console.log(error)
    }


  } catch (error) {
    console.error(error);
    loading.value = false;
  }
};

const handlePageSizeChange = (val) => {
  pageInfo.value.pageSize = val;
  refreshTable({
    extraParams: {
      pageSize: val,
    },
  });
};
const handlePageNoChange = (val) => {
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
