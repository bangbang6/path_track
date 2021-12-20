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
          <div class=" rank white" style="color: white; font-size: 16px">No</div>
          <div class=" name white" style="color: white;font-size: 16px">医院名称</div>
          <div class="white quality" style="color: white;font-size: 16px">医疗质量</div>
          <div class="white efficiency" style="color: white;font-size: 16px">运营效率</div>
          <div class="white develop" style="color: white;font-size: 16px">持续发展</div>
          <div class="white satisfy" style="color: white;font-size: 16px">满意度</div>
        </div>
        <div
          class="item"
          v-for="(item,index) in hospitals"
          :class="{wei:index%2==0,lig:index%2!=0}"
          :key="item.rank"
        >
          <div class="rank">{{item.rank}}</div>
          <div class="name" @click="hanleClick(item.name)">{{item.name}}</div>
          <div class="quality">{{item.quality}}</div>
          <div class="efficiency">{{item.efficiency}}</div>
          <div class="develop">{{item.develop}}</div>
          <div class="satisfy">{{item.satisfy}}</div>
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

        { rank: 1, name: "医院A", quality: 98.23, efficiency: 96.62, develop: 92.01, satisfy: 90.01},
        { rank: 2, name: "医院B", quality: 95.38, efficiency: 98.06, develop: 92.20,satisfy: 88.18 },
        { rank: 3, name: "医院C", quality: 90.63, efficiency: 87.56, develop: 87.73, satisfy: 86.83 },
        { rank: 4, name: "医院D", quality: 90.12, efficiency: 88.10, develop: 84.12, satisfy: 85.14},
        { rank: 5, name: "医院E", quality: 85.52, efficiency: 84.06, develop: 80.21, satisfy: 85.01 },
        { rank: 6, name: "医院F", quality: 86.74, efficiency: 80.62, develop: 78.19, satisfy: 84.98 },
        { rank: 7, name: "医院G", quality: 84.89, efficiency: 75.52, develop: 76.18, satisfy: 84.62 },
        { rank: 8, name: "医院H", quality: 80.63, efficiency: 74.71, develop: 73.20, satisfy: 83.98 },
        { rank: 9, name: "医院I", quality: 80.18, efficiency: 73.93, develop: 72.83, satisfy: 83.91 },
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
          flex: 8%;
          color: rgb(13, 243, 243);
          transform: scale(0.8);
          margin: auto;
        }
        .name {
          flex: 20%;
          color: white;
          transform: scale(0.8);
          margin: auto;
        }
        .quality {
          color: #1591f0;
          flex: 18%;
          transform: scale(0.8);
          margin: auto;
        }
        .efficiency {
          color: #facc14;
          transform: scale(0.8);
          flex: 18%;
          margin: auto;
        }
        .develop {
          flex: 18%;
          transform: scale(0.8);
          color: #1591f0;
          margin: auto;
        }
        .satisfy {
          flex: 18%;
          transform: scale(0.8);
          color: #facc14;
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
