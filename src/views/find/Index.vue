<template>
  <header>
    <van-icon name="wap-nav" badge="2" />
    <van-search placeholder="2020年度听歌报告" />
    <i class="iconfont tinggeshiqu" />
  </header>
  <van-swipe
    ref="banner"
    class="banner"
    :autoplay="3000"
    :height="bannerHeight"
    indicator-color="#fff"
    loop
  >
    <van-swipe-item
      v-for="{ pic, targetId, typeTitle, titleColor } in banners"
      :key="targetId"
    >
      <img v-lazy="pic" />
      <div class="banner-type" :style="{ background: titleColor }">
        {{ typeTitle }}
      </div>
    </van-swipe-item>
  </van-swipe>
  <van-swipe class="link" :width="80" :show-indicators="false" :loop="false">
    <van-swipe-item v-for="({ name, icon }, index) in links" :key="index">
      <i :class="`iconfont ${icon}-icon link-icon`" />
      <span>{{ name }}</span>
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { getRecommend, getBanner } from "@/api/find";
import { onMounted, reactive, ref, toRefs } from "vue";
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
    // let banner = ref(null)
    const state = reactive({
      banners: [],
      links: [
        { icon: "day", name: "每日推荐" },
        { icon: "fm", name: "私人FM" },
        { icon: "songs", name: "歌单" },
        { icon: "rank", name: "排行榜" },
        { icon: "broadcast", name: "直播" },
        { icon: "album", name: "数字专辑" },
        { icon: "sing-chat", name: "唱聊" },
        { icon: "game", name: "游戏专区" },
      ],
      bannerHeight: 138,
    });
    onMounted(async () => {
      // banner.value = ref('banner')
      const res = await getBanner();
      state.banners = res.data.banners;
    });
    return {
      ...toRefs(state),
      // banner
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
.van-swipe.banner {
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
    .banner-type {
      position: absolute;
      bottom: 0;
      right: 10px;
      color: #fff;
      font-size: 12px;
      padding: 2px 5px;
      border-radius: 12px 0;
    }
  }
  .van-swipe__indicator {
    width: 12px;
    height: 3px;
    margin-right: 3px;
  }
}
.link.van-swipe {
  padding: 10px 0;
  .van-swipe-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .link-icon {
      color: #fa3a3b;
      font-size: 30px;
      height: 30px;
      padding: 10px;
      border-radius: 50%;
      background: #fff1f1;
      & ~ span {
      margin-top: 3px;
      font-size: 13px;
    }
    }
    
  }
}
</style>