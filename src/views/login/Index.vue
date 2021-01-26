<template>
  <div class="login">
    <i class="iconfont logo" />
    <div class="login-control">
      <van-button
        block
        size="large"
        plain
        round
        color="#dc2c1f"
        text="手机号登录"
        @click="handlerInto('phone-login')"
      />
      <van-button
        v-if="experienceVisible"
        block
        size="large"
        round
        text="立即体验"
        color="#dc2c1f"
        @click="handlerInto('exprience')"
      />
      <div class="login-others">
        <i
          :class="`iconfont ${i}`"
          v-for="({ i }, index) in others"
          :key="index"
          @click="handlerInto(i)"
        />
      </div>
      <van-checkbox
        class="login-agree"
        v-model="checked"
        shape="square"
        checked-color="#dc2c1f"
        icon-size="13px"
      >
        同意
        <span class="protocol">《用户协议》 《隐私政策》 《儿童隐私政策》</span>
      </van-checkbox>
    </div>
  </div>
</template>

<script lang="ts">
import { Button, Checkbox, Icon, Toast } from "vant";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import toast from '@/components/Toast/toast-info'
export default {
  name: "Login",
  components: {
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [Icon.name]: Icon,
  },
  setup() {
    const $route = useRoute();
    const $router = useRouter();
    const checked = ref(false);
    const experienceVisible = computed(() => $route.query.login !== "login");
    const handlerInto = async (type: string) => {
      if (!checked.value) {
        toast('请先勾选同意《用户协议》 《隐私政策》 《儿童隐私政策》')
        return;
      }
      switch (type) {
        case "phone-login":
          $router.replace("/phonelogin");
          break;
      }
    };
    const handlerLogin = () => {};
    return {
      others: [
        { i: "login-wechat" },
        { i: "login-qq" },
        { i: "login-sina" },
        { i: "login-email" },
      ],
      checked,
      experienceVisible,
      handlerInto,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background: #dc2c1f;
  padding: 25% 0 8%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 42px;
    color: #fff;
    background: #f12a25;
    border-radius: 100%;
    padding: 5px;
  }
  .login-control {
    width: 75%;
    .van-button {
      font-size: 15px;
      height: 40px;
      &:nth-of-type(2) {
        margin-top: 10px;
        border: 0.5px solid #ed5246 !important;
      }
    }
    .login-others {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 20px;
      color: #f8d6d4;
      i {
        padding: 5px;
        border-radius: 100%;
        border: 1px solid #ed5246;
        font-size: 20px;
      }
    }
    .login-agree {
      transform: scale(0.8);
      ::v-deep .van-checkbox__label {
        font-size: 12px;
        color: #f4736b;
        .protocol {
          color: #f7b1ac;
        }
      }
    }
  }
}
</style>>