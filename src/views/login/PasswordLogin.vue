<template>
  <div class="password-login">
    <m-header title="手机号登录" leftIcon="header-close" />
    <van-form @submit="submit">
      <van-field
        type="password"
        autofocus
        v-model.trim="password"
        placeholder="请输入密码"
      />
      <van-button color="#fe3a3b" round block native-type="submit"
        >登录</van-button
      >
    </van-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import MHeader from "@/components/MHeader.vue";
import { Button, Field, Form } from "vant";
import toast from "@/components/Toast/toast-info";
import { phoneLogin } from "@/api/login";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  name: "PasswordLogin",
  components: {
    MHeader,
    [Field.name]: Field,
    [Button.name]: Button,
    [Form.name]: Form,
  },
  setup() {
    const password = ref("");
    const $route = useRoute();
    const $router = useRouter();
    const $store = useStore();
    const submit = async () => {
      if (!password.value) {
        toast("请输入密码");
        return;
      }
      const { account, profile } = await phoneLogin(
        $route.query.phone as string,
        password.value
      );
      $store.commit("account/setAccount", {
        account,
        profile,
      });
      $router.go(-2)
    };
    return {
      password,
      submit,
    };
  },
});
</script>
<style lang="scss" scoped>
.password-login {
  min-height: 100vh;
  background: #fff;
  .van-form {
    padding: 20px 12px;
    .van-field {
      font-size: 16px;
      border-bottom: 1px solid #e0e0e0;
    }
    .van-button {
      margin-top: 20px;
    }
  }
}
</style>
