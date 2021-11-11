<template>
  <div class="doctor">
    <div class="head">
      <div class="time">
        <div class="day">{{nowDate}}</div>
        <div class="minute">{{nowMinute}}</div>
      </div>
      <div class="title">基于区块链的医疗机构监管</div>
      <div class="right">
        <div class="tianqi">晴</div>
        <div class="wendu">18-32°C</div>
      </div>
    </div>
    <div class="wrapper">
      <div class="left">
        <div class="totalPeople">
          <total-people />
        </div>
        <div class="input">
          <input-salary />
        </div>
      </div>
      <div class="middle">
        <div class="map">
          <china-map />
        </div>
        <div class="menzheng">
          <men-zheng />
        </div>
      </div>
      <div class="right">
        <div class="keyword">
          <keyword-people />
        </div>
        <div class="visit">
          <visit-home />
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import TotalPeople from '@/components/dashboard1/totalPeople.vue'
import InputSalary from '@/components/dashboard1/inputSalary.vue'
import MenZheng from '@/components/dashboard1/menZheng.vue'
import VisitHome from '@/components/dashboard1/visitHome.vue'
import KeywordPeople from '@/components/dashboard1/keywordPeople.vue'
import ChinaMap from '@/components/dashboard1/chinaMap.vue'

export default {
  components: {
    TotalPeople,
    InputSalary,
    MenZheng,
    VisitHome,
    KeywordPeople,
    ChinaMap
  },
  data () {


    return {
    }
  },
  computed: {
    nowDate () {
      return new Date().format("yyyy年MM月dd日")
    },
    nowMinute () {
      return new Date().format("hh:mm:ss")
    }
  }
}
</script>
 
<style lang="scss" scoped>
.doctor {
  width: 100%;
  height: 100%;
  background-image: url('./background.png');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  padding-left: 2%;
  padding-right: 2%;
  box-sizing: border-box;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 14%;
    width: 100%;
    .time {
      color: white;
      height: 60%;
      .day,
      .minute {
        letter-spacing: 2px;
        font-weight: 500;
        font-size: 14px;
      }
      .minute {
        margin-top: 5px;
      }
    }
    .title {
      height: 60%;
      width: 30%;
      letter-spacing: 6px;
      color: white;
      font-weight: 800;
      font-size: 20px;
    }
    .right {
      color: white;
      height: 60%;
      .tianqi,
      .wendu {
        letter-spacing: 2px;
        font-weight: 500;
        font-size: 14px;
      }
      .wendu {
        margin-top: 5px;
      }
    }
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 86%;
    .left {
      flex: 25%;
      height: 100%;

      .totalPeople {
        width: 100%;
        height: 50%;
        padding-bottom: 10px;
        box-sizing: border-box;
      }
      .input {
        width: 100%;
        padding-bottom: 10px;
        box-sizing: border-box;
        height: 50%;
      }
    }
    .middle {
      flex: 50%;
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
      height: 100%;
      .map {
        width: 100%;
        height: 70%;
        padding-bottom: 10px;
        box-sizing: border-box;
      }
      .menzheng {
        width: 100%;
        height: 30%;
        padding-bottom: 10px;
        box-sizing: border-box;
      }
    }
    .right {
      flex: 25%;
      height: 100%;

      .keyword {
        width: 100%;
        height: 50%;
        padding-bottom: 10px;
        box-sizing: border-box;
      }
      .visit {
        width: 100%;
        padding-bottom: 10px;
        box-sizing: border-box;
        height: 50%;
      }
    }
  }
}
</style>