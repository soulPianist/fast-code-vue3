<template>
  <div class="search">
    <div class="left-box">
      <slot name="leftInputs"></slot>
    </div>
    <div class="right-box">
      <slot name="statistic"></slot>
      <SearchInputs
        :search="search"
        ref="searchInputsRef"
        v-bind="props"
        v-model="searchForm"
        v-model:loading="loading"
      >
        <template v-for="item in inputSlots" v-slot:[`${item?.prop}`]="scope">
          <slot v-bind="scope" :name="`${item?.prop}`" />
        </template>
      </SearchInputs>
      <FCBtns v-bind="props" v-model="searchForm"></FCBtns>
      <slot name="illustrate"></slot>
      <FCTabs v-bind="props" :search="search" v-model="searchForm"></FCTabs>
      <div v-loading="searchInputsRef?.loading">
        <slot :data="data" name="content"></slot>
      </div>
      <FCPagination v-bind="props" :total="total" v-model="searchForm"></FCPagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import FCTabs from "./tabs/index.vue";
import SearchInputs from "./searchInputs/index.vue";
import FCBtns from "./btns/index.vue";
import FCPagination from "./pagination/index.vue";
import { ref, computed, watch, unref } from "vue";
import lodash from "lodash";
import type { ITableModule } from "../../../../types/components/table-module/index";

defineOptions({
  name: "table-module",
});

const searchInputsRef = ref<InstanceType<typeof SearchInputs>>();

const props = defineProps<
  ITableModule & {
    modelValue: Record<string, any>;
    pageLoading: boolean;
  }
>();

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

const emit = defineEmits(["update:modelValue", "update:pageLoading"]);
const searchForm = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});

const loading = computed({
  get() {
    return props.pageLoading;
  },
  set(val) {
    emit("update:pageLoading", val);
  },
});

const data = ref<Array<any>>([]);
const total = ref(0);
const reset = async () => {
  await searchInputsRef?.value?.reset();
  await search();
};

const search = async () => {
  loading.value = true;
  await props
    .getData(lodash.cloneDeep(props.modelValue))
    .then((reslut: any) => {
      total.value = reslut.total;
      data.value = reslut.data;
    })
    .finally(() => {
      loading.value = false;
    });
};

const antiShakeSearch = lodash.debounce(search, 500);

const watchData = (() => {
  return [props.modelValue];
})();
watch(
  watchData,
  () => {
    antiShakeSearch();
  },
  {
    deep: true,
  }
);

defineExpose({
  reset,
  search,
  antiShakeSearch,
});
</script>
<style scoped></style>
