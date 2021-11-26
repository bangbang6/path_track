<template>
  <div class="men-zheng">
    <div class="title">近两天总收入占比(百万)</div>
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

      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['门诊', '住院'],
        formatter: function (name) {
          return name
        },
        textStyle: {
          color: 'white'
        },
        top: 3,
        show: true
      },

      calculable: true,


      xAxis:
      {
        // axisLabel: {
        //   rotate: 30,
        //   interval: 0
        // },
        axisLine: {
          lineStyle: {
            color: '#CECECE'
          }
        },
        axisLabel: {
          fontSize: 12
        },
        type: 'category',
        boundaryGap: false,
        data: ['6月', '7月', '8月', '9月', '10月', '11月']
      },
      yAxis: [
        {

          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#CECECE'
            },
            show: false
          },
          axisLabel: {
            fontSize: 12
          }

        }
      ],
      grid: {
        top: 30,
        left: 40,
        right: 20,
        bottom: 30,
      },
      series: [
        {
          name: '门诊',
          type: 'line',
          symbol: 'circle',

          color: ['#02CDE6'],
          data: [240, 180, 230, 250, 220, 200, 230]
        },
        {
          name: '住院',
          type: 'line',
          symbol: 'circle',

          color: ['#2480B4'],
          data: [190, 140, 160, 200, 180, 150, 180]
        }
      ]
    };

  }
}
</script>

<style lang="scss" scoped>
.men-zheng {
  width: 100%;
  height: 100%;
  border: 1px solid #237dbf;

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
