<template>
  <as-table
    :columns="columns"
    ref="baseTableRef"
    :tableAttrs="tableAttrs"
    :getTableParams="getTableParams"
    :api="{
      url: 'table',
      method: 'get',
      config: {
        baseURL: 'http://localhost:7002/',
        withCredentials: false,
      },
    }"
    @onSelectionChange="handleSelectionChange"
  />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from "vue";

export default defineComponent({
  setup() {

    onMounted(() => {
      nextTick(() => {
        triggerRefresh();
      });
    });

    const baseTableRef: any = ref(null);

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

    const tableAttrs = {
      rowKey: (val) => val.tacticId,
    };
    const getTableParams = () => {
      return {}
    };

    const triggerRefresh = async ({
      extraParams = {},
      resetPage = false,
    } = {}) => {
      const { refreshTable } = baseTableRef.value || {};
      refreshTable && refreshTable({ extraParams, resetPage });
    };

    const handleSelectionChange = () => {}

    return {
      columns,
      tableAttrs,
      baseTableRef,
      getTableParams,
      handleSelectionChange,
    };
  },
});
</script>

<style>

</style>