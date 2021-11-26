<template>
  <div class="keyword-people">
    <div class="title">民生关注关键词</div>
    <div class="chart" id="chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
    }
  },
  mounted () {
    var myChart = echarts.init(document.getElementById('chart'));
    var option = {
      xAxis: [
        {
          boundaryGap: false,
          type: 'category',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            interval: 0,
            textStyle: {
              color: "white",
              fontSize: 14,
            },
            rotate: 45
          },
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: "white",
              fontSize: 14
            }
          },
          axisLine: {
            show: false
          },
          min: 2,
          max: 0
        }
      ],
      series: [{
        type: "effectScatter",
        data: [{
          symbolSize: 50, name: '医保', symbolOffset: [10, 20], value: 1, number: 888
        }],
        showEffectOn: 'render',
        rippleEffect: {
          period: 4,
          brushType: 'fill',
          scale: 2
        },
        label: {
          normal: {
            show: true,
            width: 20,
            height: 20,
            fontSize: 14,
            color: "white",
            offset: [0, 0],
            formatter (name) {
              return name.data.name + '\n' + name.data.number
            }
          }
        },
        itemStyle: {
          normal: {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0, color: '#2CC2F7' // 0% 处的颜色
              }, {
                offset: 0.4, color: '#2CC2F7' // 100% 处的颜色
              }, {
                offset: 0.9, color: '#2CC2F7' // 100% 处的颜色
              }, {
                offset: 1, color: '#2CC2F7' // 100% 处的颜色
              }],
              globalCoord: true // 缺省为 false
            },
            shadowBlur: 10,
            shadowColor: '#2CC2F7'
          }
        }
      }, {
        type: "effectScatter",
        data: [{
          symbolSize: 40, name: '相护宝', symbolOffset: [-80, -20], value: 1, number: 333
        }],
        showEffectOn: 'render',
        rippleEffect: {
          period: 4,
          brushType: 'fill',
          scale: 2
        },
        label: {
          normal: {
            show: true,
            width: 20,
            height: 20,
            fontSize: 14,
            color: "white",
            offset: [0, 0],
            formatter (name) {
              return name.data.name + '\n' + name.data.number
            }
          }
        },
        itemStyle: {
          normal: {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0, color: '#39D385' // 0% 处的颜色
              }, {
                offset: 0.4, color: '#39D385' // 100% 处的颜色
              }, {
                offset: 0.9, color: '#39D385' // 100% 处的颜色
              }, {
                offset: 1, color: '#39D385' // 100% 处的颜色
              }],
              globalCoord: true // 缺省为 false
            },
            shadowBlur: 10,
            shadowColor: '#2CC2F7'
          }
        }
      }, {
        type: "effectScatter",
        data: [{
          symbolSize: 40, name: '疗效', symbolOffset: [-80, 80], value: 1, number: 415
        }],
        showEffectOn: 'render',
        rippleEffect: {
          period: 4,
          brushType: 'fill',
          scale: 2
        },
        label: {
          normal: {
            show: true,
            width: 20,
            height: 20,
            fontSize: 14,
            color: "white",
            offset: [0, 0],
            formatter (name) {
              return name.data.name + '\n' + name.data.number
            }
          }
        },
        itemStyle: {
          normal: {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0, color: '#FE5757' // 0% 处的颜色
              }, {
                offset: 0.4, color: '#FE5757' // 100% 处的颜色
              }, {
                offset: 0.9, color: '#FE5757' // 100% 处的颜色
              }, {
                offset: 1, color: '#FE5757' // 100% 处的颜色
              }],
              globalCoord: true // 缺省为 false
            },
            shadowBlur: 10,
            shadowColor: '#2CC2F7'
          }
        }
      }, {
        type: "effectScatter",
        data: [{
          symbolSize: 40, name: '药品安全', symbolOffset: [80, 80], value: 1, number: 327
        }],
        showEffectOn: 'render',
        rippleEffect: {
          period: 4,
          brushType: 'fill',
          scale: 2
        },
        label: {
          normal: {
            show: true,
            width: 20,
            height: 20,
            fontSize: 14,
            color: "white",
            offset: [0, 0],
            formatter (name) {
              return name.data.name + '\n' + name.data.number
            }
          }
        },
        itemStyle: {
          normal: {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0, color: '#EC54F9' // 0% 处的颜色
              }, {
                offset: 0.4, color: '#EC54F9' // 100% 处的颜色
              }, {
                offset: 0.9, color: '#EC54F9' // 100% 处的颜色
              }, {
                offset: 1, color: '#EC54F9' // 100% 处的颜色
              }],
              globalCoord: true // 缺省为 false
            },
            shadowBlur: 10,
            shadowColor: '#EC54F9'
          }
        }
      }, {
        type: "effectScatter",
        data: [{
          symbolSize: 30, name: '个人隐私', symbolOffset: [60, -80], value: 1, number: 293
        }],
        showEffectOn: 'render',
        rippleEffect: {
          period: 4,
          brushType: 'fill',
          scale: 2
        },
        label: {
          normal: {
            show: true,
            width: 20,
            height: 20,
            fontSize: 14,
            color: "white",
            offset: [0, 0],
            formatter (name) {
              return name.data.name + '\n' + name.data.number
            }
          }
        },
        itemStyle: {
          normal: {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0, color: '#53CEC9' // 0% 处的颜色
              }, {
                offset: 0.4, color: '#53CEC9' // 100% 处的颜色
              }, {
                offset: 0.9, color: '#53CEC9' // 100% 处的颜色
              }, {
                offset: 1, color: '#53CEC9' // 100% 处的颜色
              }],
              globalCoord: true // 缺省为 false
            },
            shadowBlur: 10,
            shadowColor: '#53CEC9'
          }
        }
      }, {
        type: "effectScatter",
        data: [{
          symbolSize: 35, name: '数据泄露', symbolOffset: [70, -20], value: 1, number: 280
        }],
        showEffectOn: 'render',
        rippleEffect: {
          period: 4,
          brushType: 'fill',
          scale: 2
        },
        label: {
          normal: {
            show: true,
            width: 20,
            height: 20,
            fontSize: 14,
            color: "white",
            offset: [0, 0],
            formatter (name) {
              return name.data.name + '\n' + name.data.number
            }
          }
        },
        itemStyle: {
          normal: {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0, color: '#E88637' // 0% 处的颜色
              }, {
                offset: 0.4, color: '#E88637' // 100% 处的颜色
              }, {
                offset: 0.9, color: '#E88637' // 100% 处的颜色
              }, {
                offset: 1, color: '#E88637' // 100% 处的颜色
              }],
              globalCoord: true // 缺省为 false
            },
            shadowBlur: 10,
            shadowColor: '#E88637'
          }
        }
      }, {
        type: "effectScatter",
        data: [{
          symbolSize: 58, name: '新冠疫苗', symbolOffset: [-10, -60], value: 1, number: 920
        }],
        showEffectOn: 'render',
        rippleEffect: {
          period: 4,
          brushType: 'fill',
          scale: 2
        },
        label: {
          normal: {
            show: true,
            width: 20,
            height: 20,
            fontSize: 14,
            color: "white",
            offset: [0, 0],
            formatter (name) {
              return name.data.name + '\n' + name.data.number
            }
          }
        },
        itemStyle: {
          normal: {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0, color: '#5297ED' // 0% 处的颜色
              }, {
                offset: 0.4, color: '#5297ED' // 100% 处的颜色
              }, {
                offset: 0.9, color: '#5297ED' // 100% 处的颜色
              }, {
                offset: 1, color: '#5297ED' // 100% 处的颜色
              }],
              globalCoord: true // 缺省为 false
            },
            shadowBlur: 10,
            shadowColor: '#5297ED'
          }
        }
      }]
    }
    myChart.setOption(option);
  }
}
</script>

<style lang="scss" scoped>
.keyword-people {
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
