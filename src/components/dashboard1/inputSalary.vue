<template>
  <div class="input-salary">
    <div class="title">
      <span>></span>
      <span class="light" style="margin-right: 5px;color: #237dbf">></span>
      收支结构与费用控制(百万)
      <span class="light" style="margin-left: 5px;color: #237dbf">&nbsp<</span>
      <span><</span>
    </div>
    <div class="chart">
      <v-chart :options="options"></v-chart>
    </div>
    <div class="main">
      <div class="left">
        <div class="title1">门诊/住院费用涨幅(百万)</div>
        <div class="chart1">
          <v-chart :options="options1"></v-chart>
        </div>
      </div>
      <div class="center">
        <div class="title1">门诊/住院收入比(百万)</div>
        <div class="chart1">
          <v-chart :options="options2"></v-chart>
        </div>
      </div>
      <div class="right">
        <div class="title1">门诊/住院来自医保基金(百万)</div>
        <div class="chart1">
          <v-chart :options="options3"></v-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {},
      options1: {},
      options2: {},
      options3: {},
    }
  },
  mounted () {
    this.options = {
      series: {
        type: 'sunburst',
        radius: [30, '100%'],
        itemStyle: {
          borderRadius: 7,
          borderWidth: 2
        },
        label: {
          //show: true,
          color:'white',
        },
        labelLine:{
          show:true,
          showAbove:true,
          length2:100
        },
        data: [{
            name: '门诊收入',
            value: 10,
            itemStyle: {
              color: '#265989'
            },
            children: [{
              value: 3,
              name: '医保基金',
              itemStyle: {
                color: '#265989'
              },
            }, {
              value: 7,
              name: '其他',
              itemStyle: {
                color: '#265989'
              },
            }]
          }, {
            name: '住院收入',
            value:6,
            itemStyle: {
              color: '#174277'
            },
            children: [{
              name: '医保基金',
              value: 4,
              itemStyle: {
                color: '#174277'
              },
            }, {
              name: '其他',
              value: 2,
              itemStyle: {
                color: '#174277'
              },
            }]
          }
        ]
      }
    };
    this.options1={
      textStyle: {
        color: "#fff"
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      yAxis: {
        type: 'category',
        data: ['住院', '门诊'],
        inverse: true,
        axisLine: {
          lineStyle: {
            color: 'white',
          }
        },
        axisLabel: {
          fontSize: 11
        }
      },
      xAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'white',
          }
        },
        axisLabel: {
          fontSize: 10
        }
      },

      series: [
        {
          barWidth: "30%",
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
            }
          },
          label: {
            show: true,
            position: 'right'
          },
          data: [0.9, 2.1],
          type: 'bar'
        }
      ],
      color: '#3398DB',
          grid: {
            top: 10,
            left: 30,
           // right: 12,
            bottom: 20,
          },
      legend: {
        show: true
      },
    }
    this.options2={
      textStyle: {
        color: "#fff"
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      yAxis: {
        type: 'category',
        data: ['住院', '门诊'],
        inverse: true,
        axisLine: {
          lineStyle: {
            color: 'white',
          }
        },
        axisLabel: {
          fontSize: 11
        }
      },
      xAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'white',
          }
        },
        axisLabel: {
          fontSize: 10
        }
      },

      series: [
        {
          barWidth: "30%",
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
            }
          },
          label: {
            show: true,
            position: 'right'
          },
          data: [2.6, 2.5],
          type: 'bar'
        }
      ],
      color: '#3398DB',
      grid: {
        top: 10,
        left: 30,
        // right: 12,
        bottom: 20,
      },
      legend: {
        show: true
      },
    }
    this.options3={
      textStyle: {
        color: "#fff"
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      yAxis: {
        type: 'category',
        data: ['住院', '门诊'],
        inverse: true,
        axisLine: {
          lineStyle: {
            color: 'white',
          }
        },
        axisLabel: {
          fontSize: 11
        }
      },
      xAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'white',
          }
        },
        axisLabel: {
          fontSize: 10
        }
      },

      series: [
        {
          barWidth: "30%",
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
            }
          },
          label: {
            show: true,
            position: 'right'
          },
          data: [5.6, 3.5],
          type: 'bar'
        }
      ],
      color: '#3398DB',
      grid: {
        top: 10,
        left: 30,
        // right: 12,
        bottom: 20,
      },
      legend: {
        show: true
      },
    }
    // this.options1 = {
    //   xAxis: {
    //     type: 'value',
    //     axisTick: {
    //       alignWithLabel: true
    //     },
    //     axisLine: {
    //
    //       lineStyle: {
    //         color: 'white',
    //       }
    //     },
    //     //
    //     // axisLabel: {
    //     //   fontSize: 10
    //     // }
    //   },
    //   yAxis: {
    //     type: 'category',
    //     data: ['复诊', '初诊'],
    //     axisLine: {
    //       show: false
    //     },
    //     axisTick: {
    //       show: true
    //     },
    //
    //     axisLabel: {
    //       textStyle: {
    //         color: 'white',
    //         fontSize: '100',
    //       }
    //     },
    //   },
    //   series: {
    //     type: 'bar',
    //     data: [0.9, 2.1],
    //     barWidth: "30%",
    //     label: {   //设置柱状图上显示  对应值
    //       show: true,
    //       position: 'right',
    //       color: '#fff',
    //       fontSize: 10
    //     },
    //   },
    //    color: '#3398DB',
    //   grid: {
    //     top: 10,
    //     left: 4,
    //     right: 14,
    //     bottom: 20,
    //   }
    // }
    // this.options2 = {
    //   xAxis: {
    //
    //     type: 'value',
    //     axisTick: {
    //       alignWithLabel: true
    //     },
    //     axisLine: {
    //
    //       lineStyle: {
    //         color: 'white',
    //       }
    //     },
    //
    //     axisLabel: {
    //       fontSize: 10
    //     }
    //
    //
    //   },
    //
    //   yAxis: {
    //     type: 'category',
    //     data: ['复诊', '初诊'],
    //
    //     axisLine: {
    //       show: false
    //     },
    //     axisTick: {
    //       show: true
    //     },
    //
    //
    //     axisLabel: {
    //       textStyle: {
    //         color: '#000',
    //         fontSize: '10',
    //       }
    //     },
    //   },
    //   series: {
    //     type: 'bar',
    //     data: [1.4, 2.7],
    //     barWidth: "30%",
    //     label: {   //设置柱状图上显示  对应值
    //       show: true,
    //       position: 'right',
    //       color: '#fff',
    //       fontSize: 10
    //     },
    //   },
    //   color: '#3398DB',
    //   grid: {
    //     top: 10,
    //     left: 4,
    //     right: 14,
    //     bottom: 20,
    //   }
    // }
    // this.options3 = {
    //   xAxis: {
    //
    //     type: 'value',
    //     axisTick: {
    //       alignWithLabel: true
    //     },
    //     axisLine: {
    //
    //       lineStyle: {
    //         color: 'white',
    //       }
    //     },
    //
    //     axisLabel: {
    //       fontSize: 10
    //     }
    //
    //
    //   },
    //
    //   yAxis: {
    //     type: 'category',
    //     data: ['复诊', '初诊'],
    //
    //     axisLine: {
    //       show: false
    //     },
    //     axisTick: {
    //       show: true
    //     },
    //
    //
    //     axisLabel: {
    //       textStyle: {
    //         color: '#000',
    //         fontSize: '10',
    //       }
    //     },
    //   },
    //   series: {
    //     type: 'bar',
    //     data: [5.6, 1.5],
    //     barWidth: "30%",
    //     label: {   //设置柱状图上显示  对应值
    //       show: true,
    //       position: 'right',
    //       color: '#fff',
    //       fontSize: 10
    //     },
    //   },
    //   color: '#3398DB',
    //   grid: {
    //     top: 10,
    //     left: 4,
    //     right: 14,
    //     bottom: 20,
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.input-salary {
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
    background: #093068c4;

    height: 40%;
    width: 100%;
    .echarts {
      height: 100%;
      width: 100%;
    }
  }
  .main {
    background: #093068c4;
    height: 50%;
    display: flex;
    justify-content: space-between;
    .left,
    .center,
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 10px;
      color: white;
      width: 33.3%;
      padding-left: 10px;
      padding-right: 10px;
      box-sizing: border-box;
      font-weight: 600;
      height: 100%;
      .chart1 {
        width: 100%;
        height: 100%;
        .echarts {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>
