<template>
  <div class="pages">
    <FCForm ref="fcFormRef" class="fcForm" v-model="form" v-bind="config">
      <template v-slot:dataSlot="scope">
        <el-input v-model="scope.data[scope.prop]" placeholder=""></el-input>
      </template>
    </FCForm>
  </div>
</template>
<script lang="ts">
export default {
  name: 'formPage'
}
</script>
<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import { FCForm } from '@only_you/fast-code-vue3';
import FormModule from '@only_you/fast-code-vue3/components/form-module/core';
const fcFormRef = ref<InstanceType<typeof FCForm>>()

const form = reactive<any>({})

const submit = async (data: any) => {

}

const config = ref(new FormModule({
  submit,
  form: {
    props: {

    },
  },
  options: [
    {
      label: "sss",
      component: 'el-input',
      prop: computed(() => { 
        return "sss"
      }),
      itemProps: {
        rules: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      hide: true
    },
    {
      component: 'el-input',
      label: "fffaaaf",
      itemProps: {

      },
      prop: 'ewew',
    },
    {
      component: 'el-input',
      prop: 'ewsse',
      itemProps: {
        label: computed(() => {
          return '名字'
        })
      },
      props: {
        disabled: computed(() => {
          return true
        })
      }
    },
    {
      component: 'fc-list',
      prop: 'b',
      label: '复用',
      props: {
        type: 'String',
        addButtonPositon: 'bottom',
      },
      item: {
        component: 'el-input',
        prop: '1212'
      }
    },
    {
      component: 'fc-form',
      prop: 'a',
      label: '表单1',
      options: [
        {
          component: 'el-input',
          prop: 'namea',
          label: '名字we',
        },
        {
          component: 'el-input',
          prop: 'namea2',
          label: '名字',
        }
      ]
    },
    {
      component: 'fc-form',
      prop: 'ab',
      label: '表单',
      hide: computed(() => {
        if (form?.a?.namea) {
          return true
        }
        return false
      }),
      options: [
        {
          component: 'el-input',
          prop: 'namea',
          label: '名字we',
        },
        {
          component: 'el-input',
          prop: 'namea2',
          label: '名字',
        },
      ]
    },
    {
      component: 'el-select-v2',
      prop: 'k32323ey',
      label: '选择框',
      hide: computed(() => {
        if (form?.a?.namea) {
          return true
        }
        return false
      }),
      props: {
        options: [{ value: 'sss', label: '22' }]
      }
    },
    {
      label: '数据',
      component: 'slot',
      prop: 'data',
      slotName: 'dataSlot'
    }
  ]
}))

</script>
<style scoped>
.pages {
  width: 100%;
  height: 100%;
  background-color: #ccc;
}
</style>