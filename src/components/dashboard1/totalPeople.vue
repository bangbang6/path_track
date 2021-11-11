<template>
  <div class="total-people">
    <div class="title">全国就医时间段人次统计</div>
    <div class="main">
      <div class="total">
        <div class="pre">共计</div>
        <div class="center">{{totalNumber}}</div>
        <div class="end">人次</div>
      </div>
      <div class="chart">
        <div class="title1">就医人数统计(人/次)</div>
        <v-chart :options="options"></v-chart>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      totalNumber: 40037987,
      options: {}
    }
  },
  methods: {
    renderOptions (data, axis) {
      return {
        xAxis: {
          type: 'category',
          data: axis,
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: 'white',
            fontSize: 10
          }
        },
        title: {

          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 25,
          top: 20
        },

        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#333'
            },
            show: true
          },
          axisLabel: {
            color: 'white',
            fontSize: 10,
            show: true


          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return '访问人数' + params.data
          }
        },
        series: [{
          type: 'line',
          animation: true,
          animationDuration: 2000,
          data,
          barWidth: "30%",
          label: {
            show: false,
            position: 'top',
            distance: 5,
            fontSize: 11,

            color: "#D7A717"
          },

          itemStyle: {
            normal: {
              color: "#02CDE6"
            }


          }

        }],
        color: ['#BBBBBB', '#009ECA', '#74fbf5', '#A3D2F6', '#B2EAC0',],
        grid: {
          top: 20,
          left: 40,
          right: 10,
          bottom: 30
        }
      }
    }
  },
  mounted () {
    this.groupData = [2867, 3219, 1901, 3566, 4355, 5420, 2907, 3278, 2200, 3350, 2140, 3540, 2400]
    this.xAxis = [
      '8:00',
      '9:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',

    ]
    this.options = this.renderOptions(this.groupData, this.xAxis)
  }
}
</script>
 
<style lang="scss" scoped>
.total-people {
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
    font-size: 12px;
    color: #237dbf;
    background: #101010;
  }
  .main {
    height: 90%;
    background: #093068;
    .total {
      display: flex;
      height: 26%;
      width: 100%;
      justify-content: center;
      align-items: center;
      .pre,
      .end {
        font-size: 12px;
        letter-spacing: 1px;
      }
      .pre {
        margin-right: 10px;
      }
      .end {
        margin-left: 10px;
      }
      .center {
        font-size: 20px;
        letter-spacing: 2px;
        color: #ffff20;
        font-weight: 600;
      }
    }
    .chart {
      width: 100%;
      height: 74%;
      .title1 {
        color: white;
        font-size: 12px;
        margin-left: 6px;
      }
      .echarts {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>