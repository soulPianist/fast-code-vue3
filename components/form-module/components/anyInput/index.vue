<template>
  <component :is="$attrs.component" class="inputCom" v-bind="props" v-on="events" v-model.trim="value">
  </component>
</template>
<script>
import lodash from "lodash";
export default {
  name: "fc-any-input",
  data() {
    return {};
  },
  props: ['modelValue', 'item'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
    props: function () {
      return lodash.merge({
        clearable: true,
        disabled:this.disabledCom(this.$attrs.props)
      }, this.$attrs.props)
    },
    events: function () {
      return lodash.merge({

      }, this.$attrs.events)
    },
    disabledCom: function () {
      return (props) => {
        const disabled = props?.disabled;
        if (disabled === undefined || disabled === null) {
          return false;
        }
        if (typeof disabled === "boolean") {
          return disabled;
        }
        return disabled(this.value);
      };
    },
  },
  methods: {

  },
};
</script>
<style scoped>
.inputCom {
  width: 100%;
  display: flex;
}

.inputCom> :deep(div) {
  width: 100%;
}
</style>