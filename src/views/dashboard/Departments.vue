<template>
  <div class="category-user rangle">
    <div class="title">各科室人员占比</div>
    <v-chart :options="options"></v-chart>
  </div>
</template>

<script>
let mockData = [
  {
    legendname: "皮肤科",
    value: 945,
    percent: "19%",
    itemStyle: {
      color: '#8FC31F'
    },
    name: "皮肤科 | 19%"
  },
  {
    legendname: "口腔科",
    value: 435,
    percent: "12%",
    itemStyle: {
      color: '#F35833'
    },
    name: "口腔科 | 12%",

  },
  {
    legendname: "五官科",
    value: 455,
    percent: "13%",
    itemStyle: {
      color: '#00CCFF'
    },
    name: "五官科 | 13%"
  },
  {
    legendname: "外科",
    value: 858,
    percent: "15%",
    itemStyle: {
      color: '#FFCC00'
    },
    name: "外科 | 15%"
  },
  {
    legendname: "内科",
    value: 888,
    percent: "14%",
    itemStyle: {
      color: '#A74FAF'
    },
    name: "内科 | 14%"

  },
  {
    legendname: "妇科",
    value: 1259,
    percent: "25%",
    itemStyle: {
      color: '#FF9668'
    },
    name: "妇科 | 25%"

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
           //  position:'outer',
            formatter: function (params) {
              const str = params.data.legendname + ':' + params.value
              return str
            },
            textStyle: {
              color: "#fff"
            },
          },
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: '#FF9668'
            },
            smooth: 0.2,
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
          const str = params.marker + params.data.legendname + '</br>' + "数量: " + params.data.value + "</br>" + "占比:" + params.data.percent
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
    width: 80%;
    height: 80%;
  }
}
</style>
