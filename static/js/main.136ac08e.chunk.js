(this["webpackJsonpapp-sumo-uy"]=this["webpackJsonpapp-sumo-uy"]||[]).push([[0],{41:function(e,a,t){e.exports=t(76)},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(36),c=t.n(l),o=(t(46),t(15)),i=(t(47),function(e){var a=e.onClick;return r.a.createElement("div",{className:"LeftSideBar__BurgerButton",role:"button",onClick:a},r.a.createElement("i",null),r.a.createElement("i",null),r.a.createElement("i",null))}),m=(t(48),function(){var e=Object(n.useContext)(u).setIsShowSidebar;return r.a.createElement("div",{className:"LeftSideBar__TopSection"},r.a.createElement("div",{className:"TituloApp"},r.a.createElement("h3",null,"Sumo|UY")),r.a.createElement(i,{onClick:function(){return e(!0)}}))}),s=(t(49),function(){var e=Object(n.useContext)(u),a=e.isShowSidebar,t=e.setIsShowSidebar,l=Object(n.useState)("close_1"),c=Object(o.a)(l,2),m=c[0],s=c[1],p=Object(n.useState)("close_2"),E=Object(o.a)(p,2),d=E[0],f=E[1];return r.a.createElement("div",{className:"LeftSideBar__LeftSection LeftSideBar__LeftSection--".concat(a?"show":"hide")},r.a.createElement("div",{className:"LeftSideBar__LeftSection__topWrapper"},r.a.createElement(i,{onClick:function(){return t(!1)}})),r.a.createElement("ul",{className:"LeftSideBar__LeftSection__menuWrapper"},r.a.createElement("li",null,r.a.createElement("a",{href:"/app-sumo/Home"},"Noticias")),r.a.createElement("hr",null),r.a.createElement("li",{className:m},r.a.createElement("a",{onClick:function(){return s("open_1"===m?"close_1":"open_1")}},"Competencias",r.a.createElement("img",{src:"img/flecha_menu.png",alt:"img_flecha"}))),r.a.createElement("ul",{className:m},r.a.createElement("li",null,r.a.createElement("a",{href:"/app-sumo/SumoLibre"},"Sumo Libre")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Escolar")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Basica")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Avanzada")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"IEEE sek")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"SumBot"))),r.a.createElement("hr",null),r.a.createElement("li",{className:d},r.a.createElement("a",{onClick:function(){return f("open_2"===d?"close_2":"open_2")}},"Mapas",r.a.createElement("img",{src:"./img/flecha_menu.png",alt:"img_flecha"}))),r.a.createElement("ul",{className:d},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Mapa de evento")),r.a.createElement("li",null,r.a.createElement("a",{href:"/app-sumo/MapaHospedaje"},"Mapa hospedajes")))))}),u=(t(50),r.a.createContext({})),p=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement(u.Provider,{value:{isShowSidebar:t,setIsShowSidebar:l}},r.a.createElement("div",{className:"LeftSideBar__container"},r.a.createElement("div",{className:"LeftSideBar__container__overlay LeftSideBar__container__overlay--".concat(t?"show":"hide"),role:"button",onClick:function(){return l(!1)}}),r.a.createElement(m,null),r.a.createElement(s,null)))},E=t(38),d=t(4),f=(t(51),t(30)),h=t.n(f),g=t(37),v=t(31),b=t.n(v);b.a.initializeApp({apiKey:"AIzaSyB_5FdNS-swR5BnepYvw4G92tDRM76UtMg",authDomain:"proyecto-sumo-app.firebaseapp.com",databaseURL:"https://proyecto-sumo-app.firebaseio.com",projectId:"proyecto-sumo-app",storageBucket:"proyecto-sumo-app.appspot.com",messagingSenderId:"149802316567",appId:"1:149802316567:web:5310c5458c2f6b66a7fd52",measurementId:"G-R4H9FBX2XV"});var N=b.a;t(69);var w=function(e){var a=e.titulo,t=e.img,n=(e.fecha,e.text);return r.a.createElement("div",{className:"Marco"},r.a.createElement("div",{className:"Noticia"},r.a.createElement("img",{className:"ImgNoticia",src:t}),r.a.createElement("p",{className:"TituloNoticia"},a),r.a.createElement("p",null,n)))};var S=function(){var e=r.a.useState([]),a=Object(o.a)(e,2),t=a[0],n=a[1];return r.a.useEffect((function(){(function(){var e=Object(g.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N.firestore(),e.next=3,a.collection("Noticias").get();case 3:t=e.sent,n(t.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"containter-fluid"},t.map((function(e){return r.a.createElement(w,{titulo:e.titulo,img:e.imgUrl,fecha:e.fecha,text:e.text})}))))},_=function(e){var a=e.height,t=e.width,l=e.center,c=e.tileLayer,o=e.zoom,i=e.apiKey;return Object(n.useEffect)((function(){window.L.mapquest.key=i,window.L.mapquest.map("map",{center:l,layers:window.L.mapquest.tileLayer(c),zoom:o}).addControl(window.L.mapquest.control())}),[]),r.a.createElement("div",{id:"map",style:{width:t,height:a}},r.a.createElement("p",null,"Cargando mapa..."))};t(70);var j=function(){var e=Object(n.useState)("-34.918150884536935"),a=Object(o.a)(e,2),t=a[0],l=(a[1],Object(n.useState)("-56.166261434555054")),c=Object(o.a)(l,2),i=c[0];return c[1],r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",null,r.a.createElement("p",null,"Mapa Hospedaje")),r.a.createElement("div",{className:"MapaHospedaje"},r.a.createElement(_,{height:"80vh",width:"100%",center:[t,i],tileLayer:"map",zoom:15,apiKey:"ssMcYczg0c1zaMAhUn5PbnAshNF3Z4TR"})))},y=(t(71),t(98)),L=t(102),k=t(105),C=t(106),B=t(100),P=t(103),q=t(104),O=t(101),M=Object(y.a)({table:{minWidth:100},tableParticipantes:{minWidth:100}}),A=[D("Equipo 4",1,"Equipo 7"),D("Equipo 5",2,"Equipo 8"),D("Equipo 6",3,"Equipo 9")];function D(e,a,t){return{equipo1:e,dojo:a,equipo2:t}}var W=function(){var e=M();return r.a.createElement("div",{className:"SumoLibre"},r.a.createElement("div",null,r.a.createElement("h5",{align:"center"},"Sumo libre")),r.a.createElement("div",{className:"ContenerdorEnfrentamientos"},r.a.createElement("img",{className:"imgDojo",src:"img/dojo.png",alt:"img_dojo"}),r.a.createElement("div",{className:"NumeroDojo"},r.a.createElement("h3",null,"1")),r.a.createElement("div",{className:"TablaDeEnfrentamientos"},r.a.createElement(B.a,{component:O.a},r.a.createElement(L.a,{className:e.tableParticipantes,"aria-label":"simple table"},r.a.createElement(P.a,null,r.a.createElement(q.a,null,r.a.createElement(C.a,{align:"center"},"Participante 1"),r.a.createElement(C.a,{className:"celda1",align:"center"},"Participante 2"))))))),r.a.createElement("div",{className:"ContenerdorEnfrentamientos"},r.a.createElement("img",{className:"imgDojo",src:"img/dojo.png",alt:"img_dojo"}),r.a.createElement("div",{className:"NumeroDojo"},r.a.createElement("h3",null,"2")),r.a.createElement("div",{className:"TablaDeEnfrentamientos"},r.a.createElement(B.a,{component:O.a},r.a.createElement(L.a,{className:e.tableParticipantes,"aria-label":"simple table"},r.a.createElement(P.a,null,r.a.createElement(q.a,null,r.a.createElement(C.a,{align:"center"},"Participante 1"),r.a.createElement(C.a,{className:"celda1",align:"center"},"Participante 2"))))))),r.a.createElement("div",{className:"ContenerdorEnfrentamientos"},r.a.createElement("img",{className:"imgDojo",src:"img/dojo.png",alt:"img_dojo"}),r.a.createElement("div",{className:"NumeroDojo"},r.a.createElement("h3",null,"3")),r.a.createElement("div",{className:"TablaDeEnfrentamientos"},r.a.createElement(B.a,{component:O.a},r.a.createElement(L.a,{className:e.tableParticipantes,"aria-label":"simple table"},r.a.createElement(P.a,null,r.a.createElement(q.a,null,r.a.createElement(C.a,{className:"celda1",align:"center"},"Participante 1"),r.a.createElement(C.a,{align:"center"},"Participante 2"))))))),r.a.createElement("div",null,r.a.createElement("h5",{align:"center"},"Siguiente ronda")),r.a.createElement("div",{className:"ContenerdorPreparacion"},r.a.createElement(B.a,{className:"TablaPreparacion",component:O.a},r.a.createElement(L.a,{className:e.table,"aria-label":"simple table"},r.a.createElement(P.a,null,r.a.createElement(q.a,null,r.a.createElement(C.a,{align:"left"},"Equipo"),r.a.createElement(C.a,{align:"center"},"Dojo"),r.a.createElement(C.a,{align:"right"},"Equipo"))),r.a.createElement(k.a,null,A.map((function(e){return r.a.createElement(q.a,{key:e.name},r.a.createElement(C.a,{component:"th",scope:"row"},e.equipo1),r.a.createElement(C.a,{align:"center"},e.dojo),r.a.createElement(C.a,{align:"right",component:"th",scope:"row"},e.equipo2))})))))),r.a.createElement("div",null,r.a.createElement("h5",{align:"center"},"Ranking")),r.a.createElement("div",{className:"ContenerdorPreparacion"},r.a.createElement(B.a,{className:"TablaPreparacion",component:O.a},r.a.createElement(L.a,{className:e.table,"aria-label":"simple table"},r.a.createElement(P.a,null,r.a.createElement(q.a,null,r.a.createElement(C.a,{align:"left"},"Equipo"),r.a.createElement(C.a,{align:"center"},"Puntuacion"))),r.a.createElement(k.a,null,A.map((function(e){return r.a.createElement(q.a,{key:e.name},r.a.createElement(C.a,{component:"th",scope:"row"},e.equipo),r.a.createElement(C.a,{align:"center"},e.dojo))})))))))};var I=function(){return r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/app-sumo/Home",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(d.a,{path:"/app-sumo/MapaHospedaje",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(d.a,{path:"/app-sumo/SumoLibre",render:function(){return r.a.createElement(W,null)}}))))},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/app-sumo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/app-sumo","/service-worker.js");T?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):x(a,e)}))}}()}},[[41,1,2]]]);
//# sourceMappingURL=main.136ac08e.chunk.js.map