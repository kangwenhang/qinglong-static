(self.webpackChunk=self.webpackChunk||[]).push([[3830],{50623:function(v,i,e){"use strict";e.r(i);var E=e(46686),p=e.n(E),c=e(63313),D=e.n(c),P=e(27387),s=e(63533),g=e(4352),m=e(59225),h=e(74083),_=e(27382),t=e(11527),O=P.Z.Countdown,y=function(C){var r=C.socketMessage,a=C.systemInfo,d=(0,c.useState)(!1),u=p()(d,2),f=u[0],b=u[1],w=(0,c.useState)(""),n=p()(w,2),T=n[0],A=n[1],U=(0,c.useRef)(),R=function(){f||(b(!0),s.ZP.loading("\u68C0\u67E5\u66F4\u65B0\u4E2D...",0),h.W.put("".concat(_.Z.apiPrefix,"system/update-check")).then(function(o){var B=o.code,l=o.data;s.ZP.destroy(),B===200&&(l.hasNewVersion?q(l):I(l))}).catch(function(o){s.ZP.destroy(),console.log(o)}).finally(function(){b(!1)}))},I=function(o){g.Z.confirm({width:500,title:"\u66F4\u65B0",content:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:"\u5DF2\u7ECF\u662F\u6700\u65B0\u7248\u4E86\uFF01"}),(0,t.jsxs)("div",{style:{fontSize:12,fontWeight:400,marginTop:5},children:["\u9752\u9F99 ",o.lastVersion," \u662F\u76EE\u524D\u68C0\u6D4B\u5230\u7684\u6700\u65B0\u53EF\u7528\u7248\u672C\u4E86\u3002"]})]}),okText:"\u786E\u8BA4",cancelText:"\u5F3A\u5236\u66F4\u65B0",onCancel:function(){W(),h.W.put("".concat(_.Z.apiPrefix,"system/update")).then(function(l){}).catch(function(l){console.log(l)})}})},q=function(o){var B=o.lastVersion,l=o.lastLog;g.Z.confirm({width:500,title:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:"\u66F4\u65B0\u53EF\u7528"}),(0,t.jsxs)("div",{style:{fontSize:12,fontWeight:400,marginTop:5},children:["\u65B0\u7248\u672C ",B," \u53EF\u7528\uFF0C\u4F60\u4F7F\u7528\u7684\u7248\u672C\u4E3A ",a.version,"\u3002"]})]}),content:(0,t.jsx)("pre",{style:{fontSize:12,fontWeight:400},children:l}),okText:"\u66F4\u65B0",cancelText:"\u4EE5\u540E\u518D\u8BF4",onOk:function(){W(),h.W.put("".concat(_.Z.apiPrefix,"system/update")).then(function(K){}).catch(function(K){console.log(K)})}})},W=function(){A(""),U.current=g.Z.info({width:600,maskClosable:!1,closable:!1,okButtonProps:{disabled:!0},title:"\u66F4\u65B0\u4E2D...",centered:!0,content:(0,t.jsx)("pre",{style:{fontSize:12,fontWeight:400},children:T})})};return(0,c.useEffect)(function(){if(!(!U.current||!r)){var k=r.type,o=r.message,B=r.references;if(k==="updateSystemVersion"){var l="".concat(T).concat(o),M=l.includes("\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5");U.current.update({maskClosable:M,closable:M,okButtonProps:{disabled:!M},content:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("pre",{style:{fontSize:12,fontWeight:400},children:l}),(0,t.jsx)("div",{id:"log-identifier",style:{paddingBottom:5}})]})}),M&&!T.includes("\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5")&&s.ZP.error("\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u53CA\u65E5\u5FD7\u6216\u7A0D\u540E\u518D\u8BD5"),A(l),document.getElementById("log-identifier")&&document.getElementById("log-identifier").scrollIntoView({behavior:"smooth",block:"nearest"}),o.includes("\u91CD\u542F\u9762\u677F")&&(s.ZP.warning({content:(0,t.jsxs)("span",{children:["\u7CFB\u7EDF\u5C06\u5728",(0,t.jsx)(O,{className:"inline-countdown",format:"ss",value:Date.now()+1e3*30}),"\u79D2\u540E\u81EA\u52A8\u5237\u65B0"]}),duration:30}),setTimeout(function(){window.location.reload()},3e4))}}},[r]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(m.Z,{type:"primary",onClick:R,children:"\u68C0\u67E5\u66F4\u65B0"})})};i.default=y},27382:function(v,i){"use strict";i.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u65E5\u5FD7\u7BA1\u7406",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u65E5\u5FD7\u7BA1\u7406",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"aibotk",label:"\u667A\u80FD\u5FAE\u79D8\u4E66"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:"\u7FA4\u8F89chat"},{value:"email",label:"\u90AE\u7BB1"},{value:"lark",label:"\u98DE\u4E66\u673A\u5668\u4EBA"},{value:"webhook",label:"\u81EA\u5B9A\u4E49\u901A\u77E5"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],chat:[{label:"chatUrl",tip:"chat\u7684url\u5730\u5740",required:!0},{label:"chatToken",tip:"chat\u7684token\u7801",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0},{label:"pushDeerUrl",tip:"PushDeer\u7684\u81EA\u67B6API endpoint\uFF0C\u9ED8\u8BA4\u662F https://api2.pushdeer.com/message/push"}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],aibotk:[{label:"aibotkKey",tip:"\u5BC6\u94A5key,\u667A\u80FD\u5FAE\u79D8\u4E66\u4E2A\u4EBA\u4E2D\u5FC3\u83B7\u53D6apikey\uFF0C\u7533\u8BF7\u5730\u5740\uFF1Ahttps://wechat.aibotk.com/signup?from=ql",required:!0},{label:"aibotkType",tip:"\u53D1\u9001\u7684\u76EE\u6807\uFF0C\u7FA4\u7EC4\u6216\u8005\u597D\u53CB",required:!0,placeholder:"\u8BF7\u8F93\u5165\u8981\u53D1\u9001\u7684\u76EE\u6807",items:[{value:"room",label:"\u7FA4\u804A"},{value:"contact",label:"\u597D\u53CB"}]},{label:"aibotkName",tip:"\u8981\u53D1\u9001\u7684\u7528\u6237\u6635\u79F0\u6216\u7FA4\u540D\uFF0C\u5982\u679C\u76EE\u6807\u662F\u7FA4\uFF0C\u9700\u8981\u586B\u7FA4\u540D\uFF0C\u5982\u679C\u76EE\u6807\u662F\u597D\u53CB\uFF0C\u9700\u8981\u586B\u597D\u53CB\u6635\u79F0",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001\uFF0C\u53C2\u8003 https://www.pushplus.plus/",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],lark:[{label:"larkKey",tip:"\u98DE\u4E66\u7FA4\u7EC4\u673A\u5668\u4EBA\uFF1Ahttps://www.feishu.cn/hc/zh-CN/articles/360024984973",required:!0}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}],webhook:[{label:"webhookMethod",tip:"\u8BF7\u6C42\u65B9\u6CD5",required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:"\u8BF7\u6C42\u5934Content-Type",required:!0,items:[{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:"\u8BF7\u6C42\u94FE\u63A5\u4EE5http\u6216\u8005https\u5F00\u5934\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",required:!0,placeholder:`https://xxx.cn/api?content=$title
`},{label:"webhookHeaders",tip:"\u8BF7\u6C42\u5934\u683C\u5F0FCustom-Header1: Header1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272",placeholder:`Custom-Header1: Header1
Custom-Header2: Header2`},{label:"webhookBody",tip:"\u8BF7\u6C42\u4F53\u683C\u5F0Fkey1: value1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",placeholder:`key1: $title
key2: $content`}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/crontab":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u65E5\u5FD7\u7BA1\u7406","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7","/dependence":"\u4F9D\u8D56\u7BA1\u7406"},dependenceTypes:["nodejs","python3","linux"]}},74083:function(v,i,e){"use strict";e.d(i,{W:function(){return C}});var E=e(35290),p=e.n(E),c=e(411),D=e.n(c),P=e(30279),s=e.n(P),g=e(50659),m=e(63533),h=e(27382),_=e(69500);m.ZP.config({duration:1.5});var t=Date.now(),O=function(a){if(a.response){var d=a.data?a.data.message||a.message||a.data:a.response.statusText,u=a.response.status;[502,504].includes(u)?_.m8.push("/error"):u===401?_.m8.location.pathname!=="/login"&&(m.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(h.Z.authKey),_.m8.push("/login")):m.ZP.error(d)}else console.log(a.message);throw a},y=(0,g.l7)({timeout:6e4,params:{t},errorHandler:O}),x=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];y.interceptors.request.use(function(r,a){var d=localStorage.getItem(h.Z.authKey);if(d&&!x.includes(r)){var u={Authorization:"Bearer ".concat(d)};return{url:r,options:s()(s()({},a),{},{headers:u})}}return{url:r,options:a}}),y.interceptors.response.use(function(){var r=D()(p()().mark(function a(d){var u,f,b;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(u=d.status,![502,504].includes(u)){n.next=5;break}_.m8.push("/error"),n.next=14;break;case 5:if(u!==401){n.next=9;break}_.m8.location.pathname!=="/login"&&(localStorage.removeItem(h.Z.authKey),_.m8.push("/login")),n.next=14;break;case 9:return n.next=11,d.clone().json();case 11:return f=n.sent,f.code!==200&&(b=f.message||f.data,b&&m.ZP.error(b)),n.abrupt("return",f);case 14:return n.abrupt("return",d);case 15:case"end":return n.stop()}},a)}));return function(a){return r.apply(this,arguments)}}());var C=y},60214:function(v,i,e){"use strict";e.d(i,{Z:function(){return D}});var E=e(6614),p=e(63313),c=e.n(p);function D(){var P=p.useReducer(function(m){return m+1},0),s=(0,E.Z)(P,2),g=s[1];return g}},24669:function(v){var i=Array.isArray;v.exports=i},71129:function(){}}]);
