<template>
  <div class="container">
    <div class="letf">
      <div class="jiazhai">
        <img src="@/../public/xh.png" height="209" width="182.5"/>
        <img src="@/../public/hh.png" height="209" width="156"/>
        <img src="@/../public/xb.png" height="209" width="191.5"/>
      </div>
      <div class="tips">报告正在右侧生成中，请耐心等待</div>
      <div class="photo" :src="img"></div>
      <div class="cancle" @click="cancle">取消本次识别</div>
      <div class="zy" @click="zy">返回主页</div>
    </div>
    <div class="right">
      <div class="a4">
        <br>
        <h3>清测医学</h3>
        <h4>眼部疾病识别报告单</h4>
        <p>——————————————————————————</p>
        <p>注：以上识别结果，由AI智能判断，有一定的参考价值，但有极小概率会出现的误诊情况，不能作为正式的医学诊断证明</p>
        <p>——————————————————————————</p>
        <br/>
        <p>上传人id: {{user}} </p>
        <p>{{res}}</p>
      </div>
      <div class="xiazai">下载报告</div>
    </div>
  </div>
</template>

<script setup>

import {useStore} from "@/stores";
import {onMounted, ref} from "vue";
import {defaultError, defaultFailure} from "@/util/index";
import axios from "axios";
import router from "@/router";

const user = ref()
user.value=localStorage.getItem('token')===null?"匿名用户":localStorage.getItem('token');
console.log(user.value)
const res = ref("")
const store = useStore();
let img = ref()
img.value = localStorage.getItem('imgUrl')
const taskid = localStorage.getItem('taskid');
const cancle = ()=>{
  router.push('/rec')
}
const zy = ()=>{
  router.push('/index')
}

function typeWriter(text,delay=200) {
  let index = 0;
  console.log(text);
  setInterval(()=>{
    if (index < text.length) {
      res.value += text.charAt(index);
      index++;
    } else {
      res.value = "";
      index = 0;
    }},delay)
}

// 使用方法：typeWriter("你好，世界！", "yourElementId", 100);


onMounted(()=>{

  axios.post('/identify/getResult',{
    taskId: taskid
  }).then(response =>{
    if (response.status !== 500 ){
      defaultError("图片错误")
      typeWriter("图片错误，识别识别")
    }
    else {
      let cd = response.data.result
      typeWriter("识别结果："+cd);

    }
  }).catch(err =>defaultFailure(err));

})


</script>

<style>

*{
  margin: 0;
  padding: 0;
}

.container{
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: lightskyblue;
}

.container .letf{
  width: 50vw;
  border: 1px solid lavender;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container .letf .jiazhai{
  display: flex;
  flex-direction: row;
}
.container .letf .tips{
  font-size: 5vh;
}
.container .letf .photo{
  width: 40vw;
  height: 50vh;
  margin-top: 3vh;
  border: 1px solid white;
  background-attachment: fixed;
  background-size: cover;
}
.container .letf .cancle{
  margin-top: 3vh;
  width: 10vw;
  border: 2px solid lightsteelblue;
  background-color: lightgoldenrodyellow;
  font-size: 2vh;
  text-align: center;
}

.container .letf .zy{
  margin-top: 3vh;
  width: 10vw;
  border: 2px solid lightsteelblue;
  background-color: aquamarine;
  font-size: 1.5vh;
  text-align: center;
}

.container .right{
  width: 50vw;
  border: 1px solid khaki;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container .right .a4{
  width: 70%;
  height: 70%;
  background-color: white;
  border: 1px solid #000;
  box-shadow: 3px 1px 10px 10px #999;
  text-align: center;
}
.container .right .a4 h3{
  font-size: 3.5vh;
  font-family: 宋体;
  font-weight: 900;
}
.container .right .a4 h4{
  margin-top: 1vh;
  font-weight: 400;
  font-size: 2vh;
}
.container .right .xiazai{
  margin-top: 3vh;

}
</style>
<!--style>
.container {
  display: flex;
  justify-content: space-between;
}

.left-pane {
  flex: 1;
  padding: 20px;
}

.right-pane {
  flex: 1;
  padding: 20px;
}
</style-->