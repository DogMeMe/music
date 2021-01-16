<template>
  <div class="border-click">
      <span>{{name}}</span>
      <van-icon v-if="arrow" name="arrow" />
  </div>
</template>

<script lang="ts">
import { Icon } from 'vant'
export default {
    name: 'BorderClick',
    props: {
        name: String,
        arrow: {
            type: Boolean,
            defeult: true
        }
    },
    components: {
        [Icon.name]: Icon
    }
}
</script>

<style lang="scss" scoped>
    .border-click{
        border: 1px solid #ddd;
        border-radius: 15px;
        padding: 4px 10px;
        color: #636363;
        display: inline-flex;
        margin-left: 50%;
        transform: translateX(-50%);
        align-items: center;
        font-size: 13px;
        line-height: 1;
    }
</style>