<template>
  <div class="trans-list">
    <div class="title">
      <span>></span>
      <span class="light" style="margin-right: 5px;color: #237dbf">></span>
      各医院医疗质量重要指标
      <span class="light" style="margin-left: 5px;color: #237dbf">&nbsp<</span>
      <span><</span>
    </div>
    <div class="list">
      <div class="list-title">
        <div class="name">医院名称</div>
        <div class="hisSurgery">出院手术占比</div>
        <div class="hisMinSurgery">出院微创手术占比</div>
        <div class="hisFourSurgery">出院四级手术比例</div>
        <div class="complication">手术并发症发生率</div>
        <div class="singleDis">单病种质量控制指标（平均住院日）</div>
        <div class="clinicNumber">临床检验项目数</div>
      </div>
      <div class="list-item" v-for="(item,index) in list" :key="index">
        <div class="name" @click="handleClick(item.name)">{{item.name}}</div>
        <div class="hisSurgery overflow">{{item.hisSurgery}}</div>
        <div class="hisMinSurgery overflow">{{item.hisMinSurgery}}</div>
        <div class="hisFourSurgery overflow">{{item.hisFourSurgery}}</div>
        <div class="complication overflow">{{item.complication}}</div>
        <div class="singleDis overflow">{{item.singleDis}}</div>
        <div class="clinicNumber overflow">{{item.clinicNumber}}</div>
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
          'name': '医院A',
          'hisSurgery': '51.276%',
          'hisMinSurgery': '24.981%',
          'hisFourSurgery': '12.628%',
          'complication': '0.871%',
          'singleDis': '12天',
          'clinicNumber': '2135'
        },
        {
          'name': '医院B',
          'hisSurgery': '63.443%',
          'hisMinSurgery': '31.742%',
          'hisFourSurgery': '18.971%',
          'complication': '2.759%',
          'singleDis': '15天',
          'clinicNumber': '2876'
        },
        {
          'name': '医院C',
          'hisSurgery': '57.216%',
          'hisMinSurgery': '19.428%',
          'hisFourSurgery': '23.873%',
          'complication': '1.511%',
          'singleDis': '7天',
          'clinicNumber': '3244'
        },
        {
          'name': '医院D',
          'hisSurgery': '46.218%',
          'hisMinSurgery': '35.956%',
          'hisFourSurgery': '8.659%',
          'complication': '0.784%',
          'singleDis': '9天',
          'clinicNumber': '1988'
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
  background-color: #093068c4;
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
    background-color: #09306800;
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
      .name {
        color: #168ce3;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 13px;
      }
      .hisSurgery {
        color: #168ce3;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 13px;
      }
      .hisMinSurgery {
        color: #168ce3;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 13px;
      }
      .hisFourSurgery {
        color: #168ce3;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 13px;
      }

      .complication {
        text-align: center;
        color: #168ce3;

        font-size: 13px;
      }
      .singleDis {
        text-align: center;
        font-size: 13px;
        color: #168ce3;
      }
      .clinicNumber {
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
      .name {
        color: #74fbf5;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 14px;
      }
      .hisSurgery {
        color: #74fbf5;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 14px;
      }
      .hisMinSurgery {
        color: #74fbf5;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 14px;
      }
      .hisFourSurgery {
        color: #74fbf5;
        //flex: 1;
        // height: 12.5%;

        text-align: center;
        font-size: 14px;
      }

      .complication {
        text-align: center;
        color: #74fbf5;

        font-size: 14px;
      }
      .singleDis {
        text-align: center;
        font-size: 14px;
        color: #74fbf5;
      }
      .clinicNumber {
        text-align: center;
        font-size: 14px;
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
