<template>
  <div class="monitor">
    <div class="head">智慧医疗平台</div>
    <div class="wrapper">
      <div class="navs">
        <div class="nav-item">
          <div class="nav-icon">1</div>
          <div class="nav-right"></div>
        </div>
        <div class="nav-item">
          <div class="nav-icon">1</div>
          <div class="nav-right"></div>
        </div>
        <div class="nav-item">
          <div class="nav-icon">1</div>
          <div class="nav-right"></div>
        </div>
        <div class="nav-item">
          <div class="nav-icon">1</div>
          <div class="nav-right"></div>
        </div>
        <div class="nav-item">
          <div class="nav-icon">1</div>
          <div class="nav-right"></div>
        </div>
        <div class="nav-item">
          <div class="nav-icon">1</div>
          <div class="nav-right"></div>
        </div>
      </div>
      <div class="center">
        <div class="percentage">科室人员占比</div>
        <div class="salary">收录项目分布</div>
        <div class="error">预警情况</div>
      </div>
      <div class="bottom">
        <div class="input-output">收录支出情况</div>
        <div class="peopleNumber">就医人员</div>
        <div class="yuyue">到诊人数</div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
 
<style lang="scss" scoped>
.monitor {
  width: 100%;
  height: 100%;
  background: gray;
  .head {
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper {
    height: 90%;
    width: 90%;
    margin-left: 5%;
    .navs {
      height: 20%;
      display: flex;
      width: 100%;

      .nav-item {
        display: flex;
        flex: 1;
        background-color: black;
        color: white;
      }
    }
    .center {
      height: 40%;
      display: flex;
      padding-top: 10px;
      box-sizing: border-box;
      .percentage {
        background: red;
        flex: 1 0 20%;
      }
      .salary {
        flex: 1 0 20%;
        background: green;
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
      }
      .peopleNumber {
        flex: 1;
        background: green;
      }
      .yuyue {
        flex: 1;
        background: red;
      }
    }
  }
}
</style>