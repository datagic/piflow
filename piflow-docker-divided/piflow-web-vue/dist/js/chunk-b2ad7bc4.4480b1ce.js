(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2ad7bc4"],{"159b":function(t,e,n){var a=n("da84"),o=n("fdbc"),s=n("17c2"),r=n("9112");for(var i in o){var c=a[i],l=c&&c.prototype;if(l&&l.forEach!==s)try{r(l,"forEach",s)}catch(p){l.forEach=s}}},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,o=n("a640"),s=n("ae40"),r=o("forEach"),i=s("forEach");t.exports=r&&i?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"3b80":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"navbar"},[a("div",{staticClass:"left"},[a("span",[t._v(t._s(t.$t("sidebar.processes")))])])]),a("div",{staticClass:"input"},[a("Input",{staticStyle:{width:"300px"},attrs:{suffix:"ios-search",placeholder:t.$t("modal.placeholder")},model:{value:t.param,callback:function(e){t.param=e},expression:"param"}}),a("div",{staticClass:"left"},[a("Icon",{style:{color:"a"===t.mark?"#666":"#bbb"},attrs:{type:"ios-apps",size:"16"},on:{click:function(e){return t.handleChangeStyle("a")}}}),a("Icon",{style:{color:"b"===t.mark?"#666":"#bbb"},attrs:{type:"md-reorder",size:"22"},on:{click:function(e){return t.handleChangeStyle("b")}}})],1)],1),"b"===t.mark?a("Table",{attrs:{border:"",columns:t.columns,data:t.tableData},scopedSlots:t._u([{key:"progress",fn:function(e){var n=e.row;return[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("progress",{attrs:{max:"100"},domProps:{value:n.progress}}),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(n.progress)+"%")])])]}},{key:"action",fn:function(e){var n=e.row;return t._l(t.promptContent,(function(e,o){return a("Tooltip",{key:o,attrs:{content:e.content,placement:"top-start"}},[a("span",{staticClass:"button-warp",on:{click:function(e){return t.handleButtonSelect(n,o+1)}}},[a("Icon",{attrs:{type:e.icon}})],1)])}))}}],null,!1,3522178442)}):a("div",{staticClass:"card-list"},[a("Row",{staticStyle:{width:"100%"},attrs:{gutter:16}},t._l(t.tableData,(function(e,o){return a("Col",{key:"df"+o,attrs:{span:"6"}},[a("Card",{staticStyle:{"margin-bottom":"20px"}},[a("div",{attrs:{slot:"title"},slot:"title"},[e.name?a("span",[t._v(t._s(e.name))]):a("span",{staticStyle:{visibility:"hidden"}},[t._v("a")])]),a("img",{staticClass:"img-style",attrs:{src:n("d03f")}}),a("div",{attrs:{slot:"extra"},slot:"extra"},[a("Dropdown",{attrs:{trigger:"click"}},[a("span",{staticClass:"md-more"},[a("Icon",{attrs:{type:"md-more",size:"20"}})],1),a("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(t.promptContent,(function(n,o){return a("DropdownItem",{key:o,nativeOn:{click:function(n){return t.handleButtonSelect(e,1)}}},[a("Icon",{attrs:{type:n.icon}}),a("span",[t._v(t._s(n.content))])],1)})),1)],1)],1)])],1)})),1)],1),a("div",{staticClass:"page"},[a("Page",{attrs:{"prev-text":t.$t("page.prev_text"),"next-text":t.$t("page.next_text"),"show-elevator":"","show-total":!0,total:t.total,"show-sizer":""},on:{"on-change":t.onPageChange,"on-page-size-change":t.onPageSizeChange}})],1)],1)},o=[],s=(n("99af"),n("4160"),n("fb6a"),n("b0c0"),n("159b"),{name:"processes",components:{},data:function(){return{page:1,limit:10,total:0,tableData:[],param:"",mark:"b",promptContent:[{content:"Enter",icon:"ios-redo"},{content:"Run",icon:"ios-play"},{content:"Stop",icon:"ios-square"},{content:"Delete",icon:"ios-trash"}]}},watch:{param:function(t){this.page=1,this.limit=10,this.getTableData()}},computed:{columns:function(){return[{title:this.$t("progress_columns.name"),key:"name",sortable:!0},{title:this.$t("progress_columns.description"),key:"description"},{title:this.$t("progress_columns.startTime"),key:"crtDttm",sortable:!0},{title:this.$t("progress_columns.endTime"),key:"lastUpdateDttm",sortable:!0},{title:this.$t("progress_columns.progress"),slot:"progress",width:250},{title:this.$t("progress_columns.processType"),key:"processType"},{title:this.$t("progress_columns.state"),key:"state",width:125},{title:this.$t("progress_columns.action"),slot:"action",width:225,align:"center"}]}},created:function(){this.getTableData()},methods:{handleReset:function(){this.page=1,this.limit=10},handleButtonSelect:function(t,e){switch(e){case 1:this.$event.emit("crumb",[{name:"Process",path:"/processes"},{name:"drawingBoard",path:"/drawingBoard"}]);var n="";"TASK"===t.processType?n="/drawingBoard/page/process/mxGraph/index.html?drawingBoardType=PROCESS&processType=".concat(t.processType,"&load=").concat(t.id):"GROUP"===t.processType&&(n="/drawingBoard/page/processGroup/mxGraph/index.html?drawingBoardType=PROCESS&processType=".concat(t.processType,"&load=").concat(t.id)),this.$router.push({path:"/drawingBoard",query:{src:n}});break;case 2:this.handleRun(t);break;case 3:this.handleStop(t);break;case 4:this.handleDeleteRow(t);break;default:break}},handleChangeStyle:function(t){this.mark=t},handleRun:function(t){var e=this,n={id:t.id,processType:"TASK"===t.processType?"PROCESS":"PROCESS_GROUP",runMode:"RUN"};this.$event.emit("loading",!0),this.$axios.post("/processAndProcessGroup/runProcessOrProcessGroup",this.$qs.stringify(n)).then((function(n){200===n.data.code?(e.$event.emit("loading",!1),e.$Modal.success({title:e.$t("tip.title"),content:"".concat(t.name," ")+e.$t("tip.run_success_content"),onOk:function(){var a="";"TASK"===t.processType?a="/drawingBoard/page/process/mxGraph/index.html?drawingBoardType=PROCESS&processType=".concat(t.processType,"&load=").concat(n.data.processId):"GROUP"===t.processType&&(a="/drawingBoard/page/processGroup/mxGraph/index.html?drawingBoardType=PROCESS&processType=".concat(t.processType,"&load=").concat(n.data.processGroupId)),e.$router.push({path:"/drawingBoard",query:{src:a}})}})):(e.$event.emit("loading",!1),e.$Message.error({content:"".concat(t.name," ")+e.$t("tip.run_fail_content"),duration:3}))})).catch((function(t){e.$event.emit("loading",!1),e.$Message.error({content:e.$t("tip.fault_content"),duration:3})}))},handleStop:function(t){var e=this,n={processType:"TASK"===t.processType?"PROCESS":"PROCESS_GROUP",id:t.id};this.$event.emit("loading",!0),this.$axios.post("/processAndProcessGroup/stopProcessOrProcessGroup",this.$qs.stringify(n)).then((function(n){200===n.data.code?(e.$event.emit("loading",!1),e.$Modal.success({title:e.$t("tip.title"),content:"".concat(t.name," ")+e.$t("tip.stop_success_content"),onOk:function(){e.getTableData()}})):(e.$event.emit("loading",!1),e.$Modal.success({title:e.$t("tip.title"),content:"".concat(t.name," ")+e.$t("tip.stop_fail_content")}))})).catch((function(t){e.$event.emit("loading",!1),e.$Message.error({content:e.$t("tip.fault_content"),duration:3})}))},handleUpdateProgress:function(){var t=this,e="";this.tableData.forEach((function(t){"STARTED"===t.state&&"TASK"===t.processType&&(e=e+"taskAppIds="+t.appId+"&"),"STARTED"===t.state&&"GROUP"===t.processType&&(e=e+"groupAppIds="+t.appId+"&")})),""!==e&&this.$axios.get("/processAndProcessGroup/getAppInfoList?"+e.slice(0,e.length-1)).then((function(t){t.data.code})).catch((function(e){t.$Message.error({content:t.$t("tip.fault_content"),duration:3})}))},handleDeleteRow:function(t){var e=this;this.$Modal.confirm({title:this.$t("tip.title"),okText:this.$t("modal.confirm"),cancelText:this.$t("modal.cancel_text"),content:"".concat(this.$t("modal.delete_content")," ").concat(t.name,"?"),onOk:function(){var n={id:t.id,processType:"TASK"===t.processType?"PROCESS":"PROCESS_GROUP"};e.$axios.get("/processAndProcessGroup/delProcessOrProcessGroup",{params:n}).then((function(n){200===n.data.code?(e.$Modal.success({title:e.$t("tip.title"),content:"".concat(t.name," ")+e.$t("tip.delete_success_content")}),e.handleReset(),e.getTableData()):e.$Message.error({content:"".concat(t.name," ")+e.$t("tip.delete_fail_content"),duration:3})})).catch((function(t){e.$Message.error({content:e.$t("tip.fault_content"),duration:3})}))}})},getTableData:function(){var t=this,e={page:this.page,limit:this.limit};this.param&&(e.param=this.param),this.$axios.get("/processAndProcessGroup/processAndProcessGroupListPage",{params:e}).then((function(e){200===e.data.code?(t.tableData=e.data.data,t.total=e.data.count,t.handleUpdateProgress()):t.$Message.error({content:t.$t("tip.request_fail_content"),duration:3})})).catch((function(e){t.$Message.error({content:t.$t("tip.fault_content"),duration:3})}))},onPageChange:function(t){this.page=t,this.getTableData()},onPageSizeChange:function(t){this.limit=t,this.getTableData()}}}),r=s,i=(n("dd0b"),n("2877")),c=Object(i["a"])(r,a,o,!1,null,"231bce8a",null);e["default"]=c.exports},4160:function(t,e,n){"use strict";var a=n("23e7"),o=n("17c2");a({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"680d":function(t,e,n){},8418:function(t,e,n){"use strict";var a=n("c04e"),o=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var r=a(e);r in t?o.f(t,r,s(0,n)):t[r]=n}},"99af":function(t,e,n){"use strict";var a=n("23e7"),o=n("d039"),s=n("e8b5"),r=n("861d"),i=n("7b0b"),c=n("50c4"),l=n("8418"),p=n("65f0"),d=n("1dde"),u=n("b622"),h=n("2d00"),f=u("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",y=h>=51||!o((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),b=d("concat"),S=function(t){if(!r(t))return!1;var e=t[f];return void 0!==e?!!e:s(t)},v=!y||!b;a({target:"Array",proto:!0,forced:v},{concat:function(t){var e,n,a,o,s,r=i(this),d=p(r,0),u=0;for(e=-1,a=arguments.length;e<a;e++)if(s=-1===e?r:arguments[e],S(s)){if(o=c(s.length),u+o>g)throw TypeError(m);for(n=0;n<o;n++,u++)n in s&&l(d,u,s[n])}else{if(u>=g)throw TypeError(m);l(d,u++,s)}return d.length=u,d}})},a640:function(t,e,n){"use strict";var a=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},b0c0:function(t,e,n){var a=n("83ab"),o=n("9bf2").f,s=Function.prototype,r=s.toString,i=/^\s*function ([^ (]*)/,c="name";a&&!(c in s)&&o(s,c,{configurable:!0,get:function(){try{return r.call(this).match(i)[1]}catch(t){return""}}})},d03f:function(t,e,n){t.exports=n.p+"img/20200714234723.7b0f121b.png"},dd0b:function(t,e,n){"use strict";var a=n("680d"),o=n.n(a);o.a},fb6a:function(t,e,n){"use strict";var a=n("23e7"),o=n("861d"),s=n("e8b5"),r=n("23cb"),i=n("50c4"),c=n("fc6a"),l=n("8418"),p=n("b622"),d=n("1dde"),u=n("ae40"),h=d("slice"),f=u("slice",{ACCESSORS:!0,0:0,1:2}),g=p("species"),m=[].slice,y=Math.max;a({target:"Array",proto:!0,forced:!h||!f},{slice:function(t,e){var n,a,p,d=c(this),u=i(d.length),h=r(t,u),f=r(void 0===e?u:e,u);if(s(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?o(n)&&(n=n[g],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(d,h,f);for(a=new(void 0===n?Array:n)(y(f-h,0)),p=0;h<f;h++,p++)h in d&&l(a,p,d[h]);return a.length=p,a}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);