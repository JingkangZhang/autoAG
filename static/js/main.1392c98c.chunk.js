(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(48)},35:function(e,t,a){},37:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);a(29);var n=a(1),r=a.n(n),o=a(16),l=a.n(o),s=(a(35),a(10)),i=a(11),c=a(14),u=a(12),p=a(13),m=a(7),d=(a(37),a(49)),h=a(50),f=a(68),b=a(51),g=a(52),E=a(53),v=a(54),O=a(55),j=a(69),y=a(56),S=a(57),k=a(58),C=a(59),N=a(60),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggleNav=a.toggleNav.bind(Object(m.a)(Object(m.a)(a))),a.toggleImportPopover=a.toggleImportPopover.bind(Object(m.a)(Object(m.a)(a))),a.toggleHelp=a.toggleHelp.bind(Object(m.a)(Object(m.a)(a))),a.state={navIsOpen:!1,importPopoverOpen:!1,helpOpen:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"toggleNav",value:function(){this.setState({navIsOpen:!this.state.navIsOpen})}},{key:"toggleImportPopover",value:function(){this.setState({importPopoverOpen:!this.state.importPopoverOpen})}},{key:"toggleHelp",value:function(){this.setState({helpOpen:!this.state.helpOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{color:"light",light:!0,expand:"sm"},r.a.createElement(h.a,{id:"autoAGBrand"},"autoAG"),r.a.createElement(f.a,{placement:"right",trigger:"hover",target:"autoAGBrand",delay:"{show:0, hide:0}",arrowClassName:"CalTooltipArrow",className:"CalTooltip"},"Much Love For Cal!"),r.a.createElement(b.a,{onClick:this.toggleNav}),r.a.createElement(g.a,{isOpen:this.state.navIsOpen,navbar:!0},r.a.createElement(E.a,{className:"ml-auto",navbar:!0},r.a.createElement(v.a,null,r.a.createElement(O.a,{onClick:this.toggleHelp},"Help and Usage")),r.a.createElement(j.a,{isOpen:this.state.helpOpen,toggle:this.toggleHelp},r.a.createElement(y.a,{toggle:this.toggleHelp},"Modal title"),r.a.createElement(S.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement(k.a,null,r.a.createElement(C.a,{color:"secondary",onClick:this.toggleHelp},"Close"))),r.a.createElement(v.a,null,r.a.createElement(O.a,{onClick:this.toggleImportPopover},"Import")),r.a.createElement(j.a,{isOpen:this.state.importPopoverOpen,toggle:this.toggleImportPopover},r.a.createElement(y.a,{toggle:this.toggleImportPopover},"Select .autoag file to import"),r.a.createElement(S.a,null,r.a.createElement(N.a,{type:"file",name:"file",id:"exampleFile"})),r.a.createElement(k.a,null,r.a.createElement(C.a,{color:"secondary",onClick:this.toggleImportPopover},"Cancel")," ",r.a.createElement(C.a,{color:"primary",onClick:this.toggleImportPopover},"Do Something"))),r.a.createElement(v.a,null,r.a.createElement(O.a,null,r.a.createElement("span",null,"Save Session"))),r.a.createElement(v.a,null,r.a.createElement(O.a,null,"Export")),r.a.createElement(v.a,null,r.a.createElement(O.a,{className:"githubNav",href:"https://github.com/JingkangZhang/autoAG"},r.a.createElement("svg",{height:"24",class:"octicon octicon-mark-github",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))))))))}}]),t}(r.a.PureComponent),I=a(64),T=a(62),P=a(63),x=a(61),w=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(F,{formHandler:this.props.formHandler,testIndex:this.props.testIndex,fullScore:this.props.testData.fullScore}),r.a.createElement(A,{formHandler:this.props.formHandler,testIndex:this.props.testIndex,testType:this.props.testData.testType}),r.a.createElement(B,{formHandler:this.props.formHandler,testIndex:this.props.testIndex,functionName:this.props.testData.functionName}))}}]),t}(r.a.Component),F=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.fullScore;return alert="",isNaN(e)&&(alert=r.a.createElement(x.a,{color:"warning"},"Please enter a valid number for full score for current test.")),r.a.createElement(T.a,null,alert,r.a.createElement(P.a,{for:"fullScore"},"Full Score:"),r.a.createElement(N.a,{type:"text",name:"fullScore",onFocus:function(e){return e.target.select()},className:"forPlaceHolder",placeholder:"1",onChange:this.props.formHandler,"data-testid":this.props.testIndex,value:e}))}}]),t}(r.a.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,null,r.a.createElement(P.a,{for:"testType"},"Test Type:"),r.a.createElement(N.a,{type:"select",name:"testType",onChange:this.props.formHandler,"data-testid":this.props.testIndex,value:this.props.testType},r.a.createElement("option",{value:"simple"},"simple function"),r.a.createElement("option",{value:"unit"},"unit test")))}}]),t}(r.a.Component),B=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.functionName;return alert="",e.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)||(alert=r.a.createElement(x.a,{color:"warning"},"Please enter a valid Python function name. Also, avoid using Python keywords (not checked here).")),r.a.createElement(T.a,null,alert,r.a.createElement(P.a,{for:"functionName"},"Function Name:"),r.a.createElement(N.a,{type:"text",name:"functionName",onFocus:function(e){return e.target.select()},className:"forPlaceHolder",placeholder:"Fibonacci",onChange:this.props.formHandler,"data-testid":this.props.testIndex,value:e}))}}]),t}(r.a.Component),D=w,q=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.formState.tests.length;t++)e.push(r.a.createElement(D,{testData:this.props.formState.tests[t],testIndex:t,pointsEnabled:this.props.formState.pointsEnabled,formHandler:this.props.formHandler}));return r.a.createElement(I.a,null,r.a.createElement(z,{formHandler:this.props.formHandler,pointsEnabled:this.props.formState.pointsEnabled}),e,r.a.createElement(C.a,{name:"addTestButton",onClick:this.props.formHandler,color:"secondary",size:"sm"},"Add Test"))}}]),t}(r.a.Component),z=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{check:!0},r.a.createElement(P.a,{check:!0},r.a.createElement(N.a,{type:"checkbox",name:"pointsEnabled",onChange:this.props.formHandler,checked:this.props.pointsEnabled})," ","Points enabled"))}}]),t}(r.a.Component),G=q,J=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("textarea",{value:this.props.formState.pointsEnabled})}}]),t}(r.a.Component),M=a(65),U=a(66),Z=a(67),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=a.handleInputChange.bind(Object(m.a)(Object(m.a)(a))),a.handleAddTest=a.handleAddTest.bind(Object(m.a)(Object(m.a)(a))),a.handleTestType=a.handleTestType.bind(Object(m.a)(Object(m.a)(a))),a.handlePointsEnabled=a.handlePointsEnabled.bind(Object(m.a)(Object(m.a)(a))),a.handleFullScore=a.handleFullScore.bind(Object(m.a)(Object(m.a)(a))),a.handleFunctionName=a.handleFunctionName.bind(Object(m.a)(Object(m.a)(a))),a.state={formState:{pointsEnabled:!1,tests:[W]},formHandler:a.handleInputChange},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleInputChange",value:function(e){switch(e.target.name){case"pointsEnabled":this.handlePointsEnabled(e);break;case"addTestButton":this.handleAddTest(e);break;case"testType":this.handleTestType(e);break;case"fullScore":this.handleFullScore(e);break;case"functionName":this.handleFunctionName(e)}var t=this.state.formState;t[e.target.name]="checkbox"===e.target.type?e.target.checked:e.target.input,this.setState({formState:t})}},{key:"handlePointsEnabled",value:function(e){var t=this.state.formState;t.pointsEnabled=e.target.checked,this.setState({formState:t})}},{key:"handleAddTest",value:function(e){var t=this.state.formState;t.tests.push(W),this.setState({formState:t})}},{key:"handleTestType",value:function(e){var t=this.state.formState;t.tests[e.target.dataset.testid].testType=e.target.value,this.setState({formState:t})}},{key:"handleFullScore",value:function(e){var t=this.state.formState;t.tests[e.target.dataset.testid].fullScore=e.target.value,this.setState({formState:t})}},{key:"handleFunctionName",value:function(e){var t=this.state.formState;t.tests[e.target.dataset.testid].functionName=e.target.value,this.setState({formState:t})}},{key:"render",value:function(){return r.a.createElement(M.a,{fluid:"true"},r.a.createElement(U.a,null,r.a.createElement(Z.a,{className:"NavCol"},r.a.createElement(H,null))),r.a.createElement(U.a,null,r.a.createElement(Z.a,{sm:"7"},r.a.createElement(G,{formState:this.state.formState,formHandler:this.state.formHandler})),r.a.createElement(Z.a,{sm:"5"},r.a.createElement(J,{formState:this.state.formState}))))}}]),t}(r.a.Component),W={testType:"simple",functionName:"Fibonacci",testName:"",testArgument:"",description:"",testCases:[["0, 0","0"]],testForDisallowedUse:[],fullScore:"",partialCredits:"none",skeletonCode:""},$=L;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.1392c98c.chunk.js.map