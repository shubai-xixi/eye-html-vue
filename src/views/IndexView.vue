<template>
  <!-- 加载 -->
  <!--Loading /-->
  <!-- 壁纸 -->
  <!--Background @loadComplete="loadComplete" /-->
  <!-- 主界面 -->
  <Transition name="fade" mode="out-in">
    <main id="main" v-if="store.indexmsg.imgLoadStatus">
      <div class="container" v-show="!store.indexmsg.backgroundShow">
        <section class="all" v-show="!store.indexmsg.setOpenState">
          <MainLeft />
          <MainRight v-show="!store.indexmsg.boxOpenState" />
          <Box v-show="store.indexmsg.boxOpenState" />
        </section>
      </div>
      <!-- 移动端菜单按钮 -->
      <Icon
          class="menu"
          size="24"
          v-show="!store.indexmsg.backgroundShow"
          @click="store.indexmsg.mobileOpenState = !store.indexmsg.mobileOpenState"
      >
        <component :is="store.indexmsg.mobileOpenState ? CloseSmall : HamburgerButton" />
      </Icon>
    </main>
  </Transition>
</template>
<script setup>
import { helloInit } from "@/util/getTime";
import { HamburgerButton, CloseSmall } from "@icon-park/vue-next";
import { Icon } from "@vicons/utils";
import MainLeft from "@/views/index/Left.vue";
import MainRight from "@/views/index/Right.vue";
import Box from "@/views/index/box.vue";
import {useStore} from "@/stores";
import {onBeforeUnmount, onMounted, watchEffect} from "vue";

const store = useStore();

// 页面宽度
const getWidth = () => {
  store.setInnerWidth(window.innerWidth);
};

// 加载完成事件
const loadComplete = () => {
  nextTick(() => {
    // 欢迎提示
    helloInit();
  });
};

// 监听宽度变化
watchEffect(
    () => store.indexmsg.innerWidth,
    (value) => {
      if (value < 990) {
        store.indexmsg.boxOpenState = false;
      }
    },
);


onMounted(() => {
  // 自定义鼠标
  //cursorInit();

  // 屏蔽右键
  /*document.oncontextmenu = () => {
    ElMessage({
      message: "为了浏览体验，本站禁用右键",
      grouping: true,
      duration: 2000,
    });
    return false;
  };
   */

  // 鼠标中键事件
  window.addEventListener("mousedown", (event) => {
    if (event.button === 1) {
      store.backgroundShow = !store.indexmsg.backgroundShow;
      ElMessage({
        message: `已${store.indexmsg.backgroundShow ? "开启" : "退出"}壁纸展示状态`,
        grouping: true,
      });
    }
  });

  // 监听当前页面宽度
  getWidth();
  window.addEventListener("resize", getWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", getWidth);
});
</script>

<style lang="scss" scoped>
#main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  transition: transform 0.3s;
  animation: fade-blur-main-in 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.5s;
  .container {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    .all {
      width: 100%;
      height: 100%;
      padding: 0 0.75rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .more {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #00000080;
      backdrop-filter: blur(20px);
      z-index: 2;
      animation: fade 0.5s;
    }
    @media (max-width: 1200px) {
      padding: 0 2vw;
    }
  }
  .menu {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 84%;
    left: calc(50% - 28px);
    width: 56px;
    height: 34px;
    background: rgb(0 0 0 / 20%);
    backdrop-filter: blur(10px);
    border-radius: 6px;
    transition: transform 0.3s;
    animation: fade 0.5s;
    &:active {
      transform: scale(0.95);
    }
    .i-icon {
      transform: translateY(2px);
    }
    @media (min-width: 721px) {
      display: none;
    }
  }
}
</style>
