<template>
  <div class="pagination">
    <el-pagination v-if="!pagination?.hide" 
      v-bind="paginationProps" 
      :total="props.total" 
      v-on="pagination?.events || {}" 
      v-model:current-page="searchForm.pageNum"
      v-model:page-size="searchForm.pageSize"></el-pagination>
  </div>
</template>
<script lang="ts" setup>
import type { ITableModule } from '../../../../../types/components/table-module/index';
import { computed, unref } from 'vue'
import lodash from "lodash"
type TPropsPlus = {
  modelValue: Record<string, any>;
  total: number
}
const props = defineProps<(ITableModule & TPropsPlus)>()

const paginationProps = computed(() => {
  return lodash.merge({
    background:true,
    layout:"total, sizes, prev, pager, next, jumper",
    'pageSizes': [5, 10, 20, 50, 100]
  }, unref(pagination.value?.props))
})

const pagination = computed(() => {
  return unref(unref(props.layout)?.pagination)
})

const emit = defineEmits(['update:modelValue'])
const searchForm = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})
const init = () => {
  searchForm.value.pageSize = unref(pagination.value?.hide) ? 999999 : 20
  searchForm.value.pageNum = 1
}
init()
</script>
<script lang="ts">
export default {
  name: 'table-pagination'
}
</script>
<style scoped>
.pagination {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>