<template>
  <div :class="store.indexmsg.mobileOpenState? 'left hidden' : 'left'">
    <Message />
  </div>
</template>

<script setup>
import Message from "@/components/Message.vue";
import {useStore} from "@/stores";
const store = useStore();
</script>

<style lang="scss" scoped>
.left {
  // flex: 1 0 0%;
  width: 50%;
  margin-right: 10px;
  transform: translateY(20px);
  &.hidden {
    display: none;
  }
  @media (max-width: 720px) {
    margin-right: 0;
    width: 100%;
  }
}
</style>
