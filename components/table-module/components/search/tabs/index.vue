<template>
  <div v-if="unref(unref(tabs)?.options)?.length" class="tabs">
    <el-tabs v-on="unref(tabs)?.events || {}" v-bind="unref(tabs)?.props" v-model="searchForm[unref(tabs)?.key as string]">
      <el-tab-pane v-for="(item, index) in tabPanes" :key="index" v-on="item.events || {}" v-bind="item.props">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, unref } from 'vue'
import type { ITableModule } from '../../../../../types/components/table-module/index';
import lodash from 'lodash'
const tabPanes = computed(() => {
  return unref(unref(props?.tabs)?.options)?.map(item => {
    return lodash.merge(unref(item), {
      props: {
        name: unref(unref(item)?.value),
        label: unref(unref(item)?.label)
      }
    }, unref(unref(item)?.props))
  })
})

const props = defineProps<(ITableModule & {
  modelValue: (Record<string, any>)
})>()

const emit = defineEmits(['update:modelValue'])
const searchForm = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})
const tabs = computed(() => {
  return unref(props.tabs)
})

const showTabs = computed(() => {
  return unref(unref(props.tabs)?.options)?.filter(item=>{
    return !unref(unref(unref(item).props)?.disabled)
  }).map((item)=>{
    return unref(item)
  })
})

onMounted(() => {
  if(unref(unref(tabs)?.key)){
    searchForm.value[unref(unref(tabs)?.key) as string] = showTabs.value?.length ? showTabs.value[0].value : ""
  }
})
</script>
<script lang="ts">
export default {
  name: 'fc-table-tabs'
}
</script>
