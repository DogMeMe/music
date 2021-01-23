<template>
  <van-sticky :offset-top="0">
    <header :class="{ 'scroll-header': scrollHeader }">
      <div class="nav-icon-box">
        <van-icon name="wap-nav" badge="2" />
      </div>
      <slot></slot>
    </header>
  </van-sticky>
</template>
<script lang="ts">
import { Icon, Sticky } from "vant";
import { onMounted, onUnmounted, reactive, toRefs } from "vue";
export default {
  name: "IHeader",
  components: {
    [Icon.name]: Icon,
    [Sticky.name]: Sticky,
  },
  setup() {
    const state = reactive({
      scrollHeader: false,
    });
    const scrollListener = (): void => {
      const scrollTop = window.document.documentElement.scrollTop;
      state.scrollHeader = scrollTop > 30;
    };
    onMounted(() => {
      window.addEventListener("scroll", scrollListener);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", scrollListener);
    });

    return toRefs(state)
  },
};
</script>
<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  animation: 1s background;
  &.scroll-header{
    background: #fff;
  }
  .nav-icon-box {
    padding: 12px;
    .van-icon-wap-nav {
      font-size: 18px;
      display: block;
      .van-badge--fixed {
        right: 10px;
      }
    }
  }
}
</style>