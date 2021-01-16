<template>
  <router-view />
  <van-tabbar route active-color="#dc3433" inactive-color="#999">
    <van-tabbar-item replace to="/find" icon="find netease-icon iconfont">发现</van-tabbar-item>
    <van-tabbar-item replace to="/search" icon="boke boke-icon iconfont">播客</van-tabbar-item>
    <van-tabbar-item replace to="/self" icon="my my-music-icon iconfont">我的</van-tabbar-item>
    <van-tabbar-item replace to="/search" icon="k k-icon iconfont">K歌</van-tabbar-item>
    <van-tabbar-item replace to="/home" icon="cloud cloud-icon iconfont">云村</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { Tabbar, TabbarItem } from "vant";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup() {
    return {

    }
  },
});
</script>

<style lang="scss" scoped>
.main{
  padding-bottom: 90px;
}
</style>
