<template>
  <div class="pages">
    <FCFormDialog ref="formDialogRef" v-model="form" v-bind="config"></FCFormDialog>
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

const formDialogRef = ref<InstanceType<typeof FCFormDialog>>()

const form = reactive({})

const submit = async (data: any) => {
  // console.log("xxxxxxxxxx", data)
}

onMounted(() => {
  formDialogRef.value?.open({})
})

const config = ref(new FormDialog({
  dialogConfig: {},
  formConfig: {
    submit,
    layout: {
      card: {
        props: {

        }
      }
    },
    options: [
      {
        component: 'el-input',
        props: {
          label: computed(() => {
            return '名字名字'
          }),
        },
        prop: 'ewew',
        // hide: () => {
        //   return true
        // }
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