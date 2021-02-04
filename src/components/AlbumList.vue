<template>
  <div class="playlist">
    <div class="playlist-title">
      <span>{{name}}</span>
      <div class="playlist-title-icons">
        <slot name="titleicon" />
        <i class="iconfont more-point" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AlbumList",
  props: ['name'],
  setup(props){

  }
};
</script>

<style lang="scss" scoped>
.playlist {
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  margin-top: 10px;
  .playlist-title {
    font-size: 12px;
    color: #a9a9a9;
    .playlist-title-icons {
      float: right;
      i {
        color: #a9a9a9;
        font-size: 14px;
        padding-left: 10px;
      }
    }
  }
}
</style>