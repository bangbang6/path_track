<template>
  <div class="category-user rangle">
    <div class="title">各科室人员占比</div>
    <v-chart :options="options"></v-chart>
  </div>
</template>

<script>
let mockData = [
  {
    legendname: "channel2:24",
    value: 67,
    percent: "12%",
    itemStyle: {
      color: '#8FC31F'
    },
    name: "channel2:24 | 12%"
  },
  {
    legendname: "channel3:26",
    value: 97,
    percent: "13%",
    itemStyle: {
      color: '#F35833'
    },
    name: "channel3:26 | 13%",

  },
  {
    legendname: "channel4:30",
    value: 92,
    percent: "15%",
    itemStyle: {
      color: '#00CCFF'
    },
    name: "channel4:30 | 15%"
  },
  {
    legendname: "channel5:28",
    value: 87,
    percent: "14%",
    itemStyle: {
      color: '#FFCC00'
    },
    name: "channel5:28 | 14%"

  },
  {
    legendname: "channel6:50",
    value: 204,
    percent: "25%",
    itemStyle: {
      color: '#A74FAF'
    },
    name: "channel6:50 | 25%"

  },
  {
    legendname: "channel1:38",
    value: 107,
    percent: "19%",
    itemStyle: {
      color: '#FF9668'
    },
    name: "channel1:38 | 19%"

  },
]
export default {
  data () {
    return {
      options: {}
    }
  },
  mounted () {
    this.options = {

      series: [{
        name: "category",
        type: 'pie',
        data: mockData,
        animation: true,
        animationDuration: 1000,
        label: {
          normal: {
            show: true,
            position: 'inner',
            formatter: function (params) {
              return params.data.percent
            }
          }
        },

        labelLine: {
          normal: {
            length: 5,
            length2: 3,
            smooth: true
          }
        },
        /* itemStyle: {
          borderWidth:4px
        }, */
        clockwise: true
      }],
     // legend: {
     //    type: 'scroll',
     //    orient: "vertical",
     //    height: 250,
     //    left: '60%',
     //    top: 'middle',
     //    textStyle: {
     //      color: "white"
     //    }
     //  },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          const str = params.seriesName + '</br>' + params.marker + params.data.legendname + '</br>' + "数量: " + params.data.value + "</br>" + "占比:" + params.data.percent
          return str
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.category-user {
  height: 90%;
  margin-top: 20px;
  box-sizing: border-box;
  padding-top: 10px;
  padding-left: 10px;
  .title {
    color: #117fbe;
    font-size: 16px;
    font-weight: bold;
  }
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
