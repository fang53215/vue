<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="pos-order">
        1
      </el-col>
      <el-col :span='17'>
        2
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'pos',
  mounted(){
    var orderH = document.body.clientHeight;
    document.getElementById('pos-order').style.height = orderH + 'px';
  }
}
</script>

<style scoped>
.pos-order{
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}
</style>
