(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(50)},35:function(e,t,a){},37:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),l=a.n(n),r=a(16),s=a.n(r),o=(a(35),a(7)),c=a(8),i=a(11),d=a(9),m=a(10),u=a(12),p=(a(37),a(27)),E=a(51),h=a(52),f=a(71),g=a(53),b=a(54),v=a(55),C=a(56),O=a(57),j=a(72),N=a(58),I=a(59),S=a(60),y=a(61),k=a(62),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).toggleNav=a.toggleNav.bind(Object(u.a)(Object(u.a)(a))),a.toggleImportPopover=a.toggleImportPopover.bind(Object(u.a)(Object(u.a)(a))),a.toggleHelp=a.toggleHelp.bind(Object(u.a)(Object(u.a)(a))),a.state={navIsOpen:!1,importPopoverOpen:!1,helpOpen:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({navIsOpen:!this.state.navIsOpen})}},{key:"toggleImportPopover",value:function(){this.setState({importPopoverOpen:!this.state.importPopoverOpen})}},{key:"toggleHelp",value:function(){this.setState({helpOpen:!this.state.helpOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E.a,{className:"topNav",color:"light",light:!0,expand:"sm"},l.a.createElement(h.a,{id:"autoAGBrand"},"autoAG"),l.a.createElement(f.a,{placement:"right",trigger:"hover",target:"autoAGBrand",delay:"{show:0, hide:0}",arrowClassName:"CalTooltipArrow",className:"CalTooltip"},"Much Love For Cal!"),l.a.createElement(g.a,{onClick:this.toggleNav}),l.a.createElement(b.a,{isOpen:this.state.navIsOpen,navbar:!0},l.a.createElement(v.a,{className:"ml-auto",navbar:!0},l.a.createElement(C.a,null,l.a.createElement(O.a,{onClick:this.toggleHelp},"Help and Usage")),l.a.createElement(j.a,{isOpen:this.state.helpOpen,toggle:this.toggleHelp},l.a.createElement(N.a,{toggle:this.toggleHelp},"Modal title"),l.a.createElement(I.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.a.createElement(S.a,null,l.a.createElement(y.a,{color:"secondary",onClick:this.toggleHelp},"Close"))),l.a.createElement(C.a,null,l.a.createElement(O.a,{onClick:this.toggleImportPopover},"Import")),l.a.createElement(j.a,{isOpen:this.state.importPopoverOpen,toggle:this.toggleImportPopover},l.a.createElement(N.a,{toggle:this.toggleImportPopover},"Select .autoag file to import"),l.a.createElement(I.a,null,l.a.createElement(k.a,{type:"file",name:"file",id:"exampleFile"})),l.a.createElement(S.a,null,l.a.createElement(y.a,{color:"secondary",onClick:this.toggleImportPopover},"Cancel")," ",l.a.createElement(y.a,{color:"primary",onClick:this.toggleImportPopover},"Do Something"))),l.a.createElement(C.a,null,l.a.createElement(O.a,null,l.a.createElement("span",null,"Save Session"))),l.a.createElement(C.a,null,l.a.createElement(O.a,null,"Export")),l.a.createElement(C.a,null,l.a.createElement(O.a,{className:"githubNav",href:"https://github.com/JingkangZhang/autoAG"},l.a.createElement("svg",{height:"24",class:"octicon octicon-mark-github",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))))))))}}]),t}(l.a.PureComponent),w=a(70),A=a(63),H=a(64),T=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.functionName,t="",a="";return e.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)||(a=l.a.createElement("span",{class:"labelAlert",id:"functionNameAlert"+this.props.testIndex},l.a.createElement(f.a,{placement:"right",target:"functionNameAlert"+this.props.testIndex,arrowClassName:"AlertTooltipArrow",className:"AlertTooltip"},"Please enter a valid Python function name.")),t="alertBorder"),l.a.createElement(A.a,null,l.a.createElement("div",{className:t},l.a.createElement(H.a,{for:"functionName"},l.a.createElement("span",null,"Function Name:"),a),l.a.createElement(k.a,{type:"text",name:"functionName",spellcheck:"false",className:"forPlaceHolder codeInput",placeholder:"Fibonacci",onChange:this.props.formHandler,"data-testid":this.props.testIndex,value:e})))}}]),t}(l.a.Component),P=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){this.props.functionName;var e=this.props.functionParams,t="",a="";return e.match(/^\s*((\*)?(\*)?[a-zA-Z_][a-zA-Z0-9_]*(\s*\=\s*[^ ]+?)?\s*,\s*)*((\*)?(\*)?[a-zA-Z_][a-zA-Z0-9_]*(\s*\=\s*[^ ]+?)?\s*,?\s*)?$/)||(a=l.a.createElement("span",{class:"labelAlert",id:"functionNameAlert"+this.props.testIndex},l.a.createElement(f.a,{placement:"right",target:"functionNameAlert"+this.props.testIndex,arrowClassName:"AlertTooltipArrow",className:"AlertTooltip"},"Please enter a valid Python function parameter list.",l.a.createElement("br",null),' e.g., "arg1, arg2=None, *args, **kwargs".')),t="alertBorder"),l.a.createElement(A.a,null,l.a.createElement("div",{className:t},alert,l.a.createElement(H.a,{for:"functionParams"},l.a.createElement("span",null,"Function Parameters:"),a),l.a.createElement(k.a,{type:"text",name:"functionParams",spellcheck:"false",className:"forPlaceHolder codeInput",placeholder:"arg1, arg2",onChange:this.props.formHandler,"data-testid":this.props.testIndex,value:e})))}}]),t}(l.a.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(A.a,null,l.a.createElement(H.a,{for:"exampleText"},"Question Description:"),l.a.createElement(k.a,{type:"textarea",name:"formDescription",spellcheck:"false",id:"formDescription",onChange:this.props.formHandler,className:"forPlaceHolder codeInput","data-testid":this.props.testIndex,placeholder:"Return the Nth fibonacci number.",value:this.props.description}))}}]),t}(l.a.Component),B=a(65),U=a(66),F=a(67),R=a(68),L=a(48);function G(e,t){var a,n,l=(e=e.replace(/,\s*$/,"")).split(/,/),r=0,s=!1,o=0,c=!0,i=!1,d=void 0;try{for(var m,u=l[Symbol.iterator]();!(c=(m=u.next()).done);c=!0){var p=m.value;(p=(p=p.replace(/^\s*/,"")).replace(/\s*$/,"")).match(/=/)?r+=1:p.match(/\*/)?s=!0:o+=1}}catch(g){i=!0,d=g}finally{try{c||null==u.return||u.return()}finally{if(i)throw d}}e.match(/^\s*$/)?(n=0,a=0,o=0):(a=o,n=s?666666:r+o);var E=function(e){e=(e=e.replace(/^\s*,/,"")).replace(/,\s*$/,"");for(var t=1,a=[],n=!1,l=0;l<e.length;l++){var r=e.charAt(l);if("'"===r||'"'===r)0!=a.length&&a[a.length-1]===r?(a.pop(),n=!1):(a.push(r),n=!0);else if(!n)if(","===r&&0==a.length)t+=1;else if("("===r||"["===r||"{"===r)a.push(r);else if(")"===r){if(0==a.length||"("!==a[a.length-1])return{count:t,error:!0};a.pop()}else if("]"===r){if(0==a.length||"["!==a[a.length-1])return{count:t,error:!0};a.pop()}else if("}"===r){if(0==a.length||"{"!==a[a.length-1])return{count:t,error:!0};a.pop()}}if(0!=a.length)return console.log("ended, returning error here"),console.log(a),{count:t,error:!0};return{count:t,error:!1}}(t),h=t.match(/^\s*$/)?0:E.count,f=h>=a&&h<=n&&!E.error;return{result:Boolean(f),numRegular:o,numEqSigns:r,starPresents:s,error:E.error,count:E.count,realCount:h}}var q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).handleToggle=a.handleToggle.bind(Object(u.a)(Object(u.a)(a))),a.state={collapse:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleToggle",value:function(e){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.testCases.length;t++)e.push(l.a.createElement(W,{testCaseData:this.props.testCases[t],testCaseIndex:t,testIndex:this.props.testIndex,functionName:this.props.functionName,functionParams:this.props.functionParams,formHandler:this.props.formHandler}));return l.a.createElement(B.a,null,l.a.createElement(y.a,{className:"testCaseHeader",color:"dark",onClick:this.handleToggle},"Test Cases"),l.a.createElement(b.a,{isOpen:!this.state.collapse},l.a.createElement("div",{class:"testCasesGroup"},e,l.a.createElement(y.a,{name:"addTestCase",className:"addTestCaseButton","data-testid":this.props.testIndex,onClick:this.props.formHandler,color:"secondary",size:"sm"},"Add Test Case"),l.a.createElement("div",{class:"testCaseBottomBorder"}))))}}]),t}(l.a.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="",t="",a=G(this.props.functionParams,this.props.testCaseData[0]);if(!a.result){var n="";n=a.error?"You have an unmatched symbol error in your No."+a.count+" argument.":!0===a.starPresents?"You are supposed to pass in at least "+a.numRegular+" arguments. Found "+a.realCount+".":0===a.numEqSigns?"You are supposed to pass in "+a.numRegular+" arguments. Found "+a.realCount+".":"You are supposed to pass in "+a.numRegular+" required arguments, "+a.numEqSigns+" optional arguments. Found "+a.realCount+".",t=l.a.createElement("span",{class:"testCaseAlert",id:"testCaseAlert"+this.props.testIndex+"_"+this.props.testCaseIndex},l.a.createElement(f.a,{placement:"right",target:"testCaseAlert"+this.props.testIndex+"_"+this.props.testCaseIndex,arrowClassName:"AlertTooltipArrow",className:"AlertTooltip"},n)),e="alertTestCaseBorder"}!1===a.starPresents&&0===a.numEqSigns&&a.numRegular;return l.a.createElement(U.a,{className:e},l.a.createElement("div",{class:"tg"},l.a.createElement("span",{class:"tgAlert"},t),l.a.createElement("span",{class:"tgInput"},l.a.createElement(F.a,null,l.a.createElement(R.a,{addonType:"prepend"},l.a.createElement(L.a,null,this.props.functionName+" (")),l.a.createElement(k.a,{placeholder:this.props.functionParams,spellcheck:"false",className:"forPlaceHolder",name:"testCaseInput","data-testid":this.props.testIndex,"data-testcaseid":this.props.testCaseIndex,onChange:this.props.formHandler,value:this.props.testCaseData[0]}),l.a.createElement(R.a,{addonType:"append"},l.a.createElement(L.a,null,")")))),l.a.createElement("span",{class:"tgArrow"},l.a.createElement("svg",{id:"rightArrowSVG",xmlns:"http://www.w3.org/2000/svg",width:"27",height:"27",viewBox:"0 0 408 408"},l.a.createElement("polygon",{id:"rightArrowPath",points:"204,102 204,0 408,204 204,408 204,306 0,306 0,102   "}))),l.a.createElement("span",{class:"tgOutput"},l.a.createElement(k.a,{placeholder:"expected output",spellcheck:"false",className:"forPlaceHolder",name:"testCaseOutput","data-testid":this.props.testIndex,"data-testcaseid":this.props.testCaseIndex,onChange:this.props.formHandler,value:this.props.testCaseData[1]}))))}}]),t}(l.a.Component),z=q,Y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.fullScore,t="",a="";return(""===e||isNaN(e))&&(a=l.a.createElement("span",{class:"labelAlert",id:"fullScoreAlert"+this.props.testIndex},l.a.createElement(f.a,{placement:"right",target:"fullScoreAlert"+this.props.testIndex,arrowClassName:"AlertTooltipArrow",className:"AlertTooltip"},"Please enter a valid number.")),t="alertBorder"),l.a.createElement(A.a,{className:"advancedSettingItem"},l.a.createElement("div",{className:t},l.a.createElement(H.a,{for:"fullScore"},l.a.createElement("span",null,"Full Score:"),a),l.a.createElement(k.a,{type:"text",name:"fullScore",className:"forPlaceHolder",placeholder:"1",onChange:this.props.formHandler,"data-testid":this.props.testIndex,value:e})))}}]),t}(l.a.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(A.a,{className:"advancedSettingItem"},l.a.createElement(H.a,{for:"testType"},"Test Type:"),l.a.createElement(k.a,{type:"select",name:"testType",onChange:this.props.formHandler,"data-testid":this.props.testIndex,value:this.props.testType},l.a.createElement("option",{value:"simple"},"simple function"),l.a.createElement("option",{value:"unit"},"unit test")))}}]),t}(l.a.Component),$=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(A.a,{className:"advancedSettingItem"},l.a.createElement(H.a,{for:"testName"},"Test Name:"),l.a.createElement(k.a,{type:"text",name:"testName",spellcheck:"false",className:"forPlaceHolder codeInput",placeholder:"Default: "+this.props.functionName,onChange:this.props.formHandler,"data-testid":this.props.testIndex,value:this.props.testName}))}}]),t}(l.a.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(A.a,{className:"advancedSettingItem"},l.a.createElement(H.a,{for:"partialCredits"},"Partial Credits:"),l.a.createElement(k.a,{type:"select",name:"partialCredits",onChange:this.props.formHandler,"data-testid":this.props.testIndex,value:this.props.partialCredits},l.a.createElement("option",{value:"none"},"none"),l.a.createElement("option",{value:"linear"},"linear")))}}]),t}(l.a.Component),Z=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(A.a,{className:"advancedSettingItem"},l.a.createElement(H.a,{for:"skeletonCode"},"Skeleton Code:"),l.a.createElement(k.a,{type:"textarea",name:"skeletonCode",onChange:this.props.formHandler,"data-testid":this.props.testIndex,className:"forPlaceHolder",placeholder:"'*** YOUR CODE HERE ***'",value:this.props.skeletonCode}))}}]),t}(l.a.Component),J=a(69),X=(a(49),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e="",t="";return this.props.disallowedUse.match(/^(?:\s*(["'])(?:Add|And|Assert|Assign|AugAssign|BitAnd|BitOr|BitXor|Break|Recursion|ClassDef|Continue|Del|Delete|Dict|DictComp|Div|Ellipsis|Eq|ExceptHandler|ExtSlice|FloorDiv|For|FunctionDef|GeneratorExp|Global|Gt|GtE|If|IfExp|Import|ImportFrom|In|Index|Invert|Is|IsNot|LShift|Lambda|List|ListComp|Lt|LtE|Mod|Mult|Nonlocal|Not|NotEq|NotIn|Or|Pass|Pow|RShift|Raise|Return|Set|SetComp|Slice|Starred|Sub|Subscript|Try|Tuple|UAdd|USub|While|With|Yield|YieldFrom)\1\s*,\s*)*(?:\s*(["'])(?:Add|And|Assert|Assign|AugAssign|BitAnd|BitOr|BitXor|Break|Recursion|ClassDef|Continue|Del|Delete|Dict|DictComp|Div|Ellipsis|Eq|ExceptHandler|ExtSlice|FloorDiv|For|FunctionDef|GeneratorExp|Global|Gt|GtE|If|IfExp|Import|ImportFrom|In|Index|Invert|Is|IsNot|LShift|Lambda|List|ListComp|Lt|LtE|Mod|Mult|Nonlocal|Not|NotEq|NotIn|Or|Pass|Pow|RShift|Raise|Return|Set|SetComp|Slice|Starred|Sub|Subscript|Try|Tuple|UAdd|USub|While|With|Yield|YieldFrom)\2\s*)?$/)||(t=l.a.createElement("span",{class:"labelAlert",id:"disallowedUseAlert"+this.props.testIndex},l.a.createElement(f.a,{placement:"right",target:"disallowedUseAlert"+this.props.testIndex,arrowClassName:"AlertTooltipArrow",className:"AlertTooltip"},"Please enter valid names (exactly as shown, case sensitive) surrounded by quotes and separated by commas.")),e="alertBorder"),l.a.createElement(A.a,{className:"advancedSettingItem"},l.a.createElement("div",{className:e},l.a.createElement(H.a,{for:"disallowedUse"},l.a.createElement("span",null,"Disallowed Use:",l.a.createElement("span",{class:"disallowedUseModalLauncher",onClick:this.toggle},"?"),l.a.createElement(Q,{modal:this.state.modal,toggle:this.toggle})),t),l.a.createElement(k.a,{type:"text",name:"disallowedUse",spellcheck:"false",className:"forPlaceHolder",placeholder:"'While', 'For'",onChange:this.props.formHandler,"data-testid":this.props.testIndex,value:this.props.disallowedUse})))}}]),t}(l.a.Component)),Q=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(j.a,{isOpen:this.props.modal,toggle:this.props.toggle},l.a.createElement(N.a,null,"Construct Check For Disallowed Use"),l.a.createElement(I.a,null,l.a.createElement("p",null,"Credits: Berkeley CS61A course staff."),l.a.createElement("p",null,"This amazing python module wrote by CS61A staff checks for certain usage patterns in a python file."),l.a.createElement("p",null,"To include these checks, put the names on the left column in quotes and separate them with commas."),l.a.createElement("p",null,"e.g., 'Add', 'Pow'"),l.a.createElement(J.a,{size:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Pattern"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Add"),l.a.createElement("td",null,"+")),l.a.createElement("tr",null,l.a.createElement("td",null,"And"),l.a.createElement("td",null,"and")),l.a.createElement("tr",null,l.a.createElement("td",null,"Assert"),l.a.createElement("td",null,"assert")),l.a.createElement("tr",null,l.a.createElement("td",null,"Assign"),l.a.createElement("td",null,"=")),l.a.createElement("tr",null,l.a.createElement("td",null,"AugAssign"),l.a.createElement("td",null,"op=")),l.a.createElement("tr",null,l.a.createElement("td",null,"BitAnd"),l.a.createElement("td",null,"&")),l.a.createElement("tr",null,l.a.createElement("td",null,"BitOr"),l.a.createElement("td",null,"|")),l.a.createElement("tr",null,l.a.createElement("td",null,"BitXor"),l.a.createElement("td",null,"^")),l.a.createElement("tr",null,l.a.createElement("td",null,"Break"),l.a.createElement("td",null,"break")),l.a.createElement("tr",null,l.a.createElement("td",null,"Recursion"),l.a.createElement("td",null,"recursive call")),l.a.createElement("tr",null,l.a.createElement("td",null,"ClassDef"),l.a.createElement("td",null,"class")),l.a.createElement("tr",null,l.a.createElement("td",null,"Continue"),l.a.createElement("td",null,"continue")),l.a.createElement("tr",null,l.a.createElement("td",null,"Del"),l.a.createElement("td",null,"del")),l.a.createElement("tr",null,l.a.createElement("td",null,"Delete"),l.a.createElement("td",null,"delete")),l.a.createElement("tr",null,l.a.createElement("td",null,"Dict"),l.a.createElement("td",null,"{","...","}")),l.a.createElement("tr",null,l.a.createElement("td",null,"DictComp"),l.a.createElement("td",null,"{","...","}")),l.a.createElement("tr",null,l.a.createElement("td",null,"Div"),l.a.createElement("td",null,"/")),l.a.createElement("tr",null,l.a.createElement("td",null,"Ellipsis"),l.a.createElement("td",null,"...")),l.a.createElement("tr",null,l.a.createElement("td",null,"Eq"),l.a.createElement("td",null,"==")),l.a.createElement("tr",null,l.a.createElement("td",null,"ExceptHandler"),l.a.createElement("td",null,"except")),l.a.createElement("tr",null,l.a.createElement("td",null,"ExtSlice"),l.a.createElement("td",null,"[::]")),l.a.createElement("tr",null,l.a.createElement("td",null,"FloorDiv"),l.a.createElement("td",null,"//")),l.a.createElement("tr",null,l.a.createElement("td",null,"For"),l.a.createElement("td",null,"for")),l.a.createElement("tr",null,l.a.createElement("td",null,"FunctionDef"),l.a.createElement("td",null,"def")),l.a.createElement("tr",null,l.a.createElement("td",null,"GeneratorExp"),l.a.createElement("td",null,"(... for ...)")),l.a.createElement("tr",null,l.a.createElement("td",null,"Global"),l.a.createElement("td",null,"global")),l.a.createElement("tr",null,l.a.createElement("td",null,"Gt"),l.a.createElement("td",null,">")),l.a.createElement("tr",null,l.a.createElement("td",null,"GtE"),l.a.createElement("td",null,">=")),l.a.createElement("tr",null,l.a.createElement("td",null,"If"),l.a.createElement("td",null,"if")),l.a.createElement("tr",null,l.a.createElement("td",null,"IfExp"),l.a.createElement("td",null,"...if...else...")),l.a.createElement("tr",null,l.a.createElement("td",null,"Import"),l.a.createElement("td",null,"import")),l.a.createElement("tr",null,l.a.createElement("td",null,"ImportFrom"),l.a.createElement("td",null,"from ... import ...")),l.a.createElement("tr",null,l.a.createElement("td",null,"In"),l.a.createElement("td",null,"in")),l.a.createElement("tr",null,l.a.createElement("td",null,"Index"),l.a.createElement("td",null,"...[...]")),l.a.createElement("tr",null,l.a.createElement("td",null,"Invert"),l.a.createElement("td",null,"~")),l.a.createElement("tr",null,l.a.createElement("td",null,"Is"),l.a.createElement("td",null,"is")),l.a.createElement("tr",null,l.a.createElement("td",null,"IsNot"),l.a.createElement("td",null,"is not ")),l.a.createElement("tr",null,l.a.createElement("td",null,"LShift"),l.a.createElement("td",null,"<<")),l.a.createElement("tr",null,l.a.createElement("td",null,"Lambda"),l.a.createElement("td",null,"lambda")),l.a.createElement("tr",null,l.a.createElement("td",null,"List"),l.a.createElement("td",null,"[...]")),l.a.createElement("tr",null,l.a.createElement("td",null,"ListComp"),l.a.createElement("td",null,"[...for...]")),l.a.createElement("tr",null,l.a.createElement("td",null,"Lt"),l.a.createElement("td",null,"<")),l.a.createElement("tr",null,l.a.createElement("td",null,"LtE"),l.a.createElement("td",null,"<=")),l.a.createElement("tr",null,l.a.createElement("td",null,"Mod"),l.a.createElement("td",null,"%")),l.a.createElement("tr",null,l.a.createElement("td",null,"Mult"),l.a.createElement("td",null,"*")),l.a.createElement("tr",null,l.a.createElement("td",null,"Nonlocal"),l.a.createElement("td",null,"nonlocal")),l.a.createElement("tr",null,l.a.createElement("td",null,"Not"),l.a.createElement("td",null,"not")),l.a.createElement("tr",null,l.a.createElement("td",null,"NotEq"),l.a.createElement("td",null,"!=")),l.a.createElement("tr",null,l.a.createElement("td",null,"NotIn"),l.a.createElement("td",null,"not in")),l.a.createElement("tr",null,l.a.createElement("td",null,"Or"),l.a.createElement("td",null,"or")),l.a.createElement("tr",null,l.a.createElement("td",null,"Pass"),l.a.createElement("td",null,"pass")),l.a.createElement("tr",null,l.a.createElement("td",null,"Pow"),l.a.createElement("td",null,"**")),l.a.createElement("tr",null,l.a.createElement("td",null,"RShift"),l.a.createElement("td",null,">>")),l.a.createElement("tr",null,l.a.createElement("td",null,"Raise"),l.a.createElement("td",null,"raise")),l.a.createElement("tr",null,l.a.createElement("td",null,"Return"),l.a.createElement("td",null,"return")),l.a.createElement("tr",null,l.a.createElement("td",null,"Set"),l.a.createElement("td",null,"{"," ... ","}"," (set)")),l.a.createElement("tr",null,l.a.createElement("td",null,"SetComp"),l.a.createElement("td",null,"{"," ... for ... ","}"," (set)")),l.a.createElement("tr",null,l.a.createElement("td",null,"Slice"),l.a.createElement("td",null,"[ : ]")),l.a.createElement("tr",null,l.a.createElement("td",null,"Starred"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"Sub"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"Subscript"),l.a.createElement("td",null,"[]")),l.a.createElement("tr",null,l.a.createElement("td",null,"Try"),l.a.createElement("td",null,"try")),l.a.createElement("tr",null,l.a.createElement("td",null,"Tuple"),l.a.createElement("td",null,"(... , ... )")),l.a.createElement("tr",null,l.a.createElement("td",null,"UAdd"),l.a.createElement("td",null,"+")),l.a.createElement("tr",null,l.a.createElement("td",null,"USub"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"While"),l.a.createElement("td",null,"while")),l.a.createElement("tr",null,l.a.createElement("td",null,"With"),l.a.createElement("td",null,"with")),l.a.createElement("tr",null,l.a.createElement("td",null,"Yield"),l.a.createElement("td",null,"yield")),l.a.createElement("tr",null,l.a.createElement("td",null,"YieldFrom"),l.a.createElement("td",null,"yield from"))))),l.a.createElement(S.a,null,l.a.createElement(y.a,{color:"secondary",onClick:this.props.toggle},"Close")))}}]),t}(l.a.Component),V=X,K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).handleToggle=a.handleToggle.bind(Object(u.a)(Object(u.a)(a))),a.state={collapse:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleToggle",value:function(e){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return l.a.createElement("div",{class:"advancedSetting"},l.a.createElement(y.a,{className:"advancedSettingHeader",color:"dark",onClick:this.handleToggle},"Advanced Settings"),l.a.createElement(b.a,{isOpen:!this.state.collapse},l.a.createElement("div",{class:"advancedSettingGroup"},this.props.pointsEnabled&&l.a.createElement(Y,{formHandler:this.props.formHandler,testIndex:this.props.testIndex,fullScore:this.props.advancedSetting.fullScore}),this.props.pointsEnabled&&l.a.createElement(_,{formHandler:this.props.formHandler,testIndex:this.props.testIndex,partialCredits:this.props.advancedSetting.partialCredits}),l.a.createElement(M,{formHandler:this.props.formHandler,testIndex:this.props.testIndex,testType:this.props.advancedSetting.testType}),l.a.createElement($,{formHandler:this.props.formHandler,testIndex:this.props.testIndex,functionName:this.props.functionName,testName:this.props.advancedSetting.testName}),l.a.createElement(Z,{formHandler:this.props.formHandler,testIndex:this.props.testIndex,skeletonCode:this.props.advancedSetting.skeletonCode}),l.a.createElement(V,{formHandler:this.props.formHandler,testIndex:this.props.testIndex,disallowedUse:this.props.advancedSetting.disallowedUse}),l.a.createElement("div",{class:"advancedSettingBottomBorder"}))))}}]),t}(l.a.Component),ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).handleToggle=a.handleToggle.bind(Object(u.a)(Object(u.a)(a))),a.state={collapse:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleToggle",value:function(e){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return l.a.createElement("div",{className:this.props.className},l.a.createElement(y.a,{className:"testHeader",onClick:this.handleToggle},"Q"+(this.props.testIndex+1)+" : ",""!==this.props.testData.advancedSetting.testName?this.props.testData.advancedSetting.testName:""===this.props.testData.functionName?"Untitled":this.props.testData.functionName),l.a.createElement(b.a,{isOpen:!this.state.collapse},l.a.createElement("div",{className:"testCaseBody"},l.a.createElement(T,{formHandler:this.props.formHandler,testIndex:this.props.testIndex,functionName:this.props.testData.functionName}),l.a.createElement(P,{formHandler:this.props.formHandler,testIndex:this.props.testIndex,functionName:this.props.testData.functionName,functionParams:this.props.testData.functionParams}),l.a.createElement(D,{formHandler:this.props.formHandler,testIndex:this.props.testIndex,description:this.props.testData.description}),l.a.createElement(z,{formHandler:this.props.formHandler,testIndex:this.props.testIndex,functionName:this.props.testData.functionName,functionParams:this.props.testData.functionParams,testCases:this.props.testData.testCases}),l.a.createElement(K,{formHandler:this.props.formHandler,testIndex:this.props.testIndex,pointsEnabled:this.props.pointsEnabled,functionName:this.props.testData.functionName,advancedSetting:this.props.testData.advancedSetting}))))}}]),t}(l.a.Component),te=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.formState.tests.length;t++)e.push(l.a.createElement(ee,{testData:this.props.formState.tests[t],testIndex:t,className:"formTestCase",pointsEnabled:this.props.formState.pointsEnabled,formHandler:this.props.formHandler}));return l.a.createElement(w.a,null,l.a.createElement(ae,{formHandler:this.props.formHandler,pointsEnabled:this.props.formState.pointsEnabled}),l.a.createElement(ne,{formHandler:this.props.formHandler,starterCode:this.props.starterCode}),e,l.a.createElement(y.a,{name:"addTest",onClick:this.props.formHandler,color:"secondary",size:"sm"},"Add Test"))}}]),t}(l.a.Component),ae=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(A.a,{className:"pointsEnabledGroup",check:!0},l.a.createElement(H.a,{check:!0},l.a.createElement("span",{class:"pointsEnabledButtonGroup","data-content":this.props.pointsEnabled?"Scored":"Unscored"},l.a.createElement("input",{class:"tgl tgl-light pointsEnabled",id:"cb1",type:"checkbox",name:"pointsEnabled",onChange:this.props.formHandler,checked:this.props.pointsEnabled}),l.a.createElement("label",{class:"tgl-btn",for:"cb1"}))))}}]),t}(l.a.Component),ne=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).handleToggle=a.handleToggle.bind(Object(u.a)(Object(u.a)(a))),a.state={collapse:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleToggle",value:function(e){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return l.a.createElement("div",{class:"starterCodeForm"},l.a.createElement(y.a,{className:"starterCodeHeader",onClick:this.handleToggle},"Starter Code"),l.a.createElement(b.a,{isOpen:!this.state.collapse},l.a.createElement("div",null,l.a.createElement(w.a,null,l.a.createElement(A.a,{id:"starterFormGroup"},l.a.createElement(H.a,{for:"starterCodeTextarea"},"To be placed at the beginning of the homework file. "),l.a.createElement(k.a,{type:"textarea",value:this.props.starterCode,onChange:this.props.formHandler,name:"starterCode",id:"starterCodeTextarea",className:"codeInput forPlaceHolder",placeholder:"from math import *"}))))))}}]),t}(l.a.Component),le=te,re=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("textarea",{value:JSON.stringify(this.props.formState)})}}]),t}(l.a.Component);var se=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).handleInputChange=a.handleInputChange.bind(Object(u.a)(Object(u.a)(a))),a.state={formState:{pointsEnabled:!1,starterCode:"",tests:[{functionName:"",functionParams:"",description:"",testCases:[["",""]],advancedSetting:{fullScore:"1",testType:"simple",testName:"",partialCredits:"none",skeletonCode:"'*** YOUR CODE HERE ***'",disallowedUse:""}}]}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleInputChange",value:function(e){var t=this.state.formState;switch(e.target.name){case"pointsEnabled":t.pointsEnabled=e.target.checked;break;case"starterCode":t.starterCode=e.target.value;break;case"addTest":t.tests.push({functionName:"",functionParams:"",description:"",testCases:[["",""]],advancedSetting:{fullScore:"1",testType:"simple",testName:"",partialCredits:"none",skeletonCode:"'*** YOUR CODE HERE ***'",disallowedUse:""}});break;case"testType":t.tests[e.target.dataset.testid].advancedSetting.testType=e.target.value;break;case"fullScore":t.tests[e.target.dataset.testid].advancedSetting.fullScore=e.target.value;break;case"functionName":t.tests[e.target.dataset.testid].functionName=e.target.value;break;case"functionParams":t.tests[e.target.dataset.testid].functionParams=e.target.value;break;case"formDescription":t.tests[e.target.dataset.testid].description=e.target.value;break;case"addTestCase":t.tests[e.target.dataset.testid].testCases.push(["",""]);break;case"testCaseInput":t.tests[e.target.dataset.testid].testCases[e.target.dataset.testcaseid][0]=e.target.value;break;case"testCaseOutput":t.tests[e.target.dataset.testid].testCases[e.target.dataset.testcaseid][1]=e.target.value;break;case"testName":t.tests[e.target.dataset.testid].advancedSetting.testName=e.target.value;break;case"partialCredits":t.tests[e.target.dataset.testid].advancedSetting.partialCredits=e.target.value;break;case"skeletonCode":t.tests[e.target.dataset.testid].advancedSetting.skeletonCode=e.target.value;break;case"disallowedUse":t.tests[e.target.dataset.testid].advancedSetting.disallowedUse=e.target.value}this.setState({formState:t})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(p.a,{className:"split",sizes:[60,40],minSize:[300,200]},l.a.createElement(le,{formState:this.state.formState,formHandler:this.handleInputChange}),l.a.createElement(re,{formState:this.state.formState})))}}]),t}(l.a.Component),oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(l.a.createElement(se,null),document.getElementById("root")),window.onbeforeunload=function(){return!0},function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");oe?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ce(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ce(t,e)})}}()}},[[28,2,1]]]);
//# sourceMappingURL=main.faaceb9e.chunk.js.map