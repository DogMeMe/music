<template>
  <div class="phone-login">
    <m-header
      title="手机号登录"
      leftIcon="header-close"
      :customback="inputtingCode"
      @left-click="close"
    >
      <div v-show="inputtingCode" class="right">密码登录</div>
    </m-header>
    <van-form @submit="submit">
      <div class="box">
        <div class="box-title">
          {{ inputtingCode ? "请输入验证码" : "登录体验更多精彩" }}
        </div>
        <div class="box-renark">
          <template v-if="inputtingCode">
            <span
              >已发送至{{ ctx.phoneFormat("17629003867", ctcode)
              }}<van-icon name="edit" @click="colse"
            /></span>
            <span>60s</span>
          </template>
          <span v-show="!inputtingCode">未注册手机号登录后将自动创建账号</span>
        </div>
        <van-field
          v-show="!inputtingCode"
          placeholder="请输入手机号"
          autofocus
          clearable
          maxlength="11"
          type="number"
          name="phone"
          v-model="phone"
          clear-trigger="always"
        >
          <template v-slot:label>
            <span>+{{ ctcode }}</span>
            <van-icon name="play" />
          </template>
        </van-field>
        <van-password-input
          v-show="inputtingCode"
          :value="verifycode"
          :mask="false"
          :gutter="10"
          focused
          @focus="keyboardShow = true"
        />
        <van-number-keyboard
          random-key-order
          v-model="verifycode"
          :show="keyboardShow"
          @blur="keyboardShow = false"
        />
      </div>
      <van-button
        v-show="!inputtingCode"
        color="#fe3a3b"
        round
        block
        native-type="submit"
        >下一步</van-button
      >
    </van-form>
  </div>
</template>
<script lang="ts">
import MHeader from "@/components/MHeader.vue";
import { Button, Field, Form, Icon, NumberKeyboard, PasswordInput } from "vant";
import { getCurrentInstance, ref, watch } from "vue";
import toast from "@/components/Toast/toast-info";
import { PhoneRegexp } from "@/util/regexp.ts";
import { codeVerify, getCode } from "@/api/login";

export default {
  name: "PhoneLogin",
  components: {
    MHeader,
    [Button.name]: Button,
    [Form.name]: Form,
    [Field.name]: Field,
    [Icon.name]: Icon,
    [PasswordInput.name]: PasswordInput,
    [NumberKeyboard.name]: NumberKeyboard,
  },
  setup() {
    const ctcode = ref(86);
    const phone = ref("");
    const inputtingCode = ref(true);
    const keyboardShow = ref(false);
    const verifycode = ref("");
    const { ctx }: any = getCurrentInstance();
    const submit = async (obj: { phone: string }) => {
      if (!obj.phone) {
        toast("请输入手机号");
        return;
      }
      if (!PhoneRegexp.test(obj.phone)) {
        toast("请输入11位数字的手机号");
        return;
      }
      const { data } = await getCode(phone.value, ctcode.value);
      inputtingCode.value = data;
      keyboardShow.value = data;
    };
    const close = () => {
      if (inputtingCode.value) {
        inputtingCode.value = false;
      }
    };
    const handlerPhone = async () => {
      const { data } = await codeVerify(
        phone.value,
        verifycode.value,
        ctcode.value
      );
    };
    watch(verifycode, (val) => {
      if (val && val.length >= 6) {
        verifycode.value = val.substr(0, 6);
        handlerPhone();
      }
    });
    return {
      ctcode,
      phone,
      submit,
      ctx,
      verifycode,
      keyboardShow,
      inputtingCode,
      close,
    };
  },
};
</script>
<style lang="scss" scoped>
.phone-login {
  background: #fff;
  height: 100vh;
  .right {
    color: #7c7c7c;
    font-size: 12px;
    padding: 3px 8px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    margin-right: 12px;
  }
  .box {
    padding: 36px 12px;
    .box-title {
      font-size: 16px;
    }
    .box-renark {
      color: #a3a3a3;
      margin-top: 5px;
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .van-icon-edit {
        font-size: 15px;
        vertical-align: bottom;
        padding-right: 10px;
      }
    }
  }
}
.van-form {
  padding: 0 12px;
  .van-field {
    padding: 36px 0 0;
    font-size: 16px;
    border-bottom: 1px solid #e0e0e0;
    ::v-deep .van-field__label {
      width: auto;
      display: flex;
      align-items: center;
      margin-right: 5px;
      .van-icon-play {
        transform: rotate(90deg);
      }
    }
  }
  .van-password-input {
    padding: 36px 0 0;
    margin: 0 12px;
    ::v-deep .van-password-input__security {
      li {
        border-bottom: 1px solid #e0e0e0;
      }
    }
  }
}
</style>
