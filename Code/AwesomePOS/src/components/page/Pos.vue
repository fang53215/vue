<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="pos-order">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border class="pos-table">
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column prop="opration" label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="deleteSingleGood(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>数量：</small>{{totalCount}}&nbsp;&nbsp;&nbsp;<small>金额：</small>{{totalMoney}}元
            </div>
            <div class="pos-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="deleteAllGoods">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            
          </el-tab-pane>
          <el-tab-pane label="外卖">
            
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span='17'>
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" :key="goods.goodsId" @click="addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">¥{{goods.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <ul class="cookList">
                <li v-for="goods in type1Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class="cookList">
                <li v-for="goods in type2Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class="cookList">
                <li v-for="goods in type3Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class="cookList">
                <li v-for="goods in type4Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pos',
  data(){
    return {
      tableData:[],
      oftenGoods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
      type4Goods:[],
      totalMoney:0,
      totalCount:0
    }
  },
  created(){
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    .then(response=>{
      console.log(response);
      this.oftenGoods = response.data;
    })
    .catch(response=>{
      console.log(error);
      alert('网络错误，不能访问')
    });
    axios.get('http://jspang.com/DemoApi/typeGoods.php')
    .then(response=>{
      console.log(response);
      this.type1Goods = response.data[0];
      this.type2Goods = response.data[1];
      this.type3Goods = response.data[2];
      this.type4Goods = response.data[3];
    })
    .catch(response=>{
      console.log(error);
      alert('网络错误，不能访问')
    });
  },
  mounted(){
    var orderH = document.body.clientHeight;
    document.getElementById('pos-order').style.height = orderH + 'px';
  },
  methods:{
    //增加商品
    addOrderList(goods){
      //商品是否已存在于订单列表中
      let isHave = false;
      for(let i=0;i<this.tableData.length;i++){
        if(this.tableData[i].goodsId == goods.goodsId){
          isHave = true;
        }
      }
      //根据判断的值编写业务逻辑
      if(isHave){
        //改变列表中商品数量
        let arr = this.tableData.filter(o=>o.goodsId == goods.goodsId);
        arr[0].count++;
      }else{
        let newGoods = {goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
        this.tableData.push(newGoods);
      }
      this.getAllMoney();
    },
    //删除单个商品
    deleteSingleGood(goods){
      this.tableData = this.tableData.filter(o=>o.goodsId != goods.goodsId);
      this.getAllMoney();
    },
    //删除全部商品
    deleteAllGoods(){
      this.tableData = [];
      this.totalMoney = 0;
      this.totalCount = 0;
    },
    //计算汇总金额和数量
    getAllMoney(){
      this.totalMoney = 0;
      this.totalCount = 0;
      if(this.tableData){
        this.tableData.forEach(element => {
          this.totalCount += element.count;
          this.totalMoney += element.price * element.count;
        });
      }
    },
    //模拟结账
    checkout(){
      if(this.totalCount != 0){
        this.tableData = [];
        this.totalMoney = 0;
        this.totalCount = 0;
        this.$message({
          message:'结账成功！',
          type:'success'
        })
      }else{
        this.$message.error('请选择商品！')
      }
    }
  }
}
</script>

<style scoped>
.pos-order{
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}
.pos-table{
  width:100%;
}
.totalDiv{
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.totalDiv small{
  font-size: 14px;
}
.pos-btn{
  margin-top: 10px;
}
.often-goods .title{
  height: 20px;
  border-bottom:1px solid #D3DCE6;
  background-color: #F9FAFC;
  padding:10px;
  text-align: left;
}
.often-goods-list ul li{
  float:left;
  border:1px solid #E5E9F2;
  padding:10px;
  margin:5px;
  background-color:#fff;
  cursor: pointer;
}
.o-price{
  color:#58B7FF; 
}
.goods-type{
  clear: both;
}
.cookList li{
    width:23%;
    border:1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;
    cursor: pointer;
}
.cookList li span{
    display: block;
    float:left;
}
.foodImg{
    width: 40%;
}
.foodName{
    font-size: 16px;
    padding-left: 10px;
    color:brown;
}
.foodPrice{
    font-size: 14px;
    padding-left: 10px;
    padding-top:10px;
}
</style>
