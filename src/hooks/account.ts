import { computed } from "vue";
import { useStore } from "vuex";

export const useAccountInfo = () => {
  const $store = useStore();
  return {
    avatarUrl: computed(() => {
      return $store.state.account.profile.avatarUrl;
    }),
    nickname: computed(() => {
      return $store.state.account.profile.nickname;
    }),
  };
};
