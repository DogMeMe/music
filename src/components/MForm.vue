<template>
  <van-form @submit="onFormSubmit" @failed="onFormFailed">
    <slot name="default"></slot>
    <slot name="submit">
      <van-button color="#fe3a3b" round block native-type="submit"
        >确定</van-button
      >
    </slot>
  </van-form>
</template>
<script lang="ts">
import { Button, Form } from "vant";
import { defineComponent } from "vue";
import toastInfo from "./Toast/toast-info";
interface IError {
    message: string;
    name: string | undefined
}                    
export default defineComponent({
  name: "MForm",
  components: {
    [Form.name]: Form,
    [Button.name]: Button,
  },
  setup() {
    const onFormSubmit = () => {};
    const onFormFailed = (err: {value: object, errors: IError[]}) => {
        err.errors.every(error => {
            if(error.message){
                toastInfo(error.message)
            }
            return !error.message
        })
    }
    return {
      onFormSubmit,
      onFormFailed
    };
  },
});
</script>
<style lang="scss" scoped></style>
