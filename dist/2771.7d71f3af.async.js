"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2771],{16765:function(j,U,t){t.d(U,{Z:function(){return fe}});var u=t(6614),o=t(63313),a=t(74012),d=t(90784),N=t(94261),i=o.createContext(null),E=i,v=t(94100),T=t(44993),I=[];function b(S,C){var O=o.useState(function(){if(!(0,d.Z)())return null;var s=document.createElement("div");return s}),Q=(0,u.Z)(O,1),g=Q[0],F=o.useRef(!1),L=o.useContext(E),e=o.useState(I),r=(0,u.Z)(e,2),n=r[0],l=r[1],f=L||(F.current?void 0:function(s){l(function(R){var h=[s].concat((0,v.Z)(R));return h})});function c(){g.parentElement||document.body.appendChild(g),F.current=!0}function m(){var s;(s=g.parentElement)===null||s===void 0||s.removeChild(g),F.current=!1}return(0,T.Z)(function(){return S?L?L(c):c():m(),m},[S]),(0,T.Z)(function(){n.length&&(n.forEach(function(s){return s()}),l(I))},[n]),[g,f]}var G=t(41062),x=t(63486);function te(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var se="rc-util-locker-".concat(Date.now()),X=0;function ue(S){var C=!!S,O=o.useState(function(){return X+=1,"".concat(se,"_").concat(X)}),Q=(0,u.Z)(O,1),g=Q[0];(0,T.Z)(function(){if(C){var F=(0,x.Z)(),L=te();(0,G.hq)(`
html body {
  overflow-y: hidden;
  `.concat(L?"width: calc(100% - ".concat(F,"px);"):"",`
}`),g)}else(0,G.jL)(g);return function(){(0,G.jL)(g)}},[C,g])}var J=!1;function ne(S){return typeof S=="boolean"&&(J=S),J}var ae=function(C){return C===!1?!1:!(0,d.Z)()||!C?null:typeof C=="string"?document.querySelector(C):typeof C=="function"?C():C},de=o.forwardRef(function(S,C){var O=S.open,Q=S.autoLock,g=S.getContainer,F=S.debug,L=S.autoDestroy,e=L===void 0?!0:L,r=S.children,n=o.useState(O),l=(0,u.Z)(n,2),f=l[0],c=l[1],m=f||O;o.useEffect(function(){(e||O)&&c(O)},[O,e]);var s=o.useState(function(){return ae(g)}),R=(0,u.Z)(s,2),h=R[0],P=R[1];o.useEffect(function(){var _=ae(g);P(_!=null?_:null)});var w=b(m&&!h,F),A=(0,u.Z)(w,2),D=A[0],p=A[1],Z=h!=null?h:D;ue(Q&&O&&(0,d.Z)()&&(Z===D||Z===document.body));var k=null;if(r&&(0,N.Yr)(r)&&C){var $=r;k=$.ref}var H=(0,N.x1)(k,C);if(!m||!(0,d.Z)()||h===void 0)return null;var W=Z===!1||ne(),M=r;return C&&(M=o.cloneElement(r,{ref:H})),o.createElement(E.Provider,{value:p},W?M:(0,a.createPortal)(M,Z))}),oe=de,fe=oe},16204:function(j,U,t){t.d(U,{fk:function(){return d},jD:function(){return o}});var u=t(90784),o=function(){return(0,u.Z)()&&window.document.documentElement},a,d=function(){if(!o())return!1;if(a!==void 0)return a;var i=document.createElement("div");return i.style.display="flex",i.style.flexDirection="column",i.style.rowGap="1px",i.appendChild(document.createElement("div")),i.appendChild(document.createElement("div")),document.body.appendChild(i),a=i.scrollHeight===1,document.body.removeChild(i),a}},45881:function(j,U,t){t.d(U,{Z:function(){return L}});var u=t(15882),o=t(6614),a=t(63313),d=t.n(a),N=t(16765),i=t(56453),E=t(84875),v=t.n(E),T=t(58236);function I(){var e=(0,i.Z)({},a);return e.useId}var b=0;function G(){}function x(e){var r=a.useState("ssr-id"),n=(0,o.Z)(r,2),l=n[0],f=n[1],c=I(),m=c==null?void 0:c();return a.useEffect(function(){if(!c){var s=b;b+=1,f("rc_unique_".concat(s))}},[]),e||m||l}var te=t(44979),se=t(79001),X=t(45952);function ue(e){var r=e.prefixCls,n=e.style,l=e.visible,f=e.maskProps,c=e.motionName;return a.createElement(X.Z,{key:"mask",visible:l,motionName:c,leavedClassName:"".concat(r,"-mask-hidden")},function(m,s){var R=m.className,h=m.style;return a.createElement("div",(0,u.Z)({ref:s,style:(0,i.Z)((0,i.Z)({},h),n),className:v()("".concat(r,"-mask"),R)},f))})}function J(e,r,n){var l=r;return!l&&n&&(l="".concat(e,"-").concat(n)),l}function ne(e,r){var n=e["page".concat(r?"Y":"X","Offset")],l="scroll".concat(r?"Top":"Left");if(typeof n!="number"){var f=e.document;n=f.documentElement[l],typeof n!="number"&&(n=f.body[l])}return n}function ae(e){var r=e.getBoundingClientRect(),n={left:r.left,top:r.top},l=e.ownerDocument,f=l.defaultView||l.parentWindow;return n.left+=ne(f),n.top+=ne(f,!0),n}var de=a.memo(function(e){var r=e.children;return r},function(e,r){var n=r.shouldUpdate;return!n}),oe={width:0,height:0,overflow:"hidden",outline:"none"},fe=d().forwardRef(function(e,r){var n=e.prefixCls,l=e.className,f=e.style,c=e.title,m=e.ariaId,s=e.footer,R=e.closable,h=e.closeIcon,P=e.onClose,w=e.children,A=e.bodyStyle,D=e.bodyProps,p=e.modalRender,Z=e.onMouseDown,k=e.onMouseUp,$=e.holderRef,H=e.visible,W=e.forceRender,M=e.width,_=e.height,V=(0,a.useRef)(),B=(0,a.useRef)();d().useImperativeHandle(r,function(){return{focus:function(){var K;(K=V.current)===null||K===void 0||K.focus()},changeActive:function(K){var me=document,ee=me.activeElement;K&&ee===B.current?V.current.focus():!K&&ee===V.current&&B.current.focus()}}});var q={};M!==void 0&&(q.width=M),_!==void 0&&(q.height=_);var re;s&&(re=d().createElement("div",{className:"".concat(n,"-footer")},s));var ie;c&&(ie=d().createElement("div",{className:"".concat(n,"-header")},d().createElement("div",{className:"".concat(n,"-title"),id:m},c)));var le;R&&(le=d().createElement("button",{type:"button",onClick:P,"aria-label":"Close",className:"".concat(n,"-close")},h||d().createElement("span",{className:"".concat(n,"-close-x")})));var z=d().createElement("div",{className:"".concat(n,"-content")},le,ie,d().createElement("div",(0,u.Z)({className:"".concat(n,"-body"),style:A},D),w),re);return d().createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":c?m:null,"aria-modal":"true",ref:$,style:(0,i.Z)((0,i.Z)({},f),q),className:v()(n,l),onMouseDown:Z,onMouseUp:k},d().createElement("div",{tabIndex:0,ref:V,style:oe,"aria-hidden":"true"}),d().createElement(de,{shouldUpdate:H||W},p?p(z):z),d().createElement("div",{tabIndex:0,ref:B,style:oe,"aria-hidden":"true"}))}),S=fe,C=a.forwardRef(function(e,r){var n=e.prefixCls,l=e.title,f=e.style,c=e.className,m=e.visible,s=e.forceRender,R=e.destroyOnClose,h=e.motionName,P=e.ariaId,w=e.onVisibleChanged,A=e.mousePosition,D=(0,a.useRef)(),p=a.useState(),Z=(0,o.Z)(p,2),k=Z[0],$=Z[1],H={};k&&(H.transformOrigin=k);function W(){var M=ae(D.current);$(A?"".concat(A.x-M.left,"px ").concat(A.y-M.top,"px"):"")}return a.createElement(X.Z,{visible:m,onVisibleChanged:w,onAppearPrepare:W,onEnterPrepare:W,forceRender:s,motionName:h,removeOnLeave:R,ref:D},function(M,_){var V=M.className,B=M.style;return a.createElement(S,(0,u.Z)({},e,{ref:r,title:l,ariaId:P,prefixCls:n,holderRef:_,style:(0,i.Z)((0,i.Z)((0,i.Z)({},B),f),H),className:v()(c,V)}))})});C.displayName="Content";var O=C;function Q(e){var r=e.prefixCls,n=r===void 0?"rc-dialog":r,l=e.zIndex,f=e.visible,c=f===void 0?!1:f,m=e.keyboard,s=m===void 0?!0:m,R=e.focusTriggerAfterClose,h=R===void 0?!0:R,P=e.wrapStyle,w=e.wrapClassName,A=e.wrapProps,D=e.onClose,p=e.afterClose,Z=e.transitionName,k=e.animation,$=e.closable,H=$===void 0?!0:$,W=e.mask,M=W===void 0?!0:W,_=e.maskTransitionName,V=e.maskAnimation,B=e.maskClosable,q=B===void 0?!0:B,re=e.maskStyle,ie=e.maskProps,le=e.rootClassName,z=(0,a.useRef)(),Y=(0,a.useRef)(),K=(0,a.useRef)(),me=a.useState(c),ee=(0,o.Z)(me,2),ve=ee[0],Se=ee[1],ge=x();function ye(){(0,te.Z)(Y.current,document.activeElement)||(z.current=document.activeElement)}function Re(){if(!(0,te.Z)(Y.current,document.activeElement)){var y;(y=K.current)===null||y===void 0||y.focus()}}function Me(y){if(y)Re();else{if(Se(!1),M&&z.current&&h){try{z.current.focus({preventScroll:!0})}catch(he){}z.current=null}ve&&(p==null||p())}}function Ee(y){D==null||D(y)}var ce=(0,a.useRef)(!1),Ce=(0,a.useRef)(),Te=function(){clearTimeout(Ce.current),ce.current=!0},Ie=function(){Ce.current=setTimeout(function(){ce.current=!1})},Ne=null;q&&(Ne=function(he){ce.current?ce.current=!1:Y.current===he.target&&Ee(he)});function Oe(y){if(s&&y.keyCode===T.Z.ESC){y.stopPropagation(),Ee(y);return}c&&y.keyCode===T.Z.TAB&&K.current.changeActive(!y.shiftKey)}return(0,a.useEffect)(function(){c&&(Se(!0),ye())},[c]),(0,a.useEffect)(function(){return function(){clearTimeout(Ce.current)}},[]),a.createElement("div",(0,u.Z)({className:v()("".concat(n,"-root"),le)},(0,se.Z)(e,{data:!0})),a.createElement(ue,{prefixCls:n,visible:M&&c,motionName:J(n,_,V),style:(0,i.Z)({zIndex:l},re),maskProps:ie}),a.createElement("div",(0,u.Z)({tabIndex:-1,onKeyDown:Oe,className:v()("".concat(n,"-wrap"),w),ref:Y,onClick:Ne,style:(0,i.Z)((0,i.Z)({zIndex:l},P),{},{display:ve?null:"none"})},A),a.createElement(O,(0,u.Z)({},e,{onMouseDown:Te,onMouseUp:Ie,ref:K,closable:H,ariaId:ge,prefixCls:n,visible:c&&ve,onClose:Ee,onVisibleChanged:Me,motionName:J(n,Z,k)}))))}var g=function(r){var n=r.visible,l=r.getContainer,f=r.forceRender,c=r.destroyOnClose,m=c===void 0?!1:c,s=r.afterClose,R=a.useState(n),h=(0,o.Z)(R,2),P=h[0],w=h[1];return a.useEffect(function(){n&&w(!0)},[n]),!f&&m&&!P?null:a.createElement(N.Z,{open:n||f||P,autoDestroy:!1,getContainer:l,autoLock:n||P},a.createElement(Q,(0,u.Z)({},r,{destroyOnClose:m,afterClose:function(){s==null||s(),w(!1)}})))};g.displayName="Dialog";var F=g,L=F},58236:function(j,U){var t={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(o){var a=o.keyCode;if(o.altKey&&!o.ctrlKey||o.metaKey||a>=t.F1&&a<=t.F12)return!1;switch(a){case t.ALT:case t.CAPS_LOCK:case t.CONTEXT_MENU:case t.CTRL:case t.DOWN:case t.END:case t.ESC:case t.HOME:case t.INSERT:case t.LEFT:case t.MAC_FF_META:case t.META:case t.NUMLOCK:case t.NUM_CENTER:case t.PAGE_DOWN:case t.PAGE_UP:case t.PAUSE:case t.PRINT_SCREEN:case t.RIGHT:case t.SHIFT:case t.UP:case t.WIN_KEY:case t.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(o){if(o>=t.ZERO&&o<=t.NINE||o>=t.NUM_ZERO&&o<=t.NUM_MULTIPLY||o>=t.A&&o<=t.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&o===0)return!0;switch(o){case t.SPACE:case t.QUESTION_MARK:case t.NUM_PLUS:case t.NUM_MINUS:case t.NUM_PERIOD:case t.NUM_DIVISION:case t.SEMICOLON:case t.DASH:case t.EQUALS:case t.COMMA:case t.PERIOD:case t.SLASH:case t.APOSTROPHE:case t.SINGLE_QUOTE:case t.OPEN_SQUARE_BRACKET:case t.BACKSLASH:case t.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};U.Z=t},63486:function(j,U,t){t.d(U,{Z:function(){return o},o:function(){return d}});var u;function o(N){if(typeof document=="undefined")return 0;if(N||u===void 0){var i=document.createElement("div");i.style.width="100%",i.style.height="200px";var E=document.createElement("div"),v=E.style;v.position="absolute",v.top="0",v.left="0",v.pointerEvents="none",v.visibility="hidden",v.width="200px",v.height="150px",v.overflow="hidden",E.appendChild(i),document.body.appendChild(E);var T=i.offsetWidth;E.style.overflow="scroll";var I=i.offsetWidth;T===I&&(I=E.clientWidth),document.body.removeChild(E),u=T-I}return u}function a(N){var i=N.match(/^(.*)px$/),E=Number(i==null?void 0:i[1]);return Number.isNaN(E)?o():E}function d(N){if(typeof document=="undefined"||!N||!(N instanceof Element))return{width:0,height:0};var i=getComputedStyle(N,"::-webkit-scrollbar"),E=i.width,v=i.height;return{width:a(E),height:a(v)}}},79001:function(j,U,t){t.d(U,{Z:function(){return v}});var u=t(56453),o=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,a=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,d="".concat(o," ").concat(a).split(/[\s\n]+/),N="aria-",i="data-";function E(T,I){return T.indexOf(I)===0}function v(T){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,b;I===!1?b={aria:!0,data:!0,attr:!0}:I===!0?b={aria:!0}:b=(0,u.Z)({},I);var G={};return Object.keys(T).forEach(function(x){(b.aria&&(x==="role"||E(x,N))||b.data&&E(x,i)||b.attr&&d.includes(x))&&(G[x]=T[x])}),G}}}]);
