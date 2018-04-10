import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Block1 from '@/components/Block1'
import Block2 from '@/components/Block2'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:Block1,
        right:Block2
      },
      alias:'/home1'
    },
    {
      path: '/change',
      name: 'Change',
      components: {
        default:HelloWorld,
        left:Block2,
        right:Block1
      }
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      name: 'params',
      component: Params
      // ,
      // beforeEnter:(to,from,next) => {
      //   console.log(to);
      //   console.log(from);
      //   next();
      //   //next('/block1');
      // }
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '/block1',
      component:Block1,
      alias:'/fang'
    },{
      path:'*',
      component:Error
    }
  ]
})
