<template>
  <div class="err-detail">
    <div class="detail-wrapper">
      <div class="detail">
        <div class="title">{{patent.name}}</div>
        <div class="message">
          <div class="line">
            <span class="key bold">基本情况</span>
            <span class="value"></span>
          </div>

          <div class="line">
            <span class="key">医保账号</span>
            <span class="value">{{patent.hospitalNo}}</span>
          </div>

          <div class="line">
            <span class="key">年龄</span>
            <span class="value">{{patent.gender}}</span>
          </div>
          <div class="line">
            <span class="key">状态</span>
            <span class="value">{{patent.status}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="status-wrapper">
      <div class="status-detail">
        <div class="message" v-if="type === 'danger'">
          <div class="title1">
            <span class="key bold">就诊历史</span>
            <span class="value"></span>
          </div>
          <div class="timeline">
            <timeline3></timeline3>
          </div>
          <!-- <div class="line">
            <span class="key">上次上链时间</span>
            <span class="value">{{formateDate(tx.old_time)}}</span>
          </div>
          <div class="line">
            <span class="key">上次上链内容</span>
            <span class="value" style="color:#F56C6C">{{tx.last_content}}</span>
          </div>
          <div class="line">
            <span class="key">上次操作者</span>
            <span class="value">{{tx.doctor}}</span>
          </div>
          <div class="line">
            <span class="key">本次上链时间</span>
            <span class="value">{{formateDate(tx.now_time)}}</span>
          </div>
          <div class="line">
            <span class="key">本次上链内容</span>
            <span class="value" style="color:#F56C6C">{{tx.content}}</span>
          </div>
          <div class="line">
            <span class="key">本次操作者</span>
            <span class="value">{{tx.doctor}}</span>
          </div>-->
        </div>
        <!-- <div class="message" v-else-if="type === 'warning'">
          <div class="line">
            <span class="key bold">状态详情</span>
            <span class="value"></span>
          </div>
          <div class="line">
            <span class="key">原始数据</span>
            <span class="value">{{originData}}</span>
          </div>
          <div class="line">
            <span class="key">上链数据</span>
            <span class="value">{{chainData}}</span>
          </div>
        </div>
        <div class="message" v-else>
          <div class="line">
            <span class="key bold">状态详情</span>
            <span class="value"></span>
          </div>
          <div class="list">
            <div class="list-item gray">
              <div class="updater">修改者</div>
              <div class="txId">交易号</div>
              <div class="updateDate">修改时间</div>
            </div>
            <div class="list-item" v-for="(updateItem,index) in updateHistorys" :key="index">
              <div class="updater">{{updateItem.updater}}</div>
              <div class="txId">{{updateItem.txId}}</div>
              <div class="updateDate">{{formatDate(updateItem.updateDate)}}</div>
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>
 
<script>
import timeline3 from '../cpath/timeline3.vue'
// import { getErrorDetailData } from '@/service/api'
/* import { errorDetailData } from './mock'; */
export default {
  components: { timeline3 },
  props: ['patent'],
  data () {
    return {
      type: "danger",
      tx: '',
      errorDetailData: []
    }
  },
  async mounted () {

  },
  methods: {
    formateDate (date) {
      return date.toLocaleString('en-GB', { timeZone: 'UTC' })
    },
    async getData () {
      this.errorDetailData = errorDetailData

    }
  },

}
</script>
 
<style lang="scss" scoped>
.err-detail {
  width: 100%;
  height: 100%;

  .detail-wrapper,
  .status-wrapper {
    padding: 5px 10px;

    box-sizing: border-box;
    .detail,
    .status-detail {
      height: 100%;

      .title {
        font-weight: bold;
        width: 70%;
        height: 40px;
        word-wrap: break-word;
        word-break: break-all;
        color: white;
        font-size: 18px;
      }
      .message {
        width: 100%;
        height: calc(100% - 70px);

        .line {
          height: 30%;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #bcd0f9;
          justify-content: space-between;
          .key,
          .value {
            font-size: 14px;
            color: white;

            &.bold {
              font-weight: bold;
              font-size: 14px;
              color: white;
            }
          }
          .key {
            color: white;
          }
        }
        .list {
          color: gray;
          margin-top: 10px;
          .list-item {
            display: flex;
            border-bottom: 1px solid #bbbbbb;
            /* border-bottom: 1px solid gray; */
            height: 20px;
            padding: 6px 20px 6px 0;
            align-items: center;
            .updater,
            .txId,
            .updateDate {
              height: 20px;
              /* padding: 5px 0; */
              text-align: center;
              font-size: 14px;
            }
            .updater {
              width: 80px;
            }
            .updateDate {
              width: 80px;
            }
            .txId {
              flex: 1;
            }

            /* &:nth-child(odd) {
        background: #f2f2f2;
      }
      &:nth-child(even) {
        background: white;
      } */
            &.gray {
              color: white;
            }
          }
        }
      }
    }
    .operation {
      font-size: 12px;
      .op {
        .bold {
          font-weight: bold;
        }
      }
      .op-detail {
        display: flex;
        justify-content: space-around;

        .con {
          width: 40px;
          position: relative;
          margin-left: 40px;
          .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: inline-block;
            position: absolute;

            background: #1b60ec;
          }
          .bar {
            height: 60px;
            width: 1px;
            left: 4px;
            background: #87abf5;
            position: absolute;
          }
        }
        .time {
          position: relative;
          width: 150px;
          margin-left: 40px;
          .time-item {
            position: absolute;
            align-items: center;
          }
        }
        .tags {
          position: relative;
          width: 400px;
          margin-top: 22px;
          .tag-item {
            position: absolute;
            width: 70px;
            text-align: center;
          }
          .tag-item2 {
            position: absolute;
            width: 70px;
            left: 70px;
            text-align: center;
          }
        }
      }
    }
  }

  .detail-wrapper {
    height: 40%;
    padding-top: 0px;
    box-sizing: border-box;
  }
  .status-wrapper {
    height: 60%;
    box-sizing: border-box;
    margin-top: 20px;
    .status-detail {
      height: 100%;

      .message {
        height: 100%;

        .title1 {
          height: 20px;
          font-size: 14px;
          color: white;
          font-weight: bold;
        }
        .timeline {
          height: calc(100% - 20px);
        }
      }
    }
  }
}
</style>