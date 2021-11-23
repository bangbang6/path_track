<template>
  <div class="monitor">
    <div class="headWapper">
      <div class="tra1"></div>
      <div class="head" style="position: relative">
        <div class="title">智慧医疗平台</div>
      </div>
      <div class="head1"></div>
    </div>
    <div class="wrapper">
      <div class="navs">
        <div class="nav-item">
          <Card
            :number="doctorNumber"
            word="医生在线人数"
            desc="The Total Doctor Number"
            iconClass="icon-shouye"
          ></Card>
        </div>
        <div class="nav-item">
          <Card
            :number="patientsNumber"
            word="患者用户人数"
            desc="The Total Patients Number"
            iconClass="icon-wodehuanzhe"
          ></Card>
        </div>
        <div class="nav-item">
          <Card
            :number="totalPeopleNumber"
            word="累计看病人次"
            desc="The Total People Number"
            iconClass="icon-zongrenshu"
          ></Card>
        </div>
        <div class="nav-item">
          <Card :number="totalIncome" word="总收入情况（万）" desc="The Total Income" iconClass="icon-income-o"></Card>
        </div>
        <div class="nav-item">
          <Card :number="totalOutcome" word="总支出情况（万）" desc="The Total Outcome" iconClass="icon-cz-zc"></Card>
        </div>
        <div class="nav-item">
          <Card
            :number="totalInsurance"
            word="医保报销总金额（万）"
            desc="Total amount of medical insurance reimbursement"
            iconClass="icon-yibaoka"
          ></Card>
        </div>
        <div class="nav-item">
          <Card
            :number="abnormalNumber"
            word="异常数"
            desc="The Number of Abnormal"
            iconClass="icon-yichang"
          ></Card>
        </div>
      </div>
      <div class="center">
        <div class="input-output">
          <payment />
        </div>

        <div class="salary">
          <TotalSalary></TotalSalary>
        </div>
        <div class="earlyWarnings">
          <earlyWarnings></earlyWarnings>
        </div>
      </div>
      <div class="bottom">
        <div class="percentage">
          <Departments></Departments>
        </div>
        <div class="yuyue">
          <yuyueNumberComparison></yuyueNumberComparison>
        </div>
        <div class="peopleNumber">
          <patient />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Head from './component/Head.vue'
import Card from './component/Card.vue'
import Departments from './component/Departments.vue'
import TotalSalary from './component/TotalSalary.vue'
import Payment from './component/payment.vue'
import Patient from './component/patient.vue'
import earlyWarnings from './component/earlyWarnings.vue'
import yuyueNumberComparison from './component/yuyueNumberComparison.vue'


export default {
  components: { Head, Card, Departments, TotalSalary, Payment, Patient, earlyWarnings, yuyueNumberComparison },

  data () {
    return {
      doctorNumber: 584,
      patientsNumber: 368329,
      totalPeopleNumber: 2479109,
      totalIncome: 47991,
      totalOutcome: 45875,
      totalInsurance: 2456,
      abnormalNumber: 7369,
    }
  },
}
</script>
<style scoped >
/deep/ .el-card__body {
  padding: 0;
}
</style>
<style lang="scss" scoped>
.monitor {
  width: 100%;
  height: 100%;
  background: #081326;
  .headWapper {
    height: 12%;
    width: 100%;
    z-index: 2;
  }
  .head {
    height: 12%;
    width: 50%;
    display: flex;
    margin-left: 25%;
    justify-content: center;
    align-items: center;
    //background: url("component/img/header.png");
    background-size: 100% 100%;
    border-top: 80px solid #0e1d38;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    color: white;
    font-size: 32px;
    font-weight: bold;
    z-index: 999;
    .title {
      margin-top: -10%;
    }
  }
  .head1 {
    height: 12%;
    width: 50%;
    display: flex;
    margin-left: 25%;
    justify-content: center;
    align-items: center;
    //background: url("component/img/header.png");
    background-size: 100% 100%;
    border-top: 80px solid #3a77e6;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    color: white;
    font-size: 32px;
    font-weight: bold;
    position: absolute;
    top: 1px;
    z-index: 777;
  }
  .tra1 {
    position: absolute;
    top: 0;
    height: 5%;
    width: 100%;
    background: #0e1d38;
    border-bottom: 1px solid #3a77e6;
    z-index: 888;
  }
  .wrapper {
    height: 88%;
    width: 90%;
    margin-left: 5%;
    .navs {
      height: 15%;
      display: flex;
      width: 100%;
      margin-left: 2%;
      .nav-item {
        display: flex;
        flex: 1;
        background-color: #081326;
        color: white;
        border: #081326 solid 1px;
        .el-card {
          border: #081326 solid 1px;
        }
      }
    }
    .center {
      height: 40%;
      display: flex;
      padding-top: 10px;
      box-sizing: border-box;
      .input-output {
        flex: 1 0 30%;
        background: red;
        margin-right: 5px;
      }
      .salary {
        flex: 1 0 30%;
        background: #081326;
        margin-left: 2px;
        margin-right: 5px;
      }
      .earlyWarnings {
        flex: 1 0 40%;
      }

      /* .error {
        flex: 1 0 20%;
        background: #081326;
        margin-left: 2px;
        margin-right: 5px;
      } */
    }
    .bottom {
      height: 40%;
      display: flex;
      padding-top: 10px;
      box-sizing: border-box;
      .percentage {
        background: #081326;
        flex: 1 0 30%;
        margin-right: 5px;
      }
      .yuyue {
        flex: 1 0 30%;
        background: #081326;
        margin-left: 2px;
        margin-right: 5px;
      }
      .peopleNumber {
        flex: 1 0 40%;

      }
    }
  }
}
</style>
