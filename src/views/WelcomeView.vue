<template>
    <div style="width: 100vw;height: 100vh;overflow: hidden;display: flex">
        <div style="flex: 3">
            <el-image style="width: 100%;height: 100%" fit="cover" src="../../public/welcome.jpg"/>
        </div>
        <div class="welcome-title">
            <div style="font-size: 30px;font-weight: bold">欢迎来到清测</div>
            <div style="margin-top: 10px">我们是你的眼睛守护者</div>
            <div style="margin-top: 5px">你可以咨训我关于眼部疾病的知识，也可以让我帮你识别眼底血管图片</div>
        </div>
        <div style="flex: 1;background-color: white;z-index: 1">
            <router-view v-slot="{ Component }">
                <transition name="el-fade-in-linear" mode="out-in">
                    <component :is="Component" style="height: 100%"/>
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.welcome-title {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: black;
    text-shadow: 0 0 10px white;
}
</style>