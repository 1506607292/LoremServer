(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3,6],{3900:function(t,e,s){},"4ec3":function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"j",(function(){return n})),s.d(e,"f",(function(){return o})),s.d(e,"h",(function(){return r})),s.d(e,"g",(function(){return l})),s.d(e,"c",(function(){return u})),s.d(e,"e",(function(){return c})),s.d(e,"b",(function(){return d})),s.d(e,"i",(function(){return p})),s.d(e,"a",(function(){return v}));var a=s("b775");const i=t=>Object(a["a"])({url:"/api/question/answer",method:"get",params:t}),n=(t,e)=>Object(a["a"])({url:"/api/question/answer",method:"post",params:t,data:e}),o=t=>Object(a["a"])({url:"/api/user/login",method:"post",data:t}),r=t=>Object(a["a"])({url:"/api/user/register",method:"post",data:t}),l=t=>Object(a["a"])({url:"/api/user/logout",method:"post",data:t}),u=t=>Object(a["a"])({url:"/api/user/getcaptcha",method:"get",data:t}),c=t=>Object(a["a"])({url:"/api/user/userinfo",method:"get",data:t}),d=t=>Object(a["a"])({url:"/api/user/userinfo",method:"put",data:t}),p=t=>Object(a["a"])({url:"/api/user/changepw",method:"post",data:t}),v=t=>Object(a["a"])({url:"/api/user/changepw",method:"put",data:t})},"70e2":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("q-footer",{directives:[{name:"show",rawName:"v-show",value:!t.paperSimulate,expression:"!paperSimulate"}],attrs:{elevated:""}},[s("q-tabs",{staticClass:"shadow-2 bg-primary",attrs:{shrink:"",stretch:"","inline-label":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("q-route-tab",{attrs:{to:{},name:"edit",icon:"edit",label:"编辑",replace:""}}),s("q-route-tab",{attrs:{to:{query:{tab:"2"}},name:"send",icon:"share",label:"发布",replace:""}}),s("q-route-tab",{attrs:{to:{query:{tab:"3"}},name:"response",icon:"equalizer",label:"结果",replace:""}}),s("q-route-tab",{attrs:{to:{query:{tab:"4"}},name:"setting",icon:"settings",label:"设置",replace:""}})],1)],1),s("q-tab-panels",{attrs:{animated:""},on:{transition:t.prepareData},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("q-tab-panel",{staticClass:"column",attrs:{name:"edit"}},[s("div",{staticClass:"column flex-center"},[s("div",{staticClass:"san-grail"},[s("div",{staticClass:"q-ma-lg"},[t.voidSurvey?s("q-banner",{staticClass:"text-white bg-red q-mb-md",attrs:{dense:"","inline-actions":""},scopedSlots:t._u([{key:"avatar",fn:function(){return[s("q-icon",{attrs:{name:"warning",color:"white"}})]},proxy:!0}],null,!1,894313219)},[t._v("\n              此问卷不包含题目！\n              ")]):t._e(),s("div",{staticClass:"paper-header"},[s("div",{staticClass:"text-h4 editable text-center paper-title"},[""!==t.surveyData.title?s("span",[t._v(t._s(t.surveyData.title))]):s("span",{staticClass:"text-green-5"},[s("i",[t._v("点击设置标题")])]),s("q-popup-edit",{attrs:{title:"编辑标题",buttons:""},on:{input:t.changeData,save:t.changeData},model:{value:t.surveyData.title,callback:function(e){t.$set(t.surveyData,"title",e)},expression:"surveyData.title"}},[s("q-input",{attrs:{placeholder:"请输入问卷标题",rules:[function(t){return t&&""!==t||"请输入标题"}],maxlength:"50",dense:"",autofocus:"",counter:""},model:{value:t.surveyData.title,callback:function(e){t.$set(t.surveyData,"title",e)},expression:"surveyData.title"}})],1)],1),s("br"),s("div",{staticClass:"text-center editable"},[""!==t.surveyData.desc?s("span",{domProps:{innerHTML:t._s(t.surveyData.desc)}}):s("span",{staticClass:"text-green-5"},[s("i",[t._v("点击添加问卷说明")])]),s("q-popup-edit",{attrs:{title:"编辑描述",buttons:"",persistent:""},on:{save:t.changeData},model:{value:t.surveyData.desc,callback:function(e){t.$set(t.surveyData,"desc",e)},expression:"surveyData.desc"}},[s("q-editor",{attrs:{dense:"",autofocus:"",counter:""},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.stopPropagation()}},model:{value:t.surveyData.desc,callback:function(e){t.$set(t.surveyData,"desc",e)},expression:"surveyData.desc"}})],1)],1)]),s("div",{staticClass:"column"},[s("transition-group",{attrs:{name:"fade"}},t._l(t.surveyData.questionSet,(function(e,a){return s("div",{key:a+1,staticClass:"ques-section"},[0===e.type?s("div",[t.editing!==a?s("div",{staticClass:"editable",on:{click:function(e){t.editing=a,t.isEditing=!0}}},[t.validQuestion(a)?t._e():s("div",{staticClass:"float-right",staticStyle:{padding:"1px"}},[s("q-icon",{attrs:{name:"error",color:"red",size:"25px"}})],1),s("div",{staticClass:"text-h6 ques-title-large"},[s("b",[t._v(t._s(t._f("formatIndex")(a+1))+" / ")]),""!==e.title?s("span",[t._v(t._s(e.title))]):s("span",{staticClass:"text-green-5"},[s("i",[t._v("点击编辑问题")])]),e.need?s("span",{staticClass:"text-red"},[t._v(" *")]):t._e()]),s("q-input",{attrs:{placeholder:"请输入",dense:!0,filled:""},model:{value:t.answer[a],callback:function(e){t.$set(t.answer,a,e)},expression:"answer[pid]"}})],1):s("div",{staticClass:"edit-area shadow-3"},[s("div",{staticClass:"text-grey-8 q-pb-md  flex justify-center text-center text-body1"},[s("q-btn",{staticClass:"q-ma-sm text-primary",attrs:{round:"",dense:"",icon:"arrow_upward"},on:{click:function(e){return t.upQuestion(a)}}},[s("q-tooltip",[t._v("上移")])],1),s("q-btn",{staticClass:"q-ma-sm text-primary",attrs:{round:"",dense:"",icon:"arrow_downward"},on:{click:function(e){return t.downQuestion(a)}}},[s("q-tooltip",[t._v("下移")])],1),s("q-btn",{staticClass:"q-ma-sm text-orange",attrs:{round:"",dense:"",icon:"close"},on:{click:function(e){return t.delQuestion(a)}}},[s("q-tooltip",[t._v("删除")])],1),s("q-btn",{staticClass:"q-ma-sm text-secondary",attrs:{round:"",dense:"",icon:"check"},on:{click:function(e){t.editing=-1}}},[s("q-tooltip",[t._v("完成")])],1)],1),s("div",{staticClass:"text-h6 ques-title-large"},[s("b",[t._v(t._s(t._f("formatIndex")(a+1))+" / ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"question.title"}],staticClass:"input-title",attrs:{autofocus:"autofocus",placeholder:"输入问题",minlength:"1",maxlength:"128"},domProps:{value:e.title},on:{input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}}),e.need?s("span",{staticClass:"text-red"},[t._v(" *")]):t._e(),s("div",{staticClass:"text-grey-8 q-gutter-xs q-mt-sm text-right text-body1 question-btn"},[s("q-checkbox",{staticClass:"q-mx-sm",attrs:{label:"必填项",dense:""},model:{value:e.need,callback:function(s){t.$set(e,"need",s)},expression:"question.need"}})],1)])])]):1===e.type||2===e.type?s("div",[t.editing!==a?s("div",{staticClass:"editable",on:{click:function(e){t.editing=a,t.isEditing=!0,t.onAddOption=a}}},[t.validQuestion(a)?t._e():s("div",{staticClass:"float-right",staticStyle:{padding:"1px"}},[s("q-icon",{attrs:{name:"error",color:"red",size:"25px"}})],1),2===e.type?s("q-chip",{staticClass:"float-right",attrs:{dense:"",square:"",outline:"",color:"teal-4",label:"多选题"}}):t._e(),s("div",{staticClass:"text-h6 ques-title"},[s("b",[t._v(t._s(t._f("formatIndex")(a+1))+" / ")]),""!==e.title?s("span",[t._v(t._s(e.title))]):s("span",{staticClass:"text-green-5"},[s("i",[t._v("点击编辑问题")])]),e.need?s("span",{staticClass:"text-red"},[t._v(" *")]):t._e()]),s("q-field",{attrs:{borderless:""},scopedSlots:t._u([{key:"control",fn:function(){return[s("q-option-group",{attrs:{options:e.options,color:"primary",type:1===e.type?"radio":"checkbox"},on:{input:function(s){t.answer[a]=1===e.type?null:[]}},model:{value:t.answer[a],callback:function(e){t.$set(t.answer,a,e)},expression:"answer[pid]"}})]},proxy:!0}],null,!0),model:{value:t.answer[a],callback:function(e){t.$set(t.answer,a,e)},expression:"answer[pid]"}})],1):s("div",{staticClass:"edit-area shadow-3"},[s("div",{staticClass:"text-grey-8 q-pb-md flex justify-center text-center text-body1"},[s("q-btn",{staticClass:"q-ma-sm text-primary",attrs:{round:"",dense:"",icon:"arrow_upward"},on:{click:function(e){return t.upQuestion(a)}}},[s("q-tooltip",[t._v("上移")])],1),s("q-btn",{staticClass:"q-ma-sm text-primary",attrs:{round:"",dense:"",icon:"arrow_downward"},on:{click:function(e){return t.downQuestion(a)}}},[s("q-tooltip",[t._v("下移")])],1),s("q-btn",{staticClass:"q-ma-sm text-deep-orange",attrs:{round:"",dense:"",icon:"close"},on:{click:function(e){return t.delQuestion(a)}}},[s("q-tooltip",[t._v("删除")])],1),s("q-btn",{staticClass:"q-ma-sm text-secondary",attrs:{round:"",dense:"",icon:"check"},on:{click:function(e){t.editing=-1}}},[s("q-tooltip",[t._v("完成")])],1)],1),s("div",{staticClass:"text-h6 ques-title"},[s("b",[t._v(t._s(t._f("formatIndex")(a+1))+" / ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"question.title"}],staticClass:"input-title",style:{"border-color":""===e.title?"#C10015":"#1976D2"},attrs:{autofocus:"autofocus",placeholder:"输入问题",minlength:"1",maxlength:"128"},domProps:{value:e.title},on:{input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}}),e.need?s("span",{staticClass:"text-red"},[t._v(" *")]):t._e(),s("div",{staticClass:"text-grey-8 q-gutter-xs q-mt-sm text-right text-body1 question-btn"},[s("q-checkbox",{staticClass:"q-mx-sm",attrs:{label:"必填项",dense:""},model:{value:e.need,callback:function(s){t.$set(e,"need",s)},expression:"question.need"}}),s("q-checkbox",{staticClass:"q-mx-sm",attrs:{label:"多选题",dense:"",value:2===e.type},on:{input:function(e){return t.setMulti(a)}}})],1)]),s("q-list",{attrs:{bordered:""}},[s("q-item-label",{attrs:{header:""}},[t._v("选项列表")]),s("q-separator"),0===e.options.length?s("q-item",[s("div",{staticClass:"q-ma-sm"},[s("q-icon",{attrs:{name:"error",color:"red"}}),s("span",[t._v(" 请添加选项")])],1)]):t._e(),t._l(e.options,(function(e,i){return s("q-item",{key:i},[s("q-item-section",[s("div",[s("q-chip",{attrs:{dense:"",square:""}},[t._v(t._s(i+1))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"item.label"}],staticClass:"input-option",attrs:{placeholder:"输入选项"},domProps:{value:e.label},on:{change:function(t){e.value=e.label},input:function(s){s.target.composing||t.$set(e,"label",s.target.value)}}})],1)]),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"text-grey-8 q-gutter-xs"},[s("q-btn",{staticClass:"gt-xs",staticStyle:{display:"inline !important"},attrs:{size:"12px",flat:"",dense:"",icon:"delete"},on:{click:function(e){return t.delOption(a,i)}}}),s("q-btn",{attrs:{size:"12px",flat:"",dense:"",icon:"arrow_upward"},on:{click:function(e){return t.upOption(a,i)}}}),s("q-btn",{attrs:{size:"12px",flat:"",dense:"",icon:"arrow_downward"},on:{click:function(e){return t.downOption(a,i)}}})],1)])],1)})),s("q-separator"),s("q-item",{style:{border:t.onAddOption===a?"1px #66BB6A solid":"1px transparent solid"}},[s("q-item-section",[s("div",[s("q-icon",{staticStyle:{width:"25px"},attrs:{color:"primary",size:"12px",name:"create"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.templateOptions.label,expression:"templateOptions.label"}],staticClass:"input-option add-option",attrs:{placeholder:"在此添加选项"},domProps:{value:t.templateOptions.label},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addOption(a)},focus:function(e){t.onAddOption=a},blur:function(e){t.onAddOption=-1},input:function(e){e.target.composing||t.$set(t.templateOptions,"label",e.target.value)}}})],1)]),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"text-grey-8 q-gutter-xs"},[s("q-btn",{staticClass:"gt-xs",staticStyle:{display:"inline !important"},attrs:{size:"12px",flat:"",dense:"",round:"",icon:"add"},on:{click:function(e){return t.addOption(a)}}})],1)])],1)],2)],1)]):t._e()])})),0)],1),s("q-space",{staticStyle:{height:"100px"}}),s("q-btn-group",{staticClass:"q-mt-lg shadow-3 edit-toolbox",attrs:{spread:"",outline:"",stretch:""}},[s("q-btn",{attrs:{label:"选择题",stack:"",icon:"check_box"},on:{click:t.addChoiceQuestion}}),s("q-btn",{attrs:{label:"填空题",stack:"",icon:"question_answer"},on:{click:t.addBlankQuestion}}),s("q-btn",{attrs:{label:"预览",stack:"",icon:"visibility"},on:{click:function(e){t.paperSimulate=!0}}}),s("q-btn",{attrs:{label:"保存",stack:"",icon:"save"},on:{click:t.onSave}})],1)],1)])])]),s("q-tab-panel",{staticClass:"column",attrs:{name:"send"}},[s("div",{staticStyle:{"max-width":"calc(100vw - 32px)"}},[t.surveyData.running?t._e():s("q-banner",{staticClass:"bg-grey-3",staticStyle:{"margin-bottom":"10px"},attrs:{rounded:""},scopedSlots:t._u([{key:"avatar",fn:function(){return[s("q-icon",{attrs:{name:"speaker_notes_off",color:"primary"}})]},proxy:!0},{key:"action",fn:function(){return[s("q-btn",{attrs:{flat:"",color:"primary",icon:"play_arrow",label:"开始收集问卷"},on:{click:function(e){t.surveyData.running=!0,t.onSave()}}})]},proxy:!0}],null,!1,2260157033)},[t._v("\n          当前问卷已"),s("span",{staticClass:"text-red-7 text-bold"},[t._v("停止收集")]),t._v("，受访者无法填写问卷。\n          ")]),t.surveyData.open?s("q-banner",{staticClass:"bg-secondary text-white",attrs:{rounded:""},scopedSlots:t._u([{key:"avatar",fn:function(){return[s("q-icon",{attrs:{name:"wifi_tethering"}})]},proxy:!0},{key:"action",fn:function(){return[s("q-btn",{attrs:{flat:"",color:"white",label:"改变问卷访问权限"},on:{click:function(e){t.tab="setting"}}})]},proxy:!0}])},[t._v("\n          此问卷是"),s("b",[t._v("开放问卷")]),t._v("，可使用如下链接匿名作答。\n          "),t.surveyData.running?t._e():s("div",{staticClass:"text-grey-3 text-italic"},[t._v("* 问卷暂停回收，链接仅提供预览，答题结果不会记录")]),s("q-card",{staticClass:"q-mt-sm q-pa-md text-center text-italic",staticStyle:{"max-width":"100vw"},attrs:{flat:""}},[s("a",{staticClass:"q-link text-blue-7",attrs:{href:t.openLink,target:"_blank"}},[s("span",{staticStyle:{"word-wrap":"anywhere","word-break":"break-all"}},[t._v("\n              "+t._s(t.openLink)+"\n              ")])])])],1):s("q-banner",{staticClass:"bg-primary text-white",attrs:{rounded:""},scopedSlots:t._u([{key:"avatar",fn:function(){return[s("q-icon",{attrs:{name:"group_add"}})]},proxy:!0},{key:"action",fn:function(){return[s("q-btn",{attrs:{flat:"",color:"white",label:"改变问卷访问权限"},on:{click:function(e){t.tab="setting"}}})]},proxy:!0}],null,!1,2930313214)},[t._v("\n          此问卷是"),s("b",[t._v("定向问卷")]),t._v("，请选择在列表在选择受访者。系统会为您选择的受访者生成单次有效的私密链接，并通过电子邮件发送。\n          ")]),s("br"),s("div",[s("q-table",{attrs:{title:"分发问卷",data:t.respondentData,columns:t.columns,"row-key":"name","selected-rows-label":t.getSelectedString,selection:"multiple",selected:t.selected},on:{"update:selected":function(e){t.selected=e}},scopedSlots:t._u([{key:"top-right",fn:function(){return[s("div",{staticClass:"flex row"},[s("q-btn",{staticClass:"q-mr-md",attrs:{color:"secondary",flat:"",label:"管理受访者↗"},on:{click:function(e){return t.routeTo("/manage/respondents")}}}),s("q-btn",{attrs:{color:"primary",disable:0===t.selected.length},on:{click:t.onSend}},[t._v("发送问卷\n                ")])],1)]},proxy:!0}])})],1)],1)]),s("q-tab-panel",{attrs:{name:"response"}},[s("div",{staticClass:"column flex-center"},[s("div",{staticClass:"san-grail"},[s("div",{staticClass:"q-ma-lg"},[s("div",{staticClass:"paper-header"},[s("div",{staticClass:"text-h4 text-center paper-title"},[""!==t.surveyData.title?s("span",[t._v(t._s(t.surveyData.title))]):s("span",{staticClass:"text-green-5"},[s("i",[t._v("无标题问卷")])])]),s("br"),s("q-card",[s("q-card-section",{staticClass:"flex row flex-center justify-around q-pa-md",attrs:{horizontal:""}},[s("q-card-section",{staticClass:"flex flex-center column"},[s("div",{staticClass:"text-h5 text-blue-7"},[t._v(t._s(t.resultData.frequency?t.resultData.frequency:"0"))]),s("div",[t._v("已收集问卷数")])]),s("q-card-section",{staticClass:"flex flex-center column"},[t.surveyData.running?s("div",{staticClass:"text-h5 text-blue-7"},[t._v("\n                      "+t._s(t.surveyData.open?"开放收集中":"定向收集中")+"\n                    ")]):s("div",{staticClass:"text-h5 text-brown-5"},[t._v("\n                      停止收集\n                    ")]),s("div",[t._v("当前状态")])])],1)],1)],1),s("div",{staticClass:"column"},t._l(t.resultData.questionSet,(function(e,a){return s("div",{key:a,staticClass:"ques-section"},[0===e.type?s("div",[s("div",[s("div",{staticClass:"text-h6 ques-title-large"},[s("b",[t._v(t._s(t._f("formatIndex")(a+1))+" / ")]),""!==e.title?s("span",[t._v(t._s(e.title))]):s("span",{staticClass:"text-green-5"},[s("i",[t._v("无标题")])]),e.need?s("span",{staticClass:"text-red"},[t._v(" *")]):t._e()]),!0!==t.showAllAns[a]?s("q-list",{attrs:{bordered:"",separator:""}},[t._l(t.previewList(e.answer),(function(e,a){return s("q-item",{key:a},[s("q-item-section",[t._v(t._s(Object.keys(e)[0]))]),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"text-grey-8 q-gutter-xs"},[t._v("\n                            ×"+t._s(Object.values(e)[0])+"\n                          ")])])],1)})),e.frequency&&0!==e.frequency?t._e():s("q-item",[s("div",{staticClass:"q-ma-sm"},[s("q-icon",{attrs:{name:"warning"}}),s("span",[t._v("  暂无作答")])],1)]),e.answer.length>5?s("q-item",{attrs:{clickable:""},on:{click:function(e){return t.switchShow(a)}}},[s("q-item-section",{staticClass:"text-center text-primary"},[t._v("显示全部")])],1):t._e()],2):s("q-list",{attrs:{bordered:"",separator:""}},[t._l(e.answer,(function(e,a){return s("q-item",{key:a},[s("q-item-section",[t._v(t._s(Object.keys(e)[0]))]),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"text-grey-8 q-gutter-xs"},[t._v("\n                            ×"+t._s(Object.values(e)[0])+"\n                          ")])])],1)})),e.frequency&&0!==e.frequency?t._e():s("q-item",[s("div",{staticClass:"q-ma-sm"},[s("q-icon",{attrs:{name:"warning"}}),s("span",[t._v("  暂无作答")])],1)]),s("q-item",{attrs:{clickable:""},on:{click:function(e){return t.switchShow(a)}}},[s("q-item-section",{staticClass:"text-center text-primary"},[t._v("收起")])],1)],2)],1)]):1===e.type||2===e.type?s("div",[s("div",[2===e.type?s("q-chip",{staticClass:"float-right",staticStyle:{margin:"6px"},attrs:{dense:"",square:"",outline:"",color:"teal-4",label:"多选题"}}):t._e(),1===e.type?s("q-chip",{staticClass:"float-right",staticStyle:{margin:"6px"},attrs:{dense:"",square:"",outline:"",color:"light-blue-6",label:"单选题"}}):t._e(),s("div",{staticClass:"text-h6 ques-title"},[s("b",[t._v(t._s(t._f("formatIndex")(a+1))+" / ")]),""!==e.title?s("span",[t._v(t._s(e.title))]):s("span",{staticClass:"text-green-5"},[s("i",[t._v("无标题")])]),e.need?s("span",{staticClass:"text-red"},[t._v(" *")]):t._e()]),s("q-list",{attrs:{bordered:"",separator:""}},[t._l(e.options,(function(a,i){return s("q-item",{key:i},[s("q-item-section",[t._v("\n                          "+t._s(a.label)+"\n                          "),s("q-linear-progress",{attrs:{value:e.frequency&&e.answer?(a.label in e.answer?e.answer[a.label]:0)/e.frequency:0}})],1),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"text-grey-8 q-gutter-xs"},[t._v("\n                            "+t._s(a.label in e.answer?e.answer[a.label]:"0")+"\n                          ")])])],1)})),0===e.options.length?s("q-item",[s("div",{staticClass:"q-ma-sm"},[s("q-icon",{attrs:{name:"warning"}}),s("span",[t._v("  未设置选项")])],1)]):t._e()],2)],1)]):t._e()])})),0)])])])]),s("q-tab-panel",{attrs:{name:"setting"}},[s("div",{staticClass:"flex justify-center"},[s("q-list",{staticClass:"san-grail",attrs:{bordered:"",separator:""}},[s("q-item",[s("q-item-section",[t._v("发布问卷\n              "),s("span",{staticClass:"text-grey"},[t._v("\n                "+t._s(t.surveyData.running?"允许作答":"停止收集问卷"))])]),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"text-grey-8 q-gutter-xs"},[s("q-toggle",{on:{input:t.onSave},model:{value:t.surveyData.running,callback:function(e){t.$set(t.surveyData,"running",e)},expression:"surveyData.running"}})],1)])],1),s("q-item",[s("q-item-section",[t._v("问卷类型\n              "),s("span",{staticClass:"text-grey"},[t._v("\n              "+t._s(t.surveyData.open?"开放问卷 (收到链接者均可作答)":"定向问卷 (仅受邀用户可以作答)"))])]),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"text-grey-8 q-gutter-xs"},[s("q-toggle",{on:{input:t.onSave},model:{value:t.surveyData.open,callback:function(e){t.$set(t.surveyData,"open",e)},expression:"surveyData.open"}})],1)])],1),t._e()],1)],1)])],1),t.paperSimulate?s("div",{staticClass:"simulatorFixed"},[s("q-layout",{staticClass:"shadow-2 rounded-borders simulatorWindow",attrs:{view:"lHh lpr lFf",container:""}},[s("q-header",{attrs:{elevated:""}},[s("q-bar",[s("q-icon",{attrs:{name:"description"}}),s("div",[t._v("问卷预览")]),s("q-space"),s("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:t.hideSimulate}})],1)],1),s("q-page-container",{staticStyle:{"background-color":"#F2F2F2"}},[s("q-page",{staticClass:"column flex-center main-bg"},[s("Survey",{attrs:{sdata:t.surveyData}})],1)],1)],1)],1):t._e()],1)},i=[],n=(s("4e82"),s("e3ba")),o=s("88b8"),r=s("2a19"),l=s("2b0e"),u={name:"Edit",data(){return{paperSimulate:!1,tab:"edit",templateOptions:{label:"",value:null},surveyData:{title:"",desc:"",questionSet:[]},answer:[],editing:null,respondentData:[],id:this.$route.params.id,selected:[],columns:[{name:"sid",required:!0,label:"学号/工号",field:"sid",sortable:!0},{name:"name",label:"姓名",field:"name",sortable:!0},{name:"school",label:"学校",field:"school",sortable:!0},{name:"sex",label:"性别",field:"sex"},{name:"phone",label:"手机号",field:"phone"},{name:"email",label:"邮箱",field:"email"},{name:"status",label:"状态",field:"status",format:t=>this.surveyData.open?"-":!1===t?"未发送":"已发送"}],isEditing:!1,openLink:null,resultData:{frequency:"-",questionSet:[],desc:"",id:"",open:null,respondent_ids:[],startTime:null},onAddOption:null,showAllAns:[]}},async created(){await this.getSurveyData(),await this.getRespondentList(),await this.getResponse()},components:{Survey:n["default"]},filters:{formatIndex:function(t){return t<10?"0"+t:t}},computed:{startTimeEnable(){return null!==this.surveyData.startTime},voidSurvey(){return 0===this.surveyData.questionSet.length},voidQuestion(){for(let t=this.surveyData.questionSet.length-1;t>=0;--t)if(""===this.surveyData.questionSet[t].title)return!0;return!1},noRequireQuestion(){for(let t=this.surveyData.questionSet.length-1;t>=0;--t)if(this.surveyData.questionSet[t].need)return!1;return!0},noOptionQuestion(){for(let t=this.surveyData.questionSet.length-1;t>=0;--t)if(1===this.surveyData.questionSet[t].type&&0===this.surveyData.questionSet[t].options.length)return!0;return!1}},methods:{setMulti(t){2===this.surveyData.questionSet[t].type?(this.surveyData.questionSet[t].type=1,this.answer[t]=null):(this.surveyData.questionSet[t].type=2,this.answer[t]=[])},switchShow(t){l["a"].set(this.showAllAns,t,!this.showAllAns[t])},previewList(t){return Array.isArray(t)?t.slice(0,5):null},validQuestion(t){if(0===this.surveyData.questionSet[t].type){if(""===this.surveyData.questionSet[t].title)return!1}else{if(""===this.surveyData.questionSet[t].title)return!1;if(0===this.surveyData.questionSet[t].options.length)return!1}return!0},async getResponse(){const t=await Object(o["g"])({id:this.id});this.resultData=t.data.data,this.resultData.questionSet.sort(((t,e)=>t.index>e.index?1:-1));for(let e=this.resultData.questionSet.length-1;e>=0;--e)this.showAllAns.push(!1),0===this.resultData.questionSet[e].type&&this.resultData.questionSet[e].answer.sort(((t,e)=>Object.values(t)[0]<Object.values(e)[0]?1:-1))},switchStime(){},upQuestion(t){if(t){const e=this.surveyData.questionSet[t-1].index;this.surveyData.questionSet[t-1].index=this.surveyData.questionSet[t].index,this.surveyData.questionSet[t].index=e,this.sortQuestions(),--this.editing}},downQuestion(t){if(t+1!==this.surveyData.questionSet.length){const e=this.surveyData.questionSet[t].index;this.surveyData.questionSet[t].index=this.surveyData.questionSet[t+1].index,this.surveyData.questionSet[t+1].index=e,this.sortQuestions(),++this.editing}},delQuestion(t){console.log(t);for(let e=t;e<this.surveyData.questionSet.length-1;++e)this.surveyData.questionSet[e]=this.surveyData.questionSet[e+1],this.surveyData.questionSet[e].index=e+1;this.editing=-1,this.surveyData.questionSet.splice(this.surveyData.questionSet.length-1,1)},upOption(t,e){if(e>0){const s=this.surveyData.questionSet[t].options[e-1].value;this.surveyData.questionSet[t].options[e-1].value=this.surveyData.questionSet[t].options[e].value,this.surveyData.questionSet[t].options[e].value=s,this.surveyData.questionSet[t].options.sort(((t,e)=>t.value<e.value?1:-1))}},downOption(t,e){if(this.surveyData.questionSet[t].options.length>e+1){const s=this.surveyData.questionSet[t].options[e+1].value;this.surveyData.questionSet[t].options[e+1].value=this.surveyData.questionSet[t].options[e].value,this.surveyData.questionSet[t].options[e].value=s,this.surveyData.questionSet[t].options.sort(((t,e)=>t.value<e.value?1:-1))}},delOption(t,e){for(let s=e;s<this.surveyData.questionSet[t].options.length-1;++s)this.surveyData.questionSet[t].options[s]=this.surveyData.questionSet[t].options[s+1];this.surveyData.questionSet[t].options.splice(this.surveyData.questionSet[t].options.length-1,1)},addOption(t){for(let e=this.surveyData.questionSet[t].options.length-1;e>=0;--e)if(this.surveyData.questionSet[t].options[e].label===this.templateOptions.label)return r["a"].create({message:"选项重复，已合并",color:"secondary",position:"top",timeout:1500}),void(this.templateOptions.label="");this.surveyData.questionSet[t].options.push({label:this.templateOptions.label,value:this.templateOptions.label}),this.templateOptions.label=""},changeData(){this.isEditing=!0},prepareData(){switch(this.tab){case"edit":this.getSurveyData();break;case"send":this.getRespondentList();break;case"response":this.getResponse();break;case"setting":}this.isEditing&&this.onSave()},sortQuestions(){this.surveyData.questionSet.sort(((t,e)=>t.index>e.index?1:-1))},async getSurveyData(){const t=await Object(o["d"])({id:this.id});if(0===t.data.code){this.surveyData=t.data.data,this.sortQuestions();for(let t=0;t<this.surveyData.questionSet.length;t++)this.answer.push(2===this.surveyData.questionSet[t].type?[]:null),1===this.surveyData.questionSet[t].type&&this.surveyData.questionSet[t].options.sort(((t,e)=>t.value<e.value?1:-1))}else await this.$router.push("/manage")},async getRespondentList(){const t=await Object(o["f"])({id:this.id});if(this.respondentData=t.data.data,this.surveyData.open){const t=await Object(o["c"])({id:this.id,userList:[]});this.openLink=t.data.data.link}},routeTo(t){this.$router.push(t)},hideSimulate(){this.paperSimulate=!1},getSelectedString(){return 0===this.selected.length?"":`${this.selected.length} record${this.selected.length>1?"s":""} selected of ${this.respondentData.length}`},onSave(){this.editing=-1,this.surveyData.id=this.id,Object(o["h"])(this.surveyData).then((t=>{t&&t.data&&0===t.data.code&&(this.isEditing=!1,r["a"].create({message:"保存成功",color:"secondary",position:"top",timeout:1500}),this.getSurveyData())}))},onSend(){let t=[];for(let e=0;e<this.selected.length;e++)t.push(this.selected[e].id);Object(o["i"])({id:this.id,userList:t}).then((()=>{r["a"].create({message:"发送成功",color:"secondary",position:"top",timeout:1500}),this.getRespondentList()}))},addChoiceQuestion(){window.scrollBy(0,document.body.scrollHeight),this.surveyData.questionSet.push({type:1,index:this.surveyData.questionSet.length+1,need:!1,title:"",desc:"",options:[]})},addBlankQuestion(){this.surveyData.questionSet.push({type:0,index:this.surveyData.questionSet.length+1,need:!1,title:"",desc:""}),setTimeout((()=>{window.scrollBy(0,document.body.scrollHeight)}),100)}}},c=u,d=(s("a206"),s("2877")),p=s("65c6"),v=s("0016"),h=s("7ff0"),m=s("429b"),q=s("7867"),y=s("adad"),b=s("823b"),f=s("54e1"),g=s("42a1"),x=s("27f9"),_=s("d66b"),w=s("9c40"),S=s("05c0"),C=s("8f8e"),D=s("b047"),k=s("8572"),Q=s("9f0a"),O=s("1c1c"),j=s("0170"),$=s("eb85"),T=s("66e5"),I=s("4074"),L=s("2c91"),A=s("e7a9"),P=s("f09f"),E=s("eaac"),z=s("a370"),B=s("6b1d"),F=s("9564"),R=s("7cbe"),M=s("52ee"),H=s("ca78"),N=s("4d5a"),J=s("e359"),U=s("d847"),G=s("09e3"),V=s("9989"),W=s("7f67"),X=s("eebe"),K=s.n(X),Y=Object(d["a"])(c,a,i,!1,null,"5f7d1c25",null);e["default"]=Y.exports;K()(Y,"components",{QToolbar:p["a"],QIcon:v["a"],QFooter:h["a"],QTabs:m["a"],QRouteTab:q["a"],QTabPanels:y["a"],QTabPanel:b["a"],QBanner:f["a"],QPopupEdit:g["a"],QInput:x["a"],QEditor:_["a"],QBtn:w["a"],QTooltip:S["a"],QCheckbox:C["a"],QChip:D["a"],QField:k["a"],QOptionGroup:Q["a"],QList:O["a"],QItemLabel:j["a"],QSeparator:$["a"],QItem:T["a"],QItemSection:I["a"],QSpace:L["a"],QBtnGroup:A["a"],QCard:P["a"],QTable:E["a"],QCardSection:z["a"],QLinearProgress:B["a"],QToggle:F["a"],QPopupProxy:R["a"],QDate:M["a"],QTime:H["a"],QLayout:N["a"],QHeader:J["a"],QBar:U["a"],QPageContainer:G["a"],QPage:V["a"]}),K()(Y,"directives",{ClosePopup:W["a"]})},"84fe":function(t,e,s){"use strict";s("3900")},"88b8":function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"h",(function(){return n})),s.d(e,"e",(function(){return o})),s.d(e,"d",(function(){return r})),s.d(e,"b",(function(){return l})),s.d(e,"f",(function(){return u})),s.d(e,"i",(function(){return c})),s.d(e,"c",(function(){return d})),s.d(e,"g",(function(){return p}));var a=s("b775");const i=t=>Object(a["a"])({url:"/api/question/manage",method:"post",data:t}),n=t=>Object(a["a"])({url:"/api/question/manage",method:"put",data:t}),o=t=>Object(a["a"])({url:"/api/question/manage",method:"get",data:t}),r=t=>Object(a["a"])({url:"/api/question/manage",method:"get",params:t}),l=t=>Object(a["a"])({url:"/api/question/manage",method:"delete",data:t}),u=t=>Object(a["a"])({url:"/api/question/generate",method:"get",params:t}),c=t=>Object(a["a"])({url:"/api/question/generate",method:"post",data:t}),d=t=>Object(a["a"])({url:"/api/question/generate",method:"post",data:t}),p=t=>Object(a["a"])({url:"/api/question/result",method:"get",params:t})},a206:function(t,e,s){"use strict";s("c54b")},b775:function(t,e,s){"use strict";(function(t){var a=s("bc3a"),i=s.n(a),n=s("2a19");const o=i.a.create({baseURL:t.env.VUE_APP_BASE_API,timeout:99999,withCredentials:!0});o.interceptors.request.use((t=>{let e=(void 0).$cookies.get("csrftoken");return t.data=JSON.stringify(t.data),t.headers={"Content-Type":"application/json","X-CSRFToken":e},t}),(t=>(n["a"].create({message:t.toString(),color:"negative",position:"top",timeout:2e3,icon:"warning"}),t))),o.interceptors.response.use((t=>{switch(t.data.code){case 0:return t;case 1:return n["a"].create({message:t.data.message.toString(),color:"warning",position:"top",timeout:2e3}),setTimeout((()=>{document.cookie="username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",location.reload()}),500),t;case 2:return n["a"].create({message:t.data.message.toString(),color:"orange",position:"top",timeout:2e3}),t;case-1:return n["a"].create({message:"系统错误",color:"deep-orange-14",position:"top",timeout:2e3}),t;case 7:return n["a"].create({message:t.data.message.toString(),color:"warning",position:"top",timeout:2e3}),t;default:return t}}),(t=>(n["a"].create({message:t.toString(),color:"negative",position:"top",timeout:2e3,icon:"warning"}),t))),e["a"]=o}).call(this,s("4362"))},c54b:function(t,e,s){},e3ba:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"main-con ",class:{"flex flex-center column":!t.showQuestions}},[t.loading?s("div",{staticClass:"flex flex-center text-secondary text-h7"},[s("q-inner-loading",{attrs:{showing:""}},[s("q-spinner-gears",{attrs:{size:"50px",color:"secondary"}}),s("br"),t._v("\n      加载中...\n    ")],1)],1):t.demoMode||103===t.surveyData.statusCode?s("div",{staticClass:"flex column items-stretch"},[s("div",{staticClass:"paper-header"},[s("div",{staticClass:"text-h4 text-center paper-title"},[t._v(t._s(t.surveyData.title))]),t.$route.params.token?s("div",{staticClass:"text-center paper-time"},[t._v("ID:"+t._s(t.$route.params.token.toUpperCase()))]):t._e(),s("br"),s("div",{domProps:{innerHTML:t._s(t.surveyData.desc)}})]),t.showQuestions?t._e():s("div",{staticClass:"text-center q-pa-lg"},[s("q-space"),s("q-btn",{attrs:{outline:"",icon:"arrow_downward",color:"secondary",round:""},on:{click:t.startQuiz}},[s("q-tooltip",{attrs:{"content-class":"desktop-only"}},[t._v("\n          开始问卷\n        ")])],1)],1),s("transition",{attrs:{name:"fade"}},[t.showQuestions?s("q-form",{ref:"surveyForm",staticClass:"column",attrs:{autocorrect:"off",autocapitalize:"off",spellcheck:"false"},on:{"validation-error":t.validError}},[t._l(t.surveyData.questionSet,(function(e,a){return s("div",{key:a,staticClass:"ques-section"},[t.loading?t._e():s("q-separator",{staticClass:"q-mb-sm",staticStyle:{background:"rgba(0, 0, 0, 0.05)"},attrs:{size:"2px"}}),0===e.type?s("div",[s("div",{staticClass:"text-h6 ques-title-large"},[s("b",[t._v(t._s(t._f("formatIndex")(e.index))+" / ")]),""!==e.title?s("span",[t._v(t._s(e.title))]):s("span",{staticClass:"text-italic text-grey"},[t._v("(未设置题目)")]),e.need?s("span",{staticClass:"text-red"},[t._v(" *")]):t._e()]),s("q-input",{attrs:{disable:1===t.submitted,placeholder:"请输入",dense:!0,filled:"",rules:[function(t){return!e.need||null!=t&&""!=t||"必填项"}]},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}},model:{value:t.answer.questionSet[a].answer,callback:function(e){t.$set(t.answer.questionSet[a],"answer",e)},expression:"answer.questionSet[i].answer"}})],1):1===e.type||2===e.type?s("div",[s("div",{staticClass:"text-h6 ques-title"},[s("b",[t._v(t._s(t._f("formatIndex")(e.index))+" / ")]),""!==e.title?s("span",[t._v(t._s(e.title))]):s("span",{staticClass:"text-italic text-grey"},[t._v("(未设置题目)")]),e.need?s("span",{staticClass:"text-red"},[t._v(" *")]):t._e(),2===e.type?s("q-chip",{staticClass:"float-right",attrs:{dense:"",square:"",outline:"",color:"teal-4",label:"多选题"}}):t._e()],1),s("q-field",{attrs:{rules:[function(t){return!e.need||null!=t||"必填项"}],borderless:"",disable:1===t.submitted},scopedSlots:t._u([{key:"control",fn:function(){return[s("q-option-group",{attrs:{options:e.options,color:"primary",type:1===e.type?"radio":"checkbox"},model:{value:t.answer.questionSet[a].answer,callback:function(e){t.$set(t.answer.questionSet[a],"answer",e)},expression:"answer.questionSet[i].answer"}})]},proxy:!0}],null,!0),model:{value:t.answer.questionSet[a].answer,callback:function(e){t.$set(t.answer.questionSet[a],"answer",e)},expression:"answer.questionSet[i].answer"}})],1):t._e()],1)})),s("q-btn",{staticClass:"flex-center submit-btn",attrs:{label:1===t.submitted?"提交成功":"提交",color:1===t.submitted?"secondary":"primary",disable:0!==t.submitted,loading:-1===t.submitted},on:{click:t.submit}})],2):t._e()],1)],1):104===t.surveyData.statusCode?s("div",{staticClass:"flex flex-center text-secondary text-h5 q-mt-lg"},[t._v("\n    您已提交此问卷\n  ")]):s("div",{staticClass:"flex flex-center text-secondary text-h5 q-mt-lg"},[t._v("\n    问卷已停止收集\n  ")]),s("br"),t.loading?t._e():s("q-separator",{staticClass:"q-ma-md"}),t.loading?t._e():s("div",{staticClass:"paper-footer text-center",class:{"fixed-bottom":!t.showQuestions},staticStyle:{height:"100px"}},[t._v("\n    Copyright © 2021 LoremIpsum Team\n    "),s("br"),t._v("\n    问卷系统由"),s("a",{staticClass:"no-wrap q-link",attrs:{href:"/"}},[t._v("LoremSurvey")]),t._v("提供\n    "),s("br"),s("a",{staticClass:"q-link",attrs:{href:"#"}},[t._v("意见反馈")])])],1)},i=[],n=(s("4e82"),s("2a19")),o=s("4ec3"),r={name:"survey",props:{sdata:Object},data(){return{surveyData:{title:"",desc:"",questionSet:[]},answer:{questionSet:[]},submitted:0,res:null,sessionId:null,demoMode:!1,loading:!0,showQuestions:!1}},mounted(){},async created(){if(!this.$route.params.token)return this.demoMode=!0,void(this.loading=!1);this.sessionId=this.$route.params.token;const t=await Object(o["d"])({sessionid:this.sessionId});if(this.surveyData=t.data.data,105===this.surveyData.statusCode&&await this.$router.push("/survey"),103===this.surveyData.statusCode){document.title=this.surveyData.title+" -LoremSurvey",this.surveyData.running||(this.submitted=1),this.surveyData.questionSet.sort(((t,e)=>t.index>e.index?1:-1));for(let t=0;t<this.surveyData.questionSet.length;++t)1===this.surveyData.questionSet[t].type||0===this.surveyData.questionSet[t].type?this.answer.questionSet.push({index:t+1,answer:null,id:this.surveyData.questionSet[t].id}):2===this.surveyData.questionSet[t].type&&this.answer.questionSet.push({index:t+1,answer:[],id:this.surveyData.questionSet[t].id})}this.loading=!1},mounted(){this.demoMode&&this.$nextTick((()=>{this.surveyData=this.$props.sdata,this.surveyData.questionSet.sort(((t,e)=>t.index>e.index?1:-1));for(let t=0;t<this.surveyData.questionSet.length;++t)1===this.surveyData.questionSet[t].type||0===this.surveyData.questionSet[t].type?this.answer.questionSet.push({index:t+1,answer:null,id:this.surveyData.questionSet[t].id}):2===this.surveyData.questionSet[t].type&&this.answer.questionSet.push({index:t+1,answer:[],id:this.surveyData.questionSet[t].id})}))},filters:{formatIndex:function(t){return t<10?"0"+t:t}},methods:{startQuiz(){this.showQuestions=!0},submit(){this.$refs.surveyForm.validate().then((t=>{if(t){if(this.demoMode)return n["a"].create({message:"模拟提交动作，不会收集数据",color:"secondary",position:"top",timeout:500}),this.submitted=-1,void setTimeout((()=>{this.submitted=1}),1e3);this.submitted=-1,Object(o["j"])({sessionid:this.sessionId},{questionSet:this.answer.questionSet}).then((t=>{0===t.data.code?this.submitted=1:this.submitted=0}))}}))},validError(){n["a"].create({message:"存在未填项",color:"negative",position:"top",timeout:1500,icon:"warning"})}}},l=r,u=(s("84fe"),s("2877")),c=s("9989"),d=s("74f7"),p=s("cf57"),v=s("2c91"),h=s("9c40"),m=s("05c0"),q=s("0378"),y=s("eb85"),b=s("27f9"),f=s("b047"),g=s("8572"),x=s("9f0a"),_=s("eebe"),w=s.n(_),S=Object(u["a"])(l,a,i,!1,null,"13cd747c",null);e["default"]=S.exports;w()(S,"components",{QPage:c["a"],QInnerLoading:d["a"],QSpinnerGears:p["a"],QSpace:v["a"],QBtn:h["a"],QTooltip:m["a"],QForm:q["a"],QSeparator:y["a"],QInput:b["a"],QChip:f["a"],QField:g["a"],QOptionGroup:x["a"]})}}]);