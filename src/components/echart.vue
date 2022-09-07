<template>
  <div ref="echart">

  </div>
</template>

<script>
import * as echart from'echarts' 
export default {
    //父组件home.vue传来的数据
    props:{
        // 有x，y轴，默认有，当是饼状图时传来false
        isAxisChart:{
            type:Boolean,
            default:true
        },
        //对于传来的数据 用计算属性computed  定义options 判读是哪种图
        chartData:{
            type:Object,
            //不传属性时的容错性 比如饼图
            default(){
                return{
                    xData:[],
                    series:[]
                }
            }
        }
    },
    data(){
        return{
            //会去用计算属性computed  定义options 判读是哪种图 柱状图、折线图/饼状图
            //柱状图或者折线图 有x轴  y轴
            axisOption:{
                 legend: {
                // 图例文字颜色
                    textStyle: {
                         color: "#333",
                     },
                 },
                grid: {
                    left: "20%",
                },
                // 提示框
                tooltip: {
                    trigger: "axis",
                },
                //x轴
                xAxis: {
                    type: "category", // 类目轴
                    data: [],
                    axisLine: {
                        lineStyle: {
                        color: "#17b3a3",
                       },
                    },
                    axisLabel: {
                        interval: 0,
                     color: "#333",
                     },
                 },
                    //y轴
                yAxis: [
                {
                    type: "value",
                    axisLine: {
                    lineStyle: {
                        color: "#17b3a3",
                    },
                    },
                },
                ],
            color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
            series: [],
            },
            //饼状图
            normalOption:{
                tooltip: {
                      trigger: "item",
                    },
                color: [
                      "#0f78f4",
                      "#dd536b",
                      "#9462e5",
                      "#a6a6a6",
                      "#e1bb22",
                      "#39c362",
                      "#3ed1cf",
                ],
                series: [],
            },
            //如果已经渲染了 不需要再重新渲染
            echart:null
        }
    },
    methods:{
        //初始化内容  而且还需要watch监听数据改变时要重新绘制
        initChart(){
            this.initChartData()//处理好数据 
            if(this.echart){//如果已经渲染了 不需要再重新渲染
                this.echart.setOption(this.options)
            }
            else{//不存在  先初始化对象
                this.echart = echart.init(this.$refs.echart)
                // options在computed
                //setOption开始渲染画图
                this.echart.setOption(this.options)
            }
        },
        initChartData(){
            //折线图或者柱状图
            if(this.isAxisChart){
                this.axisOption.xAxis.data = this.chartData.xData
                this.axisOption.series = this.chartData.series
            }else{//饼状图没有x轴   y轴
                this.normalOption.series = this.chartData.series
            }
        }
    },
    //数据改变时，表格应该重新绘制
    watch:{
        chartData:{
            handler:function(){
                this.initChart()//重新显示
            },
            deep:true
        }
    },
    computed:{
        options(){
            // 有x轴 或者y 就是axisOption
            return this.isAxisChart?this.axisOption:this.normalOption
        }
    }
}
</script>

<style>

</style>
