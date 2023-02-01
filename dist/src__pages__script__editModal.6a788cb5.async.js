"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5586],{83886:function(oe,R,e){e.r(R);var I=e(30279),E=e.n(I),v=e(46686),s=e.n(v),a=e(63313),V=e.n(a),f=e(61839),j=e(42194),O=e(21688),D=e(59225),d=e(74083),g=e(27382),b=e(90138),i=e(93113),h=e(8619),P=e(49738),r=e(29962),W=e(79418),n=e(11527),p=f.Z.Option,o={".py":"python",".js":"javascript",".sh":"shell",".ts":"typescript"},m={python:".py",javascript:".js",shell:".sh",typescript:".ts"},_=function(t){var u=t.treeData,S=t.currentNode,F=t.content,w=t.handleCancel,x=t.visible,Z=t.socketMessage,N=(0,a.useState)(""),C=s()(N,2),H=C[0],A=C[1],q=(0,a.useState)("javascript"),B=s()(q,2),z=B[0],U=B[1],G=(0,a.useState)(),re=s()(G,2),y=re[0],$=re[1],X=(0,a.useState)(""),le=s()(X,2),ae=le[0],se=le[1],J=(0,a.useState)(!1),ie=s()(J,2),Me=ie[0],ue=ie[1],L=(0,a.useState)(!1),de=s()(L,2),me=de[0],ce=de[1],Oe=(0,a.useState)(""),Q=s()(Oe,2),ee=Q[0],te=Q[1],ne=(0,r.F)(),De=ne.theme,Y=(0,a.useRef)(null),Pe=(0,a.useState)(!1),Ee=s()(Pe,2),ve=Ee[0],k=Ee[1],_e=(0,a.useState)(null),fe=s()(_e,2),ge=fe[0],Ce=fe[1],Ie=function(){w()},Te=function(l,M){if(!(M.key===ae||!l)&&M.type!=="directory"){var K=o[l.slice(-3)]||"";$(M),U(K),Re(M),se(M.key)}},Re=function(l){d.W.get("".concat(g.Z.apiPrefix,"scripts/").concat(l.title,"?path=").concat(l.parent||"")).then(function(M){var K=M.code,Se=M.data;K===200&&A(Se)})},he=function(){te("");var l=Y.current.getValue().replace(/\r\n/g,`
`);d.W.put("".concat(g.Z.apiPrefix,"scripts/run"),{data:{filename:y.title,path:y.parent||"",content:l}}).then(function(M){var K=M.code,Se=M.data;K===200&&(k(!0),Ce(Se))})},pe=function(){!y||!y.title||!ge||d.W.put("".concat(g.Z.apiPrefix,"scripts/stop"),{data:{filename:y.title,path:y.parent||"",pid:ge}}).then(function(l){var M=l.code,K=l.data;M===200&&k(!1)})};return(0,a.useEffect)(function(){if(!!Z){var c=Z.type,l=Z.message,M=Z.references;c==="manuallyRunScript"&&((0,W.x$)(l)&&setTimeout(function(){k(!1)},300),ee&&(l=`
`.concat(l)),te("".concat(ee).concat(l)))}},[Z]),(0,a.useEffect)(function(){if(te(""),S){$(S),A(F),se(S.key);var c=o[S.title.slice(-3)]||"";U(c)}},[F,S]),(0,n.jsxs)(j.Z,{className:"edit-modal",closable:!1,title:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(O.Z,{treeExpandAction:"click",style:{marginRight:8,width:150},value:ae,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:u,placeholder:"\u8BF7\u9009\u62E9\u811A\u672C\u6587\u4EF6",fieldNames:{value:"key",label:"title"},showSearch:!0,onSelect:Te}),(0,n.jsxs)(f.Z,{value:z,style:{width:110,marginRight:8},onChange:function(l){U(l)},children:[(0,n.jsx)(p,{value:"javascript",children:"javascript"}),(0,n.jsx)(p,{value:"typescript",children:"typescript"}),(0,n.jsx)(p,{value:"shell",children:"shell"}),(0,n.jsx)(p,{value:"python",children:"python"})]}),(0,n.jsx)(D.Z,{type:"primary",style:{marginRight:8},onClick:ve?pe:he,children:ve?"\u505C\u6B62":"\u8FD0\u884C"}),(0,n.jsx)(D.Z,{type:"primary",style:{marginRight:8},onClick:function(){te("")},children:"\u6E05\u7A7A\u65E5\u5FD7"}),(0,n.jsx)(D.Z,{type:"primary",style:{marginRight:8},onClick:function(){ce(!0)},children:"\u8BBE\u7F6E"}),(0,n.jsx)(D.Z,{type:"primary",style:{marginRight:8},onClick:function(){ue(!0)},children:"\u4FDD\u5B58"}),(0,n.jsx)(D.Z,{type:"primary",style:{marginRight:8},onClick:function(){pe(),w()},children:"\u9000\u51FA"})]}),width:"100%",headerStyle:{padding:"11px 24px"},onClose:Ie,open:x,children:[(0,n.jsxs)(b.Z,{split:"vertical",minSize:200,defaultSize:"50%",style:{height:"calc(100vh - 55px)"},children:[(0,n.jsx)(i.ZP,{language:z,value:H,theme:De,options:{fontSize:12,minimap:{enabled:!1},lineNumbersMinChars:3,glyphMargin:!1},onMount:function(l){Y.current=l}}),(0,n.jsx)("pre",{style:{height:"100%",padding:"0 15px"},children:ee})]}),(0,n.jsx)(h.default,{visible:Me,handleCancel:function(){ue(!1)},file:E()({content:Y.current&&Y.current.getValue().replace(/\r\n/g,`
`)},y)}),(0,n.jsx)(P.default,{visible:me,handleCancel:function(){ce(!1)}})]})};R.default=_},8619:function(oe,R,e){e.r(R);var I=e(35290),E=e.n(I),v=e(30279),s=e.n(v),a=e(411),V=e.n(a),f=e(46686),j=e.n(f),O=e(63313),D=e.n(O),d=e(71976),g=e(63533),b=e(4352),i=e(30314),h=e(74083),P=e(27382),r=e(11527),W=function(p){var o=p.file,m=p.handleCancel,_=p.visible,T=d.Z.useForm(),t=j()(T,1),u=t[0],S=(0,O.useState)(!1),F=j()(S,2),w=F[0],x=F[1],Z=function(){var N=V()(E()().mark(function C(H){var A;return E()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:x(!0),A=s()(s()(s()({},o),H),{},{originFilename:o.title}),h.W.post("".concat(P.Z.apiPrefix,"scripts"),{data:A}).then(function(z){var U=z.code,G=z.data;U===200&&(g.ZP.success("\u4FDD\u5B58\u6587\u4EF6\u6210\u529F"),m(G)),x(!1)});case 3:case"end":return B.stop()}},C)}));return function(H){return N.apply(this,arguments)}}();return(0,O.useEffect)(function(){u.resetFields(),x(!1)},[o,_]),(0,r.jsx)(b.Z,{title:"\u4FDD\u5B58\u6587\u4EF6",open:_,forceRender:!0,centered:!0,maskClosable:!1,onOk:function(){u.validateFields().then(function(C){Z(C)}).catch(function(C){console.log("Validate Failed:",C)})},onCancel:function(){return m()},confirmLoading:w,children:(0,r.jsxs)(d.Z,{form:u,layout:"vertical",name:"script_modal",initialValues:{filename:o==null?void 0:o.title,path:(o==null?void 0:o.parent)||""},children:[(0,r.jsx)(d.Z.Item,{name:"filename",label:"\u6587\u4EF6\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D"}],children:(0,r.jsx)(i.Z,{placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D"})}),(0,r.jsx)(d.Z.Item,{name:"path",label:"\u4FDD\u5B58\u76EE\u5F55",children:(0,r.jsx)(i.Z,{placeholder:"\u8BF7\u8F93\u5165\u4FDD\u5B58\u76EE\u5F55\uFF0C\u9ED8\u8BA4scripts\u76EE\u5F55"})})]})})};R.default=W},49738:function(oe,R,e){e.r(R);var I=e(35290),E=e.n(I),v=e(30279),s=e.n(v),a=e(411),V=e.n(a),f=e(46686),j=e.n(f),O=e(63313),D=e.n(O),d=e(71976),g=e(63533),b=e(4352),i=e(30314),h=e(74083),P=e(27382),r=e(11527),W=function(p){var o=p.file,m=p.handleCancel,_=p.visible,T=d.Z.useForm(),t=j()(T,1),u=t[0],S=(0,O.useState)(!1),F=j()(S,2),w=F[0],x=F[1],Z=function(){var N=V()(E()().mark(function C(H){var A;return E()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:x(!0),A=s()(s()({},o),H),h.W.post("".concat(P.Z.apiPrefix,"scripts"),{data:A}).then(function(z){var U=z.code,G=z.data;U===200&&(g.ZP.success("\u4FDD\u5B58\u6587\u4EF6\u6210\u529F"),m(G)),x(!1)});case 3:case"end":return B.stop()}},C)}));return function(H){return N.apply(this,arguments)}}();return(0,O.useEffect)(function(){u.resetFields(),x(!1)},[o,_]),(0,r.jsx)(b.Z,{title:"\u8FD0\u884C\u8BBE\u7F6E",open:_,forceRender:!0,centered:!0,onCancel:function(){return m()},children:(0,r.jsx)(d.Z,{form:u,layout:"vertical",name:"setting_modal",initialValues:o,children:(0,r.jsx)(d.Z.Item,{name:"filename",label:"\u5F85\u5F00\u53D1",rules:[{required:!0,message:"\u5F85\u5F00\u53D1"}],children:(0,r.jsx)(i.Z,{placeholder:"\u5F85\u5F00\u53D1"})})})})};R.default=W},29962:function(oe,R,e){e.d(R,{F:function(){return f},e:function(){return V}});var I=e(46686),E=e.n(I),v=e(63313),s=e.n(v),a=e(79418),V=function(){var O=(0,v.useState)("100%"),D=E()(O,2),d=D[0],g=D[1],b=(0,v.useState)(0),i=E()(b,2),h=i[0],P=i[1],r=(0,v.useState)(-72),W=E()(r,2),n=W[0],p=W[1],o=(0,v.useState)(!1),m=E()(o,2),_=m[0],T=m[1],t=(0,v.useMemo)(function(){return(0,a.ZP)()},[]),u=t.platform;return(0,v.useEffect)(function(){u==="mobile"&&document.body.offsetWidth<768?(g("auto"),P(0),p(0),T(!0)):(g("100%"),P(0),p(-72),T(!1))},[]),{headerStyle:{padding:"4px 16px 4px 15px",position:"sticky",top:0,left:0,zIndex:20,marginTop:n,width:d,marginLeft:h},isPhone:_}},f=function(){var O=(0,v.useState)(),D=E()(O,2),d=D[0],g=D[1],b=function(){var h=window.matchMedia("(prefers-color-scheme: dark)"),P=localStorage.getItem("qinglong_dark_theme"),r=h.matches&&P!=="light"||P==="dark";g(r?"vs-dark":"vs")};return(0,v.useEffect)(function(){var i=window.matchMedia("(prefers-color-scheme: dark)"),h=localStorage.getItem("qinglong_dark_theme"),P=i.matches&&h!=="light"||h==="dark";g(P?"vs-dark":"vs");var r=function(n){(h==="auto"||!h)&&(n.matches?g("vs-dark"):g("vs"))};typeof i.addEventListener=="function"?i.addEventListener("change",r):typeof i.addListener=="function"&&i.addListener(r)},[]),{theme:d,reloadTheme:b}}},61839:function(oe,R,e){var I=e(24255),E=e(15882),v=e(84875),s=e.n(v),a=e(7032),V=e(33759),f=e(63313),j=e.n(f),O=e(47295),D=e(57746),d=e(84858),g=e(6633),b=e(76093),i=e(73442),h=e(82938),P=e(86628),r=e(51034),W=function(m,_){var T={};for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&_.indexOf(t)<0&&(T[t]=m[t]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,t=Object.getOwnPropertySymbols(m);u<t.length;u++)_.indexOf(t[u])<0&&Object.prototype.propertyIsEnumerable.call(m,t[u])&&(T[t[u]]=m[t[u]]);return T},n="SECRET_COMBOBOX_MODE_DO_NOT_USE",p=function(_,T){var t,u=_.prefixCls,S=_.bordered,F=S===void 0?!0:S,w=_.className,x=_.getPopupContainer,Z=_.dropdownClassName,N=_.popupClassName,C=_.listHeight,H=C===void 0?256:C,A=_.placement,q=_.listItemHeight,B=q===void 0?24:q,z=_.size,U=_.disabled,G=_.notFoundContent,re=_.status,y=_.showArrow,$=W(_,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),X=f.useContext(O.E_),le=X.getPopupContainer,ae=X.getPrefixCls,se=X.renderEmpty,J=X.direction,ie=X.virtual,Me=X.dropdownMatchSelectWidth,ue=f.useContext(g.Z),L=ae("select",u),de=ae(),me=(0,r.ri)(L,J),ce=me.compactSize,Oe=me.compactItemClassnames,Q=f.useMemo(function(){var K=$.mode;if(K!=="combobox")return K===n?"combobox":K},[$.mode]),ee=Q==="multiple"||Q==="tags",te=y!==void 0?y:$.loading||!(ee||Q==="combobox"),ne=(0,f.useContext)(b.aM),De=ne.status,Y=ne.hasFeedback,Pe=ne.isFormItemInput,Ee=ne.feedbackIcon,ve=(0,h.F)(De,re),k;G!==void 0?k=G:Q==="combobox"?k=null:k=(se||D.Z)("Select");var _e=(0,P.Z)((0,E.Z)((0,E.Z)({},$),{multiple:ee,hasFeedback:Y,feedbackIcon:Ee,showArrow:te,prefixCls:L})),fe=_e.suffixIcon,ge=_e.itemIcon,Ce=_e.removeIcon,Ie=_e.clearIcon,Te=(0,V.Z)($,["suffixIcon","itemIcon"]),Re=s()(N||Z,(0,I.Z)({},"".concat(L,"-dropdown-").concat(J),J==="rtl")),he=ce||z||ue,pe=f.useContext(d.Z),c=U!=null?U:pe,l=s()((t={},(0,I.Z)(t,"".concat(L,"-lg"),he==="large"),(0,I.Z)(t,"".concat(L,"-sm"),he==="small"),(0,I.Z)(t,"".concat(L,"-rtl"),J==="rtl"),(0,I.Z)(t,"".concat(L,"-borderless"),!F),(0,I.Z)(t,"".concat(L,"-in-form-item"),Pe),t),(0,h.Z)(L,ve,Y),Oe,w),M=function(){return A!==void 0?A:J==="rtl"?"bottomRight":"bottomLeft"};return f.createElement(a.ZP,(0,E.Z)({ref:T,virtual:ie,dropdownMatchSelectWidth:Me},Te,{transitionName:(0,i.mL)(de,(0,i.q0)(A),$.transitionName),listHeight:H,listItemHeight:B,mode:Q,prefixCls:L,placement:M(),direction:J,inputIcon:fe,menuItemSelectedIcon:ge,removeIcon:Ce,clearIcon:Ie,notFoundContent:k,className:l,getPopupContainer:x||le,dropdownClassName:Re,showArrow:Y||y,disabled:c}))},o=f.forwardRef(p);o.SECRET_COMBOBOX_MODE_DO_NOT_USE=n,o.Option=a.Wx,o.OptGroup=a.Xo,R.Z=o}}]);