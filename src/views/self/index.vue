<template>
  <div class="self">
    <i-header>
      <div v-show="headerLoginVisible" class="login">
        <div class="avator-box">
          <van-image v-if="avatarUrl" :src="avatarUrl" />
          <i v-else class="iconfont avator" />
        </div>
        <span>{{ nickname }}</span>
      </div>
    </i-header>
    <div class="main">
      <div class="login" @click="handlerLogin">
        <div class="avator-box">
          <van-image v-if="avatarUrl" :src="avatarUrl" />
          <i v-else class="iconfont avator" />
        </div>
        <span>{{ nickname }}</span>
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
      <van-tabs scrollspy sticky class="playlist-wrapper" :offset-top="54">
        <van-tab title="创建歌单">
          <album-list name="创建歌单">
            <template v-slot:titleicon>
              <van-icon name="plus" />
            </template>
            <div class="playlist-input">
              <div class="playlist-icon-box">
                <i class="iconfont self-input" />
              </div>
              <span>一键导入外部音乐</span>
            </div>
          </album-list>
        </van-tab>
        <van-tab title="收藏歌单">
          <album-list name="收藏歌单">
            <div class="playlist-empty">暂无收藏的歌单</div>
          </album-list>
        </van-tab>
      </van-tabs>
      <play-list name="为你推荐" :list="recommend">
        <template class="albumlist-iconbox" v-slot:album-title-icon>
          <van-icon name="cross" />
        </template>
      </play-list>
      <border-click name="更多推荐歌单" :arrow="true" />
    </div>
  </div>
</template>

<script lang="ts">
import IHeader from "@/components/HomeHeader.vue";
import PlayList from "@/components/PlayList.vue";
import AlbumList from "@/components/AlbumList.vue";
import BorderClick from "@/components/BorderClick.vue";
import { useAccountInfo } from "@/hooks/account";
import { IRecommend } from "@/types/self";
import { useRecommend } from "@/hooks/self";
import { Icon, Tab, Tabs, Image } from "vant";
import { computed, onMounted, reactive, Ref, ref, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "Self",
  components: {
    IHeader,
    PlayList,
    AlbumList,
    BorderClick,
    [Icon.name]: Icon,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Image.name]: Image,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
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
      likeNum: 0,
      headerLoginVisible: computed(() => store.state.home.scrollHeader),
    });
    const accountState = useAccountInfo();

    const recommend: Ref<IRecommend[]> = ref([]);
    onMounted(async () => {
      const { recommends } = await useRecommend();
      recommend.value = recommends.value;
    });

    const handlerLogin = (): void => {
      router.push("/login?login=login");
    };

    return {
      ...toRefs(state),
      handlerLogin,
      store,
      ...accountState,
      recommend,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/index.scss";
</style>
