(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[524],{1214:function(t,e,n){!function(t){"use strict";var e={addition:"positive",attributes:"attribute",bold:"strong",cite:"keyword",code:"atom",definitionList:"number",deletion:"negative",div:"punctuation",em:"em",footnote:"variable",footCite:"qualifier",header:"header",html:"comment",image:"string",italic:"em",link:"link",linkDefinition:"link",list1:"variable-2",list2:"variable-3",list3:"keyword",notextile:"string-2",pre:"operator",p:"property",quote:"bracket",span:"quote",specialChar:"tag",strong:"strong",sub:"builtin",sup:"builtin",table:"variable-3",tableHeading:"operator"};function n(t,n,r){if("_"===r)return t.eat("_")?i(t,n,"italic",/__/,2):i(t,n,"em",/_/,1);if("*"===r)return t.eat("*")?i(t,n,"bold",/\*\*/,2):i(t,n,"strong",/\*/,1);if("["===r)return t.match(/\d+\]/)&&(n.footCite=!0),a(n);if("("===r&&t.match(/^(r|tm|c)\)/))return l(n,e.specialChar);if("<"===r&&t.match(/(\w+)[^>]+>[^<]+<\/\1>/))return l(n,e.html);if("?"===r&&t.eat("?"))return i(t,n,"cite",/\?\?/,2);if("="===r&&t.eat("="))return i(t,n,"notextile",/==/,2);if("-"===r&&!t.eat("-"))return i(t,n,"deletion",/-/,1);if("+"===r)return i(t,n,"addition",/\+/,1);if("~"===r)return i(t,n,"sub",/~/,1);if("^"===r)return i(t,n,"sup",/\^/,1);if("%"===r)return i(t,n,"span",/%/,1);if("@"===r)return i(t,n,"code",/@/,1);if("!"===r){var o=i(t,n,"image",/(?:\([^\)]+\))?!/,1);return t.match(/^:\S+/),o}return a(n)}function i(t,e,n,i,r){var l=t.pos>r?t.string.charAt(t.pos-r-1):null,o=t.peek();if(e[n]){if((!o||/\W/.test(o))&&l&&/\S/.test(l)){var u=a(e);return e[n]=!1,u}}else(!l||/\W/.test(l))&&o&&/\S/.test(o)&&t.match(new RegExp("^.*\\S"+i.source+"(?:\\W|$)"),!1)&&(e[n]=!0,e.mode=c.attributes);return a(e)}function a(t){var n=r(t);if(n)return n;var i=[];return t.layoutType&&i.push(e[t.layoutType]),i=i.concat(function(t){for(var n=[],i=1;i<arguments.length;++i)t[arguments[i]]&&n.push(e[arguments[i]]);return n}(t,"addition","bold","cite","code","deletion","em","footCite","image","italic","link","span","strong","sub","sup","table","tableHeading")),"header"===t.layoutType&&i.push(e.header+"-"+t.header),i.length?i.join(" "):null}function r(t){var n=t.layoutType;switch(n){case"notextile":case"code":case"pre":return e[n];default:return t.notextile?e.notextile+(n?" "+e[n]:""):null}}function l(t,e){var n=r(t);if(n)return n;var i=a(t);return e?i?i+" "+e:e:i}function o(t){var e=t.spanningLayout,n=t.layoutType;for(var i in t)t.hasOwnProperty(i)&&delete t[i];t.mode=c.newLayout,e&&(t.layoutType=n,t.spanningLayout=!0)}var u={cache:{},single:{bc:"bc",bq:"bq",definitionList:/- .*?:=+/,definitionListEnd:/.*=:\s*$/,div:"div",drawTable:/\|.*\|/,foot:/fn\d+/,header:/h[1-6]/,html:/\s*<(?:\/)?(\w+)(?:[^>]+)?>(?:[^<]+<\/\1>)?/,link:/[^"]+":\S/,linkDefinition:/\[[^\s\]]+\]\S+/,list:/(?:#+|\*+)/,notextile:"notextile",para:"p",pre:"pre",table:"table",tableCellAttributes:/[\/\\]\d+/,tableHeading:/\|_\./,tableText:/[^"_\*\[\(\?\+~\^%@|-]+/,text:/[^!"_=\*\[\(<\?\+~\^%@-]+/},attributes:{align:/(?:<>|<|>|=)/,selector:/\([^\(][^\)]+\)/,lang:/\[[^\[\]]+\]/,pad:/(?:\(+|\)+){1,2}/,css:/\{[^\}]+\}/},createRe:function(t){switch(t){case"drawTable":return u.makeRe("^",u.single.drawTable,"$");case"html":return u.makeRe("^",u.single.html,"(?:",u.single.html,")*","$");case"linkDefinition":return u.makeRe("^",u.single.linkDefinition,"$");case"listLayout":return u.makeRe("^",u.single.list,s("allAttributes"),"*\\s+");case"tableCellAttributes":return u.makeRe("^",u.choiceRe(u.single.tableCellAttributes,s("allAttributes")),"+\\.");case"type":return u.makeRe("^",s("allTypes"));case"typeLayout":return u.makeRe("^",s("allTypes"),s("allAttributes"),"*\\.\\.?","(\\s+|$)");case"attributes":return u.makeRe("^",s("allAttributes"),"+");case"allTypes":return u.choiceRe(u.single.div,u.single.foot,u.single.header,u.single.bc,u.single.bq,u.single.notextile,u.single.pre,u.single.table,u.single.para);case"allAttributes":return u.choiceRe(u.attributes.selector,u.attributes.css,u.attributes.lang,u.attributes.align,u.attributes.pad);default:return u.makeRe("^",u.single[t])}},makeRe:function(){for(var t="",e=0;e<arguments.length;++e){var n=arguments[e];t+="string"===typeof n?n:n.source}return new RegExp(t)},choiceRe:function(){for(var t=[arguments[0]],e=1;e<arguments.length;++e)t[2*e-1]="|",t[2*e]=arguments[e];return t.unshift("(?:"),t.push(")"),u.makeRe.apply(null,t)}};function s(t){return u.cache[t]||(u.cache[t]=u.createRe(t))}var c={newLayout:function(t,e){return t.match(s("typeLayout"),!1)?(e.spanningLayout=!1,(e.mode=c.blockType)(t,e)):(r(e)||(t.match(s("listLayout"),!1)?n=c.list:t.match(s("drawTable"),!1)?n=c.table:t.match(s("linkDefinition"),!1)?n=c.linkDefinition:t.match(s("definitionList"))?n=c.definitionList:t.match(s("html"),!1)&&(n=c.html)),(e.mode=n||c.text)(t,e));var n},blockType:function(t,e){var n,i;return e.layoutType=null,(n=t.match(s("type")))?((n=(i=n[0]).match(s("header")))?(e.layoutType="header",e.header=parseInt(n[0][1])):i.match(s("bq"))?e.layoutType="quote":i.match(s("bc"))?e.layoutType="code":i.match(s("foot"))?e.layoutType="footnote":i.match(s("notextile"))?e.layoutType="notextile":i.match(s("pre"))?e.layoutType="pre":i.match(s("div"))?e.layoutType="div":i.match(s("table"))&&(e.layoutType="table"),e.mode=c.attributes,a(e)):(e.mode=c.text)(t,e)},text:function(t,e){if(t.match(s("text")))return a(e);var i=t.next();return'"'===i?(e.mode=c.link)(t,e):n(t,e,i)},attributes:function(t,n){return n.mode=c.layoutLength,t.match(s("attributes"))?l(n,e.attributes):a(n)},layoutLength:function(t,e){return t.eat(".")&&t.eat(".")&&(e.spanningLayout=!0),e.mode=c.text,a(e)},list:function(t,e){var n=t.match(s("list"));e.listDepth=n[0].length;var i=(e.listDepth-1)%3;return e.layoutType=i?1===i?"list2":"list3":"list1",e.mode=c.attributes,a(e)},link:function(t,n){return n.mode=c.text,t.match(s("link"))?(t.match(/\S+/),l(n,e.link)):a(n)},linkDefinition:function(t,n){return t.skipToEnd(),l(n,e.linkDefinition)},definitionList:function(t,e){return t.match(s("definitionList")),e.layoutType="definitionList",t.match(/\s*$/)?e.spanningLayout=!0:e.mode=c.attributes,a(e)},html:function(t,n){return t.skipToEnd(),l(n,e.html)},table:function(t,e){return e.layoutType="table",(e.mode=c.tableCell)(t,e)},tableCell:function(t,e){return t.match(s("tableHeading"))?e.tableHeading=!0:t.eat("|"),e.mode=c.tableCellAttributes,a(e)},tableCellAttributes:function(t,n){return n.mode=c.tableText,t.match(s("tableCellAttributes"))?l(n,e.attributes):a(n)},tableText:function(t,e){return t.match(s("tableText"))?a(e):"|"===t.peek()?(e.mode=c.tableCell,a(e)):n(t,e,t.next())}};t.defineMode("textile",(function(){return{startState:function(){return{mode:c.newLayout}},token:function(t,e){return t.sol()&&function(t,e){e.mode=c.newLayout,e.tableHeading=!1,"definitionList"===e.layoutType&&e.spanningLayout&&t.match(s("definitionListEnd"),!1)&&(e.spanningLayout=!1)}(t,e),e.mode(t,e)},blankLine:o}})),t.defineMIME("text/x-textile","textile")}(n(53))}}]);
//# sourceMappingURL=524.91fc8956.chunk.js.map