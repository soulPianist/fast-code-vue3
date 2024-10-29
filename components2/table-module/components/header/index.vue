<template>
  <div class="header">
    <span>{{ unref(unref(props.layout)?.header)?.title }}</span>
    <el-tooltip effect="dark" content="切换布局" placement="top">
      <span class="header-button">
        <slot name="status" :setStatus="props.setStatus" :status="props.status" />
      </span>
    </el-tooltip>
  </div>
</template>
<script lang="ts">
export default {
  name:'table-header'
}
</script>
<script setup lang="ts">
import type { ITableModule } from '../../../../types/components/table-module/index';
import { unref } from 'vue';
type TPropsPlus = {
  status: 'list' | 'card';
  setStatus:(...arg:any[])=>any
}
const props = defineProps<(ITableModule & TPropsPlus)>()

</script>
<style scoped>
.header {
  display: flex;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #1f476f;
  align-items: center;
  justify-content: space-between;
}
</style>