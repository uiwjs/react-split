(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[163],{397:function(t,a){!function(t){t.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var a,e,i,n=t.languages,p={"application/javascript":n.javascript,"application/json":n.json||n.javascript,"application/xml":n.xml,"text/xml":n.xml,"text/html":n.html,"text/css":n.css},s={"application/json":!0,"application/xml":!0};for(var r in p)if(p[r]){a=a||{};var l=s[r]?(i=(e=r).replace(/^[a-z]+\//,""),"(?:"+e+"|\\w+/(?:[\\w.-]+\\+)+"+i+"(?![+\\w.-]))"):r;a[r.replace(/\//g,"-")]={pattern:RegExp("(content-type:\\s*"+l+"[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:p[r]}}a&&t.languages.insertBefore("http","header-name",a)}(Prism)}}]);
//# sourceMappingURL=163.20aa753e.chunk.js.map