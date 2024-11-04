<template>
    <el-table-column
      v-for="col in columns"
      show-overflow-tooltip
      :key="col.uid || col.prop"
      v-bind="getColAttrs(col)"
    >
  </el-table-column>
</template>

<script setup>
import { omit } from "lodash-es";

defineOptions({
  name: "BaseTableColumn",
});

defineProps({
  columns: {
    type: Array,
    default: () => [],
  }
});

const getColAttrs = (col) => {
  return omit(col, ["slots", "uid"]);
};
</script>
