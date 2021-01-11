(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dzr-album-releases/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0dee":function(e,t,r){"use strict";var n=r("5ea9"),a=r.n(n);a.a},"1f35":function(e,t,r){"use strict";var n=r("924c"),a=r.n(n);a.a},"265c":function(e,t,r){"use strict";var n=r("7352"),a=r.n(n);a.a},"31f3":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{attrs:{id:"dzr-album-releases",role:"main"}},[r("router-view")],1)},s=[],o={name:"App"},i=o,c=(r("5c0b"),r("2877")),l=Object(c["a"])(i,a,s,!1,null,null,null),u=l.exports,d=r("9483");Object(d["a"])("".concat("/dzr-album-releases/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"releases"}},[r("div",{style:e.progress,attrs:{id:"progress-bar"}}),e._l(e.releaseDatesDisplay,(function(t,n){return r("release-date",{key:n,attrs:{albums:t,date:n},on:{intersect:e.setDate}})})),e.loading?r("loader"):e._e()],2)},m=[],h=(r("99af"),r("4de4"),r("c740"),r("4160"),r("caad"),r("13d5"),r("fb6a"),r("a434"),r("4fad"),r("c1f9"),r("b64b"),r("ac1f"),r("2532"),r("1276"),r("159b"),r("f3f3")),v=r("d0af"),b=r("54f8"),g=r("d0ff"),y=(r("96cf"),r("c964")),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"release-date",class:{today:0===e.releasedSince(e.date)}},[r("h3",[r("time",{staticClass:"date",attrs:{datetime:e.date}},[e._v(e._s(e.moment(e.date)))])]),r("div",{staticClass:"albums"},e._l(e.albums,(function(e){return r("album",{key:e.id,attrs:{album:e}})})),1)])},w=[],k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"album",style:e.cssVars},[r("a",{staticClass:"album-cover",attrs:{href:e.appLink(e.album.link),target:"_blank"}},[r("img",{staticClass:"cover",attrs:{src:e.cover,alt:e.album.title,loading:"lazy",width:e.coverSize+"px",height:e.coverSize+"px"}}),r("span",{staticClass:"album-type badge"},[e._v(e._s(e.album.record_type))])]),r("h4",{staticClass:"album-title"},[r("a",{attrs:{href:e.appLink(e.album.link),target:"_blank"}},[e._v(e._s(e.album.title))])]),r("div",{staticClass:"album-artists"},e._l(e.album.artists,(function(t){return r("a",{key:t.id,staticClass:"artist",attrs:{href:e.appLink(t.link),target:"_blank"}},[e._v(e._s(t.name))])})),0)])},O=[],D={name:"Album",props:{album:Object},data:function(){return{coverSize:120}},methods:{appLink:function(e){return"".concat(e,"?app_id=").concat(this.getAppId)}},computed:{cover:function(){return""!==this.album.cover?this.album.cover:"https://api.deezer.com/album/".concat(this.album.id,"/image")},cssVars:function(){return{"--cover-size":"".concat(this.coverSize,"px")}}}},j=D,A=(r("1f35"),Object(c["a"])(j,k,O,!1,null,"29b2de16",null)),x=A.exports,S={name:"ReleaseDate",props:{albums:Array,date:String},data:function(){return{locale:window.navigator.userLanguage||window.navigator.language,releasedAround:7,observer:null}},methods:{releasedSince:function(e){return Math.round((new Date(e)-(new Date).setHours(0,0,0,0))/864e5)},moment:function(e){var t=this.releasedSince(e);return t>=this.releasedAround||t<=-this.releasedAround?new Intl.DateTimeFormat(this.locale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}).format(Date.parse(e)):new Intl.RelativeTimeFormat(this.locale,{numeric:"auto"}).format(t,"day")}},mounted:function(){var e=this;this.observer=new IntersectionObserver((function(t){var r=Object(v["a"])(t,1),n=r[0],a=n.target,s=n.isIntersecting;s&&(e.$emit("intersect",a.querySelector("time").dateTime),e.observer.disconnect())})),this.observer.observe(this.$el)},destroyed:function(){this.observer.disconnect()},components:{Album:x}},R=S,z=(r("265c"),Object(c["a"])(R,_,w,!1,null,"e5dee338",null)),T=z.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"loader"}},[r("div",{attrs:{id:"loader-covers"}},[r("div",{staticClass:"loader-cover",attrs:{id:"cover-1"}}),r("div",{staticClass:"loader-cover",attrs:{id:"cover-2"}}),r("div",{staticClass:"loader-cover",attrs:{id:"cover-3"}}),r("div",{staticClass:"loader-cover",attrs:{id:"cover-4"}})])])}],I={name:"Loader"},$=I,L=(r("0dee"),Object(c["a"])($,C,E,!1,null,"be99b5aa",null)),M=L.exports,P=r("8951"),N=r.n(P),J={name:"Releases",data:function(){return{loading:!1,displayDate:null,releaseDates:{},loadingArtists:{},totalArtists:0}},methods:{setDate:function(e){var t=new Date(e);t.setMonth(t.getMonth()-1);var r=t.getTimezoneOffset();t=new Date(t.getTime()-60*r*1e3),this.displayDate=t.toISOString().split("T")[0]},addToReleases:function(e){var t=this;this.releaseDates[e.release_date]||(this.releaseDates[e.release_date]=[],this.releaseDates=Object.keys(this.releaseDates).sort().reverse().reduce((function(e,r){return e[r]=t.releaseDates[r],e}),{}));var r=this.releaseDates[e.release_date].findIndex((function(t){return t.id===e.id}));r>=0?this.releaseDates[e.release_date][r].artists=this.releaseDates[e.release_date][r].artists.concat(e.artists):this.releaseDates[e.release_date].push(e),this.releaseDates[e.release_date].sort((function(e,t){if(e.record_type===t.record_type)return e.id-t.id;var r=["album","compile","ep","single"],n=r.findIndex((function(t){return t===e.record_type}));return n===r.length-1?1:0===n||r.slice(n+1).includes(t.record_type)?-1:0}))},getAlbumsReleases:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,N.a.setAccessToken(JSON.parse(localStorage.accessToken).token),t.next=4,N.a.getArtists();case 4:r=t.sent,e.totalArtists=r.length,e.loadingArtists=Object(g["a"])(r),n=[];while(r.length)n.push(r.splice(0,N.a.batchLength));n.forEach(function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(r){var n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.getArtistsReleases(r);case 2:for(s in n=t.sent,e.loading=!1,a=function(t){var a,s=Object(b["a"])(n[t].data);try{for(s.s();!(a=s.n()).done;){var o=a.value;o.artists=[r[t]],e.addToReleases(o)}}catch(i){s.e(i)}finally{s.f()}e.loadingArtists=e.loadingArtists.filter((function(e){return e.id!==r[t].id}))},n)a(s);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 10:case"end":return t.stop()}}),t)})))()}},computed:{progress:function(){return"--progress-width:".concat((100-100*this.loadingArtists.length/this.totalArtists)%100,"%;")},releaseDatesDisplay:function(){var e=this,t=Object.entries(this.releaseDates),r=Object.fromEntries(t.splice(0,10)),n=Object.fromEntries(t.filter((function(t){var r=Object(v["a"])(t,2),n=r[0];r[1];return n>=e.displayDate})));return Object(h["a"])(Object(h["a"])({},r),n)}},mounted:function(){this.getAlbumsReleases()},components:{ReleaseDate:T,Loader:M}},F=J,Z=(r("9d69"),Object(c["a"])(F,p,m,!1,null,"5daccca2",null)),q=Z.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"login"}},[r("div",{attrs:{id:"dz-root"}}),r("h1",[e._v("Deezer Album Releases")]),r("h2",[e._v("Get your favorite artist album releases")]),r("p",[e._v(" Connect to your Deezer account to get your favorite artist album releases. ")]),r("button",{attrs:{role:"button"},on:{click:e.login}},[e._v("Connect to Deezer")])])},V=[],G={name:"Login",methods:{login:function(){var e=this;DZ.login((function(t){var r=t.authResponse,n=t.authInitDate;r.accessToken&&(localStorage.accessToken=JSON.stringify({token:r.accessToken,expire:Math.floor(n/1e3+r.expire)}),e.$router.push("/"))}),{perms:"basic_access"})},init:function(){DZ.init({appId:this.getAppId,channelUrl:"".concat(document.location.origin).concat(document.location.pathname,"channel.html"),player:{onload:function(e){console.log("DZ.init",e)}}})}},mounted:function(){var e=this;window.dzAsyncInit=function(){e.init()},function(){var e=document.createElement("script");e.src="https://e-cdns-files.dzcdn.net/js/min/dz.js",e.async=!0,document.getElementById("dz-root").appendChild(e)}()}},H=G,U=Object(c["a"])(H,B,V,!1,null,null,null),K=U.exports;n["a"].use(f["a"]);var Q=function(e,t,r){!localStorage.accessToken||JSON.parse(localStorage.accessToken).expire<Math.floor(Date.now()/1e3)?r("/login"):r()},W=new f["a"]({base:"/dzr-album-releases/",routes:[{path:"/",component:q,beforeEnter:Q},{path:"/login",component:K}]}),X=W;n["a"].config.productionTip=!1,n["a"].mixin({data:function(){return{get getAppId(){return"smndhm.github.io"===document.location.host?255742:153461}}}}),new n["a"]({router:X,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"5ea9":function(e,t,r){},7352:function(e,t,r){},8951:function(e,t,r){r("99af"),r("d81d"),r("d3b7");var n=r("12c0");r("96cf");var a,s=r("9705"),o=r("f2e8"),i=r("72bf"),c=2e3;t.batchLength=50,t.setAccessToken=function(e){a=e},t.getArtists=s(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l("user/me/artists",{limit:c});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),t.getArtistsReleases=function(){var e=s(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=JSON.stringify(t.map((function(e){return{relative_url:"artist/".concat(e.id,"/albums"),params:{limit:c}}}))),e.next=3,l("batch",{methods:r});case 3:return n=e.sent,a=n.batch_result,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var l=function(){var e=s(regeneratorRuntime.mark((function e(t,r){var s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s="https://api.deezer.com/",c={access_token:a,output:"jsonp"},e.abrupt("return",new Promise((function(e,a){o("".concat(s).concat(t,"?").concat(i.stringify(n(n({},c),r))),(function(t,r){t&&a(t),e(r)}))})));case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},"924c":function(e,t,r){},"9c0c":function(e,t,r){},"9d69":function(e,t,r){"use strict";var n=r("31f3"),a=r.n(n);a.a}});
//# sourceMappingURL=app.41cc040b.js.map