(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(29)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),i=a(4),l=a(3),c=a(5),o=a(0),s=a.n(o),d=a(11),m=a.n(d),u=(a(18),a(19),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={notes:["add elegant animation to hover of formItem","add elegant animation to when no item selected to edit","readony & required check boxes dont work","have tab in editing item panel","edit doesn't start on first click","arrange properties in formItem","middle database for checking what type of properties this item should have...","drag & drop not working","tabbing in edit item column","to show sth when nothing is in the form","add good animation for add item opening btns","delte <Buttons /> from header","edit as code","third database for fileds that have chooses (like select list & radios)","itemsshowcase goes under footer","isUp state in index.js","name for column headers","close edit btn","first item in itemsshowcase goes behind header","height of columns is hand entered (not with calc)",'turn components to smaller components as much as possible (a component must do only "one" job)',"delete colors from 'index.ccc'","responsive","notes from main2.js","header box-shadow","in edit item, if value != '' --\x3e placeholder = ''","start serious item by item adding the btns","border-radius: 50px","grid doesn't work with edge","checkbox front text","form submition and reset","repeat password","uuid repeats id in new fields","double check for delete or it can go, but has fast und btn like G-mail","reset doesnt work","clear doesnt work","","","routers","redux","","mbti team","","open accardion :)","current: clone btn id"]},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.state.notes.map(function(e,t){return s.a.createElement(p,{note:e,key:t})}))}}]),t}(o.Component)),p=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,"- ",this.props.note,s.a.createElement("br",null))}}]),t}(o.Component),h=u,b=(a(20),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"logo-container"},s.a.createElement("div",{className:"logo-unit",id:"logo-unit-1"}),s.a.createElement("div",{className:"logo-unit",id:"logo-unit-2"},s.a.createElement("div",{className:"logo-unit",id:"logo-sub-unit-2-1"}),s.a.createElement("div",{className:"logo-unit",id:"logo-sub-unit-2-2"})),s.a.createElement("div",{className:"logo-unit",id:"logo-unit-3"})))}}]),t}(o.Component)),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).showNotes=function(){document.querySelector("#notes").classList.toggle("roshan")},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"header-wraper"},s.a.createElement("h1",{id:"header-text",className:"header-icon"},"Form Maker",s.a.createElement("code",{id:"header-code",onClick:this.showNotes},"v 2.0",s.a.createElement("span",{id:"notes"},s.a.createElement(h,null)))),s.a.createElement("div",{id:"header-logo",className:"header-icon"},s.a.createElement(b,{id:"hamid-header"})))}}]),t}(o.Component),v=a(7),E=a(6),C=a.n(E),g=(a(23),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={btns:"email, month, file, time, url, search, radio, tel"},a.headerClickHandler=function(e){var t=document.querySelectorAll(".add-item-group");if(e.target.parentElement.classList.contains("open"))e.target.parentElement.classList.remove("open"),e.target.parentElement.classList.add("close");else if(e.target.parentElement.classList.contains("close")){var a=!0,n=!1,r=void 0;try{for(var i,l=t[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var c=i.value;c.classList.remove("open"),c.classList.add("close")}}catch(o){n=!0,r=o}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}e.target.parentElement.classList.add("open"),e.target.parentElement.classList.remove("close")}},a.onClickHandler=function(e){var t=e.target.name;a.props.onClick(t)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"add-item"},s.a.createElement("h2",{className:"column-header"},"Add Item"),s.a.createElement("div",{className:"column-body"},s.a.createElement("div",{className:"add-item-group close"},s.a.createElement("div",{className:"add-item-group-header",onClick:this.headerClickHandler},"primary fields"),s.a.createElement("div",{className:"add-item-group-body"},s.a.createElement("button",{className:"add-item-group-btn",onClick:this.onClickHandler,name:"text"},"text"),s.a.createElement("button",{className:"add-item-group-btn",onClick:this.onClickHandler,name:"password"},"password"),s.a.createElement("button",{className:"add-item-group-btn",onClick:this.onClickHandler,name:"button"},"button"),s.a.createElement("button",{className:"add-item-group-btn",onClick:this.onClickHandler,name:"hidden"},"hidden"),s.a.createElement("button",{className:"add-item-group-btn",onClick:this.onClickHandler,name:"checkbox"},"checkbox"),s.a.createElement("button",{className:"add-item-group-btn",onClick:this.onClickHandler,name:"range"},"range"),s.a.createElement("button",{className:"add-item-group-btn",onClick:this.onClickHandler,name:"color"},"color"),s.a.createElement("button",{className:"add-item-group-btn",onClick:this.onClickHandler,name:"date"},"date"),s.a.createElement("button",{className:"add-item-group-btn",onClick:this.onClickHandler,name:"number"},"number"))),s.a.createElement("div",{className:"add-item-group close"},s.a.createElement("div",{className:"add-item-group-header",onClick:this.headerClickHandler},"advanced fileds"),s.a.createElement("div",{className:"add-item-group-body"},s.a.createElement("button",{className:"add-item-group-btn"},"number 1"),s.a.createElement("button",{className:"add-item-group-btn"},"item 2"),s.a.createElement("button",{className:"add-item-group-btn"},"item 3"),s.a.createElement("button",{className:"add-item-group-btn"},"item 4"))),s.a.createElement("div",{className:"add-item-group close"},s.a.createElement("div",{className:"add-item-group-header",onClick:this.headerClickHandler},"premaid fileds"),s.a.createElement("div",{className:"add-item-group-body"},s.a.createElement("button",{className:"add-item-group-btn"},"item 1"),s.a.createElement("button",{className:"add-item-group-btn"},"item 2"),s.a.createElement("button",{className:"add-item-group-btn"},"item 3"),s.a.createElement("button",{className:"add-item-group-btn"},"item 4"))))))}}]),t}(o.Component)),y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={check:!1},a.doubleCheckClear=function(){!0===a.state.check?a.props.onClick():a.setState({check:!0})},a.mouseoutFunc=function(){a.setState({check:!1})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"clear-form-btn",onClick:this.doubleCheckClear,onMouseOut:this.mouseoutFunc},this.state.check?"Are you sure?":"Clear Form"))}}]),t}(o.Component),k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).resetClickHandler=function(){var e=a.props.item.id,t=a.props.item;a.props.onClick(e,"reset",t)},a.editClikHandler=function(){var e=a.props.item.id,t=a.props.item;a.props.onClick(e,"edit",t)},a.cloneClickHandler=function(){var e=a.props.item.id,t=a.props.item;a.props.onClick(e,"clone",t)},a.deleteClickHandler=function(){var e=a.props.item.id,t=a.props.item;a.props.onClick(e,"delete",t)},a.clickHandler=function(){var e=a.props.item.id,t=a.props.item;a.props.onClick(e,"delete",t)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.name,a=e.type,n=e.label,r=e.placeHolder,i=e.value,l=e.description,c=e.required;return s.a.createElement("div",{className:this.props.item.id===this.props.activeIdNumber?"item-row item-row-active":"item-row"},s.a.createElement("div",{className:"item-row-header"},s.a.createElement("div",{className:"item-row-header-name"},s.a.createElement("h4",null,"::: ",t)),s.a.createElement("div",{className:"item-row-header-btn-panel"},s.a.createElement("div",{className:"item-row-header-btn",name:"edit",onClick:this.resetClickHandler},"r",s.a.createElement("div",{className:"item-row-header-btn-desc"},"Reset")),s.a.createElement("div",{className:"item-row-header-btn",name:"edit",onClick:this.editClikHandler},"e",s.a.createElement("div",{className:"item-row-header-btn-desc"},"Edit")),s.a.createElement("div",{className:"item-row-header-btn",name:"edit",onClick:this.cloneClickHandler},"c",s.a.createElement("div",{className:"item-row-header-btn-desc"},"Clone")),s.a.createElement("div",{className:"item-row-header-btn",name:"edit",onClick:this.clickHandler},"\xd7",s.a.createElement("div",{className:"item-row-header-btn-desc"},"Delete")))),s.a.createElement("div",{className:"item-row-body",onClick:this.editClikHandler},s.a.createElement("label",null,n," ",s.a.createElement("span",{className:"required-star"},c?"*":"")),s.a.createElement("input",{type:a,placeholder:r,value:i,readOnly:!0,className:"item-row-input"}),s.a.createElement("div",{className:"item-description"},l)))}}]),t}(o.Component),O=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:j},s.a.createElement("div",null,"no item to show"),s.a.createElement("div",null,"add some items to start making form"))}}]),t}(o.Component),j={textAlign:"center",marginTop:40},N=O,w=(a(24),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return 0!==this.props.items.length?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"items-showcase"},s.a.createElement("h2",{className:"column-header"},"Items Showcase",s.a.createElement(y,{onClick:this.props.onClear})),s.a.createElement("div",{className:"column-body"},this.props.items.map(function(t){return s.a.createElement(k,{key:t.id,item:t,activeIdNumber:e.props.activeIdNumber,onClick:e.props.onClick})})))):0===this.props.items.length?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"items-showcase"},s.a.createElement("h2",{className:"column-header"},"Items Showcase"),s.a.createElement("div",{className:"column-body"},s.a.createElement(N,null)))):void 0}}]),t}(o.Component)),x=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={id:"",value:"",placeHolder:"",type:"",label:"",idname:"",classname:"",description:"",required:!1,readOnly:!1},a.onChangeHandler=function(e){var t=e.target.name,n=e.target.value,r=a.state.id;a.props.onChange(r,t,n)},a.onCheckHandler=function(e){var t=a.state.id,n=e.target.name,r=!a.state[n];a.props.onChange(t,n,r)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.item,a=t.id,n=t.idname,r=t.value,i=t.placeHolder,l=t.type,c=t.label,o=t.classname,s=t.description,d=t.required,m=t.readOnly;this.setState({id:a,value:r,placeHolder:i,type:l,label:c,idname:n,classname:o,description:s,required:d,readOnly:m})}},{key:"render",value:function(){var e=this.state,t=e.id,a=e.value,n=e.idname,r=e.placeHolder,i=e.label,l=e.classname,c=e.description,o=e.required,d=e.readOnly;return s.a.createElement(s.a.Fragment,null,t,s.a.createElement("div",{className:"edit-item-row-g"},s.a.createElement("label",{className:"edit-label"},s.a.createElement("code",null,"label:")),s.a.createElement("br",null),s.a.createElement("input",{value:i,name:"label",className:"edit-input",onChange:this.onChangeHandler})),s.a.createElement("div",{className:"edit-item-row-g"},s.a.createElement("label",{className:"edit-label"},s.a.createElement("code",null,"value:")),s.a.createElement("br",null),s.a.createElement("input",{value:a,name:"value",className:"edit-input",onChange:this.onChangeHandler})),s.a.createElement("div",{className:"edit-item-row-g"},s.a.createElement("label",{className:"edit-label"},s.a.createElement("code",null,"placeholder:")),s.a.createElement("br",null),s.a.createElement("input",{value:r,name:"placeHolder",className:"edit-input",onChange:this.onChangeHandler})),s.a.createElement("div",{className:"edit-item-row-g"},s.a.createElement("label",{className:"edit-label"},s.a.createElement("code",null,"id:")),s.a.createElement("br",null),s.a.createElement("input",{type:"text",value:n,name:"idname",className:"edit-input",onChange:this.onChangeHandler})),s.a.createElement("div",{className:"edit-item-row-g"},s.a.createElement("label",{className:"edit-label"},s.a.createElement("code",null,"class:")),s.a.createElement("br",null),s.a.createElement("input",{value:l,name:"classname",className:"edit-input",onChange:this.onChangeHandler})),s.a.createElement("div",{className:"edit-item-row-g"},s.a.createElement("label",{className:"edit-label"},s.a.createElement("code",null,"description:")),s.a.createElement("br",null),s.a.createElement("textarea",{value:c,name:"description",className:"edit-input edit-input-textarea",onChange:this.onChangeHandler})),s.a.createElement("div",{className:"edit-item-row-g"},s.a.createElement("input",{type:"checkbox",name:"required",checked:o,onChange:this.onCheckHandler})," Required"),s.a.createElement("div",{className:"edit-item-row-g"},s.a.createElement("input",{type:"checkbox",name:"readOnly",checked:d,onChange:this.onCheckHandler})," Readonly"))}}]),t}(o.Component),H=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:I},"select an item to start editing")}}]),t}(o.Component),I={textAlign:"center",marginTop:40},S=H,q=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={item:""},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({item:e.item})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",{id:"edit-as-code-header"},"</> ","edit as code"),s.a.createElement("div",null,s.a.createElement("textarea",{id:"edit-as-code-textarea",value:"",readOnly:!0})))}}]),t}(o.Component),F=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{id:"edit-reset-btn",onClick:this.props.onClick},"Reset"))}}]),t}(o.Component),M=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{id:"edit-end-btn",onClick:this.props.onClick},"Done"))}}]),t}(o.Component),A=(a(25),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={item:[]},a.resetHandler=function(){var e=a.state.item[0],t=a.props.id;a.props.onReset(t,e)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(""!==this.props.id){var t=e.items.filter(function(t){return t.id===e.id});this.setState({item:t})}}},{key:"render",value:function(){return""!==this.props.id?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"edit-item"},s.a.createElement("h2",{className:"column-header"},"Edit Item"),s.a.createElement("div",{className:"column-body",id:"edit-item-body"},s.a.createElement("div",{id:"edit-item-presenter"},s.a.createElement(x,{item:this.state.item[0],onChange:this.props.onChange})),s.a.createElement("div",{id:"edit-end"},s.a.createElement(M,{onClick:this.props.endEdit})),s.a.createElement("div",{id:"edit-reset"},s.a.createElement(F,{onClick:this.resetHandler})),s.a.createElement("div",{id:"edit-as-code"},s.a.createElement(q,{item:this.state.item[0]}))))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"edit-item"},s.a.createElement("h2",{className:"column-header"},"Edit Item"),s.a.createElement("div",{className:"column-body"},s.a.createElement(S,null))))}}]),t}(o.Component)),T=(a(26),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).previewForm=function(){a.props.onClick("previewform")},a.formSetting=function(){a.props.onClick("formsetting")},a.generateCode=function(){a.props.onClick("generatecode")},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"form-panel"},s.a.createElement("div",{className:"form-panel-item",name:"previewForm",onClick:this.previewForm},"I",s.a.createElement("span",{className:"form-panel-item-desc"},"Preview Form")),s.a.createElement("div",{className:"form-panel-item",name:"formSetting",onClick:this.formSetting},"I",s.a.createElement("span",{className:"form-panel-item-desc"},"Form Setting")),s.a.createElement("div",{className:"form-panel-item",name:"generateCode",onClick:this.generateCode},"I",s.a.createElement("span",{className:"form-panel-item-desc"},"Generate Code"))))}}]),t}(o.Component)),L=(a(27),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={formItems:[{id:C.a.v4(),name:"name of btn",type:"text",label:"untitled",idname:"id",required:!1,readOnly:!0,hasMaxChar:!1,maxChar:"",description:"description",classname:"class",value:"value",placeHolder:"placeHolder",title:"title",hasSpecialChar:!1,specialCharPattern:""},{id:C.a.v4(),name:"new name",type:"text",label:"new title",idname:"some id",required:!0,readOnly:!1,hasMaxChar:!1,maxChar:"",description:"",classname:"hey",value:"",placeHolder:"say sth"},{id:C.a.v4(),name:"nme of btn",type:"password",label:"another title",idname:"id",required:!0,readOnly:!1,hasMaxChar:!1,maxChar:"",description:"and there it goes",classname:"dadadada",value:"this is a value",placeHolder:""}],fieldTypes:{text:{id:"",name:"text input",type:"text",label:"untitled",idname:"",required:!1,readOnly:!1,hasMaxChar:!1,maxChar:"",description:"",classname:"",value:"",placeHolder:""},password:{name:"name of btn",type:"text",label:"untitled",idname:"",required:!1,readOnly:!1,hasMaxChar:!1,maxChar:"",description:"",classname:"",value:"",placeHolder:""},button:{name:"button",type:"button",label:"untitled",idname:"",required:!1,readOnly:!1,hasMaxChar:!1,maxChar:"",description:"",classname:"",value:"new button",placeHolder:""},hidden:{name:"hidden field",type:"hidden",label:"untitled",idname:"id",required:!1,readOnly:!1,hasMaxChar:!1,maxChar:"",description:"",classname:"",value:"",placeHolder:""},checkbox:{name:"checkbox",type:"checkbox",label:"untitled",idname:"id",required:!1,readOnly:!1,hasMaxChar:!1,maxChar:"",description:"",classname:"",value:"",isChecked:!1,placeHolder:""},range:{name:"range field",type:"range",label:"untitled",idname:"id",required:!1,readOnly:!1,hasMaxChar:!1,maxChar:"",hasMin:!1,min:"",hasmax:!1,max:"",hasStep:!1,step:"",description:"",classname:"",value:"",placeHolder:""},color:{name:"color field",type:"color",label:"untitled",idname:"id",required:!1,readOnly:!1,hasMaxChar:!1,maxChar:"",description:"",classname:"",value:"#ffffff",placeHolder:""},date:{name:"date field",type:"date",label:"untitled",idname:"id",required:!1,readOnly:!1,hasMaxChar:!1,maxChar:"",description:"",classname:"",value:"",placeHolder:""},number:{name:"number field",type:"number",label:"untitled",idname:"id",required:!1,readOnly:!1,hasMaxChar:!1,maxChar:"",description:"",classname:"",value:"",placeHolder:""}},activeId:""},a.onAdd=function(e){var t={id:C.a.v4(),name:a.state.fieldTypes[e].name,type:a.state.fieldTypes[e].type,label:a.state.fieldTypes[e].label,idname:a.state.fieldTypes[e].idname,required:a.state.fieldTypes[e].required,readOnly:a.state.fieldTypes[e].readOnly,hasMaxChar:a.state.fieldTypes[e].hasMaxChar,maxChar:a.state.fieldTypes[e].maxChar,description:a.state.fieldTypes[e].description,classname:a.state.fieldTypes[e].classname,value:a.state.fieldTypes[e].value,placeHolder:a.state.fieldTypes[e].placeHolder,sofp:a.state.fieldTypes[e].sofp};a.setState({formItems:[].concat(Object(v.a)(a.state.formItems),[t])})},a.startEdit=function(e,t,n){"edit"===t?a.setState({activeId:e}):"delete"===t?a.deleteHandler(e):"clone"===t?a.cloneHandler(n):"reset"===t&&a.resetHandler(e,n)},a.onClear=function(){a.setState({formItems:[],activeId:""})},a.deleteHandler=function(e){a.setState({formItems:Object(v.a)(a.state.formItems.filter(function(t){return t.id!==e})),activeId:a.state.activeId===e?"":a.state.activeId})},a.cloneHandler=function(e){var t={id:C.a.v4(),name:e.name,type:e.type,label:e.label,required:e.required,readOnly:e.readOnly,hasMaxChar:e.hasMaxChar,maxChar:e.maxChar,description:e.description,classname:e.classname,value:e.value,placeHolder:e.placeHolder};a.setState({formItems:[].concat(Object(v.a)(a.state.formItems),[t])})},a.onEdit=function(e,t,n){a.setState({formItems:a.state.formItems.map(function(a){return a.id===e&&(a[t]=n),a})})},a.endEdit=function(){a.setState({activeId:""})},a.resetHandler=function(e,t){},a.formPanelClicked=function(e){"previewform"===e?a.previewform():"formsetting"===e?a.formsetting():"generatecode"===e&&a.generatecode()},a.previewform=function(){},a.formsetting=function(){},a.generatecode=function(){},a.onClickHandler=function(){a.props.onClick()},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.setState({activeId:this.state.formItems[0].id})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"main-panel",onClick:this.onClickHandler},s.a.createElement("div",{className:"column"},s.a.createElement(g,{onClick:this.onAdd}),s.a.createElement(T,{onClick:this.formPanelClicked})),s.a.createElement("div",{className:"column"},s.a.createElement(w,{items:this.state.formItems,activeIdNumber:this.state.activeId,onClick:this.startEdit,onClear:this.onClear})),s.a.createElement("div",{className:"column"},s.a.createElement(A,{items:this.state.formItems,id:this.state.activeId,onChange:this.onEdit,endEdit:this.endEdit,onReset:this.resetHandler}))))}}]),t}(o.Component));a(28);function R(){return s.a.createElement("div",{id:"react-footer",className:"footer-icon"},"Powered from ","{react}")}var P=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"hamid-footer",className:"footer-icon"},s.a.createElement("span",{id:"hamid-logo-svg"},s.a.createElement(b,null)),s.a.createElement("span",{id:"hamid-text"},"\xa9hamid331994"))}}]),t}(o.Component),U=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"footer-wraper",className:this.props.isUp?"footer-expand":"footer-shrink"},s.a.createElement(P,null),s.a.createElement(R,null))}}]),t}(o.Component),W=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={noEffectState:!1,isUp:!1},a.startAction=function(){a.setState({isUp:!1})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"header"},s.a.createElement(f,null)),s.a.createElement("div",{id:"main-body"},s.a.createElement(L,{onClick:this.startAction})),s.a.createElement("div",{id:"footer"},s.a.createElement(U,{isUp:this.state.isUp})))}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({noEffectState:!e.state.noEffectState})},300)}}]),t}(o.Component);m.a.render(s.a.createElement(W,null),document.querySelector("#root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.73831475.chunk.js.map