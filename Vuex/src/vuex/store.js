import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {//访问状态对象
    count:3
}
const mutations = {//同步修改状态
    add(state,n){
        state.count += n;
    },
    reduce(state){
        state.count--;
    }
}

const getters = { //数据的过滤和加工
    count:function(state){
        return state.count += 100;
    }
}

const actions = {//异步修改状态
    addAction(context){//context:上下文对象，可以理解为store本身
        context.commit('add',10);
        setTimeout(() => {context.commit('reduce')},2000);
        console.log('我比上面的reduce先执行');
    },
    reduceAction({commit}){//直接把commit对象传递过来
       commit('reduce');
    }
}

// const moduleA = {//module模块组
//     state,mutations,getters,actions
// }

export default new Vuex.Store({
    state,mutations,getters,actions
    // modules:{a:moduleA}//module模块组
})