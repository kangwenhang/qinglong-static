(self.webpackChunk=self.webpackChunk||[]).push([[1910],{27382:function(E,f){"use strict";f.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u65E5\u5FD7\u7BA1\u7406",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u65E5\u5FD7\u7BA1\u7406",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"aibotk",label:"\u667A\u80FD\u5FAE\u79D8\u4E66"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:"\u7FA4\u8F89chat"},{value:"email",label:"\u90AE\u7BB1"},{value:"lark",label:"\u98DE\u4E66\u673A\u5668\u4EBA"},{value:"webhook",label:"\u81EA\u5B9A\u4E49\u901A\u77E5"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],chat:[{label:"chatUrl",tip:"chat\u7684url\u5730\u5740",required:!0},{label:"chatToken",tip:"chat\u7684token\u7801",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0},{label:"pushDeerUrl",tip:"PushDeer\u7684\u81EA\u67B6API endpoint\uFF0C\u9ED8\u8BA4\u662F https://api2.pushdeer.com/message/push"}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],aibotk:[{label:"aibotkKey",tip:"\u5BC6\u94A5key,\u667A\u80FD\u5FAE\u79D8\u4E66\u4E2A\u4EBA\u4E2D\u5FC3\u83B7\u53D6apikey\uFF0C\u7533\u8BF7\u5730\u5740\uFF1Ahttps://wechat.aibotk.com/signup?from=ql",required:!0},{label:"aibotkType",tip:"\u53D1\u9001\u7684\u76EE\u6807\uFF0C\u7FA4\u7EC4\u6216\u8005\u597D\u53CB",required:!0,placeholder:"\u8BF7\u8F93\u5165\u8981\u53D1\u9001\u7684\u76EE\u6807",items:[{value:"room",label:"\u7FA4\u804A"},{value:"contact",label:"\u597D\u53CB"}]},{label:"aibotkName",tip:"\u8981\u53D1\u9001\u7684\u7528\u6237\u6635\u79F0\u6216\u7FA4\u540D\uFF0C\u5982\u679C\u76EE\u6807\u662F\u7FA4\uFF0C\u9700\u8981\u586B\u7FA4\u540D\uFF0C\u5982\u679C\u76EE\u6807\u662F\u597D\u53CB\uFF0C\u9700\u8981\u586B\u597D\u53CB\u6635\u79F0",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001\uFF0C\u53C2\u8003 https://www.pushplus.plus/",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],lark:[{label:"larkKey",tip:"\u98DE\u4E66\u7FA4\u7EC4\u673A\u5668\u4EBA\uFF1Ahttps://www.feishu.cn/hc/zh-CN/articles/360024984973",required:!0}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}],webhook:[{label:"webhookMethod",tip:"\u8BF7\u6C42\u65B9\u6CD5",required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:"\u8BF7\u6C42\u5934Content-Type",required:!0,items:[{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:"\u8BF7\u6C42\u94FE\u63A5\u4EE5http\u6216\u8005https\u5F00\u5934\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",required:!0,placeholder:`https://xxx.cn/api?content=$title
`},{label:"webhookHeaders",tip:"\u8BF7\u6C42\u5934\u683C\u5F0FCustom-Header1: Header1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272",placeholder:`Custom-Header1: Header1
Custom-Header2: Header2`},{label:"webhookBody",tip:"\u8BF7\u6C42\u4F53\u683C\u5F0Fkey1: value1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",placeholder:`key1: $title
key2: $content`}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/crontab":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u65E5\u5FD7\u7BA1\u7406","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7","/dependence":"\u4F9D\u8D56\u7BA1\u7406"},dependenceTypes:["nodejs","python3","linux"]}},74083:function(E,f,u){"use strict";u.d(f,{W:function(){return a}});var v=u(35290),h=u.n(v),k=u(411),y=u.n(k),P=u(30279),w=u.n(P),q=u(50659),m=u(63533),b=u(27382),c=u(69500);m.ZP.config({duration:1.5});var s=Date.now(),e=function(r){if(r.response){var n=r.data?r.data.message||r.message||r.data:r.response.statusText,d=r.response.status;[502,504].includes(d)?c.m8.push("/error"):d===401?c.m8.location.pathname!=="/login"&&(m.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(b.Z.authKey),c.m8.push("/login")):m.ZP.error(n)}else console.log(r.message);throw r},t=(0,q.l7)({timeout:6e4,params:{t:s},errorHandler:e}),o=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];t.interceptors.request.use(function(l,r){var n=localStorage.getItem(b.Z.authKey);if(n&&!o.includes(l)){var d={Authorization:"Bearer ".concat(n)};return{url:l,options:w()(w()({},r),{},{headers:d})}}return{url:l,options:r}}),t.interceptors.response.use(function(){var l=y()(h()().mark(function r(n){var d,g,p;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(d=n.status,![502,504].includes(d)){i.next=5;break}c.m8.push("/error"),i.next=14;break;case 5:if(d!==401){i.next=9;break}c.m8.location.pathname!=="/login"&&(localStorage.removeItem(b.Z.authKey),c.m8.push("/login")),i.next=14;break;case 9:return i.next=11,n.clone().json();case 11:return g=i.sent,g.code!==200&&(p=g.message||g.data,p&&m.ZP.error(p)),i.abrupt("return",g);case 14:return i.abrupt("return",n);case 15:case"end":return i.stop()}},r)}));return function(r){return l.apply(this,arguments)}}());var a=t},79418:function(E,f,u){"use strict";u.d(f,{ZP:function(){return y},I1:function(){return m},w7:function(){return q},FA:function(){return c},W9:function(){return P},x$:function(){return b}});var v=u(94434),h=u.n(v),k=`
\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000`;function y(){var s=navigator.userAgent.toLowerCase(),e=function(x){return x.test(s)},t=function(x){return(s.match(x)||[]).toString().replace(/[^0-9|_.]/g,"").replace(/_/g,".")},o="unknow";e(/windows|win32|win64|wow32|wow64/g)?o="windows":e(/macintosh|macintel/g)?o="macos":e(/x11/g)?o="linux":e(/android|adr/g)?o="android":e(/ios|iphone|ipad|ipod|iwatch/g)&&(o="ios");var a="unknow";o==="windows"?e(/windows nt 5.0|windows 2000/g)?a="2000":e(/windows nt 5.1|windows xp/g)?a="xp":e(/windows nt 5.2|windows 2003/g)?a="2003":e(/windows nt 6.0|windows vista/g)?a="vista":e(/windows nt 6.1|windows 7/g)?a="7":e(/windows nt 6.2|windows 8/g)?a="8":e(/windows nt 6.3|windows 8.1/g)?a="8.1":e(/windows nt 10.0|windows 10/g)&&(a="10"):o==="macos"?a=t(/os x [\d._]+/g):o==="android"?a=t(/android [\d._]+/g):o==="ios"&&(a=t(/os [\d._]+/g));var l="unknow";o==="windows"||o==="macos"||o==="linux"?l="desktop":(o==="android"||o==="ios"||e(/mobile/g))&&(l="mobile");var r="unknow",n="unknow";e(/applewebkit/g)?(r="webkit",e(/edge/g)?n="edge":e(/opr/g)?n="opera":e(/chrome/g)?n="chrome":e(/safari/g)&&(n="safari")):e(/gecko/g)&&e(/firefox/g)?(r="gecko",n="firefox"):e(/presto/g)?(r="presto",n="opera"):e(/trident|compatible|msie/g)&&(r="trident",n="iexplore");var d="unknow";r==="webkit"?d=t(/applewebkit\/[\d._]+/g):r==="gecko"?d=t(/gecko\/[\d._]+/g):r==="presto"?d=t(/presto\/[\d._]+/g):r==="trident"&&(d=t(/trident\/[\d._]+/g));var g="unknow";n==="chrome"?g=t(/chrome\/[\d._]+/g):n==="safari"?g=t(/version\/[\d._]+/g):n==="firefox"?g=t(/firefox\/[\d._]+/g):n==="opera"?g=t(/opr\/[\d._]+/g):n==="iexplore"?g=t(/(msie [\d._]+)|(rv:[\d._]+)/g):n==="edge"&&(g=t(/edge\/[\d._]+/g));var p="none",_="unknow";e(/micromessenger/g)?(p="wechat",_=t(/micromessenger\/[\d._]+/g)):e(/qqbrowser/g)?(p="qq",_=t(/qqbrowser\/[\d._]+/g)):e(/ucbrowser/g)?(p="uc",_=t(/ucbrowser\/[\d._]+/g)):e(/qihu 360se/g)?p="360":e(/2345explorer/g)?(p="2345",_=t(/2345explorer\/[\d._]+/g)):e(/metasr/g)?p="sougou":e(/lbbrowser/g)?p="liebao":e(/maxthon/g)&&(p="maxthon",_=t(/maxthon\/[\d._]+/g));var i=Object.assign({engine:r,engineVs:d,platform:l,supporter:n,supporterVs:g,system:o,systemVs:a},p==="none"?{}:{shell:p,shellVs:_});return console.log(`%c
 .d88b.  d888888b d8b   db  d888b  db       .d88b.  d8b   db  d888b  
.8P  Y8.   \`88'   888o  88 88' Y8b 88      .8P  Y8. 888o  88 88' Y8b 
88    88    88    88V8o 88 88      88      88    88 88V8o 88 88      
88    88    88    88 V8o88 88  ooo 88      88    88 88 V8o88 88  ooo 
\`8P  d8'   .88.   88  V888 88. ~8~ 88booo. \`8b  d8' 88  V888 88. ~8~ 
 \`Y88'Y8 Y888888P VP   V8P  Y888P  Y88888P  \`Y88P'  VP   V8P  Y888P  
                                                                     
                                                                     
`,"color: blue;font-size: 14px;"),console.log(`%c\u5FD8\u5F62\u96E8\u7B20\u70DF\u84D1\uFF0C\u77E5\u5FC3\u7267\u5531\u6A35\u6B4C\u3002\u660E\u6708\u6E05\u98CE\u5171\u6211\uFF0C\u95F2\u4EBA\u4E09\u4E2A\uFF0C\u4ECE\u4ED6\u4ECA\u53E4\u6D88\u78E8\u3002
`,"color: yellow;font-size: 18px;"),console.log(`%c\u9752\u9F99\u8FD0\u884C\u73AF\u5883:

\u7CFB\u7EDF\uFF1A`.concat(i.system,"/").concat(i.systemVs,`
\u6D4F\u89C8\u5668\uFF1A`).concat(i.supporter,"/").concat(i.supporterVs,`
\u5185\u6838\uFF1A`).concat(i.engine,"/").concat(i.engineVs),"color: green;font-size: 14px;font-weight: bold;"),i}function P(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=s.extraHeight,t=s.target;typeof e=="undefined"&&(e=99);var o=null;t?o=t:o=document.querySelector(".ant-table-wrapper");var a=0;o&&(a=o.getBoundingClientRect().top);var l=document.body.clientHeight-a-e;return l}function w(s){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),s.dispatchEvent(e)}function q(s,e){var t=window.URL||window.webkitURL||window,o=new Blob([e]),a=document.createElementNS("http://www.w3.org/1999/xhtml","a");a.href=t.createObjectURL(o),a.download=s,w(a)}function m(s,e,t){var o=h()(s),a=[];return function l(r){if(!!r)for(var n=0;n<(r==null?void 0:r.length);n++){if(e(r[n])){if(!t){r.splice(n,1);return}r[n].children?r[n].children.unshift(t):r[n].children=[t];return}r[n].children&&(a.push(r[n].key),l(r[n].children))}}(o),o}function b(s){var e=[k,"\u6267\u884C\u7ED3\u675F"];return e.some(function(t){return s.includes(t)})}function c(s){var e=s.split(" ");if(e[1]==="repo"||e[1]==="raw")return e[2];var t=e.find(function(r){return[".js",".ts",".sh",".py"].some(function(n){return r.endsWith(n)})});if(!!t){t.startsWith("/ql/data/scripts")&&(t=t.replace("/ql/data/scripts/",""));var o,a,l=t.lastIndexOf("/");return l>=0?(a=t.slice(l+1),o=t.slice(0,l)):(a=t,o=""),[a,o]}}},71129:function(){}}]);
