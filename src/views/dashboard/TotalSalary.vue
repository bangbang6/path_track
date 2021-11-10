<template>
  <div class="category-user rangle">
    <div class="title">总收入项目分布</div>
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
      this.options = { yAxis: {
          type: 'category',
          data: ['床位费', '西药', '化验', '检查', '治疗', '材料']
        },
        xAxis: {
          type: 'value'
        },
        series: [
          {
            data: [252294,242627,242310,206128,199655,183620],
            type: 'bar'
          }
        ]}
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
