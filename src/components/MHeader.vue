<template>
  <van-sticky :offset-top="0">
    <header>
      <div v-on:click="leftClick">
        <i :class="`left-icon iconfont ${leftIcon}`" />
        <span class="header-title">{{ title }}</span>
      </div>
      <slot></slot>
    </header>
  </van-sticky>
</template>
<script lang="ts">
import { Icon, Sticky } from "vant";
import { useRouter } from "vue-router";
import { SetupContext } from 'vue';
export default {
  name: "HomeHeader",
  props: {
    title: {
      type: String,
      default: "",
    },
    leftIcon: {
      type: String,
      default: "header-back",
    },
    customback: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    [Icon.name]: Icon,
    [Sticky.name]: Sticky,
  },
  setup(props: any, { emit }: SetupContext) {
    const $router = useRouter();
    const leftClick = () => {
      if (props.customback) {
        emit("left-click");
        return;
      }
      $router.back();
    };
    return {
      ...props,
      leftClick,
    };
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

  .left-icon {
    padding: 12px;
  }
  .header-title {
    font-size: 16px;
  }
}
</style>