<template>
  <div class="container">
    <!-- 标题部分 -->
    <div class="title">
      <div class="first">
        <p>清测</p>
      </div>
      <p>眼底图像快速上传，一键即可智能识别</p>
    </div>

    <div class="photo">
      <input type="file" @change="getImg" enctype="multipart/form-data"> <!-- 添加文件选择器 -->
      <img :src="imageUrl"> <!-- 根据 imageUrl 动态显示图片 -->
    </div>

    <!-- 一键识别按钮 -->
    <div class="submit" @click="result">
      一键识别
    </div>
    <div @click="hhh">打印</div>
  </div>
</template>

<script setup>
import router from "@/router";
import {ref} from "vue";
import {defaultError, defaultFailure} from "@/util/index";
import {ElMessage} from "element-plus";
import {useStore} from "@/stores";
import axios from "axios";

//let img = localStorage.getItem('imgUrl')
let imageUrl = ref(null); // 创建响应式变量 imageUrl
let file = null;
const result = () => {
  if(file) {
    axios.post('/file/recv', {
      file: file
    },{headers:{'Content-Type':'multipart/form-data'}}).then(response => {
      if (response.data === 'failed') {
        defaultFailure("图片上传失败");
      } else {
        ElMessage.success("图片上传成功");
        const store = useStore();
        localStorage.setItem('imgUrl',imageUrl)
        localStorage.setItem('taskid',response.data)
        router.push("/result");
      }
    }).catch(err => defaultError(err));
  }// 点击按钮后导航到 "/result" 路由
};

const getImg = (event) => {
  let f = event.target.files[0]; // 获取用户选择的文件
  if (f.name.match(/\.(jpg|jpeg|png|bmp)$/i)) {
    file = f;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e){
      imageUrl.value = e.target.result;
      //console.log(imageUrl);
    }
  }else {
    file = null;
    alert("您选择的图片文件不符合规范，请重新选择图片文件");
  }
};


</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

.container{
  width: 100vw;
  height: 100vh;
}

.container .title{
  width: 100vw;
  height: 28vh;
  background-color: rgba(103,177,240,100%);
  background-image: url("../../public/rec.png");

  background-repeat: no-repeat;
  background-position: right bottom;
}
.container .title .first{
  margin-top: 2vh;
  margin-left: 4vw;
  display: flex;
  flex-direction: row;
}
.container .title .first p{
  font-size: 10vh;
  font-weight: 500;
  color: lavenderblush;
  font-family: 华文楷体;
}
.container .title .first img{
  width: 15vh;
  height: 15vh;
  display: block;
}
.container .title>p{
  font-size: 4vh;
  width: 80vw;
  text-align: center;
  margin-top: 4vh;
}

.container .photo{
  width: 60vw;
  height: 60vh;
  border: 3px solid rgba(103,117,240,25);
  margin-left: 20vw;
  margin-top: 2vh;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container .submit{
  background-color: lavender;
  width: 30vw;
  margin-left: 35vw;
  margin-top: 1vh;
  text-align: center;
}

.container .photo img{
  //border: 20px solid black;
  width: 400px;
  height: 400px;
}
</style>
<!--template>
  <input type="file" @change="handleImageUpload">
  <img :src="imageUrl" v-if="imageUrl" style="max-width: 300px;">
</template>

<script>
export default {
  data() {
    return {
      imageUrl: null
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
};
</script-->