<template>
  <div class="china-map">
    <div class="title">
      <span>></span>
      <span class="light" style="margin-right: 5px;color: #237dbf">></span>
      全国医院综合排名
      <span class="light" style="margin-left: 5px;color: #237dbf">&nbsp<</span>
      <span><</span>
    </div>
    <div class="main">
      <div class="list">
        <div class="item">
          <div class="white rank" style="font-size: 16px">排名</div>
          <div class="white name" style="font-size: 16px">医院名称</div>
          <div class="white frame" style="font-size: 16px">专科声誉</div>
          <div class="white science" style="font-size: 16px">科研学术</div>
          <div class="white score" style="font-size: 16px">综合得分</div>
        </div>
        <div
          class="item"
          v-for="(item,index) in hospitals"
          :class="{wei:index%2==0,lig:index%2!=0}"
          :key="item.rank"
        >
          <div class="rank">{{item.rank}}</div>
          <div class="name" @click="hanleClick(item.name)">{{item.name}}</div>
          <div class="frame">{{item.frame}}</div>
          <div class="science">{{item.science}}</div>
          <div class="score">{{item.score}}</div>
        </div>
      </div>
      <div class="map">
        <order-map />
      </div>
    </div>
  </div>
</template>

<script>
import OrderMap from './orderMap.vue'
export default {
  components: {
    OrderMap,
  },
  data () {

    return {

      hospitals: [

        { rank: 1, name: "医院A", frame: '80.000', science: '5.826', score: '95.826' },
        { rank: 2, name: "医院B", frame: '64.326', science: '20.000', score: '84.326' },
        { rank: 3, name: "医院C", frame: 60.182, science: 15.249, score: 75.431 },
        { rank: 4, name: "医院D", frame: 30.734, science: 11.363, score: 42.097 },
        { rank: 5, name: "医院E", frame: 29.678, science: 12.374, score: 42.052 },
        { rank: 6, name: "医院F", frame: 24.484, science: 12.374, score: 42.052 },
        { rank: 7, name: "医院G", frame: 23.293, science: 11.755, score: 35.048 },
        { rank: 8, name: "医院H", frame: 25.893, science: 7.478, score: 33.371 },
        { rank: 9, name: "医院I", frame: 23.451, science: 9.654, score: 33.105 },
      ]
    }
  },
  methods: {
    hanleClick (name) {
      this.$router.push({
        path: "/dashboard2",
        query: {
          hospital: name
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.china-map {
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
  .wei {
    background-color: #051d3f;
  }
  .lig {
    background-color: #134980;
  }
  .main {
    width: 100%;
    height: 90%;
    background: #093068;
    display: flex;
    .list {
      padding: 5px;
      padding-top: 20px;
      box-sizing: border-box;
      width: 45%;
      .item {
        display: flex;
        //align-items: center;
        font-size: 16px;
        height: 10%;
        padding-top: 2px;
        padding-bottom: 2px;
        box-sizing: border-box;
        div {
          text-align: center;
          transform: scale(0.8);
        }
        .white {
          color: 'white' !important;
          font-size: 12px;
        }
        .rank {
          flex: 10%;
          color: white;
          transform: scale(0.8);
          margin: auto;
        }
        .name {
          flex: 30%;
          color: white;
          transform: scale(0.8);
          margin: auto;
        }
        .frame {
          color: #71b5ea;
          flex: 20%;
          transform: scale(0.8);
          margin: auto;
        }
        .science {
          color: #facc14;
          transform: scale(0.8);
          flex: 20%;
          margin: auto;
        }
        .score {
          flex: 20%;
          transform: scale(0.8);
          color: #0bcae8;
          margin: auto;
        }
      }
    }
    .map {
      width: 55%;
      height: 100%;
    }
  }
}
</style>
