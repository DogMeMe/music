<template>
  <div class="albumlist-title">
    <span>{{ name }}</span>
    <slot name="album-title-icon" />
  </div>
  <div class="albumlist-list">
    <div class="albumlist-item" v-for="{ id, picUrl, name } in list" :key="id">
      <img :src="picUrl" />
      <div class="albumlist-name">{{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumList",
  props: ["name", "list"],
};
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
  .albumlist-item {
    float: left;
    width: 30%;
    margin-right: 5%;
    margin-top: 10px;
    &:nth-child(3n){
      margin-right: 0;
    }
    img{
      width: 100%;
      border-radius: 12px;
    }
    .albumlist-name{
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