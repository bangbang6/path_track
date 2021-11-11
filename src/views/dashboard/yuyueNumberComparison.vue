<template>
  <div class="trans-list rangle">
    <div class="title">各科室门诊预约 vs 到诊人数</div>
    <v-chart :options="options"></v-chart>
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
        this.option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // Use axis to trigger tooltip
              type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
          },
          legend: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: ['口腔科', '五官科', '外科', '内科', '妇科', '皮肤科']
          },
          series: [
            {
              name: '到诊人数',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [1320, 1302, 1301, 1334, 1390, 1330, 1320]
            },
            {
              name: '预约人数',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [20, 32, 101, 34, 90, 30, 10]
            }
          ]
        };
      }
  }
</script>
<style lang="scss" scoped>
.trans-list {
//   margin-left: 10px;
//   margin-right: 10px;
//   overflow-y: hidden;
//   overflow: hidden;
  background-color: #091629;
  height: 100%;
  padding: 10px;
  height: 100%;
  box-sizing: border-box;
  .title {
    color: #117fbe;
    font-size: 16px;
  }
  .list {
    background-color: #091629;
    padding-left: 10px;
    box-sizing: border-box;
    height:100%;
    overflow: hidden;

    color: rgb(255, 255, 255);
    margin-top: 10px;
    .list-item {
      display: flex;
      border-bottom: 1px solid gray;
      // height: 12.5%;
      padding: 6px 20px 6px 0;
      align-items: center;
      .department {
        color: #74fbf5;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 10px;
        width: 20%;
      }
      .income {
        color: #74fbf5;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 14px;
        width: 20%;
      }
      .payment {
        color: #74fbf5;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 14px;
        width: 20%;
      }
      .time {
        color: #74fbf5;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 14px;
        width: 100%;
      }

      .date {
        width: 50%;
      }
      .overflow {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      /* &:nth-child(odd) {
        background: #f2f2f2;
      }
      &:nth-child(even) {
        background: white;
      } */
      &.gray {
        color: gray;
      }
    }
  }
}
</style>