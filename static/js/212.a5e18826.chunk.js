(this["webpackJsonp@uiw/react-split"]=this["webpackJsonp@uiw/react-split"]||[]).push([[212],{435:function(a,t){!function(a){a.languages.latte={comment:/^\{\*[\s\S]*/,ld:{pattern:/^\{(?:[=_]|\/?(?!\d|\w+\()\w+|)/,inside:{punctuation:/^\{\/?/,tag:{pattern:/.+/,alias:"important"}}},rd:{pattern:/\}$/,inside:{punctuation:/.+/}},php:{pattern:/\S(?:[\s\S]*\S)?/,alias:"language-php",inside:a.languages.php}};var t=a.languages.extend("markup",{});a.languages.insertBefore("inside","attr-value",{"n-attr":{pattern:/n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,inside:{"attr-name":{pattern:/^[^\s=]+/,alias:"important"},"attr-value":{pattern:/=[\s\S]+/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],php:{pattern:/\S(?:[\s\S]*\S)?/,inside:a.languages.php}}}}}},t.tag),a.hooks.add("before-tokenize",(function(e){if("latte"===e.language){a.languages["markup-templating"].buildPlaceholders(e,"latte",/\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*[\s\S]*?\*\/)*?\}/g),e.grammar=t}})),a.hooks.add("after-tokenize",(function(t){a.languages["markup-templating"].tokenizePlaceholders(t,"latte")}))}(Prism)}}]);
//# sourceMappingURL=212.a5e18826.chunk.js.map