(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-120fb2d1"],{"0434":function(e,t,i){"use strict";i("dfa8")},ad8f:function(e,t,i){"use strict";i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return n})),i.d(t,"f",(function(){return c})),i.d(t,"h",(function(){return s})),i.d(t,"g",(function(){return r})),i.d(t,"e",(function(){return o})),i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return u}));var a=i("b775");function l(e){return Object(a["a"])({url:"/home/list",method:"get",params:e})}function n(e){return Object(a["a"])({url:"/home/listf",method:"get",params:e})}function c(e){return Object(a["a"])({url:"/path/overall",method:"get",params:e})}function s(e){return Object(a["a"])({url:"/path/scan",method:"get",params:e})}function r(e){return Object(a["a"])({url:"/evaluate/getprocess",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/out",method:"get",params:e})}function d(e){return Object(a["a"])({url:"/addpat",method:"get",params:e})}function u(e){return Object(a["a"])({url:"/addpat",method:"post",data:e})}},bb4c:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-row",[i("div",{staticClass:"wrapper"},[i("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("确认路径")]),i("div",[i("span",{staticClass:"key"},[e._v("实际金额:"+e._s(this.factMoney))]),i("span",{staticClass:"key"},[e._v("预计金额:"+e._s(this.calcMoney))])])],1)]),i("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[i("el-collapse-item",{attrs:{title:"主要诊疗工作",name:"1"}},[[i("el-checkbox",{attrs:{indeterminate:e.isIndeterminate0},on:{change:e.handleCheckAllChange0},model:{value:e.checkAll0,callback:function(t){e.checkAll0=t},expression:"checkAll0"}},[e._v("全选")]),i("div",{staticStyle:{margin:"15px 0"}}),i("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange0},model:{value:e.checkedCities.city0,callback:function(t){e.$set(e.checkedCities,"city0",t)},expression:"checkedCities.city0"}},[e._l(e.cities.city0,(function(t){return i("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),e.isErrorStatus?i("div",{staticClass:"icon-wrapper",on:{click:function(t){return e.addItem(0)}}},[i("i",{staticClass:"el-icon-circle-plus-outline"}),i("span",[e._v("新增")])]):e._e()],2)]],2),i("el-collapse-item",{attrs:{title:"长期医嘱",name:"2"}},[[i("el-checkbox",{attrs:{indeterminate:e.isIndeterminate1},on:{change:e.handleCheckAllChange1},model:{value:e.checkAll1,callback:function(t){e.checkAll1=t},expression:"checkAll1"}},[e._v("全选")]),i("div",{staticStyle:{margin:"15px 0"}}),i("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange1},model:{value:e.checkedCities.city1,callback:function(t){e.$set(e.checkedCities,"city1",t)},expression:"checkedCities.city1"}},[e._l(e.cities.city1,(function(t){return i("el-checkbox",{key:t,attrs:{label:t}},[e._v(" "+e._s(t)+" "),"其他医嘱"===t?i("el-button",{staticStyle:{"margin-left":"16px"},attrs:{type:"text"},on:{click:function(t){e.drawer1=!0}}},[e._v("填写")]):e._e(),-1!==t.indexOf("苯丁酸氮芥")?i("el-button",{staticStyle:{"margin-left":"16px"},attrs:{type:"text"},on:{click:function(t){e.drawer2=!0}}},[e._v("剂量")]):e._e(),-1!==t.indexOf("利妥昔单抗")?i("el-button",{staticStyle:{"margin-left":"16px"},attrs:{type:"text"},on:{click:function(t){e.drawer3=!0}}},[e._v("剂量")]):e._e(),-1!==t.indexOf("氟达拉滨")?i("el-button",{staticStyle:{"margin-left":"16px"},attrs:{type:"text"},on:{click:function(t){e.drawer4=!0}}},[e._v("剂量")]):e._e(),-1!==t.indexOf("环磷酰胺")?i("el-button",{staticStyle:{"margin-left":"16px"},attrs:{type:"text"},on:{click:function(t){e.drawer5=!0}}},[e._v("剂量")]):e._e(),-1!==t.indexOf("甲泼尼龙")?i("el-button",{staticStyle:{"margin-left":"16px"},attrs:{type:"text"},on:{click:function(t){e.drawer6=!0}}},[e._v("剂量")]):e._e()],1)})),e.isErrorStatus?i("div",{staticClass:"icon-wrapper"},[i("i",{staticClass:"el-icon-circle-plus-outline"}),i("span",{on:{click:function(t){return e.addItem(1)}}},[e._v("新增")])]):e._e()],2)]],2),i("el-collapse-item",{attrs:{title:"临时医嘱",name:"3"}},[[i("el-checkbox",{attrs:{indeterminate:e.isIndeterminate2},on:{change:e.handleCheckAllChange2},model:{value:e.checkAll2,callback:function(t){e.checkAll2=t},expression:"checkAll2"}},[e._v("全选")]),i("div",{staticStyle:{margin:"15px 0"}}),i("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange2},model:{value:e.checkedCities.city2,callback:function(t){e.$set(e.checkedCities,"city2",t)},expression:"checkedCities.city2"}},[e._l(e.cities.city2,(function(t){return i("el-checkbox",{key:t,attrs:{label:t}},[e._v(" "+e._s(t)+" "),-1!==t.indexOf("其他医嘱")?i("el-button",{staticStyle:{"margin-left":"16px"},attrs:{type:"text"},on:{click:function(t){e.drawer0=!0}}},[e._v("填写")]):e._e()],1)})),e.isErrorStatus?i("div",{staticClass:"icon-wrapper"},[i("i",{staticClass:"el-icon-circle-plus-outline"}),i("span",{on:{click:function(t){return e.addItem(2)}}},[e._v("新增")])]):e._e()],2)]],2),i("el-collapse-item",{attrs:{title:"主要护理工作",name:"4"}},[[i("el-checkbox",{attrs:{indeterminate:e.isIndeterminate3},on:{change:e.handleCheckAllChange3},model:{value:e.checkAll3,callback:function(t){e.checkAll3=t},expression:"checkAll3"}},[e._v("全选")]),i("div",{staticStyle:{margin:"15px 0"}}),i("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange3},model:{value:e.checkedCities.city3,callback:function(t){e.$set(e.checkedCities,"city3",t)},expression:"checkedCities.city3"}},[e._l(e.cities.city3,(function(t){return i("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),e.isErrorStatus?i("div",{staticClass:"icon-wrapper"},[i("i",{staticClass:"el-icon-circle-plus-outline"}),i("span",{on:{click:function(t){return e.addItem(3)}}},[e._v("新增")])]):e._e()],2)]],2)],1),i("el-drawer",{attrs:{title:"其他医嘱",visible:e.drawer0,direction:e.rtl,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer0=t}}},[i("el-form",{attrs:{"label-width":"20px"}},[i("el-form-item",{attrs:{label:""}},[i("el-input",{staticStyle:{width:"96%"},attrs:{placeholder:"请输入医嘱内容",type:"textarea",autosize:""},model:{value:e.detailCities.city2.input0,callback:function(t){e.$set(e.detailCities.city2,"input0",t)},expression:"detailCities.city2.input0"}})],1)],1)],1),i("el-drawer",{attrs:{title:"其他医嘱",visible:e.drawer1,direction:e.rtl,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer1=t}}},[i("el-form",{attrs:{"label-width":"20px"}},[i("el-form-item",{attrs:{label:""}},[i("el-input",{staticStyle:{width:"96%"},attrs:{placeholder:"请输入医嘱内容",type:"textarea",autosize:""},model:{value:e.detailCities.city1.input0,callback:function(t){e.$set(e.detailCities.city1,"input0",t)},expression:"detailCities.city1.input0"}})],1)],1)],1),i("el-drawer",{attrs:{title:"苯丁酸氮芥10mg/(m^2*d)",visible:e.drawer2,direction:e.rtl,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer2=t}}},[i("el-form",{attrs:{"label-width":"20px"}},[i("el-form-item",{attrs:{label:""}},[[i("el-input-number",{attrs:{min:1,max:7,placeholder:"1",label:"描述文字"},model:{value:e.detailCities.city1.input1,callback:function(t){e.$set(e.detailCities.city1,"input1",t)},expression:"detailCities.city1.input1"}}),i("span",[e._v("天数")])]],2)],1)],1),i("el-drawer",{attrs:{title:"利妥昔单抗",visible:e.drawer3,direction:e.rtl,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer3=t}}},[i("el-form",{attrs:{"label-width":"20px"}},[i("el-form-item",{attrs:{label:""}},[[i("el-input-number",{attrs:{min:375,max:500,placeholder:"375",label:"描述文字"},model:{value:e.detailCities.city1.input2,callback:function(t){e.$set(e.detailCities.city1,"input2",t)},expression:"detailCities.city1.input2"}}),i("span",[e._v("mg/m2， 1天")])]],2)],1)],1),i("el-drawer",{attrs:{title:"氟达拉滨",visible:e.drawer4,direction:e.rtl,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer4=t}}},[i("el-form",{attrs:{"label-width":"20px"}},[i("el-form-item",{attrs:{label:""}},[i("el-row",[i("el-input-number",{attrs:{min:375,max:500,placeholder:"375",label:"描述文字"},model:{value:e.detailCities.city1.input3,callback:function(t){e.$set(e.detailCities.city1,"input3",t)},expression:"detailCities.city1.input3"}}),i("span",[e._v("mg/(m^2*d)")])],1),i("el-row",[i("div",{staticStyle:{margin:"15px 0"}})]),i("el-row",[i("el-input-number",{attrs:{min:1,max:5,placeholder:"1",label:"描述文字"},model:{value:e.detailCities.city1.input4,callback:function(t){e.$set(e.detailCities.city1,"input4",t)},expression:"detailCities.city1.input4"}}),i("span",[e._v("天")])],1)],1)],1)],1),i("el-drawer",{attrs:{title:"环磷酰胺",visible:e.drawer5,direction:e.rtl,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer5=t}}},[i("el-form",{attrs:{"label-width":"20px"}},[i("el-form-item",{attrs:{label:""}},[i("el-row",[i("el-input-number",{attrs:{min:20,max:25,placeholder:"20",label:"描述文字"},model:{value:e.detailCities.city1.input5,callback:function(t){e.$set(e.detailCities.city1,"input5",t)},expression:"detailCities.city1.input5"}}),i("span",[e._v("mg/(m^2*d)")])],1),i("el-row",[i("div",{staticStyle:{margin:"15px 0"}})]),i("el-row",[i("el-input-number",{attrs:{min:1,max:3,placeholder:"1",label:"描述文字"},model:{value:e.detailCities.city1.input6,callback:function(t){e.$set(e.detailCities.city1,"input6",t)},expression:"detailCities.city1.input6"}}),i("span",[e._v("天数")])],1)],1)],1)],1),i("el-drawer",{attrs:{title:"甲泼尼龙1g/(m^2*d)",visible:e.drawer6,direction:e.rtl,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer6=t}}},[i("el-form",{attrs:{"label-width":"20px"}},[i("el-form-item",{attrs:{label:""}},[[i("el-input-number",{attrs:{min:1,max:5,placeholder:"1",label:"描述文字"},model:{value:e.detailCities.city1.input7,callback:function(t){e.$set(e.detailCities.city1,"input7",t)},expression:"detailCities.city1.input7"}}),i("span",[e._v("天数")])]],2)],1)],1),i("el-drawer",{attrs:{title:"新增选项",visible:e.dialogItem,direction:e.rtl},on:{"update:visible":function(t){e.dialogItem=t}}},[i("el-form",{attrs:{"label-width":"90px"}},[i("el-form-item",{attrs:{label:"内容"}},[i("el-input",{attrs:{autosize:"",placeholder:"选项内容"},model:{value:e.itemMessage,callback:function(t){e.itemMessage=t},expression:"itemMessage"}})],1),i("el-form-item",{attrs:{label:"金额"}},[i("el-input",{attrs:{autosize:"",placeholder:"0"},model:{value:e.itemMoney,callback:function(t){e.itemMoney=t},expression:"itemMoney"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.addItemMessage}},[e._v("确定")])],1)],1)],1)],1)},l=[],n=i("ad8f"),c=i("e5bf"),s={computed:{isErrorStatus:function(){return this.$store.state.template.errorStatus}},data:function(){return{addIndex:0,dialogItem:!1,itemMessage:"",itemMoney:0,calcMoney:"2462",factMoney:1428,checkAll0:!1,checkAll1:!1,checkAll2:!1,checkAll3:!1,checkedCities:{city0:[],city1:[],city2:[],city3:[]},detailCities:{city0:{},city1:{input0:"",input1:null,input2:null,input3:null,input4:null,input5:null,input6:null,input7:null},city2:{input0:""},city3:{}},cities:{city0:["上级医师查房","根据体检、各项检查结果和既往资料，进行鉴别诊断和确定诊断","根据其他检查结果判断是否合并其他疾病","开始治疗，需要化疗者家属签署化疗知情同意书","保护重要脏器功能","注意观察化疗药物的副作用，复查血常规、血生化、电解质等，并对症处理","完成病程记录"],city1:["苯丁酸氮芥10mg/(m^2*d)","利妥昔单抗","氟达拉滨","环磷酰胺","甲泼尼龙1g/(m^2*d)","伊布替尼420mg/d","重要脏器保护，碱化水化利尿等治疗","必要时抗感染等支持治疗","其他医嘱"],city2:["复查血常规","复查血生化、电解质","输血（有指征时）","对症支持","其他医嘱"],city3:["观察患者病情变化","心理与生活护理","化疗期间嘱患者多饮水"]},isIndeterminate0:!0,isIndeterminate1:!0,isIndeterminate2:!0,isIndeterminate3:!0,activeNames:["1","2","3","4"],drawer0:!1,drawer1:!1,drawer2:!1,drawer3:!1,drawer4:!1,drawer5:!1,drawer6:!1,drawer7:!1,permdata:{detailCities:null,checkedCities:null,where:2,id:null,cities:null}}},created:function(){var e=this;this.$route.query.id||this.$route.query.where?this.fetchData():this.$alert("请先在路径总览进行操作！","提示",{confirmButtonText:"前往路径总览",callback:function(t){e.$router.push({path:"/Path/Overall"})}})},methods:{addItemMessage:function(){this.cities["city".concat(this.addIndex)].push(this.itemMessage),this.dialogItem=!1},addItem:function(e){this.dialogItem=!0,this.addIndex=e},handleCheckAllChange0:function(e){this.checkedCities.chkcts0=e?this.cities.city0:[],this.isIndeterminate0=!1},handleCheckAllChange1:function(e){this.checkedCities.chkcts1=e?this.cities.city1:[],this.isIndeterminate1=!1},handleCheckAllChange2:function(e){this.checkedCities.chkcts2=e?this.cities.city2:[],this.isIndeterminate2=!1},handleCheckAllChange3:function(e){this.checkedCities.chkcts3=e?this.cities.city3:[],this.isIndeterminate=!1},handleCheckedCitiesChange0:function(e){var t=e.length;this.checkAll0=t===this.cities.city0.length,this.isIndeterminate3=t>0&&t<this.cities.city0.length},handleCheckedCitiesChange1:function(e){var t=e.length;this.checkAll1=t===this.cities.city1.length,this.isIndeterminate3=t>0&&t<this.cities.city1.length},handleCheckedCitiesChange2:function(e){var t=e.length;this.checkAll2=t===this.cities.city2.length,this.isIndeterminate3=t>0&&t<this.cities.city2.length},handleCheckedCitiesChange3:function(e){var t=e.length;this.checkAll3=t===this.cities.city3.length,this.isIndeterminate3=t>0&&t<this.cities.city3.length},fetchData:function(){var e=this;Object(n["h"])({id:this.$route.query.id,where:this.$route.query.where}).then((function(t){e.checkedCities.city0=t.data.checkedCities.city0,e.checkedCities.city1=t.data.checkedCities.city1,e.checkedCities.city2=t.data.checkedCities.city2,e.checkedCities.city3=t.data.checkedCities.city3,e.detailCities.city0=t.data.detailCities.city0,e.detailCities.city1=t.data.detailCities.city1,e.detailCities.city2=t.data.detailCities.city2,e.detailCities.city3=t.data.detailCities.city3}))},submit:function(){var e=this;this.permdata.detailCities=this.detailCities,this.permdata.checkedCities=this.checkedCities,this.permdata.id=this.$route.query.id,this.permdata.cities=this.cities,Object(c["c"])(this.permdata).then((function(t){console.log(t),2e4===t.code?e.$alert("路径提交成功！","消息",{confirmButtonText:"确认",callback:function(t){e.$router.push({path:"/Path/Overall",query:{id:e.$route.query.id}})}}):e.$alert(t.data.message,"消息",{confirmButtonText:"前往确认"})}))},handleChange:function(e){console.log(e)},handleClose:function(e){this.$confirm("确认？").then((function(t){e()})).catch((function(e){}))}}},r=s,o=(i("0434"),i("2877")),d=Object(o["a"])(r,a,l,!1,null,"b541cfa2",null);t["default"]=d.exports},dfa8:function(e,t,i){},e5bf:function(e,t,i){"use strict";i.d(t,"c",(function(){return l})),i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return c}));var a=i("b775");function l(e){return Object(a["a"])({url:"/path/submit",method:"post",data:e})}function n(e){return Object(a["a"])({url:"/home/addtopath",method:"post",data:e})}function c(e){return Object(a["a"])({url:"/evaluate",method:"post",data:e})}}}]);