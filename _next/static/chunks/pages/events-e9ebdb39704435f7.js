(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{1442:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return n(8168)}])},6850:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var i=n(5893),r=(n(7294),n(8527)),o=n(4651),a=n(1163),s=n(4017);function l(e){var t=e.tab,n=c(),o=n.getActiveTab,a=n.navigateToTab,l=o();return(0,i.jsx)(r.kC,{display:"inline-block",children:(0,i.jsx)(s.v2,{placement:"right",children:(0,i.jsx)(s.j2,{fontWeight:l===t.id?"bold":void 0,onClick:function(){return a(t)},color:"white",_hover:{color:l===t.id?"white":"yellow"},children:(0,i.jsx)(r.kC,{children:(0,i.jsx)(r.xv,{textColor:"inherit",fontSize:"15px",fontWeight:"bold",children:t.title})})})})})}var c=function(){var e=(0,a.useRouter)(),t=[{title:"\u95dc\u65bc\u6211\u5011",pathname:"/about",id:2},{title:"\u7dda\u6027\u8ffd\u8e64",pathname:"/transect",id:3},{title:"\u5982\u4f55\u53c3\u8207",pathname:"/methodology",id:4},{title:"\u76f8\u95dc\u6d3b\u52d5",pathname:"/events",id:5},{title:"\u806f\u7d61\u6211\u5011",pathname:"/contact",id:6}];return{tabs:t,getActiveTab:function(){var n=t.find((function(t){return t.pathname===e.pathname}));return null===n||void 0===n?void 0:n.id},navigateToTab:function(t){e.push({pathname:t.pathname,query:e.query})}}};function h(){var e=c().tabs;return(0,i.jsx)(r.kC,{direction:"column",flex:1,children:e.map((function(e){return(0,i.jsx)(l,{tab:e},e.id)}))})}function d(e){var t=e.isProfile,n=(0,a.useRouter)();return(0,i.jsxs)(r.xu,{position:"absolute",bottom:0,left:0,h:"70vh",w:"20vw",zIndex:2,bg:"#343434",borderTopEndRadius:"150px",borderTopWidth:t?"thin":void 0,borderEndWidth:t?"thin":void 0,borderTopColor:t?"white":"#343434",borderEndColor:t?"white":"#343434",children:[(0,i.jsx)(r.xu,{marginTop:"30%",marginLeft:"12%",width:"55%",children:(0,i.jsx)(r.rU,{children:(0,i.jsx)(o.Ee,{src:"/P3_ROUTE/KeyLogo.svg",boxSize:"100%",onClick:function(){n.push({pathname:"/"})}})})}),(0,i.jsx)(r.kC,{marginLeft:"12%",pos:"absolute",bottom:"5vh",children:(0,i.jsx)(h,{})}),(0,i.jsx)(o.Ee,{src:"/P3_ROUTE/ResearchGroupLogo.svg",boxSize:"18%",position:"absolute",bottom:"5%",right:"10%"})]})}},8168:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(8527),o=(n(7294),n(6850)),a=n(5349);t.default=function(){return(0,i.jsxs)(r.kC,{children:[(0,i.jsx)(o.Z,{isProfile:!1}),(0,i.jsx)(r.kC,{h:"100vh",w:"100vw",backgroundImage:"/P4_Profile/SlidingKeyVisual.svg",bgSize:"cover",children:(0,i.jsx)(r.xu,{bg:"white",h:"100vh",w:"70vw",position:"absolute",right:0,top:0,display:"relative",overflow:"scroll",overflowX:"hidden",children:(0,i.jsxs)(r.xu,{paddingTop:"75px",px:"160px",paddingBottom:"75px",children:[(0,i.jsx)(r.X6,{as:"u",size:"lg",fontWeight:"bold",children:"\u76f8\u95dc\u6d3b\u52d5 Related activities"}),(0,i.jsxs)(r.xu,{marginTop:"70px",children:[(0,i.jsx)(r.xv,{fontSize:"md",children:"\u76f8\u95dc\u6d3b\u52d5\u8acb\u53c3\u8003 (For related activities, please refer to)"}),(0,i.jsxs)(r.rU,{fontSize:"md",fontWeight:"bold",color:"teal.500",href:"https://wahfuestate.hku.hk/new-wah-fu-estate/ ",isExternal:!0,children:["https://wahfuestate.hku.hk/new-wah-fu-estate/",(0,i.jsx)(a.h,{mx:"2px"})]})]})]})})})]})}},5349:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var i=n(4837),r=n(5893),o=(0,i.I)({displayName:"ExternalLinkIcon",path:(0,r.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,r.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,r.jsx)("path",{d:"M15 3h6v6"}),(0,r.jsx)("path",{d:"M10 14L21 3"})]})})},4837:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var i=n(6484);var r=n(5893),o={path:(0,r.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",children:[(0,r.jsx)("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),(0,r.jsx)("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),(0,r.jsx)("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},a=(0,i.Gp)(((e,t)=>{const{as:n,viewBox:a,color:s="currentColor",focusable:l=!1,children:c,className:h,__css:d,...u}=e,p={ref:t,focusable:l,className:((...e)=>e.filter(Boolean).join(" "))("chakra-icon",h),__css:{w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:s,...d,...(0,i.mq)("Icon",e)}},x=null!=a?a:o.viewBox;if(n&&"string"!==typeof n)return(0,r.jsx)(i.m$.svg,{as:n,...p,...u});const f=null!=c?c:o.path;return(0,r.jsx)(i.m$.svg,{verticalAlign:"middle",viewBox:x,...p,...u,children:f})}));a.displayName="Icon";var s=n(7294);function l(e){const{viewBox:t="0 0 24 24",d:n,displayName:o,defaultProps:l={}}=e,c=s.Children.toArray(e.path),h=(0,i.Gp)(((e,i)=>(0,r.jsx)(a,{ref:i,viewBox:t,...l,...e,children:c.length?c:(0,r.jsx)("path",{fill:"currentColor",d:n})})));return h.displayName=o,h}}},function(e){e.O(0,[850,774,888,179],(function(){return t=1442,e(e.s=t);var t}));var t=e.O();_N_E=t}]);