(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(42)},31:function(e,t,a){},32:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(12),c=a.n(r),o=(a(30),a(31),a(11)),s=(a(32),a(43)),i=a(44),u=a(45),m=a(46),h=a(47),d=a(48),E=a(49);function f(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement(s.a,{color:"light",light:!0,expand:"md"},l.a.createElement(i.a,{href:"/"},"Connected Cells"),l.a.createElement(u.a,{onClick:function(){return r(!a)}}),l.a.createElement(m.a,{isOpen:a,navbar:!0},l.a.createElement(h.a,{className:"ml-auto",navbar:!0},l.a.createElement(d.a,null,l.a.createElement(E.a,{href:"https://www.linkedin.com/in/edwin-capel-5b055793/"},"LinkedIn")),l.a.createElement(d.a,null,l.a.createElement(E.a,{href:"https://github.com/edwincapel"},"GitHub")),l.a.createElement(d.a,null,l.a.createElement(E.a,{href:"https://medium.com/@edwinrc1026/python-news-scraper-with-react-part-1-971e1ed2fb7"},"Medium")),l.a.createElement(d.a,null,l.a.createElement(E.a,{href:"https://www.reddit.com/r/FortniteBattleRoyale/comments/aklpjw/made_a_script_that_compiles_top_10_fortnite/"},"Reddit")))))}var g,p=a(24),v=a(22),w=a(23);!function(e){e.ON="1",e.OFF="0"}(g||(g={}));var b=function(){function e(t,a,n){Object(v.a)(this,e),this.rows=void 0,this.columns=void 0,this.cells=void 0,this.visitedCells=void 0,this.rows=t,this.columns=a,this.cells=[],this.visitedCells=[],this.create2DArray(t,a,n)}return Object(w.a)(e,[{key:"calc",value:function(){for(var e=0,t=0;t<this.rows;t++)for(var a=0;a<this.columns;a++)if(!this.visitedCells[t][a]&&this.isOn(t,a)){for(var n=0,l=[{j:t,k:a}];l.length;){var r=l.shift();if(r&&(!this.visitedCells[r.j][r.k]&&(this.visitedCells[r.j][r.k]=!0,this.isOn(r.j,r.k)))){n+=1;var c=this.getSurroundingCells(r);l.push.apply(l,Object(p.a)(c))}}n>e&&(e=n)}return e}},{key:"create2DArray",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=a.match(/(\d+)/g);if(null==n)throw new TypeError("Cannot parse matrix");n.length!==e*t&&this.generateErrorMessage(a);for(var l=0;l<e;l++){var r=l*this.columns,c=(l+1)*this.columns,o=n.slice(r,c);o.length!==this.columns&&this.generateErrorMessage(a),this.cells.push(o.map(function(e){return"0"===e?g.OFF:g.ON})),this.visitedCells[l]=new Array(this.columns).fill(!1)}}},{key:"isOn",value:function(e,t){return this.cells[e][t]===g.ON}},{key:"getSurroundingCells",value:function(e){var t=e.j,a=e.k,n=[];return 0!==t&&(0!==a&&n.push({j:t-1,k:a-1}),n.push({j:t-1,k:a}),a!==this.columns-1&&n.push({j:t-1,k:a+1})),0!==a&&n.push({j:t,k:a-1}),a!==this.columns-1&&n.push({j:t,k:a+1}),t!==this.rows-1&&(0!==a&&n.push({j:t+1,k:a-1}),n.push({j:t+1,k:a}),a!==this.columns-1&&n.push({j:t+1,k:a+1})),n}},{key:"generateErrorMessage",value:function(e){var t=this;e.trim().split("\n").forEach(function(e,a){var n=e.match(/(\d+)/g);null===n?t.throwErrorMessage(a+1,0):n.length!==t.columns&&t.throwErrorMessage(a+1,n.length)})}},{key:"throwErrorMessage",value:function(e,t){throw new Error("Row ".concat(e," is not valid. Expected ").concat(this.columns,", Actual: ").concat(t))}}]),e}(),k=a(54),j=a(55),y=a(56),x=a(57),C=a(58),O=a(59),M=a(60),N=a(61),I=a(53),F=function(e){var t=e.cells.map(function(e,t){var a=e.map(function(e,a){var n="".concat(t,":").concat(a),r=e===g.ON?"bg-dark text-white":"";return l.a.createElement("div",{key:n,className:"".concat(r," p-1 border border-dark text-center"),style:{height:"50px",width:"50px"}},e)});return l.a.createElement("div",{key:"row:".concat(t),className:"d-flex"},a)});return l.a.createElement("div",{className:"text-dark"},t)},R=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a="",n=0;n<e;n++)a+="0 ".repeat(t),a+="\n";return a},S=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a="",n=0;n<e;n++){for(var l=0;l<t;l++)a+="".concat(Math.floor(2*Math.random())," ");a+="\n"}return a},A=a(62),_=a(50),T=a(51),W=a(52),D=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(A.a,{isOpen:e.modal,toggle:e.toggleFunc},l.a.createElement(_.a,{toggle:e.toggleFunc},"Info About this App"),l.a.createElement(T.a,null,"Assumptions:",l.a.createElement("ul",null,l.a.createElement("li",null,"Characters are limited to ",l.a.createElement("code",null,"0")," or ",l.a.createElement("code",null,"1"),l.a.createElement("ul",null,l.a.createElement("li",null,"We only read numerical characters"),l.a.createElement("li",null,"We treat all ",l.a.createElement("code",null,"0"),'\'s as "off"'),l.a.createElement("li",null,"We treat all non ",l.a.createElement("code",null,"0"),'\'s as "on"'))),l.a.createElement("li",null,"Rows and Columns are always numbers"),l.a.createElement("li",null,"Matrix has no starting or trailing spaces"),l.a.createElement("li",{className:"text-danger"},"This Matrix UI works best when number of Col is less than or equals 12")),"Steps:",l.a.createElement("ol",null,l.a.createElement("li",null,"Insert Row and Column, that will generate a default matrix of 0's"),l.a.createElement("li",null,"Insert Custom Matrix or Edit Default Matrix"))),l.a.createElement(W.a,null,l.a.createElement(I.a,{color:"secondary",onClick:e.toggleFunc},"Close"))))},B=function(){var e=Object(n.useState)(5),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(5),s=Object(o.a)(c,2),i=s[0],u=s[1],m=Object(n.useState)(R(a,i)),h=Object(o.a)(m,2),d=h[0],E=h[1],g=Object(n.useState)(!1),p=Object(o.a)(g,2),v=p[0],w=p[1],A=null,_=function(){w(!v)};try{var T=new b(a,i,d);A=l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{color:"success",className:"w-100 rounded-0 text-center"},"Largest Area: ",T.calc()),l.a.createElement(j.a,{fluid:!0,className:"d-flex justify-content-center align-items-center mt-5"},l.a.createElement(F,{cells:T.cells})))}catch(W){A=l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{color:"danger",className:"w-100 rounded-0 text-center"},"Error: ",W.message),l.a.createElement(j.a,{fluid:!0,className:"d-flex justify-content-center align-items-center mt-5"},l.a.createElement(y.a,{className:"border border-dark p-2"},l.a.createElement(x.a,{md:"10"},"Steps:",l.a.createElement("br",null),"1) Insert Row and Column, that will generate a default matrix of 0's ",l.a.createElement("br",null),l.a.createElement("br",null),"2) Insert Custom Matrix or Edit Default Matrix"))))}return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(j.a,{fluid:!0,className:"h-100"},l.a.createElement(y.a,{className:"h-100"},l.a.createElement(x.a,{md:"6",className:"d-flex justify-content-center align-items-center mb-2"},l.a.createElement(C.a,{className:"w-75"},l.a.createElement(O.a,null,l.a.createElement(M.a,{for:"rows"},"Rows"),l.a.createElement(N.a,{type:"number",name:"rows",placeholder:"Rows",onChange:function(e){r(parseInt(e.target.value)),E(R(parseInt(e.target.value),i))},value:a.toString()})),l.a.createElement(O.a,null,l.a.createElement(M.a,{for:"rows"},"Columns"),l.a.createElement(N.a,{type:"number",name:"cols",placeholder:"Columns",onChange:function(e){u(parseInt(e.target.value)),E(R(a,parseInt(e.target.value)))},value:i.toString()})),a&&i?l.a.createElement(O.a,null,l.a.createElement(M.a,{for:"exampleText"},"Matrix"),l.a.createElement(N.a,{type:"textarea",name:"cols",rows:a,onChange:function(e){E(e.target.value)},value:d,placeholder:"INSERT MATRIX HERE",style:{fontFamily:"monospace",fontSize:"1.5rem"}})):l.a.createElement("div",null,l.a.createElement(k.a,{color:"danger"},"Please Insert Row and Columns")),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement(I.a,{onClick:function(){var e=Math.floor(10*Math.random())+1,t=Math.floor(10*Math.random())+1;u(t),r(e),E(S(e,t))}},"Randomize"),l.a.createElement(I.a,{color:"info",onClick:function(){_()}},"App Info")))),l.a.createElement(x.a,{md:"6",className:"border-left p-0 mb-2"},A))),l.a.createElement(D,{modal:v,toggleFunc:_}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.b07cedfc.chunk.js.map