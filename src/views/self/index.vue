<template>
  <i-header />
  <div class="login">
    <div class="avator-box">
      <i class="iconfont avator" />
    </div>
    <span>立即登录</span>
    <van-icon name="arrow" />
  </div>
  <div class="apps">
    <div class="app-item" v-for="({ name, icon }, key) in apps" :key="key">
      <i :class="`iconfont ${icon}`" />
      <span class="app-name">{{ name }}</span>
    </div>
  </div>
  <div class="like">
    <div class="like-box">
      <i class="iconfont self-love" />
    </div>
    <div class="like-info">
      <span>我喜欢的音乐</span>
      <span class="like-num">{{ likeNum }}首</span>
    </div>
    <div class="like-heart">
      <div class="heart"><i class="iconfont self-heart" />心动模式</div>
    </div>
  </div>
  <van-sticky class="playlist">
    <van-tabs>
      <van-tab title="创建歌单">创建</van-tab>
      <van-tab title="收藏歌单">收藏</van-tab>
    </van-tabs>
  </van-sticky>
</template>

<script lang="ts">
import IHeader from "@/components/Iheader.vue";
import Playlist from "@/components/Playlist.vue";
import { Icon, Sticky, Tab, Tabs } from "vant";
import { reactive } from "vue";
export default {
  name: "Self",
  components: {
    IHeader,
    Playlist,
    [Icon.name]: Icon,
    [Sticky.name]: Sticky,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab
  },
  setup() {
    const state = reactive({
      apps: [
        { name: "本地/下载", icon: "self-download" },
        { name: "云盘", icon: "self-cloud" },
        { name: "已购", icon: "self-buy" },
        { name: "最近播放", icon: "self-play" },
        { name: "我的好友", icon: "self-friend" },
        { name: "收藏和赞", icon: "self-collect" },
        { name: "我的播客", icon: "self-boke" },
      ],
      likeNum: 27,
    });

    return state;
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  .avator-box {
    border: 1px solid #fff;
    border-radius: 100%;
    background: #f6f1f1;
    width: 38px;
    height: 38px;
    text-align: center;
    overflow: hidden;
    margin: 0 10px 0 20px;
    .avator {
      color: #f9d9d9;
      display: block;
      font-size: 30px;
      padding-top: 8px;
      &::before {
        display: block;
      }
    }
  }
}
.apps {
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  padding: 10px 0;
  .app-item {
    width: 25%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;
    .app-name {
      font-size: 12px;
      color: #9a9a9a;
      margin-top: 1px;
    }
    .iconfont {
      font-size: 25px;
      color: #ff5353;
    }
  }
}
.like {
  margin-top: 10px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 12px;
  .like-box {
    background: #9b9b9b;
    border-radius: 10px;
    padding: 10px;
    .iconfont {
      color: #fff;
    }
  }
  .like-info {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    .like-num {
      font-size: 12px;
      color: #999;
    }
  }
  .like-heart {
    flex: 1;
    text-align: right;
    font-size: 12px;
    .heart {
      padding: 3px 6px;
      display: inline-block;
      border-radius: 15px;
      border: 1px solid #f2f2f2;
      .self-heart {
        padding-right: 2px;
        vertical-align: revert;
      }
    }
  }
}
.playlist{
  ::v-deep .van-tabs__wrap{
    // height: 24px;
  }
  ::v-deep .van-tabs__nav{
    background: inherit;
    padding: 0;
    .van-tab{
      color: #949494;
      font-weight: bold;
      &.van-tab--active{
        color: #616161;
      }
    }
    .van-tabs__line{
      height: 4px;
      background: #ff5353;
      bottom: 12px;
    }
  }
}
</style>