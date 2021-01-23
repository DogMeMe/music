import { createStore } from 'vuex'
import homeModule from '@/store/home/index'

export default createStore({
  modules: {
    home: homeModule
  }
})
