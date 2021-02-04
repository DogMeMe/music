<template>
  <div class="play">
    <img :src="imgUrl" />
    <div class="title">{{ title }}</div>
    <div class="count">
      <i class="iconfont list-play" />
      <span>{{ numberFormat(playCount) }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Play",
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    playCount: {
      type: Number,
      required: true,
    },
  },
  setup() {},
});
</script>
<style lang="scss" scoped>
.play {
  position: relative;
  img {
    width: 100%;
    border-radius: 12px;
  }
  .title {
    font-size: 12px;
    line-height: 16px;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 0 10px 0 2px;
  }
  .count {
    position: absolute;
    right: 0px;
    top: 2px;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 12px;
    border-radius: 12px;
    transform: scale(0.85);
    padding: 0 5px;
    .list-play {
      font-size: 10px;
    }
  }
}
</style>
