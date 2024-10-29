<template>
  <el-card class="box-card" v-bind="lodash.merge({
    shadow:'never'
  },unref(unref(layout.card)?.props))" >
    <template v-if="header?.title" #header>
      <slot name="header">
        <div v-if="header?.title" class="box-card-header">
          <span>{{ header?.title }}</span>
        </div>
      </slot>
    </template>
    <el-form ref="formRef" v-bind="form?.props" v-on="form?.events" :model="props.modelValue">
      <div :style="{
      'grid-gap': '5px',
      'grid-template-columns':
        'repeat(' + layout?.cols + ',1fr)',
    }" class="form-content">
        <el-form-item v-for="item in (options as any)" :key="item.prop" v-bind="item.itemProps" :prop="item.prop"
          class="form-item" :flag="item.prop + 'Flag'">
          <span class="input-top input-text-tip">{{ item.topText }}</span>
          <slot v-if="item.component === 'slot'" :ref="(e: any) => {
      setRef(item.prop, e)
    }" :data="valueCom" :prop="item.prop" :name="item.slotName" />
          <div v-else class="input-row">
            <span class="input-befor input-text-tip">{{ item.beforText }}</span>
            <FCDiscriminator :ref="(e: any) => {
              setRef(item.prop, e)
            }" v-model="valueCom[item.prop]" v-if="valueCom" v-bind="item" class="input-style input-row">
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
            </FCDiscriminator>
            <span class="input-after input-text-tip">{{ item.afterText }}</span>
          </div>
          <span class="input-bottom input-text-tip">{{ item.bottomText }}</span>
        </el-form-item>
      </div>

      <div v-if="!hideBtn" class="btns-style">
        <el-form-item label-width="0">
          <el-button v-if="!resetBtn?.hide" v-bind="resetBtn?.props" @click="reset">
            {{ resetBtn?.title }}
          </el-button>
          <el-button v-if="!submitBtn?.hide" v-bind="submitBtn?.props" @click="submit">
            {{ submitBtn?.title }}
          </el-button>
        </el-form-item>
      </div>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import lodash from 'lodash';
import { computed, ref, unref } from 'vue';
import FCDiscriminator from './components/discriminator/index.vue'
import type { IFormModule } from "../../types/components/form-module/index";
defineOptions({
  name: "form-module"
})
const props = defineProps<(IFormModule & {
  modelValue: (Record<string, any>)
})>()

const formRef = ref()
const emit = defineEmits(['update:modelValue'])
const valueCom = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  }
})

const form = computed(() => {
  return lodash.merge({
    props: {},
    events: {}
  }, unref(props.form))
})

const hideBtn = computed(() => {
  const action = props.submit || unref(unref(props.btn)?.submit)?.action
  return unref(props.layout)?.hideBtn || !action
})

const header = computed(() => {
  return lodash.merge({
    title: ''
  }, unref(props.header))
})

const options = computed(() => {
  if (!unref(props.options)?.length) {
    return []
  }
  return unref(props?.options)?.filter((data) => {
    return !unref(unref(data).hide)
  }).map(item=>{
    return lodash.merge({
      itemProps:{
        label : unref(unref(item)?.label)
      }
    },unref(item))
  })
})

const layout = computed(() => {
  return lodash.merge({
    cols: 1
  }, unref(props?.layout))
})

const slotOptions = computed(() => {
  return options.value?.filter((item) => unref(unref(item).component) === 'slot')
})

const resetLoading = ref(false)
const resetBtn = computed(() => {
  return lodash.merge({
    title: '重置',
    hide: false,
    props: {
      plain: true,
      loading: resetLoading.value
    },
  }, unref(props.btn)?.reset, {
    action: props.reset || unref(unref(props.btn)?.reset)?.action
  })
})

const reset = () => {
  resetLoading.value = true
  formRef.value?.resetFields();
  optionRefs.value?.forEach((item: any) => {
    item?.resetFields()
  })
  resetSoltOptions()
  if (resetBtn.value?.action) {
    (resetBtn.value as any)?.action();
  }
  resetLoading.value = false
}

const resetSoltOptions = () => {
  slotOptions.value?.forEach((item: any) => {
    if (item?.resetFields) {
      item?.resetFields()
    } else {
      valueCom.value[item.prop] = item.defaultValue
    }
  })
}
resetSoltOptions()

const optionRefs = ref<Map<string, any>>(new Map())
const setRef = (prop: string, el: any) => {
  optionRefs.value.set(prop, el)
}

const submitLoading = ref(false)
const submitBtn = computed(() => {
  return lodash.merge({
    hide: false,
    title: props.modelValue?.id ? '修改' : '新增',
    props: {
      type: "primary",
      plain: true,
      loading: submitLoading.value
    },
  }, unref(props.btn)?.submit, {
    action: props.submit || unref(unref(props.btn)?.submit)?.action
  })
})

const submit =  () => {
  return new Promise((resolve, reject) => {
    validate((valid: any) => {
    if (valid) {
      submitLoading.value = true
      if (!submitBtn.value?.action) {
        submitLoading.value = false
        throw new Error('请重写submit方法')
      }
       (submitBtn.value as any)?.action(props.modelValue).then(resolve).catch(reject).finally(() => {
        submitLoading.value = false
      });
    }
  });
  })
}
const validate = (callback: Function) => {
  formRef.value.validate((valid: any) => {
    let res = true;
    if (!valid) {
      res = false;
    }
    optionRefs.value?.forEach((item: any) => {
      item?.validate((v: any) => {
        if (!v) {
          res = false;
        }
      });
    })
    callback(res);
  });
}

defineExpose({
  validate,
  submit,
  reset
})

</script>
<style scoped lang="scss">
.form-content {
  display: grid;
}

.form-content-item {
  align-items: center;
}

.input-row {
  flex: 1;
}

.btns-style {
  display: flex;
  justify-content: center;
}

::v-deep .el-form-item {
  margin-bottom: 18px !important;
}

::v-deep .el-form-item__content {
  display: unset !important;
}
</style>