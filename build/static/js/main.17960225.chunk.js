(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{152:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(19),s=c.n(i),a=c(9),o=c.n(a),l=c(18),r=c(33),j=c(11),d=c(28),b=c.n(d),h=c(3),O=(c(148),c(21)),u=c.n(O),x=c(1),m=function(e){var t=e.img,c=e.location,n=e.role;return Object(x.jsxs)("div",{className:u.a.location,children:[Object(x.jsx)("div",{className:u.a.title,children:c}),"object"!=typeof n?Object(x.jsx)("div",{className:u.a.role,children:n}):null,Object(x.jsx)("img",{className:u.a.img,src:t})]})},p=function(e){var t=e.locations,c=e.go;return Object(x.jsxs)("div",{children:[Object(x.jsx)(h.c,{size:"m",stretched:!0,"data-to":"newLocation",onClick:c,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e"}),t.map((function(e,t){return Object(x.jsx)(m,{img:e.img,location:e.location,role:e.role},t)}))]})},g=c(29),f=c.n(g),v=function(e){var t=e.id,c=e.go;e.fetchedUser;return Object(x.jsxs)(h.k,{id:t,children:[Object(x.jsx)(h.l,{children:"\u041d\u0430\u0445\u043e\u0434\u0447\u0438\u0432\u044b\u0439 \u0448\u043f\u0438\u043e\u043d"}),Object(x.jsx)(h.h,{children:Object(x.jsxs)(h.e,{children:[Object(x.jsx)(h.c,{size:"m",stretched:!0,className:f.a.btn,onClick:c,"data-to":"new",children:"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430"}),Object(x.jsx)(h.c,{className:f.a.btn,mode:"secondary",size:"m",stretched:!0,onClick:c,"data-to":"locs",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043b\u043e\u043a\u0430\u0446\u0438\u0439"})]})})]})},_=function(e){var t=e.id,c=e.go,n=e.locations;return Object(x.jsxs)(h.k,{id:t,children:[Object(x.jsx)(h.l,{left:Object(x.jsx)(h.m,{onClick:c,"data-to":"home"}),children:"\u0421\u043f\u0438\u0441\u043e\u043a \u041b\u043e\u043a\u0430\u0446\u0438\u0439"}),Object(x.jsx)(h.h,{children:Object(x.jsx)(h.e,{children:Object(x.jsx)(p,{go:c,locations:n})})})]})},S=c(38),k=c.n(S),y=function(e){var t=e.id,c=e.go,i=e.play,s=Object(n.useState)(3),a=Object(j.a)(s,2),o=a[0],l=a[1];return Object(x.jsxs)(h.k,{id:t,children:[Object(x.jsx)(h.l,{left:Object(x.jsx)(h.m,{onClick:c,"data-to":"home"}),children:"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430"}),Object(x.jsxs)(h.e,{children:[Object(x.jsx)(h.g,{top:"\u0427\u0438\u0441\u043b\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u0432",style:{paddingLeft:"0px",paddingRight:"0px"},children:Object(x.jsx)(h.j,{type:"number",className:k.a.input,placeholder:"\u041e\u0442 3 \u0434\u043e 6",value:o,onChange:function(e){return function(e){var t=e.target.value;t.length>0&&t<3?l(3):t.length>0&&t>6?l(6):l(t)}(e)}})}),Object(x.jsx)(h.c,{stretched:!0,size:"m","data-count":o,"data-to":"game",onClick:i,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443"})]})]})},C=c.p+"static/media/shpion.fd50b023.png",L=function(e){var t=e.id,c=e.go,i=e.players,s=e.locations,a=Object(n.useState)(null),o=Object(j.a)(a,2),l=o[0],r=o[1],d=Object(n.useState)(null),b=Object(j.a)(d,2),O=b[0],u=b[1],p=Object(n.useState)(!1),g=Object(j.a)(p,2),f=g[0],v=g[1],_=Object(n.useState)(!1),S=Object(j.a)(_,2),k=S[0],y=S[1],L=Object(n.useState)(!1),N=Object(j.a)(L,2),z=N[0],T=N[1];function A(e,t){var c=e-.5+Math.random()*(t-e+1);return Math.round(c)}var w=Object(n.useState)(null),F=Object(j.a)(w,2),K=F[0],V=F[1];return Object(x.jsxs)(h.k,{id:t,children:[Object(x.jsx)(h.l,{children:"\u0418\u0433\u0440\u0430"}),f?Object(x.jsxs)(h.e,{children:[!k&&l<=i?Object(x.jsx)(x.Fragment,{children:l!==K?Object(x.jsx)(m,{img:O.img,location:O.location,role:O.role[A(0,O.role.length-1)]}):Object(x.jsx)(m,{img:C,location:"\u0412\u044b \u0448\u043f\u0438\u043e\u043d!",role:"\u0412\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435 \u043b\u043e\u043a\u0430\u0446\u0438\u044e \u0438\u0433\u0440\u043e\u043a\u043e\u0432"})}):Object(x.jsx)(x.Fragment,{children:l<i?Object(x.jsx)(h.p,{children:"\u041f\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u0438\u0433\u0440\u043e\u043a\u0443"}):Object(x.jsx)(h.p,{children:"\u0412\u0441\u0435 \u0440\u043e\u043b\u0438 \u0432\u044b\u0434\u0430\u043d\u044b \u0438\u0433\u0440\u043e\u043a\u0430\u043c! \u0417\u0430\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0443 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435 \u0448\u043f\u0438\u043e\u043d\u0430. \u041f\u043e\u043c\u043d\u0438\u0442\u0435, \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0430\u043a\u043a\u0443\u0440\u0430\u0442\u043d\u0435\u0435, \u0448\u043f\u0438\u043e\u043d \u043f\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u0443\u0437\u043d\u0430\u0442\u044c, \u0433\u0434\u0435 \u0432\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0435\u0441\u044c!"})}),z?Object(x.jsx)(h.c,{size:"m",stretched:!0,style:{marginTop:"20px"},"data-to":"timer",onClick:c,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435"}):Object(x.jsx)(h.c,{size:"m",stretched:!0,style:{marginTop:"20px"},onClick:function(){y(!k),k&&r(l+1),l==i&&T(!z)},children:k?"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u0440\u0442\u0443":"\u0421\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u044e \u043a\u0430\u0440\u0442\u0443"})]}):Object(x.jsxs)(h.e,{children:[Object(x.jsx)(h.p,{children:"\u0412\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0435 \u0438\u0433\u0440\u0443! \u041d\u0430\u0436\u0438\u043c\u0442\u0435 \xab\u041d\u0430\u0447\u0430\u0442\u044c \u043a\u0440\u0443\u0433\xbb \u0438 \u0443\u0437\u043d\u0430\u0435\u0442\u0435, \u043a\u0442\u043e \u0432\u044b. \u0415\u0441\u043b\u0438 \u0432\u044b \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u0438\u0433\u0440\u043e\u043a, \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u043b\u043e\u043a\u0430\u0446\u0438\u044e. \u0410 \u0435\u0441\u043b\u0438 \u0448\u043f\u0438\u043e\u043d, \u0442\u043e \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u043a\u0430\u0440\u0442\u0443. \u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430\u0439\u0434\u0438\u0442\u0435 \u0448\u043f\u0438\u043e\u043d\u0430 \u0438\u043b\u0438 \u0443\u0437\u043d\u0430\u0439\u0442\u0435 \u043b\u043e\u043a\u0430\u0446\u0438\u044e, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0435\u0441\u044c!"}),Object(x.jsx)(h.c,{size:"m",stretched:!0,style:{marginTop:"20px"},onClick:function(){v(!0),V(A(1,i)),u(s[A(0,3)]),r(1)},children:"\u041d\u0430\u0447\u0430\u0442\u044c \u043a\u0440\u0443\u0433"})]})]})},N=c(39),z=c(22),T=c.n(z),A=function(e){var t=e.id,c=e.go,n=(e.players,e.flash),i=function(){return Object(x.jsx)("div",{children:"\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0448\u043b\u043e!"})};return Object(x.jsxs)(h.k,{id:t,children:[Object(x.jsx)(h.l,{children:"\u0422\u0430\u0439\u043c\u0435\u0440"}),Object(x.jsxs)(h.e,{children:[Object(x.jsx)(N.a,{date:Date.now()+3e4,renderer:function(e){e.hours;var t=e.minutes,c=e.seconds;return e.completed?(n(),Object(x.jsx)(i,{})):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:T.a.timer,children:[t,":",1==String(c).length?"0"+c:c]}),Object(x.jsx)("div",{className:T.a.text,children:"\u041d\u0430\u0447\u0438\u043d\u0430\u0439\u0442\u0435 \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0443!"})]})}}),Object(x.jsx)(h.c,{className:T.a.btn,size:"m",stretched:!0,onClick:c,"data-to":"game",children:"\u041d\u043e\u0432\u044b\u0439 \u0440\u0430\u0443\u043d\u0434"}),Object(x.jsx)(h.c,{className:T.a.btn,size:"m",mode:"secondary",stretched:!0,onClick:c,"data-to":"home",children:"\u0412 \u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u043c\u0435\u043d\u044e"})]})]})},w=c.p+"static/media/pirate.f59fc226.jpg",F=c.p+"static/media/zinger.96f760ef.jpg",K=c.p+"static/media/ostankino.9be6a3a4.jpg",V=c.p+"static/media/metro.3273fc31.jpg",W=c(153),U=function(e){var t=e.id,c=e.go,i=(e.locations,e.setLoc),s=Object(n.useState)([""]),a=Object(j.a)(s,2),o=a[0],r=a[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),O=b[0],u=b[1],m=Object(n.useState)(null),p=Object(j.a)(m,2),g=p[0],f=p[1];return Object(x.jsxs)(h.k,{id:t,children:[Object(x.jsx)(h.l,{left:Object(x.jsx)(h.m,{onClick:c,"data-to":"locs"}),children:"\u041d\u043e\u0432\u0430\u044f \u043b\u043e\u043a\u0430\u0446\u0438\u044f"}),Object(x.jsx)(h.i,{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435"}),Object(x.jsxs)(h.h,{children:[Object(x.jsx)(h.g,{top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043b\u043e\u043a\u0430\u0446\u0438\u0438",children:Object(x.jsx)(h.j,{placeholder:"\u041d\u0435\u043e\u0431\u0438\u0442\u0430\u0435\u043c\u044b\u0439 \u043e\u0441\u0442\u0440\u043e\u0432",value:O,onChange:function(e){return u(e.target.value)}})}),Object(x.jsxs)(h.g,{top:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430",children:[Object(x.jsx)(h.f,{before:Object(x.jsx)(W.a,{}),controlSize:"m",mode:"secondary",onChange:function(e){return function(e){var t=URL.createObjectURL(e.target.files[0]);console.log(t),f(t)}(e)}}),g?Object(x.jsx)("img",{style:{width:"100%",height:"280px",objectFit:"cover",borderRadius:"8px",marginTop:"16px"},src:g}):null]})]}),Object(x.jsxs)(h.h,{children:[Object(x.jsx)(h.i,{children:"\u0420\u043e\u043b\u0438"}),o?o.map((function(e,t){return Object(x.jsx)(h.g,{top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u043e\u043b\u0438",children:Object(x.jsx)(h.j,{placeholder:"\u0413\u0440\u0443\u0437\u0447\u0438\u043a",value:e.value,onChange:function(e){return function(e,t){r([].concat(Object(l.a)(o.slice(0,e)),[t.target.value],Object(l.a)(o.slice(e+1))))}(t,e)}})},t)})):null,Object(x.jsx)(h.e,{children:Object(x.jsx)(h.c,{stretched:!0,mode:"secondary",size:"m",onClick:function(){return r([].concat(Object(l.a)(o),[""]))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u043e\u043b\u044c"})})]}),Object(x.jsx)(h.h,{children:Object(x.jsx)(h.e,{children:Object(x.jsx)(h.c,{stretched:!0,size:"m","data-to":"locs",onClick:function(e){i(JSON.stringify({img:g,location:O,role:o})),c(e)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})})]})},E=function(){var e=Object(n.useState)("bright_light"),t=Object(j.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)("home"),a=Object(j.a)(s,2),d=a[0],O=a[1],u=Object(n.useState)(null),m=Object(j.a)(u,2),p=m[0],g=m[1],f=Object(n.useState)(null),S=Object(j.a)(f,2),k=S[0],C=S[1],N=Object(n.useState)([{img:w,location:"\u041f\u0438\u0440\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u043e\u0440\u0430\u0431\u043b\u044c",role:["\u042e\u043d\u0433\u0430","\u041f\u043b\u0435\u043d\u043d\u044b\u0439","\u041f\u043e\u043f\u0443\u0433\u0430\u0439 \u043d\u0430 \u043f\u043b\u0435\u0447\u0435","\u0411\u043e\u0446\u043c\u0430\u043d","\u041a\u0430\u043f\u0438\u0442\u0430\u043d","\u041f\u043b\u043e\u0442\u043d\u0438\u043a"]},{img:F,location:"\u041e\u0444\u0438\u0441 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435",role:["\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440","\u0422\u0438\u043c\u043b\u0438\u0434","\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a","\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a","\u0421\u0438\u0441 \u0430\u0434\u043c\u0438\u043d","\u0423\u0431\u043e\u0440\u0449\u0438\u043a"]},{img:K,location:"\u041e\u0441\u0442\u0430\u043d\u043a\u0438\u043d\u043e",role:["\u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440","\u0420\u0435\u043f\u043e\u0440\u0442\u0451\u0440","\u0416\u0443\u0440\u043d\u0430\u043b\u0438\u0441\u0442","\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440","\u0422\u0435\u043b\u0435\u0437\u0432\u0435\u0437\u0434\u0430","\u041c\u0435\u0442\u0435\u043e\u0440\u043e\u043b\u043e\u0433"]},{img:V,location:"\u041c\u0435\u0442\u0440\u043e",role:["\u0421\u043b\u0435\u0441\u0430\u0440\u044c","\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043c\u043e\u043d\u0442\u0430\u0436\u043d\u0438\u043a","\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a \u0441\u043c\u0435\u043d\u044b","\u041f\u0440\u043e\u0440\u0430\u0431","\u041c\u0430\u0448\u0438\u043d\u0438\u0441\u0442","\u0418\u043d\u0436\u0435\u043d\u0435\u0440"]}]),z=Object(j.a)(N,2),T=z[0],W=z[1];Object(n.useEffect)((function(){function e(){return(e=Object(r.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,g(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.send("VKWebAppInit"),o.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;"VKWebAppUpdateConfig"===c&&i(n.scheme)})),function(){e.apply(this,arguments)}()}),[]);var E=function(e){O(e.currentTarget.dataset.to)};return Object(x.jsx)(h.d,{scheme:c,children:Object(x.jsx)(h.a,{children:Object(x.jsx)(h.b,{children:Object(x.jsx)(h.o,{children:Object(x.jsx)(h.n,{children:Object(x.jsxs)(h.q,{activePanel:d,children:[Object(x.jsx)(v,{id:"home",fetchedUser:p,go:E}),Object(x.jsx)(_,{id:"locs",locations:T,setLocations:W,go:E}),Object(x.jsx)(y,{id:"new",go:E,play:function(e){C(e.currentTarget.dataset.count),O(e.currentTarget.dataset.to)}}),Object(x.jsx)(L,{id:"game",go:E,locations:T,players:k}),Object(x.jsx)(A,{id:"timer",bridge:o.a,go:E,flash:function(){o.a.send("VKWebAppFlashSetLevel",{level:1}),setTimeout((function(){o.a.send("VKWebAppFlashSetLevel",{level:0})}),1e3),setTimeout((function(){o.a.send("VKWebAppFlashSetLevel",{level:1})}),2e3),setTimeout((function(){o.a.send("VKWebAppFlashSetLevel",{level:0})}),3e3),setTimeout((function(){o.a.send("VKWebAppFlashSetLevel",{level:1})}),4e3),setTimeout((function(){o.a.send("VKWebAppFlashSetLevel",{level:0})}),5e3)},players:k}),Object(x.jsx)(U,{id:"newLocation",go:E,locations:T,setLoc:function(e){var t=JSON.parse(e);W([t].concat(Object(l.a)(T)))}})]})})})})})})};o.a.send("VKWebAppInit"),s.a.render(Object(x.jsx)(E,{}),document.getElementById("root")),Promise.all([c.e(3),c.e(4)]).then(c.bind(null,157)).then((function(e){e.default}))},21:function(e,t,c){e.exports={location:"location_location__6OsAv",img:"location_img__2fTr_",title:"location_title__3yYNt",role:"location_role__2E_E7"}},22:function(e,t,c){e.exports={timer:"timer_timer__3onDo",text:"timer_text__1av19",btn:"timer_btn__3Qc1g"}},29:function(e,t,c){e.exports={btn:"home_btn__3c_e8"}},38:function(e,t,c){}},[[152,1,2]]]);
//# sourceMappingURL=main.17960225.chunk.js.map