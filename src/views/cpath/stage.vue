<template>
  <div class="app-container">
    <el-row>
      <div class="wrapper">
        <el-button type="primary" @click.native.prevent="submit">确认路径</el-button>
        <div>
          <span class="key">实际金额:{{this.factMoney}}</span>
          <span class="key">预计金额:{{this.yujiMoney}}</span>
          <span
            class="key"
            :style="{color:'red'}"
            v-if="(this.templateData.money - this.factMoney) / this.templateData.money <=0.2"
          >
            <i class="el-icon-warning"></i>
            离DRG分组设置的金额{{this.templateData.money}}只有20%差距
          </span>
        </div>
      </div>
    </el-row>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="主要诊疗工作" name="1">
        <template>
          <el-checkbox
            :indeterminate="isIndeterminate0"
            v-model="checkAll0"
            @change="handleCheckAllChange0"
          >全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities.work1" @change="handleCheckedworkChange0">
            <el-checkbox v-for="item in this.nowInfo.work1" :key="item.label" :label="item.label">
              <check-item :item="item"></check-item>
            </el-checkbox>
            <div class="icon-wrapper" @click="addItem(0)" v-if="isErrorStatus">
              <i class="el-icon-circle-plus-outline"></i>
              <span>新增</span>
            </div>
          </el-checkbox-group>
        </template>
      </el-collapse-item>
      <el-collapse-item title="长期医嘱" name="2">
        <template>
          <el-checkbox
            :indeterminate="isIndeterminate1"
            v-model="checkAll1"
            @change="handleCheckAllChange1"
          >全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities.work2" @change="handleCheckedworkChange1">
            <el-checkbox v-for="item in this.nowInfo.work2" :label="item.label" :key="item.label">
              <check-item :item="item"></check-item>
            </el-checkbox>
            <div class="icon-wrapper" v-if="isErrorStatus">
              <i class="el-icon-circle-plus-outline"></i>
              <span @click="addItem(1)">新增</span>
            </div>
          </el-checkbox-group>
        </template>
      </el-collapse-item>
      <el-collapse-item title="临时医嘱" name="3">
        <template>
          <el-checkbox
            :indeterminate="isIndeterminate2"
            v-model="checkAll2"
            @change="handleCheckAllChange2"
          >全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities.work3" @change="handleCheckedworkChange2">
            <el-checkbox v-for="item in this.nowInfo.work3" :label="item.label" :key="item.label">
              <check-item :item="item"></check-item>
            </el-checkbox>
            <div class="icon-wrapper" v-if="isErrorStatus">
              <i class="el-icon-circle-plus-outline"></i>
              <span @click="addItem(2)">新增</span>
            </div>
          </el-checkbox-group>
        </template>
      </el-collapse-item>
      <el-collapse-item title="主要护理工作" name="4">
        <template>
          <el-checkbox
            :indeterminate="isIndeterminate3"
            v-model="checkAll3"
            @change="handleCheckAllChange3"
          >全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities.work4" @change="handleCheckedworkChange3">
            <el-checkbox v-for="item in this.nowInfo.work4" :label="item.label" :key="item.label">
              <check-item :item="item"></check-item>
            </el-checkbox>
            <div class="icon-wrapper" v-if="isErrorStatus">
              <i class="el-icon-circle-plus-outline"></i>
              <span @click="addItem(3)">新增</span>
            </div>
          </el-checkbox-group>
        </template>
      </el-collapse-item>
    </el-collapse>

    <el-drawer title="新增选项" :visible.sync="dialogItem" direction="rtl">
      <el-form label-width="90px">
        <el-form-item label="内容">
          <el-input autosize v-model="itemMessage" placeholder="选项内容"></el-input>
        </el-form-item>
        <el-form-item label="金额">
          <el-input autosize v-model="itemMoney" placeholder="0"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="addItemMessage">确定</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>

import deepClone from 'deep-clone'
import checkItem from './checkItem'
export default {
  components: {
    checkItem
  },
  computed: {
    isErrorStatus () {
      return this.$store.state.template.errorStatus
    },
    templateData () {
      return deepClone(this.$store.state.template.template)
    },

    originMoney () {
      let money = 0
      const moneyArray = JSON.parse(localStorage.getItem('moneyArray')) || [0, 0, 0, 0]

      money = this.stateIndex - 1 >= 0 ? moneyArray[this.stateIndex - 1] : 0
      return money
    },


  },
  data () {
    return {
      stateIndex: 0,//第几阶段
      addIndex: 0,//哪个工作的checkbox发生啦新增
      dialogItem: false,//控制弹窗
      itemMessage: "",//新增的输入的内容
      itemMoney: 0,
      calcMoney: "2462",
      yujiMoney: 2462,
      factMoney: 0,
      checkAll0: false,
      checkAll1: false,
      checkAll2: false,
      checkAll3: false,
      nowInfo: { work1: [], work2: [], work3: [], work4: [] },
      checkedCities: { //所有选择的东西
        work1: [],
        work2: [],
        work3: [],
        work4: []
      },


      isIndeterminate0: true,
      isIndeterminate1: true,
      isIndeterminate2: true,
      isIndeterminate3: true,
      activeNames: ['1', '2', '3', '4'],


    }
  },
  created () {
    if (!this.$route.query.id && !this.$route.query.where) {
      this.$alert('请先在路径总览进行操作！', '提示', {
        confirmButtonText: '前往路径总览',
        callback: action => {
          this.$router.push({
            path: '/Path/Overall'
          })
        }
      })
    }
  },
  methods: {
    addItemMessage () {
      this.nowInfo[`work${this.addIndex + 1}`].push({ label: this.itemMessage, money: +this.itemMoney, isNew: true })
      //暂时解决Bug的一句话
      const tempInfo = deepClone(this.$store.state.template.template.info)
      tempInfo[this.stateIndex] = this.nowInfo
      let newDate = { ...this.$store.state.template.template, info: tempInfo }
      this.$store.commit('template/changeTemplate', newDate)
      this.calcMap()
      this.dialogItem = false
    },
    addItem (index) {
      this.dialogItem = true
      this.addIndex = index
    },
    handleCheckAllChange0 (val) {
      this.checkedCities.work1 = val ? this.nowInfo.work1.map(item => item.label) : []
      console.log('checkedCities', this.checkedCities);
      this.isIndeterminate0 = false
    },
    handleCheckAllChange1 (val) {
      this.checkedCities.work2 = val ? this.nowInfo.work2.map(item => item.label) : []
      this.isIndeterminate1 = false
    },
    handleCheckAllChange2 (val) {
      this.checkedCities.work3 = val ? this.nowInfo.work3.map(item => item.label) : []
      this.isIndeterminate2 = false
    },
    handleCheckAllChange3 (val) {
      this.checkedCities.work4 = val ? this.nowInfo.wrok4.map(item => item.label) : []
      this.isIndeterminate = false
    },
    calcMoneyAgain (value, workn) {
      let tempMoney = 0
      console.log('this.map1', this.map1);
      this.checkedCities.work1.forEach(item => {

        tempMoney += this.map1[item].money
      });
      this.checkedCities.work2.forEach(item => {
        tempMoney += this.map2[item].money

      });
      this.checkedCities.work3.forEach(item => {
        tempMoney += this.map3[item].money

      });
      this.checkedCities.work4.forEach(item => {
        tempMoney += this.map4[item].money

      });
      this.factMoney = this.originMoney + tempMoney
    },
    handleCheckedworkChange0 (value) {

      let checkedCount = value.length
      this.checkAll0 = checkedCount === this.nowInfo.work1.length
      this.isIndeterminate3 = checkedCount > 0 && checkedCount < this.nowInfo.work1.length
      console.log(' this.calcMoney', this.calcMoney);
      this.calcMoneyAgain(value, this.nowInfo.work1)


    },
    handleCheckedworkChange1 (value) {
      let checkedCount = value.length
      this.checkAll1 = checkedCount === this.nowInfo.work2.length
      this.isIndeterminate3 = checkedCount > 0 && checkedCount < this.nowInfo.work2.length
      this.calcMoneyAgain(value, this.nowInfo.work2)

    },
    handleCheckedworkChange2 (value) {
      let checkedCount = value.length
      this.checkAll2 = checkedCount === this.nowInfo.work3.length
      this.isIndeterminate3 = checkedCount > 0 && checkedCount < this.nowInfo.work3.length
      this.calcMoneyAgain(value, this.nowInfo.work3)

    },
    handleCheckedworkChange3 (value) {
      let checkedCount = value.length
      this.checkAll3 = checkedCount === this.nowInfo.work4.length
      this.isIndeterminate3 = checkedCount > 0 && checkedCount < this.nowInfo.work4.length
      this.calcMoneyAgain(value, this.nowInfo.work4)

    },
    submit () {
      this.$store.commit('template/changeMoney', this.factMoney)
      const moneyArray = JSON.parse(localStorage.getItem('moneyArray')) || [0, 0, 0, 0]
      moneyArray[this.stateIndex] = this.factMoney
      localStorage.setItem('moneyArray', JSON.stringify(moneyArray))

      const storeageMessageArray = JSON.parse(localStorage.getItem('stageMessageArray')) || []
      storeageMessageArray[this.stateIndex] = {
        work1: this.checkedCities.work1.map(item => this.map1[item]),
        work2: this.checkedCities.work2.map(item => this.map2[item]),
        work3: this.checkedCities.work3.map(item => this.map3[item]),
        work4: this.checkedCities.work4.map(item => this.map4[item])
      }
      localStorage.setItem('storeageMessageArray', JSON.stringify(storeageMessageArray))

      this.$router.back()
    },
    initData () {
      const storeageMessageArray = JSON.parse(localStorage.getItem('storeageMessageArray')) || []
      const initcheckedArray = storeageMessageArray[this.stateIndex] || { work1: [], work2: [], work3: [], work4: [] }
      this.checkedCities = {
        work1: initcheckedArray.work1.map(item => item.label),
        work2: initcheckedArray.work2.map(item => item.label),
        work3: initcheckedArray.work3.map(item => item.label),
        work4: initcheckedArray.work4.map(item => item.label),
      }
      console.log('this.checkedCities ', this.checkedCities);
      this.nowInfo = deepClone(this.$store.state.template.template.info[this.stateIndex])

    },
    calcMap () {
      this.map1 = {}
      this.nowInfo.work1.forEach(item => {
        this.map1[item.label] = item
      })
      this.map2 = {}
      this.nowInfo.work2.forEach(item => {
        this.map2[item.label] = item
      })
      this.map3 = {}
      this.nowInfo.work3.forEach(item => {
        this.map3[item.label] = item
      })
      this.map4 = {}
      this.nowInfo.work4.forEach(item => {
        this.map4[item.label] = item
      })
    }


  },
  mounted () {
    const { index, id, where } = this.$route.query
    console.log('index', index);
    this.stateIndex = +index
    document.title = `第${+index + 1}阶段`
    this.$route.meta.title = `第${+index + 1}阶段`

    this.factMoney = this.originMoney
    this.yujiMoney = this.factMoney + (6 - this.stateIndex) * 200 + Math.floor(Math.random() * 20)
    this.initData()
    this.calcMap()
    this.calcMoneyAgain() //计算初始的经前值

  },
  watch: {
    stateIndex (newVal, oldVal) {
      console.log('newVal', newVal);
      this.nowInfo = deepClone(this.$store.state.template.template.info[newVal])
    },
    factMoney (newVal, oldVal) {
      this.yujiMoney = newVal + (6 - this.stateIndex) * 200 + Math.floor(Math.random() * 20)
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  .key {
    margin-left: 20px;
  }
}
.icon-wrapper {
  color: #409eff;
  width: 80px;
  height: 20px;
  display: inline-block;
  padding-top: 4px;
  box-sizing: border-box;
  cursor: pointer;
  span {
    width: 30px;
    height: 40px;
    font-size: 14px;
    margin-left: 4px;
    float: right;
  }
}
.el-icon-circle-plus-outline {
  font-size: 24px;
  margin-left: 20px;
  margin-top: 0px;
  color: #409eff;
  float: left;
}
</style>