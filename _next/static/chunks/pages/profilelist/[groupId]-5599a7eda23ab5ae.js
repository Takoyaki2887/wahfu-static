(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{4319:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profilelist/[groupId]",function(){return r(649)}])},2446:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var i=r(5893),t=(r(7294),r(8527)),o=r(4651),u=r(1163);function l(){var e=(0,u.useRouter)();return(0,i.jsx)(t.xu,{w:"20vw",h:"100vh",children:(0,i.jsx)(t.xu,{position:"absolute",top:"4vh",left:"4vh",children:(0,i.jsx)(t.xu,{w:"8vh",h:"8vh",zIndex:3,onClick:function(){e.back()},_hover:{cursor:"pointer"},borderRadius:"full",children:(0,i.jsx)(o.Ee,{src:"/Return.svg"})})})})}},649:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return x}});var i=r(5893),t=(r(7294),r(1163)),o=r(8527),u=r(4651);function l(e){var n=(0,t.useRouter)(),r="/profilepage/"+e.id.toString();return(0,i.jsxs)(o.xu,{role:"group",alignSelf:"flex-end",zIndex:-e.id,h:"70vh",w:"20vw",bgGradient:"linear(to-r, black, #343434)",borderTopEndRadius:180,textAlign:"center",alignItems:"center",position:"absolute",bottom:"0",left:"2",_hover:{h:"75vh",cursor:"pointer"},onClick:function(){n.push({pathname:r,query:n.query})},children:[(0,i.jsx)(o.xu,{marginX:"auto",bg:"white",height:"13vw",width:"13vw",borderRadius:"full",marginTop:"7vh",_groupHover:{bg:"yellow.200"},children:(0,i.jsx)(u.Ee,{src:e.imgPath,margin:"auto",boxSize:"100%",objectFit:"contain",borderRadius:"full"})}),(0,i.jsx)(o.xv,{color:"white",fontSize:["2xl","2xl","2xl","4xl","4xl","4xl"],marginTop:"3vh",marginBottom:"10vh",children:e.name}),(0,i.jsx)(o.xv,{color:"white",fontSize:["md","md","md","xl","xl","xl"],maxWidth:"14vw",textAlign:"center",margin:"0 auto",children:e.routeName})]})}var a=r(7694),s=r(2546),d=r(6523);r(2821);function h(e){var n=e.groupId,r=(0,a.Ge)().journeys;return(0,i.jsx)(o.kC,{h:"100vh",backgroundImage:"/P4_Profile/SlidingKeyVisual.svg",bgSize:"cover",children:(0,i.jsx)(o.kC,{zIndex:1,h:"80vh",maxW:"80vw",marginLeft:"20vw",alignSelf:"flex-end",children:(0,i.jsx)(s.tq,{loop:!0,modules:[d.W_,d.tl],spaceBetween:0,slidesPerView:4,slidesPerGroup:3,navigation:!0,onSlideChange:function(){return console.log("slide change")},onSwiper:function(e){return console.log(e)},children:r.map((function(e){return e.group===n?(0,i.jsx)(s.o5,{style:{paddingLeft:0,paddingRight:0,marginRight:0,marginTop:0,marginBottom:0,paddingBottom:0,paddingTop:0,marginLeft:"-1vw",width:"20vw",height:"80vh",maxHeight:"80vh",alignSelf:"flex-end",verticalAlign:"top",position:"relative",zIndex:-e.id},children:(0,i.jsx)(l,{imgPath:e.participant,id:e.id,name:e.title,routeName:e.routeName})},e.id):(0,i.jsx)(i.Fragment,{})}))})})})}var c=r(6850),g=r(2446);function x(){var e=(0,t.useRouter)().query.groupId;if(e){return(0,i.jsxs)(o.kC,{children:[(0,i.jsx)(g.Z,{}),(0,i.jsx)(c.Z,{isProfile:!1}),(0,i.jsx)(h,{groupId:parseInt(e[0])})]})}return(0,i.jsx)(i.Fragment,{})}}},function(e){e.O(0,[850,595,459,774,888,179],(function(){return n=4319,e(e.s=n);var n}));var n=e.O();_N_E=n}]);