<template>
  <div class="monitor">
    <div class="head">
    </div>
    <div class="wrapper">
      <div class="navs">
        <div class="nav-item">
          <Card :number="doctorNumber" word="医生在线人数" desc="The Total Doctor Number" iconClass="icon-shouye"></Card>
        </div>
        <div class="nav-item">
          <Card :number="patientsNumber" word="患者用户人数" desc="The Total Patients Number" iconClass="icon-wodehuanzhe"></Card>
        </div>
        <div class="nav-item">
          <Card :number="dataNumber" word="数据总数" desc="The Total Data Number" iconClass="icon-jiludanzilishijilu"></Card>
        </div>
        <div class="nav-item">
          <Card :number="blockNumber" word="区块数" desc="The Block Number" iconClass="icon-qukuai"></Card>
        </div>
        <div class="nav-item">
          <Card :number="peerNumber" word="节点数" desc="The Peer Number" iconClass="icon-CDNjiedian"></Card>
        </div>
        <div class="nav-item">
          <Card :number="transactionNumber" word="交易数" desc="The Transaction Number" iconClass="icon-jiaoyi"></Card>
        </div>
        <div class="nav-item">
          <Card :number="abnormalNumber" word="异常数" desc="The Number of Abnormal" iconClass="icon-yichang"></Card>
        </div>
      </div>
      <div class="center">
        <div class="percentage"><Departments></Departments></div>
        <div class="salary"><TotalSalary></TotalSalary></div>
        <div class="error">预警情况</div>
      </div>
      <div class="bottom">
        <div class="input-output" >
          <payment/>
        </div>
        <div class="peopleNumber">
          <patient/>
        </div>
        <div class="yuyue">到诊人数</div>
      </div>
    </div>
  </div>
</template>

<script>

import Card from './Card.vue'
import Departments from './Departments.vue'
import TotalSalary from './TotalSalary.vue'
import Payment from './component/payment.vue'
import Patient from './component/patient.vue'
export default {
  components: {Card,Departments,TotalSalary,Payment, Patient},

  data () {
    return {
      doctorNumber: 387,
      patientsNumber: 368329,
      dataNumber: 2479109,
      blockNumber: 47991,
      peerNumber: 73,
      transactionNumber: 8274682,
      abnormalNumber: 7369,
    }
  },
}
</script>

<style lang="scss" scoped>
.monitor {
  width: 100%;
  height: 100%;
  background:#081326;

  .head {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("header.png");
    background-size: 100% 100%;
  }

  .wrapper {
    height: 90%;
    width: 90%;
    margin-left: 5%;
    .navs {
      height: 13%;
      display: flex;
      width: 100%;
      .nav-item {
        display: flex;
        flex: 1;
        background-color:#081326;
        color: white;
        border: #081326 solid 1px;
        .el-card{
          border:#081326 solid 1px ;

        }
      }
    }
    .center {
      height: 40%;
      display: flex;
      padding-top: 10px;
      box-sizing: border-box;
      .percentage {
        background: #081326;
        flex: 1 0 20%;
        margin-right: 5px;
      }
      .salary {
        flex: 1 0 20%;
        background:  #081326;
        margin-left: 2px;
        margin-right: 5px;
      }
      .error {
        flex: 1 0 60%;
        background: red;
      }
    }
    .bottom {
      height: 40%;
      display: flex;
      padding-top: 10px;
      box-sizing: border-box;
      .input-output {
        flex: 1;
        background: red;
        margin-right: 5px;
      }
      .peopleNumber {
        flex: 1;
        background: green;
        margin-right: 5px;
      }
      .yuyue {
        flex: 1;
        background: red;
      }
    }
  }
}
</style>
