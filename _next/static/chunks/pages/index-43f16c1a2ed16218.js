(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(875)}])},875:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return I}});var n=i(5893),o=i(8527),r=i(7294),l=i(1014);function s(e){return(0,n.jsxs)(o.kC,{position:"absolute",top:"5%",left:"1%",zIndex:3,display:"inline",textAlign:"center",children:[(0,n.jsx)(o.xv,{fontSize:"sm",children:"\u8def\u7dda"}),(0,n.jsx)(l.r,{marginY:"28%",transform:"rotate(90deg)",isChecked:"MAP"===e.activeMode,size:"lg",value:e.activeMode,colorScheme:"gray",onChange:function(){"MAP"===e.activeMode?e.setActiveMode("PROFILE"):e.setActiveMode("MAP")}}),(0,n.jsx)(o.xv,{fontSize:"sm",children:"\u5730\u5716"})]})}var u=i(6850),d=i(2546),c=i(6523),a=(i(2821),i(4651)),h=i(1163),x=i(7694);function g(e){var t=e.group,i=(0,h.useRouter)(),r="/profilelist/"+t.toString();return(0,n.jsxs)(o.xu,{role:"group",alignSelf:"flex-end",zIndex:-t-1,h:"70vh",w:"20vw",bgGradient:"linear(to-r, black, #343434)",borderTopEndRadius:180,textAlign:"center",alignItems:"center",position:"absolute",bottom:"0",left:"2",_hover:{h:"75vh",cursor:"pointer"},onClick:function(){i.push({pathname:r,query:i.query})},children:[(0,n.jsx)(o.xu,{marginX:"auto",bg:"white",height:"13vw",width:"13vw",borderRadius:"full",marginTop:"7vh",_groupHover:{bg:"yellow.200"},children:(0,n.jsx)(a.Ee,{src:x.cW[t],margin:"auto",boxSize:"100%",objectFit:"contain",borderRadius:"full"})}),(0,n.jsx)(o.xv,{color:"white",fontSize:{lg:"2xl",xl:"2xl"},marginTop:"3vh",marginBottom:"10vh",children:x.uc[t]})]})}function p(){return(0,n.jsx)(o.kC,{h:"100vh",backgroundImage:"/P4_Profile/SlidingKeyVisual.svg",bgSize:"cover",children:(0,n.jsx)(o.kC,{zIndex:1,h:"80vh",maxW:"80vw",marginLeft:"20vw",alignSelf:"flex-end",children:(0,n.jsx)(d.tq,{modules:[c.W_,c.tl],spaceBetween:0,slidesPerView:4,slidesPerGroup:3,navigation:!0,onSlideChange:function(){return console.log("slide change")},onSwiper:function(e){return console.log(e)},children:x.uc.map((function(e,t){return(0,n.jsx)(d.o5,{style:{paddingLeft:0,paddingRight:0,marginRight:0,marginTop:0,marginBottom:0,paddingBottom:0,paddingTop:0,marginLeft:"-1vw",width:"20vw",height:"80vh",maxHeight:"80vh",alignSelf:"flex-end",verticalAlign:"top",position:"relative",zIndex:-t-1},children:(0,n.jsx)(g,{group:t})},t)}))})})})}var v=i(7568),f=i(7582),j=i(7054),m=i(4017),b=i(6723),w=i(5940),y=i(8786);function C(e){var t,i,r;null===(t=e.journeys)||void 0===t||t.map((function(e,t){return{value:e.id,label:e.title,id:e.id}}));return(0,n.jsxs)(o.kC,{zIndex:2,position:"absolute",bottom:"5%",left:"22%",width:"12%",display:"inline",children:[(0,n.jsxs)(o.xu,{textAlign:"center",marginBottom:"1.5vh",children:[(0,n.jsx)(o.xv,{fontWeight:"bold",children:"\u6309\u9019\u88e1"}),(0,n.jsx)(y.X,{size:"2vw"})]}),(0,n.jsxs)(m.v2,{placement:"top",matchWidth:!0,children:[(0,n.jsx)(m.j2,{as:b.zx,width:"100%",bg:"black",rightIcon:(0,n.jsx)(w.$,{color:"white"}),color:"white",borderRadius:30,fontSize:"xs",children:null===e.selectedRoute?"\u9078\u64c7\u8def\u7dda":null===(i=e.journeys[null===e||void 0===e?void 0:e.selectedRoute])||void 0===i?void 0:i.title}),(0,n.jsx)(m.qy,{p:0,minW:"0",maxH:"200px",overflowY:"scroll",w:"100%",children:null===(r=e.journeys)||void 0===r?void 0:r.map((function(t,i){return 0===i||e.journeys[i].group!==e.journeys[i-1].group?(0,n.jsxs)(o.xu,{children:[(0,n.jsx)(o.xv,{fontSize:"0.8em",fontWeight:"bold",bg:"#343434",py:"4px",paddingLeft:"0.75rem",textColor:"white",cursor:"default",_hover:{backgroundColor:"#343434"},children:x.uc[t.group]}),(0,n.jsx)(m.sN,{fontSize:"xs",itemID:t.id.toString(),onClick:e.switchRoute,backgroundColor:t.group%2==0?"white":"#d9d9d9",children:t.title})]}):(0,n.jsx)(m.sN,{fontSize:"xs",itemID:t.id.toString(),onClick:e.switchRoute,backgroundColor:t.group%2==0?"white":"#d9d9d9",children:t.title})}))})]})]})}var k=i(2923);function S(e){return(0,n.jsx)(o.kC,{bottom:"5%",display:"inline",textAlign:"center",position:"absolute",left:"12%",visibility:0==e.selectedPoint?"hidden":"visible",children:(0,n.jsx)(o.rU,{children:(0,n.jsx)(k.R,{w:5,h:5,onClick:function(){e.setPoint(e.selectedPoint-1),null!==e.selectedRoute&&e.setCenter(e.journeys[e.selectedRoute].points[e.selectedPoint-1].spot)}})})})}var R=i(5);function P(e){return(0,n.jsx)(o.kC,{bottom:"5%",display:"inline",textAlign:"center",position:"absolute",left:"47%",children:(0,n.jsx)(o.rU,{children:(0,n.jsx)(R.D,{w:4,h:4,onClick:function(){e.setRoute(null),e.setCenter({lat:22.25308,lng:114.13455}),e.setZoomValue(15)}})})})}var z=i(273);function A(e){return(0,n.jsx)(o.kC,{bottom:"5%",display:"inline",textAlign:"center",position:"absolute",right:"12%",visibility:e.journeys[null===e.selectedRoute?0:e.selectedRoute].points[e.journeys[null===e.selectedRoute?0:e.selectedRoute].points.length-1].id==e.selectedPoint?"hidden":"visible",children:(0,n.jsx)(o.rU,{children:(0,n.jsx)(z.m,{w:5,h:5,onClick:function(){e.setPoint(e.selectedPoint+1),null!==e.selectedRoute&&e.setCenter(e.journeys[e.selectedRoute].points[e.selectedPoint+1].spot)}})})})}function _(){var e=(0,j.Ji)({id:"google-map-script",googleMapsApiKey:"AIzaSyC9haK1S8KKj7svug6Ft9cOSu_O9y7rcTw"}).isLoaded,t=(0,r.useState)({lat:22.25308,lng:114.13455}),i=t[0],l=t[1],s=(0,r.useMemo)((function(){return{mapId:"13e684ef12037fd5",disableDefaultUI:!0}}),[]),u=(0,x.Ge)().journeys,d=(0,r.useState)(null),c=d[0],h=d[1],g=(0,r.useState)(0),p=g[0],m=g[1],b=(0,r.useState)(15),w=b[0],y=b[1],k=function(){var e=(0,v.Z)((function(e){var t;return(0,f.__generator)(this,(function(i){return t=Number(e.target.getAttribute("itemid")),h(t),m(0),l(u[t].points[0].spot),y(18),[2]}))}));return function(t){return e.apply(this,arguments)}}();return e?(0,n.jsxs)(o.rj,{h:"100vh",w:"100vw",zIndex:1,position:"relative",children:[(0,n.jsxs)(j.b6,{mapContainerStyle:{width:"100%",height:"100%"},center:i,zoom:w,options:s,children:[(0,n.jsx)(o.xu,{position:"relative",children:u.map((function(e,t){if(e.id===c)return e.points.map((function(e){var t={lat:e.spot.lat,lng:e.spot.lng};return(0,n.jsx)(j.Jx,{position:t,icon:{path:google.maps.SymbolPath.CIRCLE,fillColor:"yellow",fillOpacity:10,scale:e.id===p?10:5,strokeColor:"yellow",strokeWeight:.5},label:e.id===p?(p+1).toString():"",onClick:function(){m(e.id)}})}))}))}),u.map((function(e){if(e.id===c){var t=e.path;return(0,n.jsx)(j.aH,{path:t,options:{strokeColor:"yellow",strokeOpacity:.8,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,visible:!0,zIndex:4}})}}))]}),null===c?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(o.kC,{width:"30vw",height:"90%",bg:"white",position:"absolute",top:5,right:5,borderRadius:3,textAlign:"left",children:(0,n.jsxs)(o.kC,{display:"inline-block",px:6,position:"relative",textAlign:"center",width:"100%",children:[(0,n.jsxs)(o.kC,{alignItems:"flex-end",children:[(0,n.jsx)(o.xv,{fontSize:40,fontWeight:"bold",verticalAlign:"text-bottom",children:u[c].points[p].id+1}),(0,n.jsx)(o.xv,{py:2,children:u[c].points[p].title})]}),(0,n.jsx)(o.xu,{height:"40vh",margin:"0 auto",alignSelf:"center",children:(0,n.jsx)(a.Ee,{margin:"auto",boxSize:"100%",objectFit:"contain",src:u[c].points[p].imgPath})}),(0,n.jsx)(o.kC,{children:(0,n.jsx)(o.xv,{marginTop:"4vh",children:u[c].points[p].description})}),(0,n.jsx)(A,{journeys:u,selectedPoint:p,setPoint:m,selectedRoute:c,setCenter:l}),(0,n.jsx)(P,{journeys:u,selectedPoint:p,setRoute:h,selectedRoute:c,setCenter:l,setZoomValue:y}),(0,n.jsx)(S,{journeys:u,selectedPoint:p,setPoint:m,selectedRoute:c,setCenter:l})]})}),(0,n.jsx)(C,{journeys:u,switchRoute:k,selectedRoute:c})]}):(0,n.jsx)(n.Fragment,{})}var I=function(e){e.Component;var t=(0,r.useState)("PROFILE"),i=t[0],l=t[1];return(0,n.jsxs)(o.kC,{children:[(0,n.jsx)(s,{activeMode:i,setActiveMode:l}),(0,n.jsx)(u.Z,{isProfile:!1}),"MAP"==i?(0,n.jsx)(_,{}):(0,n.jsx)(p,{})]})}}},function(e){e.O(0,[255,850,595,450,794,459,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);