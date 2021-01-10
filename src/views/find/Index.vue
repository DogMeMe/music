<template>
  <header>
    <van-icon name="wap-nav" badge="2" />
    <van-search placeholder="2020年度听歌报告" />
    <i class="iconfont tinggeshiqu" />
  </header>
  <van-swipe :autoplay="3000" indicator-color="#fff" loop>
    <van-swipe-item v-for="{ pic, targetId, typeTitle, titleColor } in banners" :key="targetId">
      <img v-lazy="pic" />
      <div class="banner-type" :style="{background: titleColor}">{{typeTitle}}</div>
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { getRecommend, getBanner } from "@/api/find";
import { onMounted, reactive } from "vue";
import { Icon, Search, Swipe, SwipeItem } from "vant";
export default {
  name: "Find",
  components: {
    [Icon.name]: Icon,
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  setup() {
    getBanner();
    return {
      banners: [
        {
          pic:
            "http://p1.music.126.net/pg1L2HCb5iLdEVwnDAZbwg==/109951165617482609.jpg",
          targetId: 1810021934,
          targetType: 1,
          titleColor: "red",
          typeTitle: "独家",
        },
        {
          pic:
            "http://p1.music.126.net/Cwvyof65kF0nNPCmm3fOoQ==/109951165617181536.jpg",
          targetId: 1808053189,
          targetType: 1,
          titleColor: "red",
          typeTitle: "新歌首发",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    padding: 0 10px;
    font-size: 16px;
    &.van-icon-wap-nav {
      .van-badge--fixed {
        right: 10px;
      }
    }
  }
  .van-search {
    flex: 1;
    padding: 10px;
    .van-search__content {
      border-radius: 14px;
      background: #eff1f0;
      .van-icon-search {
        padding: 0;
      }
    }
  }
}
.van-swipe {
  .van-swipe-item {
    color: #fff;
    text-align: center;
    padding: 0 10px;
    box-sizing: border-box;
    img {
      width: 100%;
      display: block;
      border-radius: 12px;
    }
    .banner-type{
      position: absolute;
      bottom: 0;
      right: 10px;
      color: #fff;
      font-size: 12px;
      padding: 2px 5px;
      border-radius: 12px 0 ;
    }
  }
}
</style>