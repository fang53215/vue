<template>
  <div>
    <h2>{{msg}}--{{$route.params.name}}--{{$route.params.id}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: 'I am Hi1!' 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
