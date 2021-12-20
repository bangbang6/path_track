<template>
  <div class="checkItem">
    <span>{{item.label}}</span>
    <span v-if="item.money" class="money">${{item.money}}</span>
    <span v-if="item.count" class="count" @click="drawer2 = true">剂量</span>
    <span v-if="item.write" class="write" @click="drawer1 = true">填写</span>
    <el-drawer title="其他医嘱" :visible.sync="drawer1" direction="rtl" v-if="item.write">
      <el-form label-width="20px">
        <el-form-item>
          <el-input
            v-model="otherDetail"
            placeholder="请输入医嘱内容"
            type="textarea"
            autosize
            style="width: 96%;"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">确定</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <el-drawer :title="item.label" :visible.sync="drawer2" direction="rtl" v-if="item.count">
      <el-form label-width="20px">
        <el-form-item label>
          <el-row>
            <el-input-number v-model="count" :min="375" :max="500" placeholder="375" label="描述文字"></el-input-number>
            <span>mg/(m^2*d)</span>
          </el-row>
          <el-row>
            <div style="margin: 15px 0;"></div>
          </el-row>
          <el-row>
            <el-input-number v-model="days" :min="1" :max="5" placeholder="1" label="描述文字"></el-input-number>
            <span>天</span>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">确定</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>
 
<script>
export default {
  props: {
    item: Object
  },
  data () {
    return {
      otherDetail: "",
      drawer1: false,
      drawer2: false,
      count: 375,
      days: 1
    }
  }
}
</script>
 
<style lang="scss" scoped>
.checkItem {
  .money,
  .count,
  .write {
    margin-left: 10px;
    color: #66b1ff;
  }
}
</style>