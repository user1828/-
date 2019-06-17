<template>
  <div class="input-box">
    <input
      :type="inputType"
      :placeholder="placeholder"
      :style="inputStyle"
      :class='{active:focusInput}'
      :maxlength="maxlength"
      :autofocus='autofocus'
      :disabled='disabled'
      :value='inputContent'
      @input="controlInput"
      @focus="focusInput = true"
      @blur="focusInput = false"
      v-if="inputType === 'text'"
    >

    <input
      :type="inputType"
      :placeholder="placeholder"
      :style="inputStyle"
      :class='{active:focusInput}'
      :maxlength="maxlength"
      :autofocus='autofocus'
      :disabled='disabled'
      :value='inputContent'
      @input="controlInput"
      @focus="focusInput = true"
      @blur="focusInput = false"
      v-else-if="inputType === 'password'"
    >
 
    <textarea name="" id="" cols="0" rows="10"
      :placeholder="placeholder"
      :style="inputStyle"
      :class='{active:focusInput}'
      :maxlength="maxlength"
      :autofocus='autofocus'
      :disabled='disabled'
      :value='inputContent'
      @input="controlInput"
      @focus="focusInput = true"
      @blur="focusInput = false"
      v-else-if="inputType === 'textarea'"
    ></textarea>
    <span class="hint-frame" v-if="hintError">
      {{hintInfor}}
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      focusInput:false,
      inputContent:'',
      hintInfor:'输入错误',
      hintError:false
    };
  },
  props: {
    inputStyle: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    inputType: {
      validator(value) {
        return oneOf(value, ["text", "textarea", "password"]);
      },
      default: "text"
    },
    maxlength:{
      type:String,
      default:12
    },
    autofocus:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    // 触发input事件
    controlInput(e){
      if(!e) return
      var event  = e || window.event;
      // 给input赋值
      this.inputContent = event.target.value
      // 触发父组件函数
      this.$emit('inputMode',this.inputContent)
    }
  }
};
// 判断参数是否是其中之一
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
</script>

<style lang="" scope>
.input-box {
  display:inline-block;
  height: auto;
  width: auto;
}
.input-box input {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  line-height: 1;
  outline: none;
  padding: 0 15px;
  height: 40px;
  overflow: hidden;
}
textarea{
    background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  line-height: 1;
  outline: none;
  padding: 0 15px;
  height: 40px;
  overflow: hidden;
}
.hint-frame{
  display: block;
  color:red;
  font-size: 14px;
  line-height: 20px;
}
input[class~='active']{
  border-color:#409eff;
  outline: none;
}

input[class~='desabledInput']{
 background-color: #f5f7fa;
  cursor: not-allowed;
  border-color: #e4e7ed;
  color: #c0c4cc;
}
input::-webkit-input-placeholder {
  color: #c0c4cc;
}
</style>
