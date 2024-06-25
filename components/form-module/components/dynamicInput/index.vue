<template>
  <div :class="'dynamicInput col ' + (border ? 'border' : '')">
    <div v-for="(item, index) in valueCom" :key="index" class="dynamicInput-item">
      <div
        v-if="addButtonPositon.indexOf('top') !== -1 && index === 0 && dynamic === true"
        class="add btns row"
      >
        <span @click="addItem(index)">
          <slot :isLimit="isLimit"  name="addbtnTop">
            <el-button :disabled="isLimit" >添加</el-button>
          </slot>
        </span>
      </div>
      <div
        v-if="addButtonPositon.indexOf('center') !== -1 && index !== 0 && dynamic === true"
        class="add btns row"
      >
        <span @click="addItem(index)">
          <slot :isLimit="isLimit" name="addbtnCenter">
            <el-button :disabled="isLimit">添加</el-button>
          </slot>
        </span>
      </div>
      <div class="row">
        <div class="dynamicInput-item-input">
          <slot :index="index" :dataList="valueCom"> 请添加输入框 </slot>
        </div>
        <div class="del item-btns btns">
          <span @click="delItem(index)">
            <slot name="deleteBtn">
              <el-button>
                <el-icon><Delete /></el-icon>
              </el-button>
            </slot>
          </span>
        </div>
      </div>
    </div>
    <div
      v-if="dynamic === true && addButtonPositon.indexOf('bottom') !== -1"
      class="add btns row"
    >
      <span @click="addItem()">
        <slot :isLimit="isLimit" name="addbtnBottom">
          <el-button :disabled="isLimit">添加</el-button>
        </slot>
      </span>
    </div>
  </div>
</template>
<script>
import { Delete } from "@element-plus/icons-vue";
export default {
  name: "fc-dynamic-input",
  components: {
    Delete,
  },
  props: {
    border: {
      default: false,
      type: Boolean,
    },
    addButtonPositon: {
      default: "center bottom",
      type: String,
    },
    limit: {
      default: -1,
      type: Number,
    },
    disable: {
      default: false,
      type: Boolean,
    },
    dynamic: {
      default: true,
      type: Boolean,
    },
    type: {
      default: "Object",
      type: String,
    },
    modelValue: {
      default: ()=>[],
      type: Array,
    },
  },
  computed: {
    valueCom: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  data() {
    return {};
  },
  created() {
    this.init();
  },
  destroyed() {
    this.valueCom =  [];
  },
  computed:{
    isLimit:()=>{
      if(this.limit < 0){
        return false
      }
      return (this.valueCom?.length || 0) >= this.limit
    }
  },
  methods: {
    init() {
      if(!this.valueCom?.length){
        this.addItem()
      }
    },
    delItem(index) {
      this.valueCom.splice(index, 1);
      this.$emit("update:modelValue", this.valueCom);
    },
    addItem(index) {
      if(this.isLimit){
        return
      }
      let temp = {};
      if (this.type === "Object") {
        temp = {};
      } else if (this.type === "String") {
        temp = "";
      } else if (this.type === "Number") {
        temp = 0;
      } else if (this.type === "Array") {
        temp = [];
      }
      if (index === undefined || index === null) {
        this.valueCom.push(temp);
      }
      if (typeof index === "number") {
        this.valueCom.splice(index, 0, temp);
      }
      this.$emit("update:modelValue", this.valueCom);
    },
  },
};
</script>
<style scoped>
.row {
  display: flex;
  align-items: center;
}
.dynamicInput-item-input {
  flex: 1;
}
.add {
  display: flex;
  justify-content: center;
  margin: 5px 0;
}
.del {
  margin-left: 5px;
}
</style>
