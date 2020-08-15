(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{245:function(t,s,a){"use strict";a.r(s);var n=a(28),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey},scopedSlots:t._u([{key:"introduction",fn:function(){return[a("p",[t._v("A modern, SVG-based color picker widget for vanilla JavaScript.")])]},proxy:!0},{key:"tutorial-iro-js",fn:function(){return[a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("h5",{attrs:{id:"通过npm安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过npm安装"}},[t._v("#")]),t._v(" 通过NPM安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @jaames/iro --save\n")])])]),a("p",[t._v("如果您使用的是Webpack或Rollup之类的模块捆绑器，请将iro.js导入您的项目中：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用ES6模块语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" iro "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@jaames/iro'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用CommonJS模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" iro "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@jaames/iro'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h5",{attrs:{id:"也可使用-cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#也可使用-cdn"}},[t._v("#")]),t._v(" 也可使用 CDN")]),t._v(" "),a("p",[t._v("将此脚本拖放到您页面的 HTML "),a("code",[t._v("<head>")]),t._v(" 中：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/@jaames/iro@5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("当您手动包含这样的库时，iro.js将在 "),a("code",[t._v("window.iro")]),t._v(" 上全局可用。")]),t._v(" "),a("h5",{attrs:{id:"也可下载并自己托管"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#也可下载并自己托管"}},[t._v("#")]),t._v(" 也可下载并自己托管")]),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://raw.githubusercontent.com/jaames/iro.js/master/dist/iro.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("开发版本"),a("OutboundLink")],1)]),a("br"),t._v("未压缩，包括源注释。 用于调试。")]),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://raw.githubusercontent.com/jaames/iro.js/master/dist/iro.min.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("生产版本"),a("OutboundLink")],1)]),a("br"),t._v("缩小和优化的版本。")]),t._v(" "),a("h3",{attrs:{id:"颜色选择器设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#颜色选择器设置"}},[t._v("#")]),t._v(" 颜色选择器设置")]),t._v(" "),a("p",[t._v("首先， 我们需要一个具有唯一标识符的HTML元素 (例如一个 "),a("code",[t._v("id")]),t._v(" 属性) 作为颜色选择器的容器：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("picker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("然后使用 JavaScript 创建一个新的 "),a("code",[t._v("iro.ColorPicker")]),t._v(" 与您选择的容器元素匹配的 CSS 选择器：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" colorPicker "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("iro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ColorPicker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#picker'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("您还可以在此处使用DOM对象而不是CSS选择器 -- 如果将iro.js集成到使用诸如Vue，React等框架构建的应用程序中，这可能更合适。")]),t._v(" "),a("h3",{attrs:{id:"颜色选择器选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#颜色选择器选项"}},[t._v("#")]),t._v(" 颜色选择器选项")]),t._v(" "),a("p",[t._v("可以通过将一组选项传递给 "),a("code",[t._v("iro.ColorPicker")]),t._v(" 的第二个参数来自定义颜色选择器：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" colorPicker "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("iro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ColorPicker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#picker"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置颜色选择器的大小")]),t._v("\n  width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("320")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将初始颜色设置为纯红色")]),t._v("\n  color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#f00"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("颜色选择器选项的完整列表可以在 "),a("RouterLink",{attrs:{to:"/zh/guide.html#颜色选择器选项"}},[t._v("选项文档")]),t._v(" 中找到。")],1),t._v(" "),a("h3",{attrs:{id:"使用颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用颜色"}},[t._v("#")]),t._v(" 使用颜色")]),t._v(" "),a("p",[t._v("每个颜色选择器都有一个 color 对象来存储当前选中的颜色。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" colorPicker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hexString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// hex = "#ff0000"')]),t._v("\n")])])]),a("p",[t._v("每当您设置这些颜色属性时，颜色选择器将自动更新以匹配它！")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("colorPicker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 颜色选择器更新以匹配hsl(180, 100, 50)")]),t._v("\n")])])]),a("p",[t._v("有关颜色属性的完整列表，请参见"),a("RouterLink",{attrs:{to:"/guide.html#使用颜色"}},[t._v("颜色文档")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),a("p",[t._v("通过事件，您可以在某些事情发生后运行自己的代码，例如，当选定的颜色发生更改或用户与颜色选择器进行交互时。")]),t._v(" "),a("p",[t._v("拾色器的 "),a("RouterLink",{attrs:{to:"/zh/colorPicker_api.html#on"}},[a("code",[t._v("on")])]),t._v(" 方法可用于附加在触发特定事件时将调用的函数。 例如，我们可以添加一个监听器，当颜色被更改时触发：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//收听颜色选择器的color:change事件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//color:change回调接收当前颜色")]),t._v("\ncolorPicker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'color:change'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将当前颜色记录为十六进制字符串")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hexString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("关于可用事件的全面概述，可在 "),a("RouterLink",{attrs:{to:"/guide.html#颜色选择事件"}},[t._v("事件文档")]),t._v(" 中找到。")],1)]},proxy:!0}])})}),[],!1,null,null,null);s.default=r.exports}}]);