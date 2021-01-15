<template>
  <i-header :class="`header ${headerColor}-header`">
    <van-search placeholder="2020年度听歌报告" />
    <i class="iconfont tinggeshiqu" />
  </i-header>
  <van-swipe
    ref="banner"
    class="banner"
    :autoplay="3000"
    :height="bannerHeight"
    indicator-color="#fff"
    loop
    @change="bannerChange"
  >
    <van-swipe-item
      v-for="{ pic, targetId, typeTitle, titleColor } in banners"
      :key="targetId"
      :class="`item-${titleColor}-bg`"
    >
      <img v-lazy="pic" />
      <div class="banner-type" :class="`${titleColor}-bg`">
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
import { getBanner } from "@/api/find";
import { IBanner, IBannerResponse } from "@/types/find";
import { onMounted, reactive, ref, toRefs } from "vue";
import { Icon, Swipe, SwipeItem, Search } from "vant";
import { AxiosPromise, AxiosProxyConfig } from "axios";
import IHeader from "@/components/Iheader.vue";
export default {
  name: "Find",
  components: {
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Search.name]: Search,
    IHeader,
  },
  setup() {
    let banner = ref(null);
    const state = reactive({
      banners: [] as IBanner[],
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
      headerColor: 'blue',
    });
    const bannerChange = (index: number): void => {
      state.headerColor = state.banners[index].titleColor;
    };
    onMounted(async () => {
      const res = <IBannerResponse>await getBanner();
      state.banners = res.banners;
      // banner = ref('banner')
    });
    return {
      ...toRefs(state),
      banner,
      bannerChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  &.blue-header {
    background: linear-gradient(#e0e7f1, #cfdef0);
  }
  &.red-header {
    background: linear-gradient(#e6e1dd, #f3efec);
  }
  .van-search {
    flex: 1;
    padding: 10px 0;
    background: inherit;
    ::v-deep .van-search__content {
      padding-left: 8px;
      border-radius: 15px;
    }
  }
  .iconfont.tinggeshiqu {
    font-size: 18px;
    padding: 12px;
  }
}
.van-swipe.banner {
  .van-swipe-item {
    color: #fff;
    text-align: center;
    padding: 0 10px;
    box-sizing: border-box;
    &.item-blue-bg {
      background: linear-gradient(#cfdef0, #fff 70%);
    }
    &.item-red-bg {
      background: linear-gradient(#f3efec, #fff 70%);
    }
    .header-bg {
      height: 54px;
      position: fixed;
      width: 100%;
      top: 0;
    }
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
      &.red-bg {
        background: #fa4345;
      }
      &.blue-bg {
        background: #3d9ecc;
      }
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
  background: #fff;
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