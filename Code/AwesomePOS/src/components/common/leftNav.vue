<template>
  <div class="left-nav">
    <ul>
      <li>
        <i class="iconfont icon-goumai"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="iconfont icon-dianpu"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="iconfont icon-hanbao"></i>
        <div>商品</div>
      </li>
      <li>
        <i class="iconfont icon-huiyuanqia"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="iconfont icon-zuanshi"></i>
        <div>统计</div>
      </li>
      <li>
        <i class="iconfont icon-gongnengjianyi"></i>
        <div>设置</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pos'
}
</script>

<style>
.left-nav{
  color: #fff;
  font-size: 12px;
  background-color: #1d8ce0;
  float: left;
  width: 5%;
  height: 100%;
}
.left-nav ul li{
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
}
.iconfont{
  font-size: 24px !important;
}
</style>
