<template>
<div>

  <el-row class="home"
          :gutter="20">
    <el-col :span="8">
      <el-card class="box-card"
               shadow="hover">
        <div class="userInfo-top">
          <img :src="userImg"
               class="userImg">
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="position">超级管理员</p>
          </div>
        </div>
        <hr>
        <div class="logininfo">
          <p>上次登录时间：<span>2021-7-19</span></p>
          <p>上次登录地点：<span>济南</span></p>
        </div>
      </el-card>
      <el-card class="card2"
               shadow="hover">
        <el-table :data="shopDate">
          <el-table-column prop="name"
                           label="商品名称"></el-table-column>
          <el-table-column prop="todayBuy"
                           label="日销量"></el-table-column>
          <el-table-column prop="monthBuy"
                           label="月销量"></el-table-column>
          <el-table-column prop="totalBuy"
                           label="总销量"></el-table-column>

        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card v-for="item in countData"
                 :key="item.index"
                 :body-style="{display:'flex',padding: 0,width:'279px'}"
                 shadow="hover">
          <div class="count-left">
            <i class="icon"
               :class="`el-icon-${item.icon}`"
               :style="{background: item.color,width:'80px',height:'80px'}"></i>
          </div>
          <div class="count-right">
            <p class="name">{{item.name}}</p>
            <p class="value">{{item.value}}</p>
          </div>
        </el-card>
      </div>
      <!-- 折线图 -->
      <el-card style="margin-top:20px;height:280px"
               shadow="hover">
        <echart :chartData="echartData.line"
                style="height:280px;"></echart>
      </el-card>

      <div class="graph">
        <!-- 柱状图 -->
        <el-card shadow="hover"
                 class="graph-left">
          <echart :chartData="echartData.bar"
                  style="height:240px;"></echart>
        </el-card>
        <!-- 饼状图 -->
        <el-card shadow="hover"
                 class="graph-right">
          <echart :chartData="echartData.pie"
                  style="height:240px;"></echart>
        </el-card>
        </el-card>
      </div>
      
    </el-col>
    
  </el-row>

  <el-row :gutter="20">
  <el-col :span="8"><el-card></el-card></el-col>
  <el-col :span="8"><el-card></el-card></el-col>
  <el-col :span="8"><el-card></el-card></el-col>
</el-row>

</div>
  
  
</template>

<script>
import * as echarts from 'echarts'
import echart from '../../components/echart'
import { getData } from '../../untils/data'

export default {
  name: 'home',
  components: {
    echart
  },
  data() {
    return {
      userImg: require('../../assets/rabbit.gif'),
      shopDate: [
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 1000
        },
        {
          name: 'iQOO3',
          todayBuy: 200,
          monthBuy: 400,
          totalBuy: 2000
        },
        {
          name: '华为',
          todayBuy: 300,
          monthBuy: 4000,
          totalBuy: 20000
        },
        {
          name: 'Apple',
          todayBuy: 1000,
          monthBuy: 3000,
          totalBuy: 10000
        },
        {
          name: '小米',
          todayBuy: 400,
          monthBuy: 3200,
          totalBuy: 451000
        },
        {
          name: '小米',
          todayBuy: 400,
          monthBuy: 3200,
          totalBuy: 451000
        },
        {
          name: '小米',
          todayBuy: 400,
          monthBuy: 3200,
          totalBuy: 451000
        },
        {
          name: '小米',
          todayBuy: 400,
          monthBuy: 3200,
          totalBuy: 451000
        }
      ],
      countData: [
        {
          name: '今日支付订单',
          value: 356,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 346,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 3562,
          icon: 'goods',
          color: '#5ab1ef'
        },
        {
          name: '今日收藏订单',
          value: 326,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月支付订单',
          value: 22356,
          icon: 'goods',
          color: '#ffb980'
        },
        {
          name: '今日支付订单',
          value: 356,
          icon: 'success',
          color: '#2ec7c9'
        }
      ],
      echartData: {
        line: {
          xData: [],
          series: []
        },
        bar: {
          xData: [],
          series: []
        },
        pie: {
          series: []
        }
      }
    }
  },
  methods: {
    async initEchart(){
       const { data: res } = await getData()       
      // console.log(res)
      if (res.code === 200) {
        const order = res.data.orderData
        // console.log(order)
        const xData = order.date //x轴坐标的数据
        const keyArray = Object.keys(order.data[0])
        const series = []
        keyArray.forEach(key => {
          series.push({
            name: key,
            data: order.data.map(item => item[key]),
            //折线图
            type: 'line'
          })
        })
        //折线图渲染
        this.echartData.line.xData = xData
        this.echartData.line.series = series
        //柱状图
        this.echartData.bar.xData = res.data.userData.map(item => item.date)
        this.echartData.bar.series = [
          {
            name: '新增用户',
            data: res.data.userData.map(item => item.new),
            //柱状图
            type: 'bar'
          },
          {
            name: '活跃用户',
            data: res.data.userData.map(item => item.active),
            //柱状图
            type: 'bar'
          }
        ]
        // 饼状图
        this.echartData.pie.series = [
          {
            data: res.data.videoData,
            type: 'pie'
          }
        ]
      }
      
    }
  },
  created(){
    this.initEchart()
  },
  mounted() {
    //axios原生写法
    // axios.get('http://www.liulongbin.top:3006/api/getbooks').then(res => {
    //   console.log(res.data.data)
    // })
    // .catch(err => {
    //   console.log(err);
    // })


  //.then写法
    // getData().then(res => {
    //   const { code, data } = res.data
    //   console.log(data)

    //   if (code === 200) {
    //     const order = data.orderData
    //     // console.log(order)
    //     const xData = order.date //x轴坐标的数据
    //     const keyArray = Object.keys(order.data[0])
    //     const series = []
    //     keyArray.forEach(key => {
    //       series.push({
    //         name: key,
    //         data: order.data.map(item => item[key]),
    //         //折线图
    //         type: 'line'
    //       })
    //     })
    //     //折线图渲染
    //     this.echartData.line.xData = xData
    //     this.echartData.line.series = series
    //     //柱状图
    //     this.echartData.bar.xData = data.userData.map(item => item.date)
    //     this.echartData.bar.series = [
    //       {
    //         name: '新增用户',
    //         data: data.userData.map(item => item.new),
    //         //柱状图
    //         type: 'bar'
    //       },
    //       {
    //         name: '活跃用户',
    //         data: data.userData.map(item => item.active),
    //         //柱状图
    //         type: 'bar'
    //       }
    //     ]
    //     // 饼状图
    //     this.echartData.pie.series = [
    //       {
    //         data: data.videoData,
    //         type: 'pie'
    //       }
    //     ]
    //   }
    // })
    //ajax写法
    //   this.$http.get("http://www.liulongbin.top:3006/api/getbooks").then(res => {
    //       res = res.data;
    //       console.log(res);

    // })
  }
}
</script>

<style lang="less" scoped>
.userInfo-top {
  display: flex;
  align-items: center;
  .userImg {
    border-radius: 50%;
    width: 150px;
  }
  .userinfo {
    margin-left: 30px;
    .name {
      font-size: 30px;
    }
    .position {
      font-size: 15px;
      color: #696969;
      margin-top: 5px;
    }
  }
}
.logininfo {
  margin-top: 20px;
  p {
    margin-bottom: 5px;
    span {
      margin-left: 100px;
      font-size: 14px;
    }
  }
}
.home {
  margin-top: 20px;
}

.card2 {
  margin-top: 20px;
}
.num {
  display: flex;
  // font-size: 40px;
  flex-wrap: wrap;
  // justify-content: flex-start;
  align-items: center;
  .count-left {
    font-size: 40px;
    text-align: center;
    .icon {
      line-height: 80px;
    }
  }
  .count-right {
    width: 100%;
    height: 100%;
    text-align: center;
    .name {
      line-height: 50px;
      //  margin-left:27px;
      align-items: center;
    }
    .value {
      font-size: 14px;
    }
  }
}
.graph {
  display: flex;
  margin-top: 20px;
  .graph-left {
    flex: 1;
  }
  .graph-right {
    flex: 1;
    margin-left: 20px;
  }
}

</style>
