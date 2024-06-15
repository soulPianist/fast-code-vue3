<template>
  <div class="search">
    <div class="left-box">
      <slot name="leftInputs"></slot>
    </div>
    <div class="right-box">
      <slot name="statistic"></slot>
      <SearchInputs
        :search="search"
        ref="searchInputsRef"
        v-bind="props"
        v-model="searchForm"
        v-model:loading="loading"
      >
        <template v-for="item in inputSlots" v-slot:[`${item?.prop}_input_slot`]="scope">
          <slot v-bind="scope" :name="`${item?.prop}_input_slot`" />
        </template>
      </SearchInputs>
      <Btns v-bind="props" v-model="searchForm"></Btns>
      <slot name="illustrate"></slot>
      <Tabs v-bind="props" :search="search" v-model="searchForm"></Tabs>
      <div v-loading="searchInputsRef?.loading">
        <slot :data="data" name="content"></slot>
      </div>
      <Pagination v-bind="props" :total="total" v-model="searchForm"></Pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tabs from './tabs/index.vue'
import SearchInputs from './searchInputs/index.vue'
import Btns from './btns/index.vue'
import Pagination from './pagination/index.vue'
import { ref, computed, watch, unref } from 'vue'
import lodash from 'lodash'
import type { ITableModule } from '../../../../types/components/table-module/index';

defineOptions({
  name: "table-module"
})

const searchInputsRef = ref<InstanceType<typeof SearchInputs>>()

const props = defineProps<(ITableModule & {
  modelValue: (Record<string, any>)
})>()

const inputs = computed(()=>{
  return unref(props.inputs)?.filter(item=>{
    return !unref(unref(item).hide)
  })
})
const inputSlots = computed<Array<any>>(()=>{
  return inputs.value?.filter((item) => unref(unref(item).component) === 'slot').map(item=>{
    return unref(item)
  }) || []
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

const data = ref<Array<any>>([])
const total = ref(0)
const reset = async () => {
  await searchInputsRef?.value?.reset()
  await search()
}
const loading = ref(false)
const search = async () => {
  loading.value = true
  await props.getData(lodash.cloneDeep(props.modelValue))
    .then((reslut:any) => {
      total.value = reslut.total
      data.value = reslut.data
    })
    .finally(() => {
      loading.value = false
    })
}

const antiShakeSearch = lodash.debounce(search, 500)

const watchData = (() => {
  return [props.modelValue]
})()
watch(
  watchData,
  () => {
    antiShakeSearch()
  },
  {
    deep: true
  }
)

defineExpose({
  reset,
  search,
  antiShakeSearch
})
</script>
<style scoped></style>