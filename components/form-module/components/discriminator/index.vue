<template>
  <div>
    <DynamicInput v-if="$attrs.component === 'fc-list'" v-model="valueCom" v-bind="$attrs.props">
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
      <template v-slot="{ dataList, index }">
        <FcDiscriminator v-model="dataList[index]" v-bind="$attrs.item">
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
        </FcDiscriminator>
      </template>
    </DynamicInput>
    <FcForm v-else-if="$attrs.component === 'fc-form'" ref="fcFormRef" v-model="valueCom" v-bind="$attrs">
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
    </FcForm>
    <AnyInput v-else v-model="valueCom" v-bind="$attrs" />
  </div>
</template>
<script>
import DynamicInput from '../dynamicInput/index.vue'
import AnyInput from '../anyInput/index.vue'
import { defineAsyncComponent } from "vue"
export default {
  name: 'fc-discriminator',
  components: {
    AnyInput,
    DynamicInput,
    FcForm: defineAsyncComponent(() => import('../../index.vue')),
    FcDiscriminator: defineAsyncComponent(() => import('./index.vue'))
  },
  data() {
    return {
    }
  },
  props: ['modelValue'],

  created() {
    if (this.$attrs.component === 'fc-form') {
      this.valueCom = {}
    }
  },
  
  computed: {
    valueCom: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    validate(callback) {
      this.$refs.fcFormRef && this.$refs.fcFormRef.validate((valid) => {
        callback(valid)
      })
    },
    resetFields() {
      this.$refs.fcFormRef && this.$refs.fcFormRef?.resetFields()
    }
  }
}
</script>
<style scoped></style>