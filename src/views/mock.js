//!各个阶段模板详情
export let errorTemplateData = [

  {
    money: "1462",
    score: "9.62",
    info: [
      {
        work1: [
          { label: '询问病史及体格检查', money: 0 },
          { label: '完成病历书写', money: 0 },
          { label: '开实验室检查单', money: 0 },
          { label: '对症支持治疗', money: 142 },
          { label: '病情告知，必要时向患者家属告病重或病危通知，并签署病重或病危通知书', money: 0 },
          { label: '患者家属签署各种必要的知情同意书', money: 0 }
        ],
        work2: [
          { label: '血液病护理常规', money: 68 },
          { label: '二级护理', money: 20 },
          { label: '饮食', money: 0 },
          { label: '视病情通知病重或病危', money: 0 },
          { label: '其他医嘱', money: 0, write: true }
        ],
        work3: [
          { label: '常规检查', money: 120 },
          { label: '功能性检查', money: 100 },
          { label: '乙肝二对半', money: 80 },
          { label: '射线检查', money: 60 },
          { label: '输血（有指征时）等支持对症治疗', money: 160 },
          { label: '其他医嘱', write: true },
          { label: '细化检查', money: 40 }
        ],
        work4: [
          { label: '介绍病房环境、设施和设备', money: 0 },
          { label: '入院护理评估', money: 0 },
          { label: '宣教', money: 0 }]
      },

      {
        work1: [
          { label: '上级医师查房', money: 20 },
          { label: '完成入院检查', money: 60 },
          { label: '继续对症支持治疗', money: 240 },
          { label: '完成必要的相关科室会诊', money: 160 },
          { label: '完成上级医师查房记录等病历书写', money: 0 },
          { label: '向患者及家属交待病情及其注意事项', money: 0 }
        ],
        work2: [
          { label: '患者既往基础用药', money: 0 },
          { label: '其他医嘱', write: true }
        ],
        work3: [
          { label: '骨髓穿刺和骨髓活检（必要时）', money: 360 },
          { label: '骨髓形态学、病理、免疫组化（必要时）', money: 360 },
          { label: '外周血免疫表型', money: 280 },
          { label: '外周血细胞(CpG刺激)/分子遗传学', money: 280 },
          { label: '分子生物学检测TP53基因突变及IGHV突变状态', money: 360 },
          { label: '自身免疫系统疾病筛查', money: 160 },
          { label: '输血（有指征时）', money: 120 },
          { label: '其他医嘱', write: true },
        ],
        work4: [
          { label: '观察患者病情变化', money: 0 }]
      },
      {
        work1: [
          { label: '上级医师查房', money: 20 },
          { label: '根据体检、各项检查结果和既往资料，进行鉴别诊断和确定诊断', money: 0 },
          { label: '根据其他检查结果判断是否合并其他疾病', money: 0 },
          { label: '开始治疗，需要化疗者家属签署化疗知情同意书', money: 140 },
          { label: '保护重要脏器功能', money: 0 },
          { label: '注意观察化疗药物的副作用，复查血常规、血生化、电解质等，并对症处理', money: 0 },
          { label: '完成病程记录', money: 0 }
        ],
        work2: [
          { label: '苯丁酸氮芥10mg/(m^2*d)', money: 20, count: true },
          { label: '利妥昔单抗', money: 20, count: true },
          { label: '氟达拉滨', money: 20, count: true },
          { label: '环磷酰胺', money: 20, count: true },
          { label: '甲泼尼龙1g/(m^2*d)', money: 20, count: true },
          { label: '伊布替尼420mg/d', money: 20, count: true },
          { label: '重要脏器保护，碱化水化利尿等治疗', money: 140, count: true },
          { label: '必要时抗感染等支持治疗', money: 120, count: true },
          { label: '其他医嘱', write: true, money: 0 },

        ],
        work3: [
          { label: '复查血常规', money: 60 },
          { label: '复查血生化、电解质', money: 80 },
          { label: '输血（有指征时）', money: 120 },
          { label: '对症支持', money: 60 },
          { label: '其他医嘱', money: 0, write: true },
        ],
        work4: [
          { label: '观察患者病情变化', money: 0 },
          { label: '心理与生活护理', money: 20 },
          { label: '化疗期间嘱患者多饮水', money: 0 },
        ]
      },
      {
        work1: [
          { label: '上级医师查房，进行评估，确定有无并发症情况，明确是否出院', money: 20 },
          { label: '完成出院记录、病案首页、出院证明书等', money: 0 },
          { label: '向患者交代出院后的注意事项，如：返院复诊的时间、地点，发生紧急情况时的处理等', money: 0 },


        ],
        work2: [
          { label: '出院带药', money: 0 },

          { label: '定期门诊随访', money: 20 },

          { label: '监测血常规', money: 20 },


        ],
        work3: [
          { label: '其他医嘱', write: true, money: 0 }
        ],
        work4: [
          { label: '指导患者办理出院手续', money: 0 }
        ]
      }
    ]
  }

  ,
  {
    money: "1876",
    score: "8.32",
    info: [
      {
        work1: [
          { label: '询问病史及体格检查22', money: 0 },
          { label: '完成病历书写', money: 0 },
          { label: '开实验室检查单', money: 0 },
          { label: '对症支持治疗', money: 142 },
          { label: '病情告知，必要时向患者家属告病重或病危通知，并签署病重或病危通知书', money: 0 },
          { label: '患者家属签署各种必要的知情同意书', money: 0 }
        ],
        work2: [
          { label: '血液病护理常规', money: 68 },
          { label: '二级护理', money: 20 },
          { label: '饮食', money: 0 },
          { label: '视病情通知病重或病危', money: 0 },
          { label: '其他医嘱', money: 0, write: true }
        ],
        work3: [
          { label: '常规检查', money: 120 },
          { label: '功能性检查', money: 100 },
          { label: '乙肝二对半', money: 80 },
          { label: '射线检查', money: 60 },
          { label: '输血（有指征时）等支持对症治疗', money: 160 },
          { label: '其他医嘱', write: true },
          { label: '细化检查', money: 40 }
        ],
        work4: [
          { label: '介绍病房环境、设施和设备', money: 0 },
          { label: '入院护理评估', money: 0 },
          { label: '宣教', money: 0 }]
      },

      {
        work1: [
          { label: '上级医师查房', money: 20 },
          { label: '完成入院检查', money: 60 },
          { label: '继续对症支持治疗', money: 240 },
          { label: '完成必要的相关科室会诊', money: 160 },
          { label: '完成上级医师查房记录等病历书写', money: 0 },
          { label: '向患者及家属交待病情及其注意事项', money: 0 }
        ],
        work2: [
          { label: '患者既往基础用药', money: 0 },
          { label: '其他医嘱', write: true }
        ],
        work3: [
          { label: '骨髓穿刺和骨髓活检（必要时）', money: 360 },
          { label: '骨髓形态学、病理、免疫组化（必要时）', money: 360 },
          { label: '外周血免疫表型', money: 280 },
          { label: '外周血细胞(CpG刺激)/分子遗传学', money: 280 },
          { label: '分子生物学检测TP53基因突变及IGHV突变状态', money: 360 },
          { label: '自身免疫系统疾病筛查', money: 160 },
          { label: '输血（有指征时）', money: 120 },
          { label: '其他医嘱', write: true },
        ],
        work4: [
          { label: '观察患者病情变化', money: 0 }]
      },
      {
        work1: [
          { label: '上级医师查房', money: 20 },
          { label: '根据体检、各项检查结果和既往资料，进行鉴别诊断和确定诊断', money: 0 },
          { label: '根据其他检查结果判断是否合并其他疾病', money: 0 },
          { label: '开始治疗，需要化疗者家属签署化疗知情同意书', money: 140 },
          { label: '保护重要脏器功能', money: 0 },
          { label: '注意观察化疗药物的副作用，复查血常规、血生化、电解质等，并对症处理', money: 0 },
          { label: '完成病程记录', money: 0 }
        ],
        work2: [
          { label: '苯丁酸氮芥10mg/(m^2*d)', money: 20, count: true },
          { label: '利妥昔单抗', money: 20, count: true },
          { label: '氟达拉滨', money: 20, count: true },
          { label: '环磷酰胺', money: 20, count: true },
          { label: '甲泼尼龙1g/(m^2*d)', money: 20, count: true },
          { label: '伊布替尼420mg/d', money: 20, count: true },
          { label: '重要脏器保护，碱化水化利尿等治疗', money: 140, count: true },
          { label: '必要时抗感染等支持治疗', money: 120, count: true },
          { label: '其他医嘱', write: true, money: 0 },

        ],
        work3: [
          { label: '复查血常规', money: 60 },
          { label: '复查血生化、电解质', money: 80 },
          { label: '输血（有指征时）', money: 120 },
          { label: '对症支持', money: 60 },
          { label: '其他医嘱', money: 0, write: true },
        ],
        work4: [
          { label: '观察患者病情变化', money: 0 },
          { label: '心理与生活护理', money: 20 },
          { label: '化疗期间嘱患者多饮水', money: 0 },
        ]
      },
      {
        work1: [
          { label: '上级医师查房，进行评估，确定有无并发症情况，明确是否出院', money: 20 },
          { label: '完成出院记录、病案首页、出院证明书等', money: 0 },
          { label: '向患者交代出院后的注意事项，如：返院复诊的时间、地点，发生紧急情况时的处理等', money: 0 },


        ],
        work2: [
          { label: '出院带药', money: 0 },

          { label: '定期门诊随访', money: 20 },

          { label: '监测血常规', money: 20 },


        ],
        work3: [
          { label: '其他医嘱', write: true, money: 0 }
        ],
        work4: [
          { label: '指导患者办理出院手续', money: 0 }
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
          { label: '询问病史及体格检查33', money: 0 },
          { label: '完成病历书写', money: 0 },
          { label: '开实验室检查单', money: 0 },
          { label: '对症支持治疗', money: 142 },
          { label: '病情告知，必要时向患者家属告病重或病危通知，并签署病重或病危通知书', money: 0 },
          { label: '患者家属签署各种必要的知情同意书', money: 0 }
        ],
        work2: [
          { label: '血液病护理常规', money: 68 },
          { label: '二级护理', money: 20 },
          { label: '饮食', money: 0 },
          { label: '视病情通知病重或病危', money: 0 },
          { label: '其他医嘱', money: 0, write: true }
        ],
        work3: [
          { label: '常规检查', money: 120 },
          { label: '功能性检查', money: 100 },
          { label: '乙肝二对半', money: 80 },
          { label: '射线检查', money: 60 },
          { label: '输血（有指征时）等支持对症治疗', money: 160 },
          { label: '其他医嘱', write: true },
          { label: '细化检查', money: 40 }
        ],
        work4: [
          { label: '介绍病房环境、设施和设备', money: 0 },
          { label: '入院护理评估', money: 0 },
          { label: '宣教', money: 0 }]
      },

      {
        work1: [
          { label: '上级医师查房', money: 20 },
          { label: '完成入院检查', money: 60 },
          { label: '继续对症支持治疗', money: 240 },
          { label: '完成必要的相关科室会诊', money: 160 },
          { label: '完成上级医师查房记录等病历书写', money: 0 },
          { label: '向患者及家属交待病情及其注意事项', money: 0 }
        ],
        work2: [
          { label: '患者既往基础用药', money: 0 },
          { label: '其他医嘱', write: true }
        ],
        work3: [
          { label: '骨髓穿刺和骨髓活检（必要时）', money: 360 },
          { label: '骨髓形态学、病理、免疫组化（必要时）', money: 360 },
          { label: '外周血免疫表型', money: 280 },
          { label: '外周血细胞(CpG刺激)/分子遗传学', money: 280 },
          { label: '分子生物学检测TP53基因突变及IGHV突变状态', money: 360 },
          { label: '自身免疫系统疾病筛查', money: 160 },
          { label: '输血（有指征时）', money: 120 },
          { label: '其他医嘱', write: true },
        ],
        work4: [
          { label: '观察患者病情变化', money: 0 }]
      },
      {
        work1: [
          { label: '上级医师查房', money: 20 },
          { label: '根据体检、各项检查结果和既往资料，进行鉴别诊断和确定诊断', money: 0 },
          { label: '根据其他检查结果判断是否合并其他疾病', money: 0 },
          { label: '开始治疗，需要化疗者家属签署化疗知情同意书', money: 140 },
          { label: '保护重要脏器功能', money: 0 },
          { label: '注意观察化疗药物的副作用，复查血常规、血生化、电解质等，并对症处理', money: 0 },
          { label: '完成病程记录', money: 0 }
        ],
        work2: [
          { label: '苯丁酸氮芥10mg/(m^2*d)', money: 20, count: true },
          { label: '利妥昔单抗', money: 20, count: true },
          { label: '氟达拉滨', money: 20, count: true },
          { label: '环磷酰胺', money: 20, count: true },
          { label: '甲泼尼龙1g/(m^2*d)', money: 20, count: true },
          { label: '伊布替尼420mg/d', money: 20, count: true },
          { label: '重要脏器保护，碱化水化利尿等治疗', money: 140, count: true },
          { label: '必要时抗感染等支持治疗', money: 120, count: true },
          { label: '其他医嘱', write: true, money: 0 },

        ],
        work3: [
          { label: '复查血常规', money: 60 },
          { label: '复查血生化、电解质', money: 80 },
          { label: '输血（有指征时）', money: 120 },
          { label: '对症支持', money: 60 },
          { label: '其他医嘱', money: 0, write: true },
        ],
        work4: [
          { label: '观察患者病情变化', money: 0 },
          { label: '心理与生活护理', money: 20 },
          { label: '化疗期间嘱患者多饮水', money: 0 },
        ]
      },
      {
        work1: [
          { label: '上级医师查房，进行评估，确定有无并发症情况，明确是否出院', money: 20 },
          { label: '完成出院记录、病案首页、出院证明书等', money: 0 },
          { label: '向患者交代出院后的注意事项，如：返院复诊的时间、地点，发生紧急情况时的处理等', money: 0 },


        ],
        work2: [
          { label: '出院带药', money: 0 },

          { label: '定期门诊随访', money: 20 },

          { label: '监测血常规', money: 20 },


        ],
        work3: [
          { label: '其他医嘱', write: true, money: 0 }
        ],
        work4: [
          { label: '指导患者办理出院手续', money: 0 }
        ]
      }
    ]
  }
]