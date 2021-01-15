<template>
  <header>
    <div class="nav-icon-box">
      <van-icon name="wap-nav" badge="2" />
    </div>
    <slot></slot>
  </header>
</template>
<script lang="ts">
import { Icon } from "vant";
export default {
  name: "IHeader",
  components: {
    [Icon.name]: Icon,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
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