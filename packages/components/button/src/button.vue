<template>
  <div class="as-button">
    <button>
      <slot />
    </button>
  </div>
</template>

<script setup>
defineOptions({
  name: "as-button",
});
</script>
<style>
.as-button {
  display: inline-block;
  border: 1px solid #ddd;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  background-color: #409eff;
  color: #fff;
}
</style>