(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[471],{1155:function(e,t,n){!function(e){"use strict";e.defineMode("fcl",(function(e){var t=e.indentUnit,n={term:!0,method:!0,accu:!0,rule:!0,then:!0,is:!0,and:!0,or:!0,if:!0,default:!0},r={var_input:!0,var_output:!0,fuzzify:!0,defuzzify:!0,function_block:!0,ruleblock:!0},i={end_ruleblock:!0,end_defuzzify:!0,end_function_block:!0,end_fuzzify:!0,end_var:!0},o={true:!0,false:!0,nan:!0,real:!0,min:!0,max:!0,cog:!0,cogs:!0},a=/[+\-*&^%:=<>!|\/]/;function u(e,t){var u=e.next();if(/[\d\.]/.test(u))return"."==u?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==u?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if("/"==u||"("==u){if(e.eat("*"))return t.tokenize=c,c(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(a.test(u))return e.eatWhile(a),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var l=e.current().toLowerCase();return n.propertyIsEnumerable(l)||r.propertyIsEnumerable(l)||i.propertyIsEnumerable(l)?"keyword":o.propertyIsEnumerable(l)?"atom":"variable"}function c(e,t){for(var n,r=!1;n=e.next();){if(("/"==n||")"==n)&&r){t.tokenize=u;break}r="*"==n}return"comment"}function l(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}return{startState:function(e){return{tokenize:null,context:new l((e||0)-t,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;var o=(t.tokenize||u)(e,t);if("comment"==o)return o;null==n.align&&(n.align=!0);var a=e.current().toLowerCase();return r.propertyIsEnumerable(a)?function(e,t,n){e.context=new l(e.indented,t,n,null,e.context)}(t,e.column(),"end_block"):i.propertyIsEnumerable(a)&&function(e){e.context.prev&&("end_block"==e.context.type&&(e.indented=e.context.indented),e.context=e.context.prev)}(t),t.startOfLine=!1,o},indent:function(e,n){if(e.tokenize!=u&&null!=e.tokenize)return 0;var r=e.context,o=i.propertyIsEnumerable(n);return r.align?r.column+(o?0:1):r.indented+(o?0:t)},electricChars:"ryk",fold:"brace",blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:"//"}})),e.defineMIME("text/x-fcl","fcl")}(n(53))}}]);
//# sourceMappingURL=471.9b8eb494.chunk.js.map