<template>
  <div class="search-inputs">
    <Inputs
      v-bind="props"
      ref="searchFormRef"
      v-if="unref(unref(layout)?.search)?.row"
      v-model="searchForm"
    >
      <template v-for="item in inputSlots" v-slot:[`${item?.prop}`]="scope">
        <slot v-bind="scope" :name="`${item?.prop}`" />
      </template>
      <div class="searchBtnBox">
        <el-button @click="reset" :loading="refLoading">{{
          unref(unref(unref(layout)?.search)?.resetBtn)?.label || "重置"
        }}</el-button>
        <el-button @click="props.search" :loading="props.loading" type="primary">{{
          unref(unref(unref(layout)?.search)?.searchBtn)?.label || "搜索"
        }}</el-button>
      </div>
    </Inputs>
    <div class="row" v-else>
      <Inputs ref="searchFormRef" v-bind="props" v-model="searchForm">
        <template v-for="item in inputSlots" v-slot:[`${item?.prop}`]="scope">
          <slot v-bind="scope" :name="`${item?.prop}`" />
        </template>
      </Inputs>
      <div class="col searchBtnBox">
        <el-button @click="props.search" :loading="props.loading" type="primary">{{
          unref(unref(unref(layout)?.search)?.searchBtn)?.label || "搜索"
        }}</el-button>
        <el-button @click="reset" :loading="refLoading">{{
          unref(unref(unref(layout)?.search)?.resetBtn)?.label || "重置"
        }}</el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ITableModule } from "../../../../../types/components/table-module/index";
import Inputs from "../inputs/index.vue";
import { computed, ref, unref } from "vue";

type IPropsPlus = {
  modelValue: Record<string, any>;
  search: (...arg: any[]) => Promise<any>;
  loading: boolean;
};

const layout = computed(() => {
  return unref(props.layout);
});

const props = defineProps<ITableModule & IPropsPlus>();

const inputs = computed(() => {
  return unref(props.inputs)?.filter((item) => {
    return !unref(unref(item).hide);
  });
});

const inputSlots = computed<Array<any>>(() => {
  return (
    inputs.value
      ?.filter((item) => unref(unref(item).component) === "slot")
      .map((item) => {
        return unref(item);
      }) || []
  );
});

const emit = defineEmits(["update:modelValue"]);
const searchForm = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});

const searchFormRef = ref();
const refLoading = ref(false);

const reset = async () => {
  refLoading.value = true;
  try {
    searchFormRef.value?.resetFields();
    await props.search();
  } finally {
    refLoading.value = false;
  }
};

defineExpose({
  reset,
});
</script>
<style scoped lang="scss">
.row {
  display: flex;
  justify-content: space-between;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.col.searchBtnBox .el-button + .el-button {
  margin: 0;
  margin-top: 10px;
}

.col.searchBtnBox {
  border-left: 1px solid #cccc;
  padding-left: 20px;
  justify-content: space-around;
  margin: 5px 0;
}

.search-inputs {
  border-bottom: 1px solid #cccc;
}
</style>
<script lang="ts">
export default {
  name: "search-inputs",
};
</script>
