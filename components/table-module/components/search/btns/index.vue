<template>
  <div class="btns">
    <el-button v-for="(item,index) in btns" :key="index"
     @click="action(unref(item.action) as any,index)"
     :loading="loadings[index]"
     v-bind="item.props"
      >
      {{item.label}}
      </el-button>
  </div>
</template>
<script setup lang="ts">
import type { ITableModule } from '../../../../../types/components/table-module/index';
import { computed, ref, unref } from 'vue'
const loadings = ref<{[key:number]:boolean}>({})

const props = defineProps<(ITableModule & {
  modelValue: (Record<string, any>)
})>()

const btns = computed(()=>{
  return unref(props.btns)?.filter(item=>{
    return !unref(unref(item).hide)
  }).map(item=>{
    return unref(item)
  })
})

const action = async (fun:(...arg:any[])=>any,index:number)=>{
  loadings.value[index] = true
  await fun(props.modelValue)
  loadings.value[index] = false
}
</script>
<style scoped>
.btns{
  margin:10px 0;
  display: flex;
}
</style>
<script lang="ts">
export default {
  name:"fc-table-btns"
}
</script>