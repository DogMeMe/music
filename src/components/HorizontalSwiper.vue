<template>
  <div class="horizontal-swiper">
    <div class="header">
      <div>
        <div class="header-main-title">{{ main }}</div>
        <div class="header-title">{{ title }}</div>
      </div>
      <border-click :name="name" arrow />
    </div>
    <van-swipe :loop="false" :show-indicators="false" width="120">
      <van-swipe-item
        v-for="{ creativeId, resources, uiElement } in list"
        :key="creativeId"
      >
        <img v-lazy="uiElement.image.imageUrl" />
        <div class="title">{{ uiElement.mainTitle.title }}</div>
        <div class="count">
          <i class="iconfont list-play"/>
          <span>{{ numberFormat(resources[0].resourceExtInfo.playCount) }}</span>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts">
import { getCurrentInstance, reactive } from "vue";
import BorderClick from "./BorderClick.vue";
import { Swipe, SwipeItem } from "vant";
export default {
  name: "HorizontalSwiper",
  components: {
    BorderClick,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  props: {
    title: String,
    name: String,
    main: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { ctx }: any = getCurrentInstance();
    const numberFormat = ctx.numberFormat;
    const state = reactive({
      numberFormat,
    });
    return state;
  },
};
</script>
<style lang="scss" scoped>
.horizontal-swiper {
  background: #fff;
  border-radius: 12px;
  margin-top: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    padding: 20px 12px 0;
    border-radius: 12px;
    align-items: center;
    .header-main-title {
      color: #b3b3b3;
    }
    .header-title {
      font-size: 18px;
    }
  }
  .van-swipe {
    padding: 15px 0;
    margin-left: 12px;
    .van-swipe-item {
      img {
        width: calc(100% - 10px);
        border-radius: 12px;
        box-shadow: 0 -5px 5px #f2f2f2;
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
        right: 10px;
        top: 2px;
        background: rgba(0, 0, 0, 0.3);
        color: #fff;
        font-size: 12px;
        border-radius: 12px;
        transform: scale(0.85);
        padding: 0 5px;
        .list-play{
          font-size: 10px;
        }
      }
    }
  }
}
</style>
