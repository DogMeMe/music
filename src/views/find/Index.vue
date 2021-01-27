<template>
  <van-skeleton :loading="loading">
    <div class="main">
      <i-header :class="`header ${headerColor}-header`">
        <van-search placeholder="2020年度听歌报告" />
        <i class="iconfont tinggeshiqu" />
      </i-header>
      <van-swipe
        class="banner"
        :autoplay="3000"
        lazy-render
        indicator-color="#fff"
        loop
        @change="bannerChange"
      >
        <van-swipe-item
          v-for="{ pic, targetId, typeTitle, titleColor } in banners"
          :key="targetId"
          :class="`item-${titleColor}-bg`"
        >
          <img :src="pic" />
          <div class="banner-type" :class="`${titleColor}-bg`">
            {{ typeTitle }}
          </div>
        </van-swipe-item>
      </van-swipe>
      <van-swipe
        class="link"
        :width="73"
        :show-indicators="false"
        :loop="false"
      >
        <van-swipe-item v-for="({ name, icon }, index) in links" :key="index">
          <i :class="`iconfont ${icon}-icon link-icon`" />
          <span>{{ name }}</span>
        </van-swipe-item>
      </van-swipe>
      <template
        v-for="({ blockCode, uiElement, creatives, showType }, index) in blocks"
        :key="blockCode"
      >
        <slide-playlist
          :class="{ 'no-margin': index === 1 }"
          v-if="showType === 'HOMEPAGE_SLIDE_PLAYLIST'"
          :list="creatives"
          :name="uiElement.button.text"
          :title="uiElement.subTitle.title"
        />
        <slide-songlist-align
          v-if="showType === 'HOMEPAGE_SLIDE_SONGLIST_ALIGN'"
          :subtitle="uiElement.subTitle.title"
          :title="uiElement.mainTitle.title"
          :name="uiElement.button.text"
          :list="creatives"
        />
      </template>
    </div>
  </van-skeleton>
</template>

<script lang="ts">
import { getHomepage, getBanner } from "@/api/find";
import { IBanner, IBlock, EBlockCode } from "@/types/find";
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import { Icon, Swipe, SwipeItem, Search, Skeleton } from "vant";
import IHeader from "@/components/HomeHeader.vue";
import SlidePlaylist from "@/components/SlidePlaylist.vue";
import SlideSonglistAlign from "@/components/SlideSonglistAlign.vue";
export default defineComponent({
  name: "Find",
  components: {
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Search.name]: Search,
    [Skeleton.name]: Skeleton,
    IHeader,
    SlidePlaylist,
    SlideSonglistAlign,
  },
  setup() {
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
      headerColor: "red",
      blocks: [] as IBlock[],
    });
    const loading = ref(false);
    const bannerChange = (index: number): void => {
      state.headerColor = state.banners[index].titleColor;
    };
    onMounted(async () => {
      const res = await getBanner();
      state.banners = res.banners;
      state.blocks = (await getHomepage()).data.blocks;
      loading.value = false;
    });
    return {
      ...toRefs(state),
      bannerChange,
      EBlockCode,
      loading,
    };
  },
});
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
    padding: 0 12px;
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
  ::v-deep .van-swipe__indicator {
    width: 12px;
    height: 3px;
    margin-right: 3px;
  }
}
.link.van-swipe {
  padding: 10px 0;
  background: #fff;
  border-bottom: 1px solid #efefef;
  .van-swipe-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .link-icon {
      color: #fa3a3b;
      font-size: 28px;
      height: 30px;
      padding: 10px;
      border-radius: 50%;
      background: #fff1f1;
      & ~ span {
        margin-top: 3px;
        font-size: 12px;
      }
    }
  }
}
.slide-playlist {
  &.no-margin {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: 0;
    ::v-deep .header {
      padding-top: 12px;
    }
  }
}
</style>
