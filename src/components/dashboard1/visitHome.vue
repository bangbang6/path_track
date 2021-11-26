<template>
  <div class="visit-home">
    <div class="title">今日各科室访问人数</div>
    <div class="chart">
      <v-chart :options="options"></v-chart>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {}
    }
  },
  mounted () {
    this.options = {

      legend: {  //配置图例组件
        show: true,  //设置是否显示图例
        icon: 'rect',  //icon.'circle'|'rect'|'roundRect'|'triangle'|'diamond'|'pin'|'arrow'|'none'
        top: 20,  //设置图例距离顶部边距
        left: 430,  //设置图例距离左侧边距
        itemWidth: 10,  //设置图例标记的图形宽度
        itemHeight: 10,  //设置图例标记的图形高度
        itemGap: 30,  //设置图例每项之间的间隔
        orient: 'horizontal',  //设置图例列表的布局朝向，'horizontal'|'vertical'
        textStyle: { fontSize: 15, color: '#fff' }, //设置图例的公用文本样式
        data: [  //设置图例的数据数组，数组项通常为字符串，每项代表一个系列name
          {
            name: '男', icon: 'rect',
            textStyle: { color: 'rgba(51,0,255,1)', fontWeight: 'bold' }
          },
        ],
      },
      tooltip: {  //配置详情提示框组件
        //设置雷达图的tooltip不会超出div，也可设置position属性
        //设置定位不会随着鼠标移动而变化
        confine: true,  //设置是否将tooltip框限制在图表的区域内
        enterable: true,  //设置鼠标是否可以移动到tooltip区域内
      },
      radar: [{  //配置雷达图坐标系组件，只适用于雷达图
        center: ['50%', '56%'],  //设置中心坐标，数组的第1项是横坐标，第2项是纵坐标
        radius: 80,  //设置圆的半径，数组的第一项是内半径，第二项是外半径
        startAngle: 90,  //设置坐标系起始角度，也就是第一个指示器轴的角度
        name: {  //设置（圆外的标签）雷达图每个指示器名称
          formatter: '{value}',
          textStyle: { fontSize: 12, color: 'white' }
        },
        nameGap: 10,  //设置指示器名称和指示器轴的距离，默认为15
        splitNumber: 5,  //设置指示器轴的分割段数，default
        //shape:'circle',  //设置雷达图绘制类型，支持'polygon','circle'
        //设置坐标轴轴线设置
        axisLine: { lineStyle: { color: '#fff', width: 1, type: 'solid', } },
        //设置坐标轴在grid区域中的分隔线
        splitLine: { lineStyle: { color: '#fff', width: 1, } },
        // splitArea: {
        //   show: true,
        //   areaStyle: { color: ['#abc', '#abc', '#abc', '#abc'] }
        // },  //设置分隔区域的样式
        splitArea: {
          show: true,
          areaStyle: {

            color: ['#093068', '#093068', '#093068', '#093068', '#093068', '#093068']
          }
        },
        indicator: [  //配置雷达图指示器，指定雷达图中的多个变量，跟data中value对应
          { name: '皮肤科', max: 900000 }, { name: '五官科', max: 900000 },
          { name: '口腔科', max: 900000 }, { name: '外科', max: 900000 },
          //设置指示器的名称，最大值，标签的颜色
          { name: '内科', max: 900000 }, { name: '妇科', max: 900000 }]
      }],

      backgroundColor: "#093068",

      grid: {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
      },
      label: {
        show: true,
        fontSize: 9,
        color: 'white'
      },
      series: [{
        name: '雷达图',  //系列名称，用于tooltip的显示，图例筛选
        type: 'radar',  //系列类型: 雷达图
        //拐点样式，'circle'|'rect'|'roundRect'|'triangle'|'diamond'|'pin'|'arrow'|'none'
        symbol: 'circle',
        // itemStyle: {  //设置折线拐点标志的样式
        //   normal: { lineStyle: { width: 1 }, opacity: 1 },  //设置普通状态时的样式
        //   emphasis: { lineStyle: { width: 5 }, opacity: 1 }  //设置高亮时的样式
        // },
        data: [  //设置雷达图的数据是多变量(维度)
          {   //设置第1个数据项
            value: [452168, 264123, 654120, 854321, 124523, 352146],  //value是具体数据
            symbol: 'circle',
            symbolSize: 5,  //设置单个数据标记的大小
            //设置拐点标志样式
            itemStyle: { normal: { borderColor: '#5087EC', borderWidth: 2, color: "#5087EC" } },
            //设置单项线条样式
            lineStyle: { normal: { color: '#3565B8', width: 2, opacity: 1 } },
            //areaStyle: {normal:{color:'red'}}  //设置单项区域填充样式
          },
          //设置第2个数据项

        ]
      },]
    };




  }
}
</script>

<style lang="scss" scoped>
.visit-home {
  width: 100%;
  height: 100%;
  border: 1px solid #237dbf;
  color: #237dbf;

  .title {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: #237dbf;
    background: #051d3f;
  }
  .chart {
    width: 100%;
    height: 90%;
    background: #093068;

    .echarts {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
