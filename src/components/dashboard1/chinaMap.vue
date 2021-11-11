<template>
  <div class="china-map">
    <div class="title">全国今日就医热度统计</div>
    <div class="main">
      <div class="list">
        <div class="item">
          <div class="white rank">排名</div>
          <div class="white name">医院名称</div>
          <div class="white frame">专科声誉</div>
          <div class="white science">科研学术</div>
          <div class="white score">综合得分</div>
        </div>
        <div class="item" v-for="item in hospitals" :key="item.rank">
          <div class="rank">{{item.rank}}</div>
          <div class="name">{{item.name}}</div>
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

        { rank: 1, name: "北京协和医院", frame: '80.000', science: '5.826', score: '95.826' },
        { rank: 2, name: "四川大学华西医院", frame: '64.326', science: '20.000', score: '84.326' },
        { rank: 3, name: "中国人民解放军总医院", frame: 60.182, science: 15.249, score: 75.431 },
        { rank: 4, name: "上海交通大学医学院附属瑞金医院", frame: 30.734, science: 11.363, score: 42.097 },
        { rank: 5, name: "复旦大学附属中山医院", frame: 29.678, science: 12.374, score: 42.052 },
        { rank: 6, name: "中山大学附属第一医院", frame: 24.484, science: 12.374, score: 42.052 },
        { rank: 7, name: "华中科技大学同济医学院附属同济医院", frame: 23.293, science: 11.755, score: 35.048 },
        { rank: 8, name: "空军军医大学西京医院", frame: 25.893, science: 7.478, score: 33.371 },
        { rank: 9, name: "复旦大学附属华山医院", frame: 23.451, science: 9.654, score: 33.105 },
      ]
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
    font-size: 12px;
    color: #237dbf;
    background: #101010;
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
      width: 40%;
      .item {
        display: flex;
        //align-items: center;
        font-size: 12px;
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
        }
        .name {
          flex: 30%;
          color: white;
          transform: scale(0.8);
        }
        .frame {
          color: #71b5ea;
          flex: 20%;
          transform: scale(0.8);
        }
        .science {
          color: #facc14;
          transform: scale(0.8);

          flex: 20%;
        }
        .score {
          flex: 20%;
          transform: scale(0.8);

          color: #0bcae8;
        }
      }
    }
    .map {
      width: 60%;
      height: 100%;
    }
  }
}
</style>