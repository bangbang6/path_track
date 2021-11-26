<template>
  <div class="trans-list">
    <div class="title">
      <span>></span>
      <span class="light" style="margin-right: 5px;color: #237dbf">></span>
      各科室综合指标
      <span class="light" style="margin-left: 5px;color: #237dbf">&nbsp<</span>
      <span><</span>
    </div>
    <div class="list">
      <div class="list-title">
        <div class="department">医院名称</div>
        <div class="earlyWarningMonthly">医保使用情况</div>
        <div class="earlyWarningNumberToday">手术数量</div>
        <div class="timeUpdate">病人数量/人次</div>
        <div class="dutyDirectorToday">事故数量</div>
        <div class="numberOfEmployeesToday">热点疾病</div>
      </div>
      <div class="list-item" v-for="(item,index) in list" :key="index">
        <div class="department" @click="handleClick(item.department)">{{item.department}}</div>
        <div class="earlyWarningMonthly overflow">{{item.earlyWarningMonthly}}</div>
        <div class="earlyWarningNumberToday overflow">{{item.earlyWarningNumberToday}}</div>
        <div class="timeUpdate overflow">{{item.timeUpdate}}</div>
        <div class="dutyDirectorToday overflow">{{item.dutyDirectorToday}}</div>
        <div class="numberOfEmployeesToday overflow">{{item.numberOfEmployeesToday}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      list: [
        {
          'department': '医院B',
          'earlyWarningMonthly': '498.36万',
          'earlyWarningNumberToday': '4531',
          'timeUpdate': '324.88万',
          'dutyDirectorToday': '213',
          'numberOfEmployeesToday': '脂肪肝'
        },
        {
          'department': '医院E',
          'earlyWarningMonthly': '307.89万',
          'earlyWarningNumberToday': '3548',
          'timeUpdate': '103.66万',
          'dutyDirectorToday': '289',
          'numberOfEmployeesToday': '冠心病'
        },
        {
          'department': '医院A',
          'earlyWarningMonthly': '569.69万',
          'earlyWarningNumberToday': '6568',
          'timeUpdate': '435.27万',
          'dutyDirectorToday': '302',
          'numberOfEmployeesToday': '糖尿病'
        },
        {
          'department': '医院C',
          'earlyWarningMonthly': '432.14万',
          'earlyWarningNumberToday': '3566',
          'timeUpdate': '405.36万',
          'dutyDirectorToday': '302',
          'numberOfEmployeesToday': '胃病'
        },

      ]
    }
  },
  methods: {
    handleClick (department) {
      console.log('department', department);
      this.$router.push({
        path: "/dashboard2",
        query: {
          hospital: department
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.trans-list {
  //   margin-left: 10px;
  //   margin-right: 10px;
  //   overflow-y: hidden;
  //   overflow: hidden;
  background-color: #134980;
  height: 100%;
  box-sizing: border-box;
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

  .list {
    background-color: #134980;
    padding-left: 10px;
    box-sizing: border-box;
    height: 90%;
    overflow: hidden;

    color: rgb(255, 255, 255);
    .title {
      color: #168ce3 !important;
      font-weight: 600;
    }
    .list-title {
      display: flex;
      border-bottom: 1px solid gray;
      // height: 12.5%;
      padding: 6px 20px 6px 0;
      align-items: center;
      div {
        flex: 1;
      }
      .department {
        color: #168ce3;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 13px;
      }
      .earlyWarningMonthly {
        color: #168ce3;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 13px;
      }
      .earlyWarningNumberToday {
        color: #168ce3;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 13px;
      }
      .timeUpdate {
        color: #168ce3;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 13px;
      }

      .dutyDirectorToday {
        text-align: center;
        color: #168ce3;

        font-size: 13px;
      }
      .numberOfEmployeesToday {
        text-align: center;
        font-size: 13px;
        color: #168ce3;
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
    .list-item {
      display: flex;
      // border-bottom: 1px solid gray;
      height: 20%;
      padding: 6px 20px 6px 0;
      align-items: center;
      div {
        flex: 1;
      }
      .department {
        color: #74fbf5;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 10px;
      }
      .earlyWarningMonthly {
        color: #74fbf5;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 10px;
      }
      .earlyWarningNumberToday {
        color: #74fbf5;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 10px;
      }
      .timeUpdate {
        color: #74fbf5;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 10px;
      }

      .dutyDirectorToday {
        text-align: center;
        color: #74fbf5;

        font-size: 10px;
      }
      .numberOfEmployeesToday {
        text-align: center;
        font-size: 10px;
        color: #74fbf5;
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