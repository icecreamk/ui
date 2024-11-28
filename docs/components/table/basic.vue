<template>
  <as-table
    :columns="columns"
    ref="baseTableRef"
    :api="api"
  />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from "vue";

export default defineComponent({
  setup() {

    onMounted(() => {
      triggerRefresh();
    });

    const api = {
      url: "table",
      method: "get",
      config: {
        baseURL: "http://localhost:7002/",
        withCredentials: false,
      },
    };

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

    const triggerRefresh = async ({
      extraParams = {},
      resetPage = false,
    } = {}) => {
      const { refreshTable } = baseTableRef.value || {};
      refreshTable && refreshTable({ extraParams, resetPage });
    };


    return {
      columns,
      api,
      baseTableRef,
    };
  },
});
</script>

<style>

</style>