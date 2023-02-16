import { createStore } from 'vuex'
import postData from '@/api';

const store = createStore({
  state: {
    name: 'kim',
    filter: '',
    // like: 0,
    items: postData,
  },
  mutations: {
    changeFilter(state, pick) {
      state.filter = pick;
    },
    liked(state, index) {
      state.items[index].likes++;
      // ++state.like;
    },
    publish(state, addData) {
      console.log(addData);
      state.items.unshift(addData);
    },
    more(state, addData) {
      console.log(addData);
      state.items.push(addData);
    }
  }
})

export default store;