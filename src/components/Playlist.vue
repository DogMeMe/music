<template>
  <div class="albumlist-title">
    <span>{{ name }}</span>
    <slot name="album-title-icon" />
  </div>
  <div class="albumlist-list">
    <play
      :imgUrl="picUrl"
      :title="name"
      :playCount="playCount"
      v-for="{ id, picUrl, name, playCount } in list"
      :key="id"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IPlay } from "@/types/find";
import Play from "./Play.vue";
export default defineComponent({
  components: { Play },
  name: "PlayList",
  props: {
    name: {
      type: String,
      required: true,
    },
    list: {
      type: Array as PropType<IPlay[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.albumlist-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-top: 15px;
}
.albumlist-list {
  overflow: hidden;
  .play {
    float: left;
    width: 30%;
    margin-right: 5%;
    margin-top: 10px;
    &:nth-child(3n) {
      margin-right: 0;
    }
    img {
      width: 100%;
      border-radius: 12px;
    }
    .albumlist-name {
      font-size: 12px;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      // transform: scale(.85);
    }
  }
}
</style>
