<template>
  <div class="timeline" :style="styled">
    <el-collapse v-model="activeNames" @change="handleChange" :style="styled">
      <el-collapse-item title="阶段一" name="0" :style="styled">
        <template slot="title">
          <div class="wrapper">
            <i
              class="el-icon-circle-check"
              :style="{color:'#0bbd87',fontSize:'20px',marginRight:'8px'}"
            ></i>
            <span :style="{marginRight:'8px'}">阶段一</span>
            <span
              :style="{marginRight:'8px'}"
              v-if="this.nowStage>0"
            >2021-11-05 09:34:49 - 2021-11-05 09:35:56</span>
            <span :style="{marginRight:'8px'}" v-if="this.nowStage==0">2021-11-05 09:34:49 - 至今</span>
            <el-tag type="success" effect="dark" size="mini" v-if="this.nowStage>0">已完成</el-tag>
            <el-tag type="primary" effect="dark" size="mini" v-if="this.nowStage==0">正在进行</el-tag>
            <el-button
              type="primary"
              size="mini"
              :style="{float:'right'}"
              @click.prevent="edit(0)"
              v-if="this.nowStage>=0"
            >编辑</el-button>
          </div>
        </template>
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities[0]"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp"
          >
            <div :class="activity.class">{{activity.content}}</div>
          </el-timeline-item>
        </el-timeline>
      </el-collapse-item>
      <el-collapse-item name="1" :style="styled">
        <template slot="title">
          <div class="wrapper">
            <i
              class="el-icon-circle-check"
              :style="{color:'#0bbd87',fontSize:'20px',marginRight:'8px'}"
            ></i>
            <span :style="{marginRight:'8px'}">阶段二</span>
            <span
              :style="{marginRight:'8px'}"
              v-if="this.nowStage>1"
            >2021-11-05 09:35:56 - 2021-11-05 09:36:45</span>
            <span :style="{marginRight:'8px'}" v-if="this.nowStage==1">2021-11-05 09:35:56 - 至今</span>

            <el-tag type="success" effect="dark" size="mini" v-if="this.nowStage>1">已完成</el-tag>
            <el-tag type="primary" effect="dark" size="mini" v-if="this.nowStage==1">正在进行</el-tag>
            <el-tag type="info" effect="dark" size="mini" v-if="this.nowStage<1">未开始</el-tag>

            <el-button
              type="primary"
              size="mini"
              :style="{float:'right'}"
              @click.prevent="edit(1)"
              v-if="this.nowStage>=1"
            >编辑</el-button>
          </div>
        </template>
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities[1]"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp"
          >
            <div :class="activity.class">{{activity.content}}</div>
          </el-timeline-item>
        </el-timeline>
      </el-collapse-item>
      <el-collapse-item name="2" :style="styled">
        <template slot="title">
          <div class="wrapper">
            <i class="el-icon-more" :style="{color:'#2CC2F7',fontSize:'20px',marginRight:'8px'}"></i>
            <span :style="{marginRight:'8px'}">阶段三</span>
            <span :style="{marginRight:'8px'}" v-if="this.nowStage==2">2021-11-05 09:35:56 - 至今</span>
            <span
              :style="{marginRight:'8px'}"
              v-if="this.nowStage>2"
            >2021-11-05 09:35:56 - 2021-11-05 11:34:46</span>
            <el-tag type="success" effect="dark" size="mini" v-if="this.nowStage>2">已完成</el-tag>
            <el-tag type="primary" effect="dark" size="mini" v-if="this.nowStage==2">正在进行</el-tag>
            <el-tag type="info" effect="dark" size="mini" v-if="this.nowStage<2">未开始</el-tag>

            <el-button
              type="primary"
              size="mini"
              :style="{float:'right'}"
              @click.prevent="edit(2)"
              v-if="this.nowStage>=2"
            >编辑</el-button>
          </div>
        </template>
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities[2]"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp"
          >
            <div :class="activity.class">{{activity.content}}</div>
          </el-timeline-item>
        </el-timeline>
      </el-collapse-item>
      <el-collapse-item name="3" :style="styled">
        <template slot="title">
          <div class="wrapper">
            <i
              class="el-icon-edit-outline"
              :style="{color:'rgb(144,147,153)',fontSize:'20px',marginRight:'8px'}"
            ></i>
            <span :style="{marginRight:'8px'}">阶段四</span>
            <span :style="{marginRight:'8px'}" v-if="this.nowStage==3">2021-11-05 14:35:56 - 至今</span>
            <span
              :style="{marginRight:'8px'}"
              v-if="this.nowStage>3"
            >2021-11-05 14:35:56 - 2021-11-05 14:34:46</span>
            <el-tag type="success" effect="dark" size="mini" v-if="this.nowStage>3">已完成</el-tag>
            <el-tag type="primary" effect="dark" size="mini" v-if="this.nowStage==3">正在进行</el-tag>
            <el-tag type="info" effect="dark" size="mini" v-if="this.nowStage<3">未开始</el-tag>
            <el-button
              type="primary"
              size="mini"
              :style="{float:'right'}"
              @click.prevent="edit(3)"
              v-if="this.nowStage>=3"
            >编辑</el-button>
          </div>
        </template>
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities[3]"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp"
          >
            <div :class="activity.class">{{activity.content}}</div>
          </el-timeline-item>
        </el-timeline>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
 
<script>
import { getPath } from '@/api/table';
const moment = require('moment');

export default {
  props: {
    background: String
  },
  data () {
    return {
      activities: [[], [], [], []],
      nowStage: 0,
      // activities: [{
      //   content: '主要诊疗工作-完成病历书写   2021-11-12 20:46',
      //   timestamp: '',
      //   size: 'large',
      //   icon: "el-icon-star-on",
      //   type: 'primary'
      // }, {
      //   content: '长期医嘱   2021-11-13 20:46',
      //   timestamp: '',
      //   size: 'large',
      //   icon: "el-icon-collection",
      //   type: 'primary'

      // }, {
      //   content: '  二级护理   2021-11-14 20:46',
      //   timestamp: '',
      //   size: 'normal'
      // }, {
      //   content: '  饮食   2021-11-15 20:46',
      //   timestamp: '清淡饮食',
      //   size: 'normal'
      // }, {
      //   content: '临时医嘱   2021-11-16 20:46',
      //   timestamp: '',
      //   size: 'large',
      //   icon: "el-icon-reading",
      //   type: 'primary'

      // }, {
      //   content: '  乙肝二对半   2021-11-17 20:46',
      //   timestamp: '',
      //   size: 'normal'
      // }, {
      //   content: '  输血（有指征时）等支持对症治疗 2021-11-18 20:46',
      //   timestamp: '',
      //   size: 'normal'
      // }, {
      //   content: '主要护理工作   2021-11-20 20:46',
      //   timestamp: '',
      //   size: 'large',
      //   icon: "el-icon-female",
      //   type: 'primary'

      // }, {
      //   content: '介绍病房环境、设施和设备   2021-11-20 20:46',
      //   timestamp: '',
      //   size: 'normal'
      // }, {
      //   content: '  入院护理评估   2021-11-20 20:46',
      //   timestamp: '',
      //   size: 'normal'
      // }, {
      //   content: '  宣教   2021-11-21 20:46',
      //   timestamp: '',
      //   size: 'normal'
      // }],
      activeNames: [],
    }
  },
  computed: {
    styled () {
      if (!this.background) return ``
      else return { background: `${this.background}` }
    },

  },
  methods: {
    handleChange (e) {

    },
    randomDate () {

      const randomDate = (startDate, endDate) => {
        let date = new Date(+startDate + Math.random() * (endDate - startDate));
        let hour = 0 + Math.random() * (23 - 0) | 0;
        let minute = 0 + Math.random() * (59 - 0) | 0;
        let second = 0 + Math.random() * (59 - 0) | 0;
        date.setHours(hour);
        date.setMinutes(minute);
        date.setSeconds(second);
        return date;
      };

      // 生产当月的开始日期
      const startDate = moment()
        .startOf('month')
        .toDate();
      // 截止日期
      const endDate = new Date();

      const randomTime = moment(randomDate(startDate, endDate)).format('YYYY-MM-DD HH:mm:ss');
      return randomTime
    },
    edit (index) {
      this.$router.push({
        path: '/Path/scan',
        query: {
          id: this.$route.query.id,
          where: index,
          index: index
        }
      })
    },
    init () {
      const id = this.$route.query.id || 0
      getPath({ id: id }).then(res => {
        console.log('res', res.data);

        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].status === '正在进行') {
            this.nowStage = i
            this.activeNames = [`${this.nowStage}`]
            break
          }
        }

      })
      const storeageMessageArray = JSON.parse(localStorage.getItem('storeageMessageArray')) || []
      const template = this.$store.state.template.template.info

      template.forEach((info, index) => {
        let temp = null
        if (storeageMessageArray[index] == null) {
          temp = template[index]
        } else {
          temp = storeageMessageArray[index]
        }
        this.activities[index] = []
        this.activities[index].push({
          content: '主要诊疗工作 ',
          timestamp: '',
          size: 'large',
          icon: "el-icon-star-on",
          type: 'primary'
        })
        console.log('temp', temp);
        temp[`work1`].map(item => {
          const time = this.randomDate()
          this.activities[index].push({
            content: `${item.label} ${item.money ? '$' + item.money : ""} ${time}`,
            timestamp: '',
            size: 'normal',
            class: item.isNew ? "error" : ""
          })
        })
        this.activities[index].push({
          content: '长期医嘱',
          timestamp: '',
          size: 'large',
          icon: "el-icon-collection",
          type: 'primary'
        })
        temp[`work2`].map(item => {
          const time = this.randomDate()
          this.activities[index].push({
            content: `${item.label} ${item.money ? '$' + item.money : ""} ${time}`,
            timestamp: '',
            size: 'normal',
            class: item.isNew ? "error" : ""
          })
        })
        this.activities[index].push({
          content: '临时医嘱',
          timestamp: '',
          size: 'large',
          icon: "el-icon-reading",
          type: 'primary'
        })
        temp[`work3`].map(item => {
          const time = this.randomDate()
          this.activities[index].push({
            content: `${item.label} ${item.money ? '$' + item.money : ""} ${time}`,
            timestamp: '',
            size: 'normal',
            class: item.isNew ? "error" : ""
          })
        })
        this.activities[index].push({
          content: '主要诊疗工作',
          timestamp: '',
          size: 'large',
          icon: "el-icon-female",
          type: 'primary'
        })
        temp[`work4`].map(item => {
          const time = this.randomDate()
          this.activities[index].push({
            content: `${item.label} ${item.money ? '$' + item.money : ""} ${time}`,
            timestamp: '',
            size: 'normal',
            class: item.isNew ? "error" : ""
          })
        })
      });
      console.log('this.ac', this.activities);

    }
  },
  mounted () {
    this.init()
  }
}
</script>
 
<style lang="scss" scoped>
.timeline {
  padding: 20px;
  padding-bottom: 0px !important;
  box-sizing: border-box;
  height: 100%;
  .el-collapse {
    overflow: auto;
    height: 100%;
    /* &::-webkit-scrollbar {
      display: none;
    } */
    .wrapper {
      display: flex;
      align-items: center;
      width: 100%;
      position: relative;
      .el-button {
        position: absolute;
        right: 20px;
      }
    }
  }
}
::v-deep .error {
  background: yellow;
}
</style>