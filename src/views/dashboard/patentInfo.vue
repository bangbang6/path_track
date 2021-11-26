<template>
  <div class="inner-wrapper">
    <div class="title">智慧医疗平台</div>
    <div class="wrapper">
      <div class="error-status">
        <div class="content-wrapper">
          <div class="selects">
            <div class="input-wrapper">
              <el-input v-model="name" size="small" placeholder="病人姓名" clearable></el-input>

              <el-button
                type="primary"
                icon="el-icon-search"
                size="small"
                @click="search"
                :style="{marginLeft:'10px'}"
              >搜索</el-button>
            </div>
          </div>
          <div class="list">
            <div class="list-item gray">
              <div class="txId">病人姓名</div>
              <div class="date">性别</div>

              <div class="user">医院账号</div>
              <div class="status">状态</div>
            </div>
            <div
              class="list-item"
              v-for="(item,index) in list"
              :key="index"
              @click="handleClick(item)"
            >
              <div class="txId overflow">{{item.name}}</div>
              <div class="date overflow">{{item.gender}}</div>
              <div class="user overflow">{{item.hospitalNo}}</div>
              <div class="status overflow">
                <el-tag
                  size="mini"
                  :type="item.status === '就诊中'?'warning': 'primary'"
                  effect="dark"
                >{{item.status}}</el-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="paper-detail">
        <patent-detail :patent="patent"></patent-detail>
      </div>
    </div>
  </div>
</template>
 
<script>
import patentDetail from './patentDetail.vue'

// import { getErrorDetailData } from '@/service/api'
import { patentData } from './mock.js'

export default {
  components: {
    patentDetail
  },
  data () {
    return {
      name: "",
      chartOptions: {},
      paperId: 0,
      value: '',
      list: [],
      patent: null,
      canInterval: true,
      department: '',
      errorType: "",
    }
  },
  methods: {

    handleClick (patent) {
      this.patent = patent
    },
    formateDate (date) {
      console.log('date', date);
      return date.toLocaleString('en-GB', { timeZone: 'UTC' })
    },
    search () {
      if (this.name !== '') {
        this.list = patentData.filter(item => {

          return item.name === this.name
        })
      } else {
        this.list = patentData
      }

    },
    async getData () {
      this.list = patentData.slice(0, 10)
    }
  },

  async mounted () {
    const department = this.$route.query.department || '外科'
    this.department = department

    this.list = patentData.slice(0, 10)
    this.patent = this.list[0]



  }



}
</script>
 
<style lang="scss" scoped>
.inner-wrapper {
  width: 100%;
  height: 100%;
  background: #0f1c39;
  .title {
    margin-left: 40px;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 20px;
    color: white;
    width: 240px;
    height: 10%;
    display: flex;
    align-items: center;
  }
  .wrapper {
    display: flex;
    height: 90%;
    display: flex;

    .error-status {
      width: 50%;
      margin-left: 40px;
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;

      background: rgb(15, 28, 54);
      height: calc(100% - 20px);
      /*  height: 100%; */
      .content-wrapper {
        padding-top: 0px;
        padding-left: 0px;
        .selects {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .input-wrapper {
            display: flex;
          }
        }
        .list {
          background-color: #0f1c39;
          padding-left: 10px;
          box-sizing: border-box;
          height: 80%;
          color: gray;
          margin-top: 10px;
          .list-item {
            display: flex;
            border-bottom: 1px solid gray;
            height: 10%;
            box-sizing: border-box;
            padding: 16px 20px 16px 0;
            align-items: center;
            .txId,
            .user,
            .date,
            .status {
              color: white;
              //flex: 1;
              // height: 12.5%;

              text-align: center;
              font-size: 14px;
              width: 20%;
            }
            .txId {
              width: 20%;
            }
            .status {
              width: 20%;
            }
            .user {
              width: 40%;
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
          }
        }
      }
    }
    .paper-detail {
      width: 50%;

      margin-left: 1%;
      padding-left: 20px;
      margin-right: 20px;
      padding-right: 20px;
      box-sizing: border-box;

      background: #0f1c39;
      height: calc(100% - 20px);
      /* height: 100%; */
    }
  }

  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
<style lang="scss" scoped>
.el-date-editor {
  background-color: #3e495d;
}
::v-deep .el-range-input {
  background-color: #3e495d !important;
  border: none;
}

::v-deep .el-range-separator {
  color: #c0c4cc;
}
::v-deep .el-input__inner {
  background-color: #3e495d;
  color: white;
  border: none;
}
::v-deep .el-radio-button__inner {
  background-color: #3e495d;
  border: none;
  color: #c0c4cc;
}
::v-deep.el-radio-button__inner {
  border-left: none !important;
}
::v-deep.el-input__inner {
  color: white;
  /* width: 140px; */
}
::v-deep .el-dialog__body {
  height: 400px;
}
</style>