(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[108],{331:function(e,n){!function(e){e.languages.erb=e.languages.extend("ruby",{}),e.languages.insertBefore("erb","comment",{delimiter:{pattern:/^<%=?|%>$/,alias:"punctuation"}}),e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"erb",/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"erb")}))}(Prism)}}]);
//# sourceMappingURL=108.95e65d12.chunk.js.map