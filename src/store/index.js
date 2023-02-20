import { createStore } from 'vuex'
import postData from '@/api';
import axios from 'axios';

const store = createStore({
  state() {
    return {
    name: 'kim',
    filter: '',
    items: postData,
    }
  },
  mutations: {
    changeFilter(state, pick) {
      state.filter = pick;
    },
    liked(state, index) {
      if (!state.items[index].likeChecked) {
        state.items[index].likes++;
      } else {
        state.items[index].likes--;
      }

      state.items[index].likeChecked = !state.items[index].likeChecked;
    },
    publish(state, addData) {
      console.log(addData);
      state.items.unshift(addData);
    },
    setMore(state, data) {
      state.items.push(data);
    }
  },
  actions: {
    getData({commit}) {
      axios.get('https://codingapple1.github.io/vue/more0.json').then((response ) => {
        console.log(response.data);
        commit('setMore', response.data);
      })
    },
  }
})

export default store;