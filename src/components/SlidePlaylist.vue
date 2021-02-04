<template>
  <div class="slide-playlist">
    <div class="header">
      <div class="header-title">{{ title }}</div>
      <border-click :name="name" arrow />
    </div>
    <van-swipe :loop="false" :show-indicators="false" width="120">
      <template v-for="{ creativeId, resources } in list" :key="creativeId">
        <van-swipe-item
          v-for="{ uiElement, resourceId, resourceExtInfo } in resources"
          :key="resourceId"
        >
          <play :title="uiElement.mainTitle.title " :imgUrl="uiElement.image.imageUrl" :playCount="resourceExtInfo.playCount" />
        </van-swipe-item>
      </template>
    </van-swipe>
  </div>
</template>
<script lang="ts">
import { getCurrentInstance, reactive } from "vue";
import BorderClick from "./BorderClick.vue";
import { Swipe, SwipeItem } from "vant";
import Play from './Play.vue';
export default {
  name: "HorizontalSwiper",
  components: {
    BorderClick,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    Play
  },
  props: {
    title: String,
    name: String,
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
.slide-playlist {
  background: #fff;
  border-radius: 12px;
  margin-top: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    padding: 20px 12px 0;
    border-radius: 12px;
    align-items: center;
    .header-title {
      font-size: 18px;
    }
  }
  .van-swipe {
    padding: 15px 0;
    margin-left: 12px;
    .van-swipe-item {
      .play {
        width: calc(100% - 10px);
        border-radius: 12px;
        box-shadow: 0 -5px 2px #f2f2f2;
      }
    }
  }
}
</style>
