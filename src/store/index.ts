import { createStore } from "vuex";
import homeModule from "@/store/home/index";
import accountModule from "@/store/account";

export default createStore({
  modules: {
    home: homeModule,
    account: accountModule,
  },
});
