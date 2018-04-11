<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="pos-order">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border show-summary class="pos-table">
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column prop="opration" label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pos-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            
          </el-tab-pane>
          <el-tab-pane label="外卖">
            
          </el-tab-pane>
        </el-tabs>
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
  data(){
    return {
      tableData:[
        {
          goodsName: '可口可乐',
          price: 8,
          count:1
        }, {
          
          goodsName: '香辣鸡腿堡',
          price: 15,
          count:1
        }, {
         
          goodsName: '爱心薯条',
          price: 8,
          count:1
        }, {
         
          goodsName: '甜筒',
          price: 8,
          count:1
        }
      ]
    }
  },
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
.pos-table{
  width:100%;
}
.pos-btn{
  margin-top: 10px;
}
</style>
