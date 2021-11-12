<template>
  <div class="trans-list rangle">
    <div class="title">2021各科室预警情况</div>
    <div class="list">
      <div class="list-item">
        <div class="department title">科室名称</div>
        <div class="earlyWarningMonthly title">当月预警比例</div>
        <div class="earlyWarningNumberToday title">今日预警数量</div>
        <div class="timeUpdate title">更新时间</div>
        <div class="dutyDirectorToday title">今日值班主任</div>
        <div class="numberOfEmployeesToday title">今日在职人数</div>
      </div>
      <div class="list-item" v-for="(item,index) in list" :key="index" @click="handleClick(index)">
        <div class="department">{{item.department}}</div>
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
          'department': '外科',
          'earlyWarningMonthly': '23.8%',
          'earlyWarningNumberToday': '324',
          'timeUpdate': '2021-11-22  08:20:46',
          'dutyDirectorToday': '李医生',
          'numberOfEmployeesToday': '169'
        },
        {
          'department': '妇科',
          'earlyWarningMonthly': '21.6%',
          'earlyWarningNumberToday': '103',
          'timeUpdate': '2021-11-22  08:33:17',
          'dutyDirectorToday': '张医生',
          'numberOfEmployeesToday': '174'
        },
        {
          'department': '口腔科',
          'earlyWarningMonthly': '19.8%',
          'earlyWarningNumberToday': '435',
          'timeUpdate': '2021-11-22  09:01:31',
          'dutyDirectorToday': '孙医生',
          'numberOfEmployeesToday': '63'
        },
        {
          'department': '内科',
          'earlyWarningMonthly': '13.7%',
          'earlyWarningNumberToday': '405',
          'timeUpdate': '2021-11-22  09:14:43',
          'dutyDirectorToday': '王医生',
          'numberOfEmployeesToday': '43'
        },
        {
          'department': '五官科',
          'earlyWarningMonthly': '9.6%',
          'earlyWarningNumberToday': '405',
          'timeUpdate': '2021-11-22  10:14:43',
          'dutyDirectorToday': '卢医生',
          'numberOfEmployeesToday': '43'
        },
        {
          'department': '外科',
          'earlyWarningMonthly': '9.0%',
          'earlyWarningNumberToday': '405',
          'timeUpdate': '2021-11-22  09:14:43',
          'dutyDirectorToday': '钱医生',
          'numberOfEmployeesToday': '133'
        },
        {
          'department': '内分泌科',
          'earlyWarningMonthly': '8.6%',
          'earlyWarningNumberToday': '405',
          'timeUpdate': '2021-11-22  09:14:43',
          'dutyDirectorToday': '陈医生',
          'numberOfEmployeesToday': '63'
        },
        {
          'department': '中医科',
          'earlyWarningMonthly': '7.3%',
          'earlyWarningNumberToday': '405',
          'timeUpdate': '2021-11-22  09:14:43',
          'dutyDirectorToday': '夏医生',
          'numberOfEmployeesToday': '23'
        },
        {
          'department': '眼科',
          'earlyWarningMonthly': '7.0%',
          'earlyWarningNumberToday': '405',
          'timeUpdate': '2021-11-22  09:14:43',
          'dutyDirectorToday': '张医生',
          'numberOfEmployeesToday': '69'
        }
      ]
    }
  },
  methods: {
    handleClick (index) {
      console.log('click')
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
    height: 100%;
    overflow: hidden;

    color: rgb(255, 255, 255);
    margin-top: 10px;
    .title {
      color: #168ce3 !important;

      font-weight: 600;
    }
    .list-item {
      display: flex;
      border-bottom: 1px solid gray;
      // height: 12.5%;
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