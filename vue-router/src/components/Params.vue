<template>
  <div class="hello">
    <h1>
      {{ msg }}<br/>
      newsId：{{$route.params.newsId}}<br/>
      newsTitle:{{$route.params.newsTitle}}
    </h1>
    
  </div>
</template>

<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'I am params page!'
    }
  },
  beforeRouteEnter:(to,from,next) => {
    console.log('准备进入路由模板');
    next();
  },
  beforeRouteLeave:(to,from,next) => {
    console.log('准备离开路由模板');    
    next();
  }
}
</script>


