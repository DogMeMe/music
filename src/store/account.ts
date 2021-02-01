import { IAccount, IProfile } from "@/types/login";

interface IState {
  profile: IProfile;
  account: IAccount;
}

export default {
  state: {
    profile: {},
    account: {},
  },
  mutations: {
    setAccount(state: IState, userinfo: IState) {
      state.account = userinfo.account;
      state.profile = userinfo.profile;
    },
  },
  namespaced: true,
};
