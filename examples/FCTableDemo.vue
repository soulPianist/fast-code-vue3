<template>
  <div class="pages">
    <FCTable ref="fcTableRef" v-bind="config" v-model="form">
      <template v-slot:dataSlot="scope">
        <el-input v-model="scope.data[scope.prop]" placeholder=""></el-input>
      </template>
    </FCTable>
  </div>
</template>
<script lang="ts">
export default {
  name: 'tablePage'
}
</script>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { FCTable } from '@only_you/fast-code-vue3';
import TableModule from '@only_you/fast-code-vue3/components/table-module/core';

const fcTableRef = ref<InstanceType<typeof FCTable>>()

const form = reactive({})

const getData = async (data: any) => {
  return {
    data: [],
    total: 0
  }
}

const config = ref(new TableModule({
  getData,
  layout: {
    search: {
      row: true
    },
    pagination: {
      hide: false
    },
  },
  tabs: {
    key: "111",
    options: [
      {
        label: '1',
        value: "1"
      },
      {
        label: '2',
        value: "2"
      }
    ]
  },
  inputs: [
    {
      label: '姓名',
      prop: 'name',
      component: 'el-input'
    }
  ],
  columns: [
    {
      label: '姓名',
      prop: 'name'
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