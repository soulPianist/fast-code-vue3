<template>
  <div class="inputs">
    <el-form
      ref="searchFormRef"
      :inline="true"
      v-bind="unref(unref(unref(props?.layout)?.search)?.form)?.props"
      :model="searchForm"
      v-on="unref(unref(unref(props?.layout)?.search)?.form)?.events || {}"
    >
      <div class="inputs-content" :style="{ '--inputNum': unref(unref(unref(unref(props?.layout)?.search)?.form)?.cols) || 5 }">
        <el-form-item
          v-for="(item, index) in inputs"
          :key="index"
          :prop="item.prop"
          :label="item.label"
        >
          <div style="width:100%">
            <slot :searchForm="searchForm" :config="item" :prop="item.prop" :name="`${item?.prop}_input_slot`">
              <component
                :is="item.component"
                v-model.trim="searchForm[item.prop as string]"
                clearable
                v-on="item.events"
                v-bind="item.props"
              ></component>
            </slot>
          </div>
        </el-form-item>
        <slot></slot>
      </div>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import type { ITableModule } from '../../../../../types/components/table-module/index';
import { computed, unref , ref } from 'vue'
import lodash from 'lodash'
const props = defineProps<(ITableModule & {
  modelValue: Record<string,any>
})>()

const inputs = computed(()=>{
  return unref(props.inputs)?.filter(item=>{
    return !unref(unref(item).hide)
  }).map(item=>{
    return lodash.merge(unref(item), {
      props:{
        clearable:true
      },
      events:{

      }
    }, { props:(unref(unref(item) as any)?.props) })
  })
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

const searchFormRef = ref()

const resetFields = () => {
  searchFormRef.value?.resetFields()
}

defineExpose({
  resetFields
})

</script>
<style scoped>
.inputs{
  flex: 1;
}
.inputs-content {
  --inputNum: 5;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(var(--inputNum), auto);
  /* grid-gap: 10px; */
}
.inputs-content :deep(.el-form-item__content) {
  width: 100% !important;
}
</style>
<script lang="ts">
export default {
  name: 'fc-table-inputs'
}
</script>
