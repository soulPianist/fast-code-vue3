<template>
  <el-dialog class="dialog" v-bind="dialogProps" v-model="isShow" v-on="dialogEvents">
    <template #header>
      <slot name="header"></slot>
    </template>
    <template #default>
      <slot name="default">
        <FCForm ref="fcFormRef"
          v-model="valueCom"
          v-bind="formConfig"
        >
          <template v-for="(item) in slotComponents" v-slot:[item.slotName]="scope">
            <slot :name="item.slotName" v-bind="scope"></slot>
          </template>
          <template #addbtnTop>
            <slot name="addbtnTop" />
          </template>
          <template #addbtnCenter>
            <slot name="addbtnCenter" />
          </template>
          <template #addbtnBottom>
            <slot name="addbtnBottom" />
          </template>
          <template #deleteBtn>
            <slot name="deleteBtn" />
          </template>
        </FCForm>
      </slot>
    </template>
    <template v-slot:footer>
      <slot name="footer">
        <el-button v-if="!unref(unref(resetBtn)?.hide)" v-bind="unref(unref(resetBtn)?.props)" @click="reset">{{ unref(unref(resetBtn)?.label) || "重置" }}</el-button>
        <el-button v-if="!unref(unref(submitBtn)?.hide)" v-bind="unref(unref(submitBtn)?.props)" @click="submit">{{ unref(unref(submitBtn)?.label) || "确定" }}</el-button>
      </slot>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">

import { computed, ref, unref } from 'vue';
import lodash from "lodash"
import type { TFormModule } from "../../types/components/form-module/index";
import type { TFormDialog } from "../../types/components/form-dialog/index";
import FCForm from '../form-module/index.vue'
defineOptions({
  name: "form-dialog"
})

const props = defineProps<(TFormDialog & {
  modelValue: Record<string, any>
})>()

const isShow = ref(false)

const emit = defineEmits(['update:modelValue','closed','reseted','submited'])
const valueCom = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const fcFormRef = ref<InstanceType<typeof FCForm>>()

const formConfig = computed(() => {
  return unref(unref(props.formConfig))
})


const reset = ()=>{
  fcFormRef.value?.reset()
  emit('reseted')
}

const submit = async ()=>{
  await fcFormRef.value?.submit()
  emit('submited',valueCom.value)
  close()
}

const open = async (data:any)=>{
  valueCom.value = lodash.cloneDeep(data)
  isShow.value = true;
}

const close = ()=>{
  valueCom.value = {}
  isShow.value = false
  emit('closed')
}

const dialogProps = computed(() => {
  return lodash.merge({
    title:valueCom.value?.id ? '编辑' : '新增'
  }, unref(unref(props.dialogConfig)?.props))
})

const resetBtn = computed(() => {
  return unref(unref(props.dialogConfig)?.resetBtn)
})

const submitBtn = computed(() => {
  const _props = {
    type:'primary'
  }
  return lodash.merge({
    props: _props
  }, unref(unref(props.dialogConfig)?.submitBtn))
})

const dialogEvents = computed(() => {
  return lodash.merge({
    close
  }, unref(unref(props.dialogConfig)?.events))
})

const slotComponents = computed(() => {
  return unref((unref(props.formConfig) as TFormModule)?.options)?.map(item=>{
    return unref(item)
  }).filter((item:any)=>{
    return item?.slotName
  })
}) as any

defineExpose({
  open,
  close,
  reset,
  submit
})
</script>
<style scoped>

</style>