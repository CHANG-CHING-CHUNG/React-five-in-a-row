(this["webpackJsonpfive-in-a-row"]=this["webpackJsonpfive-in-a-row"]||[]).push([[0],{12:function(t,e,r){},14:function(t,e,r){"use strict";r.r(e);var n=r(6),o=r(0),i=r(1),l=r(3),a=r.n(l);r(12);var s=function(t,e,r){if(null!==t[e][r].mark){var n=t[0].length-1,o=t.length-1,i=t[e][r].mark,l=function(t,e){var r=t.rowRight.filter((function(t){return t===e})).length,n=t.rowLeft.filter((function(t){return t===e})).length,o=t.colUp.filter((function(t){return t===e})).length,i=t.colDown.filter((function(t){return t===e})).length,l=t.upperRight.filter((function(t){return t===e})).length,a=t.upperLeft.filter((function(t){return t===e})).length,s=t.bottomRight.filter((function(t){return t===e})).length,c=t.bottomLeft.filter((function(t){return t===e})).length,u={rightTotal:r,leftTotal:n,upTotal:o,downTotal:i,upperRightTotal:l,upperLeftTotal:a,bottomRightTotal:s,bottomLeftTotal:c};if(4===u.rightTotal||4===u.leftTotal)return e;if(4===u.upTotal||4===u.downTotal)return e;if(u.rightTotal+u.leftTotal===4||u.upTotal+u.downTotal===4)return e;if(4===u.upperLeftTotal||4===u.bottomRightTotal)return e;if(4===u.upperRightTotal||4===u.bottomLeftTotal)return e;if(u.upperLeftTotal+u.bottomRightTotal===4||u.upperRightTotal+u.bottomLeftTotal===4)return e;return null}(function(t,e,r,n,o,i,l,a){for(var s=JSON.parse(JSON.stringify(a));r+i<=o&&t[e][r+i].mark===l;)s.rowRight.push(t[e][r+i].mark),i++;for(i=1;r-i>=0&&t[e][r-i].mark===l;)s.rowLeft.push(t[e][r-i].mark),i++;for(i=1;e+i<=n&&t[e+i][r].mark===l;)s.colDown.push(t[e+i][r].mark),i++;for(i=1;e-i>=0&&t[e-i][r].mark===l;)s.colUp.push(t[e-i][r].mark),i++;for(i=1;e-i>=0&&r-i>=0&&t[e-i][r-i].mark===l;)s.upperLeft.push(t[e-i][r-i].mark),i++;for(i=1;e-i>=0&&r+i<=o&&t[e-i][r+i].mark===l;)s.upperRight.push(t[e-i][r+i].mark),i++;for(i=1;e+i<=n&&r+i<=o&&t[e+i][r+i].mark===l;)s.bottomRight.push(t[e+i][r+i].mark),i++;for(i=1;e+i<=n&&r-i>=0&&t[e+i][r-i].mark===l;)s.bottomLeft.push(t[e+i][r-i].mark),i++;return s}(t,e,r,n,o,1,i,{rowRight:[],colDown:[],rowLeft:[],colUp:[],upperLeft:[],upperRight:[],bottomLeft:[],bottomRight:[]}),i);return l||null}},c=r(4),u=r.n(c),f=r(5);function h(t){var e,r=t.value,n=t.winner,i=t.onClick;return"X"===r.mark?e=Object(o.jsx)("div",{className:"black ",children:n?Object(o.jsx)("span",{class:"white-step",children:r.step}):null}):"O"===r.mark&&(e=Object(o.jsx)("div",{className:"white ",children:n?Object(o.jsx)("span",{class:"black-step",children:r.step}):null})),Object(o.jsx)("button",{className:"square",onClick:function(){return i()},children:e})}function p(t){function e(e,r){return Object(o.jsx)(h,{value:t.squares[e][r],winner:t.winner,onClick:function(){return t.onClick(e,r)}})}return Object(o.jsx)("div",{children:function(){for(var t=[],r=0;r<19;r++){for(var n=[],i=0;i<19;i++)n.push(e(r,i));t.push(Object(o.jsx)("div",{className:"board-row",children:n}))}return t}()})}var m=0,b=0;function j(){var t=Object(i.useState)({history:[{squares:Array(19).fill(Array(19).fill({mark:"",step:0}))}],stepNumber:0,xIsNet:!0}),e=Object(n.a)(t,2),r=e[0],l=e[1];var a=r.history,c=a[r.stepNumber],h=s(c.squares,m,b),j=a.map((function(t,e){var n=e?"\u56de\u5230\u7b2c #"+e+" \u6b65":"\u56de\u5230\u8d77\u59cb\u9ede";return Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:function(){return function(t){l({history:r.history.slice(0,t+1),stepNumber:t,xIsNet:t%2===0})}(e)},children:n})},e)}));var d,g=Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:function(){!function(){var t=(new Date).toISOString().slice(0,10);u()(document.querySelector(".game-board")).then((function(e){e.toBlob((function(e){Object(f.saveAs)(e,"".concat(t+d,".png"))}))}))}()},children:"\u5132\u5b58\u68cb\u8b5c"})},r.stepNumber);if(h){var O=!1===r.xIsNet?"\u9ed1":"\u767d";d="\u8d0f\u5bb6: "+O}else d="\u4e0b\u4e00\u500b\u73a9\u5bb6: "+(r.xIsNet?"\u9ed1":"\u767d");return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("header",{className:"title",children:Object(o.jsx)("h3",{children:"Gomoku"})}),Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(p,{squares:c.squares,winner:h,onClick:function(t,e){return function(t,e){var n=r.history.slice(0,r.stepNumber+1),o=n[n.length-1],i=JSON.parse(JSON.stringify(o.squares));h||i[t][e].mark||(i[t][e]={mark:r.xIsNet?"X":"O",step:r.stepNumber+1},m=t,b=e,l({history:n.concat([{squares:i}]),stepNumber:n.length,xIsNet:!r.xIsNet}))}(t,e)}})}),Object(o.jsxs)("div",{className:"game-info",children:[Object(o.jsx)("div",{children:d}),Object(o.jsx)("ol",{children:j})]}),h?Object(o.jsx)("div",{className:"game-info",children:Object(o.jsx)("ul",{children:g})}):null]}),Object(o.jsx)("footer",{children:Object(o.jsx)("div",{children:"Made By John \u2764"})})]})}a.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5e860224.chunk.js.map