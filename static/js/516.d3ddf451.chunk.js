(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[516],{1206:function(e,t,r){!function(e){"use strict";e.defineMode("smarty",(function(t,r){var i,n=r.rightDelimiter||"}",a=r.leftDelimiter||"{",o=r.version||2,u=e.getMode(t,r.baseMode||"null"),l=["debug","extends","function","include","literal"],s={operatorChars:/[+\-*&%=<>!?]/,validIdentifier:/[a-zA-Z0-9_]/,stringChar:/['"]/};function f(e,t){return i=t,e}function d(e,t){return null==t&&(t=e.pos),3===o&&"{"==a&&(t==e.string.length||/\s/.test(e.string.charAt(t)))}function p(e,t){for(var r,o,l=e.string,s=e.pos;;){var f=l.indexOf(a,s);if(s=f+a.length,-1==f||!d(e,f+a.length))break}if(f==e.pos)return e.match(a),e.eat("*")?function(e,t,r){return t.tokenize=r,r(e,t)}(e,t,(r="comment",o="*"+n,function(e,t){for(;!e.eol();){if(e.match(o)){t.tokenize=p;break}e.next()}return r})):(t.depth++,t.tokenize=c,i="startTag","tag");f>-1&&(e.string=l.slice(0,f));var h=u.token(e,t.base);return f>-1&&(e.string=l),h}function c(e,t){if(e.match(n,!0))return 3===o?(t.depth--,t.depth<=0&&(t.tokenize=p)):t.tokenize=p,f("tag",null);if(e.match(a,!0))return t.depth++,f("tag","startTag");var r=e.next();if("$"==r)return e.eatWhile(s.validIdentifier),f("variable-2","variable");if("|"==r)return f("operator","pipe");if("."==r)return f("operator","property");if(s.stringChar.test(r))return t.tokenize=(u=r,function(e,t){for(var r=null,i=null;!e.eol();){if(i=e.peek(),e.next()==u&&"\\"!==r){t.tokenize=c;break}r=i}return"string"}),f("string","string");if(s.operatorChars.test(r))return e.eatWhile(s.operatorChars),f("operator","operator");if("["==r||"]"==r)return f("bracket","bracket");if("("==r||")"==r)return f("bracket","operator");if(/\d/.test(r))return e.eatWhile(/\d/),f("number","number");if("variable"==t.last){if("@"==r)return e.eatWhile(s.validIdentifier),f("property","property");if("|"==r)return e.eatWhile(s.validIdentifier),f("qualifier","modifier")}else{if("pipe"==t.last)return e.eatWhile(s.validIdentifier),f("qualifier","modifier");if("whitespace"==t.last)return e.eatWhile(s.validIdentifier),f("attribute","modifier")}if("property"==t.last)return e.eatWhile(s.validIdentifier),f("property",null);if(/\s/.test(r))return i="whitespace",null;var u,d="";"/"!=r&&(d+=r);for(var h=null;h=e.eat(s.validIdentifier);)d+=h;for(var k=0,b=l.length;k<b;k++)if(l[k]==d)return f("keyword","keyword");return/\s/.test(r)?null:f("tag","tag")}return{startState:function(){return{base:e.startState(u),tokenize:p,last:null,depth:0}},copyState:function(t){return{base:e.copyState(u,t.base),tokenize:t.tokenize,last:t.last,depth:t.depth}},innerMode:function(e){if(e.tokenize==p)return{mode:u,state:e.base}},token:function(e,t){var r=t.tokenize(e,t);return t.last=i,r},indent:function(t,r,i){return t.tokenize==p&&u.indent?u.indent(t.base,r,i):e.Pass},blockCommentStart:a+"*",blockCommentEnd:"*"+n}})),e.defineMIME("text/x-smarty","smarty")}(r(53))}}]);
//# sourceMappingURL=516.d3ddf451.chunk.js.map