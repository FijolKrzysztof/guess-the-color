(this["webpackJsonpguess-the-color"]=this["webpackJsonpguess-the-color"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var i,l,s=n(1),c=n(0),d=n.n(c),o=n(10),a=n.n(o),r=(n(34),n(22)),y=n(23),m=n(28),u=n(27),g=(n(35),n(46)),b=n(47),p=n(48),h=n(49),j=n(51),I=n(52),B=n(50),E=n(26),k=1,x=0,O=0,f=3,C=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return(e=t.call.apply(t,[this].concat(c))).generateRGB=function(){return"RGB( "+Math.floor(256*Math.random()).toString()+" , "+Math.floor(256*Math.random()).toString()+" , "+Math.floor(256*Math.random()).toString()+" )"},e.setColors=function(){l=!0,e.setScore();for(var t=[],n=0;n<3*k;n++){var s=e.generateRGB();t.push(s)}i=Math.floor(3*Math.random()),document.getElementById("but-1").style.backgroundColor=t[0],document.getElementById("but-2").style.backgroundColor=t[1],document.getElementById("but-3").style.backgroundColor=t[2],k>1&&(i=Math.floor(6*Math.random()),document.getElementById("but-4").style.backgroundColor=t[3],document.getElementById("but-5").style.backgroundColor=t[4],document.getElementById("but-6").style.backgroundColor=t[5]),k>2&&(i=Math.floor(9*Math.random()),document.getElementById("but-7").style.backgroundColor=t[6],document.getElementById("but-8").style.backgroundColor=t[7],document.getElementById("but-9").style.backgroundColor=t[8]),document.getElementById("badge").innerHTML=t[i]},e.checkIfCorrect=function(t){if(1==l){l=!1;var n,s=t.target.id,c="changeIcon 2s";switch(document.getElementById(s).style.animation="changeBtn 1s",document.getElementById("i-0.0").style.display="inline",document.getElementById("i-0.1").style.display="inline",document.getElementById("i-0.2").style.display="inline",document.getElementById("i-0.3").style.display="inline",document.getElementById("i-0.4").style.display="inline",document.getElementById("i-0.5").style.display="inline",document.getElementById("i-0.6").style.display="inline",document.getElementById("i-0.7").style.display="inline",document.getElementById("i-0.8").style.display="inline",document.getElementById("i-0.0").style.animation=c,document.getElementById("i-0.1").style.animation=c,document.getElementById("i-0.2").style.animation=c,document.getElementById("i-0.3").style.animation=c,document.getElementById("i-0.4").style.animation=c,document.getElementById("i-0.5").style.animation=c,document.getElementById("i-0.6").style.animation=c,document.getElementById("i-0.7").style.animation=c,document.getElementById("i-0.8").style.animation=c,i){case 0:n="but-1"===s,document.getElementById("i-0.0").style.display="none",document.getElementById("i-1.0").style.display="inline",document.getElementById("i-1.0").style.animation=c;break;case 1:n="but-2"===s,document.getElementById("i-0.1").style.display="none",document.getElementById("i-1.1").style.display="inline",document.getElementById("i-1.1").style.animation=c;break;case 2:n="but-3"===s,document.getElementById("i-0.2").style.display="none",document.getElementById("i-1.2").style.display="inline",document.getElementById("i-1.2").style.animation=c;break;case 3:n="but-4"===s,document.getElementById("i-0.3").style.display="none",document.getElementById("i-1.3").style.display="inline",document.getElementById("i-1.3").style.animation=c;break;case 4:n="but-5"===s,document.getElementById("i-0.4").style.display="none",document.getElementById("i-1.4").style.display="inline",document.getElementById("i-1.4").style.animation=c;break;case 5:n="but-6"===s,document.getElementById("i-0.5").style.display="none",document.getElementById("i-1.5").style.display="inline",document.getElementById("i-1.5").style.animation=c;break;case 6:n="but-7"===s,document.getElementById("i-0.6").style.display="none",document.getElementById("i-1.6").style.display="inline",document.getElementById("i-1.6").style.animation=c;break;case 7:n="but-8"===s,document.getElementById("i-0.7").style.display="none",document.getElementById("i-1.7").style.display="inline",document.getElementById("i-1.7").style.animation=c;break;case 8:n="but-9"===s,document.getElementById("i-0.8").style.display="none",document.getElementById("i-1.8").style.display="inline",document.getElementById("i-1.8").style.animation=c}!0===n?x+=1:O+=1,e.setScore(),setTimeout((function(){document.getElementById("i-1.0").style.display="none",document.getElementById("i-1.1").style.display="none",document.getElementById("i-1.2").style.display="none",document.getElementById("i-1.3").style.display="none",document.getElementById("i-1.4").style.display="none",document.getElementById("i-1.5").style.display="none",document.getElementById("i-1.6").style.display="none",document.getElementById("i-1.7").style.display="none",document.getElementById("i-1.8").style.display="none",document.getElementById("i-0.0").style.display="none",document.getElementById("i-0.1").style.display="none",document.getElementById("i-0.2").style.display="none",document.getElementById("i-0.3").style.display="none",document.getElementById("i-0.4").style.display="none",document.getElementById("i-0.5").style.display="none",document.getElementById("i-0.6").style.display="none",document.getElementById("i-0.7").style.display="none",document.getElementById("i-0.8").style.display="none",O===f||x===f?e.announceResult():e.setColors()}),2e3)}},e.setScore=function(){var t=x.toString(),n=O.toString();document.getElementById("score").textContent=t+":"+n,document.getElementById("score2").textContent=t+":"+n,e.setState({plScore:x})},e.setColor=function(){var e="badge-";return x>O&&(e+="success"),x===O&&(e+="warning"),x<O&&(e+="danger"),e},e.setText=function(){return x>O?"WIN":"DEFEAT"},e.setDifficultyColor=function(){var e="badge-";return 1===k&&(e+="success"),2===k&&(e+="warning"),3===k&&(e+="danger"),e},e.announceResult=function(){document.getElementById("container").style.animation="hideContainer 3s",setTimeout((function(){document.getElementById("container").style.display="none",document.getElementById("endContainer").style.display="block",document.getElementById("endContainer").style.animation="showContainer 3s",setTimeout((function(){document.getElementById("endContainer").style.opacity=1}),3e3)}),3e3)},e.componentDidMount=function(){e.setScore(),e.setColors(),e.handleEasy()},e.roundsNumber=function(t){f=parseInt(t.target.innerHTML,10),e.setState({rounds:f}),x=0,O=0,e.setColors()},e.handleEasy=function(){k=1,x=0,O=0,document.getElementById("row-3.3").style.display="none",document.getElementById("row-3.2").style.display="none",document.getElementById("row-3.1").style.display="none",document.getElementById("row-2.3").style.display="none",document.getElementById("row-2.2").style.display="none",document.getElementById("row-2.1").style.display="none",e.setColors()},e.handleMedium=function(){k=2,x=0,O=0,document.getElementById("row-3.3").style.display="none",document.getElementById("row-3.2").style.display="none",document.getElementById("row-3.1").style.display="none",document.getElementById("row-2.1").style.display="block",document.getElementById("row-2.2").style.display="block",document.getElementById("row-2.3").style.display="block",e.setColors()},e.handleHard=function(){k=3,x=0,O=0,document.getElementById("row-2.1").style.display="block",document.getElementById("row-2.2").style.display="block",document.getElementById("row-2.3").style.display="block",document.getElementById("row-3.1").style.display="block",document.getElementById("row-3.2").style.display="block",document.getElementById("row-3.3").style.display="block",e.setColors()},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this,t=3===f?"active":"",n=5===f?"active":"",i=10===f?"active":"";return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsxs)(g.a,{id:"endContainer",style:{display:"none",opacity:0},children:[Object(s.jsx)("h1",{className:"scoreHeader",children:Object(s.jsx)(b.a,{id:"score2",pill:!0,className:this.setColor()})}),Object(s.jsx)("h1",{className:"textHeader",children:Object(s.jsx)(b.a,{className:this.setDifficultyColor(),children:this.setText()})})]}),Object(s.jsx)(g.a,{id:"container",children:Object(s.jsxs)(p.a,{style:{padding:0},children:[Object(s.jsx)(h.a,{className:"justify-content-center",children:Object(s.jsx)("h1",{children:Object(s.jsx)(b.a,{id:"score",pill:!0,className:this.setColor(),style:{marginBottom:10}})})}),Object(s.jsx)(h.a,{className:"justify-content-center",children:Object(s.jsx)("h1",{children:Object(s.jsx)(b.a,{id:"badge",variant:"success",style:{marginBottom:10}})})}),Object(s.jsxs)(h.a,{children:[Object(s.jsx)(p.a,{style:{padding:5},children:Object(s.jsxs)("button",{onClick:function(t){return e.checkIfCorrect(t)},id:"but-1",className:"bt",children:[Object(s.jsx)("img",{id:"i-0.0",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/xmark.png"}),Object(s.jsx)("img",{id:"i-1.0",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/checkmark.webp"})]})}),Object(s.jsx)(p.a,{style:{padding:5},children:Object(s.jsxs)("button",{onClick:function(t){return e.checkIfCorrect(t)},id:"but-2",className:"bt",children:[Object(s.jsx)("img",{id:"i-0.1",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/xmark.png"}),Object(s.jsx)("img",{id:"i-1.1",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/checkmark.webp"})]})}),Object(s.jsx)(p.a,{style:{padding:5},children:Object(s.jsxs)("button",{onClick:function(t){return e.checkIfCorrect(t)},id:"but-3",className:"bt",children:[Object(s.jsx)("img",{id:"i-0.2",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/xmark.png"}),Object(s.jsx)("img",{id:"i-1.2",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/checkmark.webp"})]})})]}),Object(s.jsxs)(h.a,{children:[Object(s.jsx)(p.a,{id:"row-2.1",style:{padding:5},children:Object(s.jsxs)("button",{onClick:function(t){return e.checkIfCorrect(t)},id:"but-4",className:"bt",children:[Object(s.jsx)("img",{id:"i-0.3",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/xmark.png"}),Object(s.jsx)("img",{id:"i-1.3",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/checkmark.webp"})]})}),Object(s.jsx)(p.a,{id:"row-2.2",style:{padding:5},children:Object(s.jsxs)("button",{onClick:function(t){return e.checkIfCorrect(t)},id:"but-5",className:"bt",children:[Object(s.jsx)("img",{id:"i-0.4",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/xmark.png"}),Object(s.jsx)("img",{id:"i-1.4",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/checkmark.webp"})]})}),Object(s.jsx)(p.a,{id:"row-2.3",style:{padding:5},children:Object(s.jsxs)("button",{onClick:function(t){return e.checkIfCorrect(t)},id:"but-6",className:"bt",children:[Object(s.jsx)("img",{id:"i-0.5",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/xmark.png"}),Object(s.jsx)("img",{id:"i-1.5",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/checkmark.webp"})]})})]}),Object(s.jsxs)(h.a,{children:[Object(s.jsx)(p.a,{id:"row-3.1",style:{padding:5},children:Object(s.jsxs)("button",{onClick:function(t){return e.checkIfCorrect(t)},id:"but-7",className:"bt",children:[Object(s.jsx)("img",{id:"i-0.6",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/xmark.png"}),Object(s.jsx)("img",{id:"i-1.6",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/checkmark.webp"})]})}),Object(s.jsx)(p.a,{id:"row-3.2",style:{padding:5},children:Object(s.jsxs)("button",{onClick:function(t){return e.checkIfCorrect(t)},id:"but-8",className:"bt",children:[Object(s.jsx)("img",{id:"i-0.7",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/xmark.png"}),Object(s.jsx)("img",{id:"i-1.7",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/checkmark.webp"})]})}),Object(s.jsx)(p.a,{id:"row-3.3",style:{padding:5},children:Object(s.jsxs)("button",{onClick:function(t){return e.checkIfCorrect(t)},id:"but-9",className:"bt",children:[Object(s.jsx)("img",{id:"i-0.8",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/xmark.png"}),Object(s.jsx)("img",{id:"i-1.8",alt:"rrr",style:{height:50,display:"none",opacity:0},src:"/checkmark.webp"})]})})]}),Object(s.jsx)(h.a,{className:"justify-content-center",children:Object(s.jsxs)(j.a,{style:{marginTop:10},children:[Object(s.jsx)(j.a.Toggle,{variant:"secondary",children:"POINTS TO WIN"}),Object(s.jsxs)(j.a.Menu,{children:[Object(s.jsx)(j.a.Item,{className:t,id:"dropdown1",onClick:function(t){return e.roundsNumber(t)},children:"3"}),Object(s.jsx)(j.a.Item,{className:n,id:"dropdown2",onClick:function(t){return e.roundsNumber(t)},children:"5"}),Object(s.jsx)(j.a.Item,{className:i,id:"dropdown3",onClick:function(t){return e.roundsNumber(t)},children:"10"})]})]})}),Object(s.jsx)(I.a,{className:"fixed-bottom bg-dark justify-content-center",children:Object(s.jsxs)(B.a,{style:{marginTop:20},className:"btn-group-lg",children:[Object(s.jsx)(E.a,{onClick:this.handleEasy,variant:"success",children:"Easy"}),Object(s.jsx)(E.a,{onClick:this.handleMedium,variant:"warning",children:"Medium"}),Object(s.jsx)(E.a,{onClick:this.handleHard,variant:"danger",children:"Hard"})]})})]})})]})})}}]),n}(c.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,i=t.getFID,l=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),l(e),s(e),c(e)}))};n(39);a.a.render(Object(s.jsx)(d.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),w()}},[[40,1,2]]]);
//# sourceMappingURL=main.c289baf6.chunk.js.map