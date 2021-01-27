<template>
  <div class="slide-songlist">
    <div class="header">
      <div>
        <div class="header-main-title">{{ title }}</div>
        <div class="header-title">
          <i class="iconfont find-refresh" />
          <span>{{ subtitle }} </span>
        </div>
      </div>
      <border-click :name="name" :arrow="false">
        <template v-slot:before>
          <i class="iconfont find-play" />
        </template>
      </border-click>
    </div>
    <van-swipe :loop="false" :show-indicators="false" :width="width">
      <van-swipe-item v-for="({ resources }, index) in list" :key="index">
        <div
          class="song"
          v-for="{ resourceId, uiElement } in resources"
          :key="resourceId"
        >
          <img :src="uiElement.image.imageUrl" />
          <i class="iconfont find-play" />
          <div class="song-info">
            <div class="song-title">
              {{ uiElement.mainTitle && uiElement.mainTitle.title }}
            </div>
            <div
              :class="{
                'rcmd-song':
                  uiElement.subTitle &&
                  uiElement.subTitle.titleType === 'songRcmdTag',
                'song-subtitle': true,
              }"
            >
              {{ uiElement.subTitle && uiElement.subTitle.title }}
            </div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts">
import BorderClick from "@/components/BorderClick.vue";
import { Icon, Swipe, SwipeItem } from "vant";
import { ref } from "vue";
export default {
  name: "SlideSonglistAlign",
  props: ["subtitle", "title", "name", "list"],
  components: {
    BorderClick,
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  setup() {
    const width = ref(375);
    width.value =
      parseFloat(window.getComputedStyle(window.document.body).width) - 25;
    return {
      width,
    };
  },
};
</script>
<style lang="scss" scoped>
.slide-songlist {
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
      font-size: 12px;
    }
    .header-title {
      font-size: 18px;
      .find-refresh {
        margin-right: 3px;
      }
    }
    .find-play {
      font-size: 12px;
      transform: scale(0.85);
    }
  }
  .van-swipe {
    .van-swipe-item {
      padding: 10px 0 15px 12px;
      box-sizing: border-box;
    }
    .song {
      display: flex;
      align-items: center;
      height: 60px;
      position: relative;
      img {
        width: 48px;
        border-radius: 8px;
        margin-right: 10px;
      }
      .find-play {
        position: absolute;
        left: 24px;
        margin-left: -8px;
        color: rgba(255, 255, 255, 0.75);
      }
      .song-info {
        flex: 1;
        padding: 6px 0;
        .song-subtitle {
          color: #909090;
          font-size: 13px;
          padding-top: 3px;
          &.rcmd-song {
            color: #f6ba31;
            font-size: 12px;
            padding-left: 5px;
          }
        }
      }
      &:not(:last-child):after {
        position: absolute;
        left: 50px;
        bottom: 0;
        content: "";
        height: 1px;
        background: #e6e6e6;
        transform: scaleY(0.6);
        width: calc(100% - 55px);
      }
    }
  }
}
</style>
