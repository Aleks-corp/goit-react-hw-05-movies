"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[801],{7411:function(e,n,t){t.d(n,{C:function(){return c}});var r=t(5861),i=t(7757),a=t.n(i),s=t(1243),o="b769d525e1ad4eef01b48a7fe3c818d0";s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var e=(0,r.Z)(a().mark((function e(){var n,t,r=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"/trending/movie/day",e.next=3,s.Z.get(n,{params:{api_key:o}});case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},1801:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r,i,a,s,o,c,d=t(5861),l=t(9439),p=t(7757),u=t.n(p),h=t(7689),f=t(7411),v=t(2791),x=t(168),m=t(6444),g=m.ZP.section(r||(r=(0,x.Z)(["\n  display: flex;\n\n  padding: 16px;\n  border-bottom: 3px solid #999999;\n"]))),j=m.ZP.h2(i||(i=(0,x.Z)(["\n  margin-left: 20px;\n"]))),Z=m.ZP.h3(a||(a=(0,x.Z)(["\n  padding-top: 20px;\n  margin-left: 16px;\n"]))),w=m.ZP.h3(s||(s=(0,x.Z)(["\n  padding-top: 20px;\n  margin-left: 16px;\n"]))),b=m.ZP.h3(o||(o=(0,x.Z)(["\n  padding-top: 20px;\n  margin-left: 16px;\n"]))),_=m.ZP.p(c||(c=(0,x.Z)(["\n  font-weight: 400;\n"]))),k=t(184),P=function(e){var n=e.movieDetails,t=n.poster_path,r=n.title,i=n.release_date,a=n.vote_average,s=n.overview,o=n.genres,c=[];return o&&o.map((function(e){var n=e.name;return c.push(n)})),(0,k.jsxs)(g,{children:[n.poster_path?(0,k.jsx)("img",{width:"250",height:"375",src:"https://image.tmdb.org/t/p/original".concat(t),alt:r}):(0,k.jsx)("img",{width:"250",src:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:r}),(0,k.jsxs)("div",{children:[(0,k.jsxs)(j,{children:[r," ",i&&"(".concat(i.slice(0,4),")")]}),(0,k.jsxs)(Z,{children:["User Score:"," ",a?(0,k.jsxs)("span",{children:[Math.round(10*a),"%"]}):"Unavailable"]}),s&&(0,k.jsxs)(w,{children:["Overview ",(0,k.jsx)(_,{children:s})]}),o&&(0,k.jsxs)(b,{children:["Genres ",(0,k.jsx)(_,{children:c.join(", ")})]})]})]})},U=t(1386),C=t(3614),y=function(){var e,n,t=(0,h.UO)().id,r=(0,v.useState)({}),i=(0,l.Z)(r,2),a=i[0],s=i[1],o=(0,v.useState)(!1),c=(0,l.Z)(o,2),p=c[0],x=c[1],m=null!==(e=null===(n=(0,h.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,v.useEffect)((function(){var e=new AbortController,n=function(){var e=(0,d.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,f.C)("/movie/".concat(t));case 4:n=e.sent,s(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return n(),function(){e.abort()}}),[t]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(U.rU,{to:m,children:"Go Back"}),p?(0,k.jsx)(C.Z,{}):(0,k.jsx)(P,{movieDetails:a}),(0,k.jsxs)(U.Gz,{children:[(0,k.jsx)("p",{children:"Additional information"}),(0,k.jsx)(U.rU,{to:"cast",state:{from:m},children:"Cast"}),(0,k.jsx)(U.rU,{to:"reviews",state:{from:m},children:"Reviews"})]}),(0,k.jsx)(h.j3,{})]})}}}]);
//# sourceMappingURL=801.842d180d.chunk.js.map