<template>
  <div class="template-error">
    <div slot="header" class="clearfix">
      <div class="title">
        <span class="key" v-if="index!==2">推荐模板{{index}}</span>
        <span class="key" v-if="index===2">原模版</span>
        <span class="key">预计金额:{{this.templateData.money}}</span>
        <span class="key">模板评分:{{this.templateData.score}}</span>
      </div>
      <div class="kongbai"></div>
      <div class="btn">
        <el-button type="primary" size="mini" @click="nextStep">下一个</el-button>
      </div>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange" v-if="index!==2">
      <el-collapse-item title="第一阶段" name="0">
        <div class="template">
          <div class="mainWork">
            <div class="title">主要诊疗工作</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in this.templateData.info[0].work1" :key="item">{{item}}</div>
          </div>
          <div class="mainWork">
            <div class="title">长期医嘱</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in this.templateData.info[0].work2" :key="item">{{item}}</div>
          </div>
          <div class="mainWork">
            <div class="title">短期医嘱</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in  this.templateData.info[0].work3" :key="item">{{item}}</div>
          </div>
          <div class="mainWork">
            <div class="title">主要护理工作</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in  this.templateData.info[0].work4" :key="item">{{item}}</div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="第二阶段" name="1">
        <div class="template">
          <div class="mainWork">
            <div class="title">主要诊疗工作</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in this.templateData.info[1].work1" :key="item">{{item}}</div>
          </div>
          <div class="mainWork">
            <div class="title">长期医嘱</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in this.templateData.info[1].work2" :key="item">{{item}}</div>
          </div>
          <div class="mainWork">
            <div class="title">短期医嘱</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in this.templateData.info[1].work3" :key="item">{{item}}</div>
          </div>
          <div class="mainWork">
            <div class="title">主要护理工作</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in this.templateData.info[1].work4" :key="item">{{item}}</div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="第三阶段" name="2">
        <div class="template">
          <div class="mainWork">
            <div class="title">主要诊疗工作</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in  this.templateData.info[2].work1" :key="item">{{item}}</div>
          </div>
          <div class="mainWork">
            <div class="title">长期医嘱</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in this.templateData.info[2].work2" :key="item">{{item}}</div>
          </div>
          <div class="mainWork">
            <div class="title">短期医嘱</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in this.templateData.info[2].work3" :key="item">{{item}}</div>
          </div>
          <div class="mainWork">
            <div class="title">主要护理工作</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in this.templateData.info[2].work4" :key="item">{{item}}</div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="第四阶段" name="3">
        <div class="template">
          <div class="mainWork">
            <div class="title">主要诊疗工作</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in this.templateData.info[3].work1" :key="item">{{item}}</div>
          </div>
          <div class="mainWork">
            <div class="title">长期医嘱</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in this.templateData.info[3].work2" :key="item">{{item}}</div>
          </div>
          <div class="mainWork">
            <div class="title">短期医嘱</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in this.templateData.info[3].work3" :key="item">{{item}}</div>
          </div>
          <div class="mainWork">
            <div class="title">主要护理工作</div>
          </div>
          <div class="items">
            <div class="item" v-for="item in this.templateData.info[3].work4" :key="item">{{item}}</div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div>在自身模板上修改,不采用其他模板</div>
  </div>
</template>
 
<script>
export default {
  props: {
    index: {
      default: 1,
      type: Number
    },
    templateData: Object
  },
  data () {
    return {
      activeNames: ['0', '1', '2', '3'],

    }

  },
  computed: {

  },
  methods: {
    handleChange () {

    },
    nextStep () {
      this.$emit('next')
    }
  },

}
</script>
 
<style lang="scss" scoped>
.template-error {
  padding: 0px 20px;
  box-sizing: border-box;
  .clearfix {
    align-items: center;
    .title {
      display: flex;
      .key {
        margin-right: 10px;
      }
      float: left;
    }

    .el-button {
      float: right;
      margin-top: 5px;
    }
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    .item {
      margin-right: 20px;
    }
  }
}
</style>
