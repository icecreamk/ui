<template>
  <as-table
    :columns="columns"
    :showPagination="false"
    :initData="[
      {
        time: '2024-10-23',
        province: '福建省',
      },
    ]"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
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

    return {
      columns,
    };
  },
});
</script>

<style>
</style>