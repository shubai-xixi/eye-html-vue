<template>
  <div class='scbg' style='overflow-y: scroll;'>
    <div class="parent_catainer">
      <div class="container_head">
        <div class="head_pers_info" @click="head_pers_info">
          <div class="head_pic">
            <img class="head_pic_content" style="object-fit: contain;">
          </div>
          <div class="inf_content">
            <span class="user_info">123</span>
            <span class="family_info_ct_phone">用户名：123</span>
            <span class="family_info_ct"></span>
          </div>
        </div>
      </div>

      <div class="userItemListView">
        <div class="my_priview_md" @click="myappointpage">
          <img class="my_priview" >
          <span>我的识别</span>
          <div class="arrow"></div>
        </div>
        <div class="my_priview_md" @click="openmyorder">
          <img class="my_priview" >
          <span>在线咨询</span>
          <div class="arrow"></div>
        </div>
        <div class="my_priview_md" @click="myaid">
          <img class="my_priview">
          <span>健康学习</span>
          <div class="arrow"></div>
        </div>
      </div>

      <div class="userItemListView">
        <div class="my_priview_md" @click="updatepassword">
          <img class="my_priview" >
          <span>修改密码</span>
          <div class="arrow"></div>
        </div>
        <div class="my_priview_md" @click="aboutus" >
          <img class="my_priview">
          <span>关于我们</span>
          <div class="arrow"></div>
        </div>
        <div class="my_priview_md" @click="logout">
          <img class="my_priview">
          <span>退出登录</span>
          <div class="arrow"></div>
        </div>
      </div>

      <div class="last_view"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    head_pers_info() {
      // 点击个人信息触发的方法
    },
    myappointpage() {
      // 点击我的识别触发的方法
    },
    openmyorder() {
      // 点击在线咨询触发的方法
    },
    myaid() {
      // 点击健康学习触发的方法
    },
    updatepassword() {
      // 点击修改密码触发的方法
    },
    aboutus() {
      // 点击关于我们触发的方法
    },
    logout() {
      // 点击退出登录触发的方法
    }
  }
}
</script>
<script>
export default {
  methods: {
    head_pers_info() {
      // Your code for head_pers_info
    },
    myappointpage() {
      // Your code for myappointpage
    },
    openmyorder() {
      // Your code for openmyorder
    },
    myaid() {
      // Your code for myaid
    },
    updatepassword() {
      // Your code for updatepassword
    },
    aboutus() {
      // Your code for aboutus
    },
    logout() {
      // Your code for logout
    }
  }
}
</script>

<style>
.page {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
}

.container_head {
  height: 370rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-image: url(https://img2.baidu.com/it/u=2054237103,239571391&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=400);
  background-size: 100% 100%;
}

.head_img {
  position: absolute;
  width: 100%;
  height: 370rem;
}

.head_pers_info {
  height: 200rem;
  width: 100%;
  margin-bottom: 50rem;
  justify-content: left;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: absolute;
}

.head_pic {
  width: 120rem;
  height: 120rem;
  border-radius: 60rem;
  background-color: #08cbb0;
  color: #ffffff;
  align-items: center;
  display: flex;
  justify-content: center;
}

.head_pic_content {
  position: absolute;
  width: 110rem;
  height: 110rem;
  border-radius: 55rem;
  background-color: white;
}

.head_pic {
  margin-left: 5%;
}

.inf_content {
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
  align-items: flex-start;
  justify-content: center;
  color: #ffffff;
  padding-bottom: 5rem;
}

.user_info {
  text-align: left;
  font-size: 32rem;
  font-weight: bold;
  margin-bottom: 8rem;
}

.family_info_ct_phone {
  text-align: center;
  justify-content: center;
  font-size: 28rem;
  margin-bottom: 2rem;
}

.family_info_ct {
  text-align: center;
  justify-content: center;
  font-size: 28rem;
  margin-bottom: 2rem;
  width: 500rem;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;
}

.userItemListView {
  background: #fff;
  padding: 0 0rem;
  margin: 24rem 0;
}

.userItemListView > div {
  height: 94rem;
  line-height: 94rem;
  padding-left: 50rem;
  border-bottom: 1rem solid #F1F1F1;
  position: relative;
}

/* 移除最后一个元素的下边框 */
.userItemListView > div:last-child {
  border: none;
}

.my_priview_md{
  display: flex;
  align-items: center;
}

.my_priview{
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.arrow{
  width: 16px;
  height: 16px;
  border-top: 4px solid #999;
  border-right: 4px solid #999;
  /* 旋转45度 */
  transform: rotate(45deg);
  /* 调整位置 */
  position: absolute;
  right: 30px;
  top: 38px;
}

.userItemListView text{
  font-size: 30px;
}

.last_view{
  background:#f0f0f0;
  width: 100%;
  height:1200px;
}

</style>