<template>
  <el-card class="fc-table-container">
    <template v-if="unref(unref(layout?.header)?.title)" #header>
      <Header :status="status" :setStatus="setStatus" v-bind="props"> 
        <template #status="scoped">
          <slot v-bind="scoped" name="status"></slot>
        </template>
      </Header>
    </template>
    <Search v-bind="props" v-model="searchForm" ref="searchRef">
      <template v-for="item in inputSlots"  v-slot:[`${unref(unref(item)?.prop)}_input_slot`]="scope">
        <slot v-bind="scope" :name="`${unref(unref(item)?.prop)}_input_slot`" />
      </template>
      <template v-slot:leftInputs>
        <slot name="leftInputs" />
      </template>
      <template v-slot:statistic>
        <slot name="statistic" />
      </template>
      <template v-slot:illustrate>
        <slot name="illustrate" />
      </template>
      <template #content="scope">
        <List v-bind="props" :data="scope.data" v-if="status === 'list'">
           <template v-for="(item,index) in columnSlots" :key="index" #[`${unref(item).slotName}_column_slot`]="itemScope">
                <slot 
                  :name="`${unref(item).slotName}_column_slot`"
                  v-bind="itemScope"
                />
           </template>
        </List>
        <slot v-else name="content" :status="status" v-bind="scope"></slot>
      </template>
    </Search>
  </el-card>
</template>
<script lang="ts" setup>
import Header from './components/header/index.vue'
import List from './components/list/index.vue'
import Search from './components/search/index.vue'
import { computed, ref, onMounted, unref } from 'vue'
import type { ITableModule } from '../../types/components/table-module/index';


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

const columnSlots = computed(()=>{
  return unref(props.columns)?.filter((item) => {
    return !!unref(unref(item).slotName)
  }).map(item=>{
    return unref(item)
  }) || []
})

const layout = computed(()=>{
  return unref(props.layout)
})

const inputs = computed(()=>{
  return unref(props.inputs)?.filter(item=>{
    return !unref(unref(item).hide)
  })
})

const inputSlots = computed(()=>{
  return inputs.value?.filter((item) => unref(unref(item).component) === 'slot').map(item=>{
    return unref(item)
  }) || []
})

type TStatus = 'list'|'card'
const status = ref<TStatus>('list')
const setStatus = async (_status: TStatus) => {
  status.value = _status
}
const searchRef = ref<InstanceType<typeof Search>>()
const reset  = async ()=>{
  await searchRef.value?.reset()
}
const antiShakeSearch = ()=>{
  searchRef.value?.antiShakeSearch()
}
const search = async ()=>{
 await searchRef.value?.search()
}
const init = async () => {
  antiShakeSearch()
}
onMounted(() => {
  init()
})

defineExpose({
  setStatus,
  search,
  reset,
  antiShakeSearch
})

defineOptions({
  name:"table-module"
})
</script>
<style scoped lang="scss">
.fc-table-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.fc-table-container :deep(.el-card__body) {
  flex: 1;
}
</style>