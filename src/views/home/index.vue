<template>
  <div class="app-container">
    <el-button type="primary" @click="addpat">添加患者</el-button>
    <!--    <template>{{ fulltime }}</template>-->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部患者" name="unfiltered">
        <el-table
          v-loading="listLoading"
          :data="list.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())
      || data.id.toLowerCase().includes(search.toLowerCase())
      || data.date.toLowerCase().includes(search.toLowerCase())
      || data.bed.toLowerCase().includes(search.toLowerCase()))"
          element-loading-text="Loading"
          border
          fit
          highlight-current-row
          :default-sort="{prop: 'bed', order: 'ascending'}"
        >
          <el-table-column label="ID" width="200" align="center">
            <template slot-scope="scope">{{ scope.row.id }}</template>
          </el-table-column>
          <el-table-column label="患者" width="200" prop="patient" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="床位" width="200" sortable prop="bed" align="center">
            <template slot-scope="scope">{{ scope.row.bed }}</template>
          </el-table-column>
          <el-table-column
            class-name="status-col"
            label="状态"
            prop="status"
            width="300"
            align="center"
          >
            <template slot-scope="scope">
              <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
            </template>
          </el-table-column>
          <!--          <el-table-column label="入院时间" width="200" sortable prop="date" align="center">-->
          <!--            <template slot-scope="scope">-->
          <!--              {{ scope.row.date + "  " + scope.row.time }}-->
          <!--            </template>-->
          <!--          </el-table-column>-->
          <el-table-column align="center" fixed="right" label="操作" width="300">
            <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="mini" placeholder="搜索信息" />
            </template>
            <template slot-scope="scope">
              <el-button
                v-if=" scope.row.status !== '未加入' "
                type="success"
                size="small"
                @click="edit(scope.row)"
              >查看详情</el-button>
              <el-button
                v-if=" scope.row.status === '未加入' "
                type="warning"
                size="small"
                @click="diagn(scope.row)"
              >加入路径</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="路径患者" name="filtered">
        <el-table
          v-loading="listLoading"
          :data="list2.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())
      || data.id.toLowerCase().includes(search.toLowerCase())
      || data.date.toLowerCase().includes(search.toLowerCase())
      || data.bed.toLowerCase().includes(search.toLowerCase()))"
          element-loading-text="Loading"
          border
          fit
          highlight-current-row
          :default-sort="{prop: 'date', order: 'descending'}"
        >
          <el-table-column label="ID" width="200" align="center">
            <template slot-scope="scope">{{ scope.row.id }}</template>
          </el-table-column>
          <el-table-column label="患者" width="200" prop="patient" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="床位" width="200" sortable prop="bed" align="center">
            <template slot-scope="scope">{{ scope.row.bed }}</template>
          </el-table-column>
          <el-table-column
            class-name="status-col"
            label="状态"
            prop="status"
            width="300"
            align="center"
          >
            <template slot-scope="scope">
              <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="入院时间" width="200" sortable prop="date" align="center">
            <template slot-scope="scope">{{ scope.row.date + " " + scope.row.time }}</template>
          </el-table-column>
          <el-table-column align="center" fixed="right" label="操作" width="300">
            <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="mini" placeholder="搜索信息" />
            </template>
            <template slot-scope="scope">
              <el-button
                v-if=" scope.row.status === '变异' "
                type="warning"
                size="small"
                @click="dialog1 = true; ground2(scope.row)"
              >变异原因</el-button>
              <!--              <el-button v-if=" scope.row.status === '变异' " type="warning" size="small" @click="ground1(scope.row)" >变异原因</el-button>-->
              <!--              <el-button v-if=" scope.row.status === '执行中' " type="warning" size="small" @click="evaluate1(scope.row)" >评估</el-button>-->
              <el-button
                v-if=" scope.row.status === '执行中' "
                type="warning"
                size="small"
                @click="dialog2 = true; evaluate2(scope.row)"
              >评估</el-button>
              <el-button
                v-if=" scope.row.status !== '未加入' "
                type="success"
                size="small"
                @click="edit(scope.row)"
              >查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="变异原因" :visible.sync="dialog1">
      <el-form v-if="ground !== ''" label-width="90px">
        <el-form-item label="变异原因">
          <el-input type="textarea" autosize v-model="ground"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="评估" :visible.sync="dialog2" width="90%">
      <el-form label-width="90px">
        <el-form-item label="阶段">
          <el-tag type="success">{{ stage | statusFilter2}}</el-tag>
        </el-form-item>
        <el-form-item label="时间进度">
          <el-radio-group v-model="sub.proce">
            <el-radio :label="0">继续本阶段</el-radio>
            <el-radio v-if="stage !== 3" :label="1">进入下一阶段</el-radio>
            <el-radio :label="2">变异</el-radio>
            <el-radio :label="3">完成路径</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="sub.proce === 2" label="变异原因">
          <div class="btn-wrapper" :style="{display:'flex'}">
            <el-input type="textarea" autosize placeholder="请输入变异原因" v-model="sub.ground"></el-input>
            <el-button
              type="primary"
              size="mini"
              :style="{marginLeft:'10px'}"
              @click="showTemplate"
            >搜索</el-button>
          </div>
        </el-form-item>
        <el-form-item v-if="sub.proce === 2 && errorTemplateStatus" label="变异模板">
          <div class="wrapper" :style="{border:'1px solid black'}">
            <error-template :index="templateIndex" :templateData="templateData" @next="nextStep" />
          </div>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click.native.prevent="applyTemplate"
            v-if="sub.proce === 2"
          >应用该模板</el-button>
          <el-button type="primary" @click.native.prevent="submit2(); dialog2 = false" v-else>完成</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getList, getList2, getOut, getProcess } from '@/api/table'
import { addtoPath, eValuate } from '@/api/record'
import ErrorTemplate from './ErrorTemplate'
export default {
  components: { ErrorTemplate },
  filters: {
    statusFilter (status) {
      const statusMap = {
        '正常结束': 'success',
        '执行中': 'primary',
        '变异': 'danger',
        '未加入': 'warning'
      }
      return statusMap[status]
    },
    statusFilter2 (status) {
      const statusMap = {
        '0': '阶段1',
        '1': '阶段2',
        '2': '阶段3',
        '3': '阶段4'
      }
      return statusMap[status]
    }
  },
  data () {
    return {
      errorTemplateWorks: [],
      templateIndex: 0,
      errorTemplateStatus: false,
      list: null,
      list2: null,
      listLoading: true,
      templateStatus: false,
      search: '',
      activeName: 'filtered',
      atpitem: {
        id: null,
        date: null,
        time: null,
        checkedCities: {
          city0: [],
          city1: [],
          city2: [],
          city3: []
        },
        detailCities: {
          city0: {},
          city1: {
            input0: '',
            input1: ''
          },
          city2: {
            input0: [],
            input1: [],
            input2: [],
            input3: '',
            input4: []
          },
          city3: {}
        },
        cities: {
          city0: [
            '询问病史及体格检查',
            '完成病历书写',
            '开实验室检查单',
            '对症支持治疗',
            '病情告知，必要时向患者家属告病重或病危通知，并签署病重或病危通知书',
            '患者家属签署各种必要的知情同意书'
          ],
          city1: [
            '血液病护理常规',
            '二级护理',
            '饮食',
            '视病情通知病重或病危',
            '其他医嘱'
          ],
          city2: [
            '常规检查',
            '功能性检查',
            '乙肝二对半',
            '射线检查',
            '输血（有指征时）等支持对症治疗',
            '其他医嘱',
            '细化检查'
          ],
          city3: [
            '介绍病房环境、设施和设备',
            '入院护理评估',
            '宣教']
        }
      },
      date: null,
      time: null,
      fulltime: new Date(),
      dialog1: false,
      dialog2: false,
      ground: null,
      sub: {
        proce: null,
        ground: '',
        stage: '',
        date: null,
        time: null,
        id: null
      },
      stage: '',
      temid: null
    }
  },
  computed: {
    templateData () {
      return this.errorTemplateWorks[this.templateIndex]
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.fulltime = new Date()
      var d = new Date()
      var year = d.getFullYear()
      // var month = d.getMonth() + 1
      var month = ((d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1))
      var day = (d.getDate() < 10 ? '0' + (d.getDate()) : d.getDate())
      var hour = (d.getHours() < 10 ? '0' + (d.getHours()) : d.getHours())
      var minute = (d.getMinutes() < 10 ? '0' + (d.getMinutes()) : d.getMinutes())
      var second = (d.getSeconds() < 10 ? '0' + (d.getSeconds()) : d.getSeconds())
      this.date = year + '-' + month + '-' + day
      this.time = hour + ':' + minute + ':' + second
      this.sub.date = year + '-' + month + '-' + day
      this.sub.time = hour + ':' + minute + ':' + second
    }, 1000)
    this.errorTemplateWorks = [

      {
        money: "1462",
        score: "9.62",
        info: [
          {
            work1: [
              '询问病史及体格检查',
              '完成病历书写',
              '开实验室检查单',
              '对症支持治疗',
              '病情告知，必要时向患者家属告病重或病危通知，并签署病重或病危通知书',
              '患者家属签署各种必要的知情同意书'
            ],
            work2: [
              '血液病护理常规',
              '二级护理',
              '饮食',
              '视病情通知病重或病危',
              '其他医嘱'
            ],
            work3: [
              '常规检查',
              '功能性检查',
              '乙肝二对半',
              '射线检查',
              '输血（有指征时）等支持对症治疗',
              '其他医嘱',
              '细化检查'
            ],
            work4: [
              '介绍病房环境、设施和设备',
              '入院护理评估',
              '宣教']
          },

          {
            work1: [
              '上级医师查房',
              '完成入院检查',
              '继续对症支持治疗',
              '完成必要的相关科室会诊',
              '完成上级医师查房记录等病历书写',
              '向患者及家属交待病情及其注意事项'
            ],
            work2: [
              '患者既往基础用药',
              '其他医嘱'
            ],
            work3: [
              '骨髓穿刺和骨髓活检（必要时）',
              '骨髓形态学、病理、免疫组化（必要时）',
              '外周血免疫表型',
              '外周血细胞(CpG刺激)/分子遗传学',
              '分子生物学检测TP53基因突变及IGHV突变状态',
              '自身免疫系统疾病筛查',
              '输血（有指征时）',
              '其他医嘱'
            ],
            work4: [
              '观察患者病情变化']
          },
          {
            work1: [
              '上级医师查房',
              '根据体检、各项检查结果和既往资料，进行鉴别诊断和确定诊断',
              '根据其他检查结果判断是否合并其他疾病',
              '开始治疗，需要化疗者家属签署化疗知情同意书',
              '保护重要脏器功能',
              '注意观察化疗药物的副作用，复查血常规、血生化、电解质等，并对症处理',
              '完成病程记录'
            ],
            work2: [
              '苯丁酸氮芥10mg/(m^2*d)',
              '利妥昔单抗',
              '氟达拉滨',
              '环磷酰胺',
              '甲泼尼龙1g/(m^2*d)',
              '伊布替尼420mg/d',
              '重要脏器保护，碱化水化利尿等治疗',
              '必要时抗感染等支持治疗',
              '其他医嘱'
            ],
            work3: [
              '复查血常规',
              '复查血生化、电解质',
              '输血（有指征时）',
              '对症支持',
              '其他医嘱'
            ],
            work4: [
              '观察患者病情变化',
              '心理与生活护理',
              '化疗期间嘱患者多饮水'
            ]
          },
          {
            work1: [
              '上级医师查房，进行评估，确定有无并发症情况，明确是否出院',
              '完成出院记录、病案首页、出院证明书等',
              '向患者交代出院后的注意事项，如：返院复诊的时间、地点，发生紧急情况时的处理等'
            ],
            work2: [
              '出院带药',
              '定期门诊随访',
              '监测血常规'
            ],
            work3: [
              '其他医嘱'
            ],
            work4: [
              '指导患者办理出院手续'
            ]
          }
        ]
      }

      ,
      {
        money: "1876",
        score: "8.32",
        info: [ //第二个模板
          {
            work1: [
              '询问病史及体格检查222',
              '完成病历书写',
              '开实验室检查单',
              '对症支持治疗',
              '病情告知，必要时向患者家属告病重或病危通知，并签署病重或病危通知书',
              '患者家属签署各种必要的知情同意书'
            ],
            work2: [
              '血液病护理常规',
              '二级护理',
              '饮食',
              '视病情通知病重或病危',
              '其他医嘱'
            ],
            work3: [
              '常规检查',
              '功能性检查',
              '乙肝二对半',
              '射线检查',
              '输血（有指征时）等支持对症治疗',
              '其他医嘱',
              '细化检查'
            ],
            work4: [
              '介绍病房环境、设施和设备',
              '入院护理评估',
              '宣教']
          },

          {
            work1: [
              '上级医师查房',
              '完成入院检查',
              '继续对症支持治疗',
              '完成必要的相关科室会诊',
              '完成上级医师查房记录等病历书写',
              '向患者及家属交待病情及其注意事项'
            ],
            work2: [
              '患者既往基础用药',
              '其他医嘱'
            ],
            work3: [
              '骨髓穿刺和骨髓活检（必要时）',
              '骨髓形态学、病理、免疫组化（必要时）',
              '外周血免疫表型',
              '外周血细胞(CpG刺激)/分子遗传学',
              '分子生物学检测TP53基因突变及IGHV突变状态',
              '自身免疫系统疾病筛查',
              '输血（有指征时）',
              '其他医嘱'
            ],
            work4: [
              '观察患者病情变化']
          },
          {
            work1: [
              '上级医师查房',
              '根据体检、各项检查结果和既往资料，进行鉴别诊断和确定诊断',
              '根据其他检查结果判断是否合并其他疾病',
              '开始治疗，需要化疗者家属签署化疗知情同意书',
              '保护重要脏器功能',
              '注意观察化疗药物的副作用，复查血常规、血生化、电解质等，并对症处理',
              '完成病程记录'
            ],
            work2: [
              '苯丁酸氮芥10mg/(m^2*d)',
              '利妥昔单抗',
              '氟达拉滨',
              '环磷酰胺',
              '甲泼尼龙1g/(m^2*d)',
              '伊布替尼420mg/d',
              '重要脏器保护，碱化水化利尿等治疗',
              '必要时抗感染等支持治疗',
              '其他医嘱'
            ],
            work3: [
              '复查血常规',
              '复查血生化、电解质',
              '输血（有指征时）',
              '对症支持',
              '其他医嘱'
            ],
            work4: [
              '观察患者病情变化',
              '心理与生活护理',
              '化疗期间嘱患者多饮水'
            ]
          },
          {
            work1: [
              '上级医师查房，进行评估，确定有无并发症情况，明确是否出院',
              '完成出院记录、病案首页、出院证明书等',
              '向患者交代出院后的注意事项，如：返院复诊的时间、地点，发生紧急情况时的处理等'
            ],
            work2: [
              '出院带药',
              '定期门诊随访',
              '监测血常规'
            ],
            work3: [
              '其他医嘱'
            ],
            work4: [
              '指导患者办理出院手续'
            ]
          }
        ]
      },
      {
        money: "1242",
        score: "9.41",
        info: [
          {
            work1: [
              '询问病史及体格检查',
              '完成病历书写',
              '开实验室检查单',
              '对症支持治疗',
              '病情告知，必要时向患者家属告病重或病危通知，并签署病重或病危通知书',
              '患者家属签署各种必要的知情同意书'
            ],
            work2: [
              '血液病护理常规',
              '二级护理',
              '饮食',
              '视病情通知病重或病危',
              '其他医嘱'
            ],
            work3: [
              '常规检查',
              '功能性检查',
              '乙肝二对半',
              '射线检查',
              '输血（有指征时）等支持对症治疗',
              '其他医嘱',
              '细化检查'
            ],
            work4: [
              '介绍病房环境、设施和设备',
              '入院护理评估',
              '宣教']
          },

          {
            work1: [
              '上级医师查房',
              '完成入院检查',
              '继续对症支持治疗',
              '完成必要的相关科室会诊',
              '完成上级医师查房记录等病历书写',
              '向患者及家属交待病情及其注意事项'
            ],
            work2: [
              '患者既往基础用药',
              '其他医嘱'
            ],
            work3: [
              '骨髓穿刺和骨髓活检（必要时）',
              '骨髓形态学、病理、免疫组化（必要时）',
              '外周血免疫表型',
              '外周血细胞(CpG刺激)/分子遗传学',
              '分子生物学检测TP53基因突变及IGHV突变状态',
              '自身免疫系统疾病筛查',
              '输血（有指征时）',
              '其他医嘱'
            ],
            work4: [
              '观察患者病情变化']
          },
          {
            work1: [
              '上级医师查房',
              '根据体检、各项检查结果和既往资料，进行鉴别诊断和确定诊断',
              '根据其他检查结果判断是否合并其他疾病',
              '开始治疗，需要化疗者家属签署化疗知情同意书',
              '保护重要脏器功能',
              '注意观察化疗药物的副作用，复查血常规、血生化、电解质等，并对症处理',
              '完成病程记录'
            ],
            work2: [
              '苯丁酸氮芥10mg/(m^2*d)',
              '利妥昔单抗',
              '氟达拉滨',
              '环磷酰胺',
              '甲泼尼龙1g/(m^2*d)',
              '伊布替尼420mg/d',
              '重要脏器保护，碱化水化利尿等治疗',
              '必要时抗感染等支持治疗',
              '其他医嘱'
            ],
            work3: [
              '复查血常规',
              '复查血生化、电解质',
              '输血（有指征时）',
              '对症支持',
              '其他医嘱'
            ],
            work4: [
              '观察患者病情变化',
              '心理与生活护理',
              '化疗期间嘱患者多饮水'
            ]
          },
          {
            work1: [
              '上级医师查房，进行评估，确定有无并发症情况，明确是否出院',
              '完成出院记录、病案首页、出院证明书等',
              '向患者交代出院后的注意事项，如：返院复诊的时间、地点，发生紧急情况时的处理等'
            ],
            work2: [
              '出院带药',
              '定期门诊随访',
              '监测血常规'
            ],
            work3: [
              '其他医嘱'
            ],
            work4: [
              '指导患者办理出院手续'
            ]
          }
        ]
      }
    ]


  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  created () {
    this.fetchData()
    this.fetchData2()
  },
  methods: {
    applyTemplate () {
      this.$store.commit('template/changeTemplate', this.templateData)
      this.$store.commit('template/changeErrorStatus')
      this.dialog2 = false


    },
    nextStep () {
      this.templateIndex = (this.templateIndex + 1) % 3
    },
    showTemplate () {
      this.errorTemplateStatus = true
    },
    fetchData () {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
      if (this.$route.query.switch) {
        this.activeName = 'unfiltered'
      }
    },
    fetchData2 () {
      this.listLoading = true
      getList2().then(response => {
        this.list2 = response.data
        this.listLoading = false
      })
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    edit (row) {
      this.$router.push({
        path: '/Path/Overall',
        query: {
          id: row.id
        }
      })
    },
    evaluate1 (row) {
      this.$router.push({
        path: '/Evaluate/Index',
        query: {
          id: row.id
        }
      })
    },
    evaluate2 (row) {
      getProcess({ id: row.id }).then(response => {
        this.stage = response.data.process
        this.temid = row.id
      })
    },
    ground1 (row) {
      this.$router.push({
        path: '/Evaluate/Ground',
        query: {
          id: row.id
        }
      })
    },
    ground2 (row) {
      getOut({ id: row.id }).then(response => {
        this.ground = response.data.ground
      })
    },
    submit2 () {
      this.sub.stage = this.stage
      this.sub.id = this.temid
      eValuate(this.sub).then(() => {
        this.$alert('提交成功！', '消息', {
          confirmButtonText: '确认',
          callback: action => {
            window.location.reload()
          }
        })
      })
    },
    diagn (row) {
      this.atpitem.id = row.id
      this.atpitem.date = this.date
      this.atpitem.time = this.time
      addtoPath(this.atpitem).then(() => {
        this.$alert('添加到路径！', '消息', {
          confirmButtonText: '确认',
          callback: action => {
            window.location.reload()
          }
        })
      })
    },
    addpat () {
      this.$router.push({
        path: '/AddPatient'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-wrapper {
  width: 100%;
  display: flex;
}
</style>