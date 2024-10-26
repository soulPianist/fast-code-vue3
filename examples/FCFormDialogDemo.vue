<template>
  <div class="pages">
    <FCFormDialog ref="formDialogRef" v-model="form" v-bind="config">
      <template v-slot:dataSlot="scope">
        <el-input v-model="scope.data[scope.prop]" placeholder=""></el-input>
      </template>
    </FCFormDialog>
  </div>
</template>
<script lang="ts">
export default {
  name: 'formDialog'
}
</script>
<script setup lang="ts">
import { reactive, ref, computed, onMounted } from 'vue';
import { FCFormDialog } from '@only_you/fast-code-vue3';
import FormDialog from '@only_you/fast-code-vue3/components/form-dialog/core';
import { objRulesBuilder } from '@only_you/fast-code-rules';
// import objRulesBuilder from '../../libs/fast-code-rules/core/objRulesBuilder';
// import FCFormDialog from '../../libs/fast-code-vue3/components/form-dialog/index.vue';
// import FormDialog from '../../libs/fast-code-vue3/components/form-dialog/core.ts';

const formDialogRef = ref<InstanceType<typeof FCFormDialog>>()
const form = reactive({})
const submit = async (data: any) => {

}

onMounted(() => {
  formDialogRef.value?.open({})
})

const config = ref(new FormDialog({
  dialogConfig: {},
  formConfig: {
    submit,
    form:{
      props:{
        rules: objRulesBuilder({
          "name":{
            rules:['required'],
            name:'姓名'
          }
        })
      }
    },
    layout: {
    },
    options: [
      {
        prop: 'name',
        component: 'el-input',
        itemProps: {
          label: 'ddddd',
        },
      },
      {
        component: 'el-input',
        prop: 'ewsse',
        itemProps: {
          label: computed(() => {
            return '名字名字'
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
        },
        item: {
          component: 'el-input',
          prop: '1212'
        }
      },
      {
        component: 'fc-form',
        prop: 'a',
        label: '表单',
        options: [
          {
            component: 'el-input',
            prop: 'namea',
            label: '名字',
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
  }
}
))

</script>
<style scoped>
.pages {
  width: 100%;
  height: 100%;
  background-color: #ccc;
}
</style>