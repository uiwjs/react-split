(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[1],{1001:function(e,t){},1137:function(e,t){},1156:function(e,t,s){},1262:function(e,t,s){"use strict";s.r(t);var i=s(0),n=s.n(i),r=s(15),a=s.n(r),o=s(357),l=(s(389),s(390),s(130)),c=s(135),d=s(134),h=s(205),j=s(73),p=s(136),u=s(363),m=s(364),g=s(370),f=s.n(g),v=s(379),b=s(22),x=["language","dependencies","codePen","codeSandbox"];function k(e){var t=e.language,s=e.dependencies,i=(e.codePen,e.codeSandbox),n=Object(p.a)(e,x),r=Object(j.a)({},n);return i&&(r.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n        "template": "node",\n        "container": {\n          "startScript": "start",\n          "node": "14"\n        }\n      }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:r.code.replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"react-amap-demo",description:"\u9ad8\u5fb7\u5730\u56fe React \u7ec4\u4ef6 - demo",dependencies:{react:"latest","react-dom":"latest","@uiw/react-amap":"latest"},devDependencies:{"@kkt/less-modules":"6.9.0",kkt:"6.9.0",typescript:"4.1.3"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),Object(b.jsx)(v.a,Object(j.a)(Object(j.a)({},r),{},{language:t,dependencies:s,style:{marginBottom:0}}))}var y=s(378),S=s.n(y),w=["data-config","inline","node"],z=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.forEach((function(t){"text"===t.type?s+=t.value:t.children&&Array.isArray(t.children)&&(s+=e(t.children))})),s},E=function(e){Object(c.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).getMdStr=void 0,i.dependencies=void 0,i.state={mdStr:""},i}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default||t})}))}},{key:"render",value:function(){var e=this;return Object(b.jsx)(m.a,{style:{padding:"20px 26px"},source:this.state.mdStr,className:S.a.markdown,rehypePlugins:[f.a],components:{code:function(t){var s=t["data-config"],i=(t.inline,t.node),n=Object(p.a)(t,w);if(s){var r=s,a=r.noPreview,o=r.noScroll,l=r.bgWhite,c=r.noCode,d=r.codePen,h=r.codeSandbox;return Object(b.jsx)(k,{code:z(i.children),dependencies:e.dependencies,language:(n.className||"").replace(/^language-/,""),noPreview:a,noScroll:o,bgWhite:l,noCode:c,codePen:d,codeSandbox:h})}return Object(b.jsx)("code",Object(j.a)({},n))}}})}}]),s}(i.Component),O=s(1),D=s.n(O),N=s(3),W=s.n(N),H=s(2),M=s.n(H),B=s(5),C=s.n(B),P=s(8),_=s.n(P),q=s(45),A=s.n(q),L=s(6),I=s.n(L),X=s(7),Y=s.n(X),R=(s(1156),["prefixCls","className","children","mode","visiable","lineBar","disable","onDragEnd","onDragging"]),F=function(e){I()(s,e);var t=Y()(s);function s(e){var i;return C()(this,s),(i=t.call(this,e)).state={dragging:!1},i.warpper=void 0,i.paneNumber=void 0,i.startX=void 0,i.startY=void 0,i.move=void 0,i.target=void 0,i.boxWidth=void 0,i.boxHeight=void 0,i.preWidth=void 0,i.nextWidth=void 0,i.preHeight=void 0,i.nextHeight=void 0,i.preSize=void 0,i.nextSize=void 0,i.onDragEnd=i.onDragEnd.bind(A()(i)),i.onDragging=i.onDragging.bind(A()(i)),i}return _()(s,[{key:"componentWillUnmount",value:function(){this.removeEvent()}},{key:"removeEvent",value:function(){window.removeEventListener("mousemove",this.onDragging,!1),window.removeEventListener("mouseup",this.onDragEnd,!1)}},{key:"onMouseDown",value:function(e,t){if(t.target&&this.warpper){this.paneNumber=e,this.startX=t.clientX,this.startY=t.clientY,this.move=!0,this.target=t.target.parentNode;var s=this.target.previousElementSibling,i=this.target.nextElementSibling;this.boxWidth=this.warpper.clientWidth,this.boxHeight=this.warpper.clientHeight,s&&(this.preWidth=s.clientWidth,this.preHeight=s.clientHeight),i&&(this.nextWidth=i.clientWidth,this.nextHeight=i.clientHeight),window.addEventListener("mousemove",this.onDragging),window.addEventListener("mouseup",this.onDragEnd,!1),this.setState({dragging:!0})}}},{key:"onDragging",value:function(e){if(this.move){this.state.dragging||this.setState({dragging:!0});var t=this.props,s=t.mode,i=t.onDragging,n=this.target.nextElementSibling,r=this.target.previousElementSibling,a=e.clientX-this.startX,o=e.clientY-this.startY;if(this.preSize=0,this.nextSize=0,"horizontal"===s){if(this.preSize=this.preWidth+a>-1?this.preWidth+a:0,this.nextSize=this.nextWidth-a>-1?this.nextWidth-a:0,0===this.preSize||0===this.nextSize)return;this.preSize=100*(this.preSize/this.boxWidth>=1?1:this.preSize/this.boxWidth),this.nextSize=100*(this.nextSize/this.boxWidth>=1?1:this.nextSize/this.boxWidth),r&&n&&(r.style.width="".concat(this.preSize,"%"),n.style.width="".concat(this.nextSize,"%"))}if("vertical"===s&&this.preHeight+o>-1&&this.nextHeight-o>-1){if(this.preSize=this.preHeight+o>-1?this.preHeight+o:0,this.nextSize=this.nextHeight-o>-1?this.nextHeight-o:0,this.preSize=100*(this.preSize/this.boxHeight>=1?1:this.preSize/this.boxHeight),this.nextSize=100*(this.nextSize/this.boxHeight>=1?1:this.nextSize/this.boxHeight),0===this.preSize||0===this.nextSize)return;r&&n&&(r.style.height="".concat(this.preSize,"%"),n.style.height="".concat(this.nextSize,"%"))}i&&i(this.preSize,this.nextSize,this.paneNumber)}}},{key:"onDragEnd",value:function(){var e=this.props.onDragEnd;this.move=!1,e&&e(this.preSize,this.nextSize,this.paneNumber),this.removeEvent(),this.setState({dragging:!1})}},{key:"render",value:function(){var e=this,t=this.props,s=t.prefixCls,i=t.className,r=t.children,a=t.mode,o=t.visiable,l=t.lineBar,c=t.disable,d=(t.onDragEnd,t.onDragging,M()(t,R)),h=this.state.dragging,j=[s,i,"".concat(s,"-").concat(a),h?"dragging":null].filter(Boolean).join(" ").trim(),p=n.a.Children.toArray(r);return n.a.createElement("div",D()({className:j},d,{ref:function(t){return e.warpper=t}}),n.a.Children.map(p,(function(t,i){var r=Object.assign({},t.props,{className:["".concat(s,"-pane"),t.props.className].filter(Boolean).join(" ").trim(),style:W()({},t.props.style)}),a=!0===o||o&&o.includes(i+1)||!1,d={className:["".concat(s,"-bar"),l?"".concat(s,"-line-bar"):null,l?null:"".concat(s,"-large-bar")].filter(Boolean).join(" ").trim()};return(!0===c||c&&c.includes(i+1))&&(d.className=[d.className,c?"disable":null].filter(Boolean).join(" ").trim()),n.a.createElement(n.a.Fragment,null,0!==i&&a&&n.a.createElement("div",W()({},d),n.a.createElement("div",{onMouseDown:e.onMouseDown.bind(e,i+1)})),n.a.cloneElement(t,W()({},r)))})))}}]),s}(n.a.Component);F.defaultProps={prefixCls:"w-split",visiable:!0,mode:"horizontal"};var U=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).dependencies={Split:F,Menu:h.b,Button:h.a,useRef:i.useRef,useEffect:i.useEffect,useState:i.useState},e.getMdStr=function(){return s.e(15).then(s.bind(null,1263))},e}return n}(E),J=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(o.a,{zIndex:9999,fixed:!0,href:"https://github.com/uiwjs/react-split"}),Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("h1",{className:"title",children:"React Split"}),Object(b.jsx)("a",{className:"App-link",href:"https://github.com/uiwjs/react-split",target:"_blank",rel:"noopener noreferrer",children:"Fork on Github"}),Object(b.jsx)("p",{children:"A piece of view can be divided into areas where the width or height can be adjusted by dragging."})]}),Object(b.jsx)(U,{})]})};a.a.render(Object(b.jsx)(J,{}),document.getElementById("root"))},378:function(e,t,s){e.exports={markdown:"index_markdown__1ILrE"}},390:function(e,t,s){},849:function(e,t,s){var i={"./apl/apl.js":[1157,0],"./asciiarmor/asciiarmor.js":[1158,0],"./asn.1/asn.1.js":[1159,0],"./asterisk/asterisk.js":[1160,0],"./brainfuck/brainfuck.js":[1161,0],"./clike/clike.js":[198,0],"./clojure/clojure.js":[1162,0],"./cmake/cmake.js":[1163,0],"./cobol/cobol.js":[1164,0],"./coffeescript/coffeescript.js":[347,0],"./commonlisp/commonlisp.js":[1165,0],"./crystal/crystal.js":[1166,0],"./css/css.js":[92,0],"./cypher/cypher.js":[1167,0],"./d/d.js":[1168,0],"./dart/dart.js":[1169,0],"./diff/diff.js":[1170,0],"./django/django.js":[1171,0],"./dockerfile/dockerfile.js":[1172,0],"./dtd/dtd.js":[1173,0],"./dylan/dylan.js":[1174,0],"./ebnf/ebnf.js":[1175,0],"./ecl/ecl.js":[1176,0],"./eiffel/eiffel.js":[1177,0],"./elm/elm.js":[1178,0],"./erlang/erlang.js":[1179,0],"./factor/factor.js":[1180,0],"./fcl/fcl.js":[1181,0],"./forth/forth.js":[1182,0],"./fortran/fortran.js":[1183,0],"./gas/gas.js":[1184,0],"./gfm/gfm.js":[1185,0],"./gherkin/gherkin.js":[1186,0],"./go/go.js":[1187,0],"./groovy/groovy.js":[1188,0],"./haml/haml.js":[1189,0],"./handlebars/handlebars.js":[349,0],"./haskell-literate/haskell-literate.js":[1190,0],"./haskell/haskell.js":[350,0],"./haxe/haxe.js":[1191,0],"./htmlembedded/htmlembedded.js":[1192,0],"./htmlmixed/htmlmixed.js":[44,0],"./http/http.js":[1193,0],"./idl/idl.js":[1194,0],"./javascript/javascript.js":[68,0],"./jinja2/jinja2.js":[1195,0],"./jsx/jsx.js":[1196,0],"./julia/julia.js":[1197,0],"./livescript/livescript.js":[1198,0],"./lua/lua.js":[1199,0],"./markdown/markdown.js":[348,0],"./mathematica/mathematica.js":[1200,0],"./mbox/mbox.js":[1201,0],"./meta.js":[168],"./mirc/mirc.js":[1202,0],"./mllike/mllike.js":[1203,0],"./modelica/modelica.js":[1204,0],"./mscgen/mscgen.js":[1205,0],"./mumps/mumps.js":[1206,0],"./nginx/nginx.js":[1207,0],"./nsis/nsis.js":[1208,0],"./ntriples/ntriples.js":[1209,0],"./octave/octave.js":[1210,0],"./oz/oz.js":[1211,0],"./pascal/pascal.js":[1212,0],"./pegjs/pegjs.js":[1213,0],"./perl/perl.js":[1214,0],"./php/php.js":[1215,0],"./pig/pig.js":[1216,0],"./powershell/powershell.js":[1217,0],"./properties/properties.js":[1218,0],"./protobuf/protobuf.js":[1219,0],"./pug/pug.js":[351,0],"./puppet/puppet.js":[1220,0],"./python/python.js":[352,0],"./q/q.js":[1221,0],"./r/r.js":[1222,0],"./rpm/rpm.js":[1223,0],"./rst/rst.js":[1224,0],"./ruby/ruby.js":[199,0],"./rust/rust.js":[1225,0],"./sas/sas.js":[1226,0],"./sass/sass.js":[354,0],"./scheme/scheme.js":[1227,0],"./shell/shell.js":[1228,0],"./sieve/sieve.js":[1229,0],"./slim/slim.js":[1230,0],"./smalltalk/smalltalk.js":[1231,0],"./smarty/smarty.js":[1232,0],"./solr/solr.js":[1233,0],"./soy/soy.js":[1234,0],"./sparql/sparql.js":[1235,0],"./spreadsheet/spreadsheet.js":[1236,0],"./sql/sql.js":[1237,0],"./stex/stex.js":[353,0],"./stylus/stylus.js":[355,0],"./swift/swift.js":[1238,0],"./tcl/tcl.js":[1239,0],"./textile/textile.js":[1240,0],"./tiddlywiki/tiddlywiki.js":[1241,0],"./tiki/tiki.js":[1242,0],"./toml/toml.js":[1243,0],"./tornado/tornado.js":[1244,0],"./troff/troff.js":[1245,0],"./ttcn-cfg/ttcn-cfg.js":[1247,0],"./ttcn/ttcn.js":[1246,0],"./turtle/turtle.js":[1248,0],"./twig/twig.js":[1249,0],"./vb/vb.js":[1250,0],"./vbscript/vbscript.js":[1251,0],"./velocity/velocity.js":[1252,0],"./verilog/verilog.js":[1253,0],"./vhdl/vhdl.js":[1254,0],"./vue/vue.js":[1255,0],"./wast/wast.js":[1256,0],"./webidl/webidl.js":[1257,0],"./xml/xml.js":[93,0],"./xquery/xquery.js":[1258,0],"./yacas/yacas.js":[1259,0],"./yaml-frontmatter/yaml-frontmatter.js":[1260,0],"./yaml/yaml.js":[356,0],"./z80/z80.js":[1261,0]};function n(e){if(!s.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],n=t[0];return Promise.all(t.slice(1).map(s.e)).then((function(){return s.t(n,7)}))}n.keys=function(){return Object.keys(i)},n.id=849,e.exports=n}},[[1262,2,0,5,4,9,12,7,3,8,11,10,6,13,14]]]);
//# sourceMappingURL=main.4fd4cb1d.chunk.js.map