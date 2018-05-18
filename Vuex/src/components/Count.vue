<template>
<div>
    <h2>{{msg}}</h2><hr/>
    <h3>{{$store.state.count}}——{{count}}</h3>
    <!-- <h3>{{$store.state.a.count}}</h3> -->
    <p>
        <button @click="$store.commit('add',10)">+</button>
        <button @click="$store.commit('reduce')">-</button>
        <button @click="add(1)">+1</button>
        <button @click="reduce">-1</button>
    </p>
    <p>
        <button @click="addAction">+</button>
        <button @click="reduceAction">-</button>
    </p>
</div>
</template>

<script>
import store from '@/vuex/store';
import { mapState,mapMutations,mapGetters, mapActions } from 'vuex';  //method2,3
export default{
    data(){
        return{
            msg:'Hello Vuex'
        }
    },

    //method1
    // computed:{
    //     count(){
    //         return this.$store.state.count
    //     }
    // },

    //method2
    // computed:mapState({
    //     count:state => state.count
    // }),

    //method3
    // computed:mapState(['count']),

    computed:{
        ...mapState(['count']),//扩展

        // count(){
        //     return this.$store.getters.count
        // }
        ...mapGetters(['count']),

        // count(){//module模块组
        //     return this.$store.state.a.count
        // }
    },

    // methods:mapMutations(['add','reduce']),
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction'])
    },

    store
}
</script>