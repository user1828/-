<template>
  <div id="index-box" class="index-box"> 
    <h1>主页</h1>
    <!-- <FormInput> -->
      <Input
        inputType='textarea'
        placeholder="请输入用户名"
        inputStyle='width:180px;'
        maxlength='14'
        :autofocus='autofocus'
        :disabled='disabled'
        @inputMode="controlInput"
      />
      <Input
        inputType='text'
        placeholder="请输入用户名"
        inputStyle='width:180px;'
        maxlength='14'
        :autofocus='autofocus'
        :disabled='disabled'
        @inputMode="controlInput"
      />
      <selectComponent
        :subject='subject'
        @changeSelect='changeSelect'
      />
  </div>
</template>
<script>
import Input from '../../components/input/input.vue'
import selectComponent from '../../components/selectComponent.vue'
export default {
  data(){
    return{
      autofocus:false,
      disabled:false,
      inputValue:'',
      subject:[
        {
          id:0,
          text:'aaa',
          status:false
        },
                {
          id:1,
          text:'aaa',
          status:false
        },
                {
          id:2,
          text:'aaa',
          status:false
        }
      ]
    }
  },
  components:{
    Input,
    selectComponent
  },
  methods:{
    controlInput(res){
      this.inputValue = res || "" 
    },
    changeSelect(res){

      console.log('拿到返回的值==',res)
    }
  }
}
</script>

<style scoped>
.index-box{
  height:40px;
  width:100%;
  font-size:14px;
}
</style>
