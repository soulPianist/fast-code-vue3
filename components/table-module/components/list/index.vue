<template>
  <div class="table-list">
    <el-table
      v-on="unref(layout?.table)?.events || {}"
      v-bind="unref(layout?.table)?.props || {}"
      :data="props.data"
      style="width: 100%"
      ref="tableRef"
      v-loading="props.pageLoading"
    >
      <template v-for="item in columns" :key="item.key">
        <el-table-column v-if="item.slotName" v-bind="item.props">
          <template v-slot="scope">
            <template v-if="item.slotName">
              <slot
                :name="item.slotName"
                v-bind="{ ...scope, loading: props.pageLoading }"
              />
            </template>
          </template>
        </el-table-column>
        <el-table-column v-else v-bind="item.props" />
      </template>
      <el-table-column v-bind="layoutActions?.props">
        <template v-slot="scope">
          <slot name="actions" v-bind="scope">
            <div style="display: flex; flex-wrap: wrap">
              <div
                v-for="(item, index) in hidePart(actions, scope)"
                :key="index"
                style="margin: 5px 5px"
              >
                <el-button
                  :loading="
                    actionLoadings[scope.$index] && actionLoadings[scope.$index][index]
                  "
                  v-bind="item.props"
                  @click.stop="runAction(item.action, scope, scope.$index, index)"
                  >{{ item.label || "操作" }}
                </el-button>
              </div>
            </div>
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
export default {
  name: "table-list",
};
</script>
<script setup lang="ts">
import { computed, ref, unref } from "vue";
import type { ITableModule } from "../../../../types/components/table-module/index";
import lodash from "lodash";
const props = defineProps<
  ITableModule & {
    data: Array<any>;
    pageLoading: boolean;
  }
>();

const tableRef = ref();

defineExpose({
  tableRef,
});

const hidePart = (actions: Array<any>, scope: any) => {
  const res = unref(actions).filter((action) => {
    if (unref(unref(action)?.hide) === undefined) {
      return true;
    }
    if (typeof unref(unref(action)?.hide) === "boolean") {
      return !unref(unref(action)?.hide);
    }
    if (typeof unref(unref(action).hide) === "function") {
      return !unref(unref(action).hide)(scope);
    }
  });
  return res;
};

const actions = computed(() => {
  return unref(props.actions);
});

const layout = computed(() => {
  return unref(props.layout);
});

const layoutActions = computed(() => {
  return lodash.merge(
    {
      props: {
        label: "操作",
      },
    },
    unref(unref(props?.layout)?.actions)
  );
});

const columns = computed(() => {
  return (
    unref(props.columns)?.map((item) => {
      return lodash.merge(
        unref(item),
        { props: unref(item) },
        { props: unref(unref(item)?.props) }
      );
    }) || []
  );
});

const actionLoadings = ref(
  {} as {
    [key: string]: any;
  }
);
const runAction = (action: Function, scope: any, $index: number, index: number) => {
  if (!actionLoadings.value[$index]) {
    actionLoadings.value[$index] = {};
  }
  actionLoadings.value[$index][index] = true;

  const pro = action(scope);
  try {
    pro.finally(() => {
      actionLoadings.value[$index][index] = false;
    });
  } catch (err) {
    actionLoadings.value[$index][index] = false;
  }
};
</script>
<style scoped></style>
