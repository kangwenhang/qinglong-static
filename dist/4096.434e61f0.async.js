"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4096],{14096:function(me,H,u){u.r(H);var q=u(35290),x=u.n(q),ee=u(30279),J=u.n(ee),Q=u(411),ue=u.n(Q),ne=u(46686),s=u.n(ne),m=u(63313),ae=u.n(m),N=u(61839),l=u(71976),le=u(63533),i=u(30314),te=u(50499),re=u(4352),p=u(28666),k=u(84442),se=u(74083),a=u(27382),B=u(73183),_=u.n(B),e=u(11527),d=N.Z.Option,A=/[^\/\:]+\/[^\/]+(?=\.git)/,b=/[^\/\:]+\/[^\/]+$/,S=function(Z){var o=Z.subscription,K=Z.handleCancel,D=Z.visible,y=l.Z.useForm(),O=s()(y,1),c=O[0],g=(0,m.useState)(!1),T=s()(g,2),f=T[0],w=T[1],V=(0,m.useState)("public-repo"),X=s()(V,2),P=X[0],z=X[1],F=(0,m.useState)("crontab"),L=s()(F,2),j=L[0],ie=L[1],Ce=(0,m.useState)("ssh-key"),de=s()(Ce,2),Ee=de[0],ce=de[1],pe=function(){var h=ue()(x()().mark(function n(t){var r,C,E,I,M;return x()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return w(!0),r=o?"put":"post",C=J()(J()({},t),{},{autoAddCron:Boolean(t.autoAddCron),autoDelCron:Boolean(t.autoDelCron)}),o&&(C.id=o.id),v.prev=4,v.next=7,se.W[r]("".concat(a.Z.apiPrefix,"subscriptions"),{data:C});case 7:E=v.sent,I=E.code,M=E.data,I===200&&(le.ZP.success(o?"\u66F4\u65B0\u8BA2\u9605\u6210\u529F":"\u65B0\u5EFA\u8BA2\u9605\u6210\u529F"),K(M)),w(!1),v.next=17;break;case 14:v.prev=14,v.t0=v.catch(4),w(!1);case 17:case"end":return v.stop()}},n,null,[[4,14]])}));return function(t){return h.apply(this,arguments)}}(),Fe=function(n){z(n.target.value);var t=c.getFieldValue("url"),r=c.getFieldValue("branch");c.setFieldsValue({alias:Y(t,r,n.target.value)}),t&&c.validateFields(["url"])},De=function(n){ie(n.target.value),c.setFieldsValue({schedule:""})},ge=function(n){ce(n.target.value)},he=function(n){var t=c.getFieldValue("branch");c.setFieldsValue({alias:Y(n.target.value,t)})},_e=function(n){var t=c.getFieldValue("url");c.setFieldsValue({alias:Y(t,n.target.value)})},Y=function(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:P,C="",E=r==="file"?b:A;return E.test(n)&&(C=n.match(E)[0].replaceAll("/","_").replaceAll(".","_")),t&&(C=C+"_"+t),C},fe=function(n){var t=n.value,r=n.onChange,C=(0,m.useState)("days"),E=s()(C,2),I=E[0],M=E[1],$=(0,m.useState)(),v=s()($,2),W=v[0],G=v[1],oe=function(U){M(U),W&&W>0&&(r==null||r({type:U,value:W}))},Ae=function(U){G(U||1),U?r==null||r({type:I,value:U}):r==null||r(null)};return(0,m.useEffect)(function(){t&&(M(t.type),G(t.value))},[t]),(0,e.jsxs)(i.Z.Group,{compact:!0,children:[(0,e.jsx)(te.Z,{addonBefore:"\u6BCF",precision:0,min:1,value:W,style:{width:"calc(100% - 58px)"},onChange:Ae}),(0,e.jsxs)(N.Z,{value:I,onChange:oe,children:[(0,e.jsx)(d,{value:"days",children:"\u5929"}),(0,e.jsx)(d,{value:"hours",children:"\u65F6"}),(0,e.jsx)(d,{value:"minutes",children:"\u5206"}),(0,e.jsx)(d,{value:"seconds",children:"\u79D2"})]})]})},xe=function(n){var t=n.value,r=n.onChange,C=n.type;return C==="ssh-key"?(0,e.jsx)(l.Z.Item,{name:["pull_option","private_key"],label:"\u79C1\u94A5",rules:[{required:!0}],children:(0,e.jsx)(i.Z.TextArea,{rows:4,autoSize:{minRows:1,maxRows:6},placeholder:"\u8BF7\u8F93\u5165\u79C1\u94A5"})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.Z.Item,{name:["pull_option","username"],label:"\u7528\u6237\u540D",rules:[{required:!0}],children:(0,e.jsx)(i.Z,{placeholder:"\u8BF7\u8F93\u5165\u8BA4\u8BC1\u7528\u6237\u540D"})}),(0,e.jsx)(l.Z.Item,{name:["pull_option","password"],tooltip:"Github\u5DF2\u4E0D\u652F\u6301\u5BC6\u7801\u8BA4\u8BC1\uFF0C\u8BF7\u4F7F\u7528Token\u65B9\u5F0F",label:"\u5BC6\u7801/Token",rules:[{required:!0}],children:(0,e.jsx)(i.Z,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801\u6216\u8005Token"})})]})},ve=(0,m.useCallback)(function(h){var n=h.clipboardData.getData("text");if(n.startsWith("ql ")){var t=n.split(" ").map(function(oe){return oe.trim().replace(/\"/g,"").replace(/\'/,"")}),r=s()(t,8),C=r[1],E=r[2],I=r[3],M=r[4],$=r[5],v=r[6],W=r[7],G=C==="raw"?"file":E.startsWith("http")?"public-repo":"private-repo";c.setFieldsValue({type:G,url:E,whitelist:I,blacklist:M,dependences:$,branch:v,extensions:W,alias:Y(E,v)}),z(G)}},[]),Be=(0,m.useCallback)(function(h){var n=h.clipboardData.getData("text");n.startsWith("ql ")&&h.preventDefault()},[]);return(0,m.useEffect)(function(){D?window.addEventListener("paste",ve):window.removeEventListener("paste",ve)},[D]),(0,m.useEffect)(function(){c.setFieldsValue(o||{}),z(o&&o.type||"public-repo"),ie(o&&o.schedule_type||"crontab"),ce(o&&o.pull_type||"ssh-key"),o||c.resetFields()},[o,D]),(0,e.jsx)(re.Z,{title:o?"\u7F16\u8F91\u8BA2\u9605":"\u65B0\u5EFA\u8BA2\u9605",open:D,forceRender:!0,centered:!0,maskClosable:!1,onOk:function(){c.validateFields().then(function(n){pe(n)}).catch(function(n){console.log("Validate Failed:",n)})},onCancel:function(){return K()},confirmLoading:f,children:(0,e.jsxs)(l.Z,{form:c,name:"form_in_modal",layout:"vertical",children:[(0,e.jsx)(l.Z.Item,{name:"name",label:"\u540D\u79F0",children:(0,e.jsx)(i.Z,{placeholder:"\u652F\u6301\u62F7\u8D1Dql repo/raw\u547D\u4EE4\uFF0C\u7C98\u8D34\u5BFC\u5165",onPaste:Be})}),(0,e.jsx)(l.Z.Item,{name:"type",label:"\u7C7B\u578B",rules:[{required:!0}],initialValue:"public-repo",children:(0,e.jsxs)(p.ZP.Group,{onChange:Fe,children:[(0,e.jsx)(p.ZP,{value:"public-repo",children:"\u516C\u5F00\u4ED3\u5E93"}),(0,e.jsx)(p.ZP,{value:"private-repo",children:"\u79C1\u6709\u4ED3\u5E93"}),(0,e.jsx)(p.ZP,{value:"file",children:"\u5355\u6587\u4EF6"})]})}),(0,e.jsx)(l.Z.Item,{name:"url",label:"\u94FE\u63A5",rules:[{required:!0},{pattern:P==="file"?b:A}],children:(0,e.jsx)(i.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u8BA2\u9605\u94FE\u63A5",onPaste:he,onChange:he})}),P!=="file"&&(0,e.jsx)(l.Z.Item,{name:"branch",label:"\u5206\u652F",children:(0,e.jsx)(i.Z,{placeholder:"\u8BF7\u8F93\u5165\u5206\u652F",onPaste:_e,onChange:_e})}),(0,e.jsx)(l.Z.Item,{name:"alias",label:"\u552F\u4E00\u503C",rules:[{required:!0,message:""}],tooltip:"\u552F\u4E00\u503C\u7528\u4E8E\u65E5\u5FD7\u76EE\u5F55\u548C\u79C1\u94A5\u522B\u540D",children:(0,e.jsx)(i.Z,{placeholder:"\u81EA\u52A8\u751F\u6210",disabled:!0})}),P==="private-repo"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.Z.Item,{name:"pull_type",label:"\u62C9\u53D6\u65B9\u5F0F",initialValue:"ssh-key",rules:[{required:!0}],children:(0,e.jsxs)(p.ZP.Group,{onChange:ge,children:[(0,e.jsx)(p.ZP,{value:"ssh-key",children:"\u79C1\u94A5"}),(0,e.jsx)(p.ZP,{value:"user-pwd",children:"\u7528\u6237\u540D\u5BC6\u7801/Token"})]})}),(0,e.jsx)(xe,{type:Ee})]}),(0,e.jsx)(l.Z.Item,{name:"schedule_type",label:"\u5B9A\u65F6\u7C7B\u578B",initialValue:"crontab",rules:[{required:!0}],children:(0,e.jsxs)(p.ZP.Group,{onChange:De,children:[(0,e.jsx)(p.ZP,{value:"crontab",children:"crontab"}),(0,e.jsx)(p.ZP,{value:"interval",children:"interval"})]})}),(0,e.jsx)(l.Z.Item,{name:j==="crontab"?"schedule":"interval_schedule",label:"\u5B9A\u65F6\u89C4\u5219",rules:[{required:!0},{validator:function(n,t){return j==="interval"||!t||_().parseExpression(t).hasNext()?Promise.resolve():Promise.reject("Subscription\u8868\u8FBE\u5F0F\u683C\u5F0F\u6709\u8BEF")}}],children:j==="interval"?(0,e.jsx)(fe,{}):(0,e.jsx)(i.Z,{placeholder:"\u79D2(\u53EF\u9009) \u5206 \u65F6 \u5929 \u6708 \u5468"})}),P!=="file"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.Z.Item,{name:"whitelist",label:"\u767D\u540D\u5355",tooltip:"\u591A\u4E2A\u5173\u952E\u8BCD\u7AD6\u7EBF\u5206\u5272\uFF0C\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F",children:(0,e.jsx)(i.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u811A\u672C\u7B5B\u9009\u767D\u540D\u5355\u5173\u952E\u8BCD\uFF0C\u591A\u4E2A\u5173\u952E\u8BCD\u7AD6\u7EBF\u5206\u5272"})}),(0,e.jsx)(l.Z.Item,{name:"blacklist",label:"\u9ED1\u540D\u5355",tooltip:"\u591A\u4E2A\u5173\u952E\u8BCD\u7AD6\u7EBF\u5206\u5272\uFF0C\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F",children:(0,e.jsx)(i.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u811A\u672C\u7B5B\u9009\u9ED1\u540D\u5355\u5173\u952E\u8BCD\uFF0C\u591A\u4E2A\u5173\u952E\u8BCD\u7AD6\u7EBF\u5206\u5272"})}),(0,e.jsx)(l.Z.Item,{name:"dependences",label:"\u4F9D\u8D56\u6587\u4EF6",tooltip:"\u591A\u4E2A\u5173\u952E\u8BCD\u7AD6\u7EBF\u5206\u5272\uFF0C\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F",children:(0,e.jsx)(i.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u811A\u672C\u4F9D\u8D56\u6587\u4EF6\u5173\u952E\u8BCD\uFF0C\u591A\u4E2A\u5173\u952E\u8BCD\u7AD6\u7EBF\u5206\u5272"})}),(0,e.jsx)(l.Z.Item,{name:"extensions",label:"\u6587\u4EF6\u540E\u7F00",tooltip:"\u4ED3\u5E93\u9700\u8981\u62C9\u53D6\u7684\u6587\u4EF6\u540E\u7F00\uFF0C\u591A\u4E2A\u540E\u7F00\u7A7A\u683C\u5206\u9694\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684RepoFileExtensions",children:(0,e.jsx)(i.Z,{placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540E\u7F00"})}),(0,e.jsx)(l.Z.Item,{name:"sub_before",label:"\u6267\u884C\u524D",tooltip:"\u8FD0\u884C\u8BA2\u9605\u524D\u6267\u884C\u7684\u547D\u4EE4\uFF0C\u6BD4\u5982 cp/mv/python3 xxx.py/node xxx.js",children:(0,e.jsx)(i.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u8FD0\u884C\u8BA2\u9605\u524D\u8981\u6267\u884C\u7684\u547D\u4EE4"})}),(0,e.jsx)(l.Z.Item,{name:"sub_after",label:"\u6267\u884C\u540E",tooltip:"\u8FD0\u884C\u8BA2\u9605\u540E\u6267\u884C\u7684\u547D\u4EE4\uFF0C\u6BD4\u5982 cp/mv/python3 xxx.py/node xxx.js",children:(0,e.jsx)(i.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u8BF7\u8F93\u5165\u8FD0\u884C\u8BA2\u9605\u540E\u8981\u6267\u884C\u7684\u547D\u4EE4"})})]}),(0,e.jsx)(l.Z.Item,{name:"proxy",label:"\u4EE3\u7406",tooltip:"\u516C\u5F00\u4ED3\u5E93\u652F\u6301HTTP/SOCK5\u4EE3\u7406\uFF0C\u79C1\u6709\u4ED3\u5E93\u652F\u6301SOCK5\u4EE3\u7406",children:(0,e.jsx)(i.Z,{placeholder:P==="private-repo"?"SOCK5\u4EE3\u7406\uFF0C\u4F8B\u5982 IP:PORT":"HTTP/SOCK5\u4EE3\u7406\uFF0C\u4F8B\u5982 http://127.0.0.1:1080"})}),(0,e.jsxs)(l.Z.Item,{style:{marginBottom:0},className:"inline-form-item",children:[(0,e.jsx)(l.Z.Item,{name:"autoAddCron",label:"\u81EA\u52A8\u6DFB\u52A0\u4EFB\u52A1",valuePropName:"checked",initialValue:!0,children:(0,e.jsx)(k.Z,{})}),(0,e.jsx)(l.Z.Item,{name:"autoDelCron",label:"\u81EA\u52A8\u5220\u9664\u4EFB\u52A1",valuePropName:"checked",initialValue:!0,children:(0,e.jsx)(k.Z,{})})]})]})})};H.default=S},84442:function(me,H,u){u.d(H,{Z:function(){return se}});var q=u(15882),x=u(24255),ee=u(39882),J=u(84875),Q=u.n(J),ue=u(6614),ne=u(30486),s=u(63313),m=u(28780),ae=u(58236),N=s.forwardRef(function(a,B){var _,e=a.prefixCls,d=e===void 0?"rc-switch":e,A=a.className,b=a.checked,S=a.defaultChecked,R=a.disabled,Z=a.loadingIcon,o=a.checkedChildren,K=a.unCheckedChildren,D=a.onClick,y=a.onChange,O=a.onKeyDown,c=(0,ne.Z)(a,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),g=(0,m.Z)(!1,{value:b,defaultValue:S}),T=(0,ue.Z)(g,2),f=T[0],w=T[1];function V(F,L){var j=f;return R||(j=F,w(j),y==null||y(j,L)),j}function X(F){F.which===ae.Z.LEFT?V(!1,F):F.which===ae.Z.RIGHT&&V(!0,F),O==null||O(F)}function P(F){var L=V(!f,F);D==null||D(L,F)}var z=Q()(d,A,(_={},(0,x.Z)(_,"".concat(d,"-checked"),f),(0,x.Z)(_,"".concat(d,"-disabled"),R),_));return s.createElement("button",Object.assign({},c,{type:"button",role:"switch","aria-checked":f,disabled:R,className:z,ref:B,onKeyDown:X,onClick:P}),Z,s.createElement("span",{className:"".concat(d,"-inner")},f?o:K))});N.displayName="Switch";var l=N,le=u(47295),i=u(84858),te=u(6633),re=u(75851),p=function(a,B){var _={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&B.indexOf(e)<0&&(_[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,e=Object.getOwnPropertySymbols(a);d<e.length;d++)B.indexOf(e[d])<0&&Object.prototype.propertyIsEnumerable.call(a,e[d])&&(_[e[d]]=a[e[d]]);return _},k=s.forwardRef(function(a,B){var _,e=a.prefixCls,d=a.size,A=a.disabled,b=a.loading,S=a.className,R=S===void 0?"":S,Z=p(a,["prefixCls","size","disabled","loading","className"]),o=s.useContext(le.E_),K=o.getPrefixCls,D=o.direction,y=s.useContext(te.Z),O=s.useContext(i.Z),c=(A!=null?A:O)||b,g=K("switch",e),T=s.createElement("div",{className:"".concat(g,"-handle")},b&&s.createElement(ee.Z,{className:"".concat(g,"-loading-icon")})),f=Q()((_={},(0,x.Z)(_,"".concat(g,"-small"),(d||y)==="small"),(0,x.Z)(_,"".concat(g,"-loading"),b),(0,x.Z)(_,"".concat(g,"-rtl"),D==="rtl"),_),R);return s.createElement(re.Z,{insertExtraNode:!0},s.createElement(l,(0,q.Z)({},Z,{prefixCls:g,className:f,disabled:c,ref:B,loadingIcon:T})))});k.__ANT_SWITCH=!0;var se=k}}]);