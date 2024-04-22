import {computed, ref} from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const auth = ref({
    token: null
  });
  const img = ref({
    img: null
  });
  const indexmsg = ref({
    imgLoadStatus: true, // 壁纸加载状态
    innerWidth: null, // 当前窗口宽度
    musicOpenState: false, // 音乐面板开启状态
    backgroundShow: false, // 壁纸展示状态
    boxOpenState: false, // 盒子开启状态
    mobileOpenState: true, // 移动端开启状态
    mobileFuncState: true, // 移动端功能区开启状态
    setOpenState: false, // 设置页面开启状态
    });
  // 更改当前页面宽度
  const setInnerWidth = (value)=>{
    indexmsg.innerWidth = value;
    if (value >= 720) {
      indexmsg.mobileOpenState = false;
      indexmsg.mobileFuncState = false;
    }
  };
  // 更改壁纸加载状态
  const setImgLoadStatus = (value)=>{
    indexmsg.imgLoadStatus = value;
  };
  return { auth, indexmsg,setInnerWidth,setImgLoadStatus }
})
