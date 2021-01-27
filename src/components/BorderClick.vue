<template>
  <div class="border-click">
    <slot name="before"></slot>
    <span>{{ name }}</span>
    <slot name="after"></slot>
    <van-icon v-if="arrow" name="arrow" />
  </div>
</template>

<script lang="ts">
import { Icon } from "vant";
export default {
  name: "BorderClick",
  props: {
    name: String,
    arrow: {
      type: Boolean,
      defeult: true,
    },
  },
  components: {
    [Icon.name]: Icon,
  },
};
</script>

<style lang="scss" scoped>
.border-click {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 5px 12px;
  color: #636363;
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  line-height: 1;
  .van-icon-arrow {
    width: 6px;
  }
}
</style>
