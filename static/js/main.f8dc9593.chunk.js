(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,n,t){e.exports=t(73)},39:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),l=t(16),o=t.n(l),r=(t(39),t(10)),c=t(14),m=t(1),s=t(2),d=t(4),p=t(3),u=t(5),g=t(7),h=t.n(g),b=function(e){function n(){return Object(m.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=["http://www.def.com"],n=["https://res.cloudinary.com/forestrun/image/upload/v1554636363/Foto_Forest02.jpg"],t=0;this.renew=setInterval(function(){e.length==t?t=0:(document.getElementById("bannerImage").style.backgroundImage="url("+n[t]+")",document.getElementById("bannerImage"),t++),clearInterval()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.renew)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("style",{dangerouslySetInnerHTML:{__html:h()("\n#boxed{\n    margin: 0 auto;\n}\n.App{\n\ttext-align: center;\n}\n #mags{\n    max-width: 50%;\n }\n #lkp{\n  padding-bottom: 30px;\n    margin-top: 20px;\n}\n\n    @media (max-width: 992px) {\n   #mags{\n    max-width: 70%;\n }\n      #lkp{\n    padding-bottom: 30px;\n    margin-top: 10%;\n    margin-bottom: 13%;\n}\n    }\n   @media (max-width: 800px) {\n  #mags {\n        max-width: 80%;\n}\n\n}\n\n ")}}),i.a.createElement("div",{className:"site-blocks-cover",id:"bannerImage","data-aos":"fade"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{id:"boxed",className:"row align-items-start align-items-md-center justify-content-end"},i.a.createElement("div",{className:"col-md-12 text-center text-md-center pt-5 pt-md-0",id:"lkp"},i.a.createElement("img",{id:"mags",className:"thumb-image loaded",src:"https://res.cloudinary.com/forestrun/image/upload/v1554635818/A_run_in_nature.png"}))))))}}]),n}(a.Component),f=t(18),E=t(8),v=t.n(E),x=(t(40),t(26),function(e){function n(){return Object(m.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){v()("#ccl > div").hide(),v()("#ccl > div:first-child").show();this.interval=setInterval(function(){v()("#ccl  > div:first-child").next(),v()("#ccl > div:first-child").width();v()("#ccl > div:first-child").addClass("ignoresize").fadeOut(5e3).next().fadeIn(300).end().appendTo("#ccl"),clearInterval()},1e4);v()("#ggb > div").hide(),v()("#ggb > div:first-child").show();this.intervals=setInterval(function(){v()("#ggb  > div:first-child").next(),v()("#ggb > div:first-child").width();v()("#ggb > div:first-child").addClass("ignoresize").fadeOut(5e3).next().fadeIn(300).end().appendTo("#ggb"),clearInterval()},1e4)}},{key:"componentWillMount",value:function(){clearInterval(this.interval),clearInterval(this.intervals)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),clearInterval(this.intervals)}},{key:"render",value:function(){var e,n,t,a,l,o;v()(document).on("click","#hrf",function(e){v()("body").removeClass("offcanvas-menu")}),e=window.location.hash.substr(2);var r=window.location.href.split("/")[4];return""==e?(n=i.a.createElement("li",null,i.a.createElement("a",{className:"clik"},"HOME")),o=i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row align-items-start align-items-md-center justify-content-end"},i.a.createElement("div",{className:"col-md-12 text-center text-md-center pt-5 pt-md-0",id:"lkps"},i.a.createElement("img",{className:"thumb-image loaded",src:"https://res.cloudinary.com/forestrun/image/upload/f_auto/v1554636128/t.png"})," ",i.a.createElement("div",{className:"intro-text text-center text-md-center"},i.a.createElement("p",null,i.a.createElement("a",{id:"regme",href:"#",className:"btn btn-sm btn-primary"},"DAFTAR")))))),a="",l=""):(n=i.a.createElement("li",null,i.a.createElement("a",{id:"hrf",href:"#/"},"HOME")),o=i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row align-items-start align-items-md-center justify-content-end"},i.a.createElement("div",{className:"col-md-12 text-center text-md-center pt-5 pt-md-0",id:"lkps"},i.a.createElement("img",{className:"thumb-image loaded",src:"https://res.cloudinary.com/forestrun/image/upload/f_auto/v1554636128/t.png"})," ",i.a.createElement("div",{className:"intro-text text-center text-md-center"},i.a.createElement("p",null,i.a.createElement("a",{id:"regme",href:"#",className:"btn btn-sm btn-primary"},"DAFTAR")))))),a="",l=""),"information"==e?(t=i.a.createElement("li",null,i.a.createElement("a",{className:"clik"},"INFORMATION")),o="",a="padd",l="padtops"):t=i.a.createElement("li",null,i.a.createElement("a",{id:"hrf",href:"#/information"},"INFORMATION")),"information"==e||"information"==r?(t=i.a.createElement("li",null,i.a.createElement("a",{className:"clik"},"INFORMATION")),o="",a="padd",l="padtops"):t=i.a.createElement("li",null,i.a.createElement("a",{id:"hrf",href:"#/information"},"INFORMATION")),"articles"==e||"articles-data"==r?(i.a.createElement("a",{className:"activex"},i.a.createElement("li",null,"\xa0\xa0Articles \xa0\xa0")),o="",a="padd",l="padtops"):i.a.createElement("a",Object(f.a)({id:"hrf",href:"#/articles"},"id","ppl"),i.a.createElement("li",null,"\xa0\xa0Articles \xa0\xa0")),"contact"==e?(i.a.createElement("a",{className:"activex"},i.a.createElement("li",null,"\xa0\xa0Contact \xa0\xa0")," "),o="",a="padd",l="padtops"):i.a.createElement("a",Object(f.a)({id:"hrf",href:"#/contact"},"id","ppl"),i.a.createElement("li",null,"\xa0\xa0Contact \xa0\xa0")),i.a.createElement("div",null,i.a.createElement("style",{dangerouslySetInnerHTML:{__html:h()("\n          #ccl{\n              height: 150px;\n              overflow: hidden;\n        }\n#padd{\n  padding-bottom: 20px;\n}\n         #plomini{\ndisplay: none;\n  }\n  #ploxmini{\ndisplay: none;\n  }\n   #regme{\n      margin-top: 20px;\n\n    }\n      #pg{\n       font-size: 18px;\n    padding: 8px;\n        color: #fff;\n  }\n#plo{\nmargin: 0 auto;\n    height: 150px;\n    background-image: url(https://res.cloudinary.com/forestrun/image/upload/v1554636231/Logo_Run.png);\n    width: 60%;\n    background-position: center;\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n#plox{\nmargin: 0 auto;\n    height: 150px;\n    background-image: url(https://res.cloudinary.com/forestrun/image/upload/v1554636231/Logo_Run2.png);\n    width: 100%;\n    background-position: center center;\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n        #gh{\n          margin-bottom: 30px;\n        }\n.App{\n  text-align: center;\n}\n.thumb-image{\n  max-width: 100%;\n    max-height: 100%;\n}\n#ggb{\n      width: 90%;\n    overflow: hidden;\n    height: 80px;\n    position: absolute;\n}\n  #lkps{\n    padding-bottom: 39px;\n        margin-top: 20px;\n}\na.clik{\n  color: #c2ff19 !important; \n}\n.site-mobile-menu-body ul {\n  padding-left: 0;\n  list-style: none;\n}\n.site-mobile-menu-body ul li {\n padding-bottom: 15px;\n}\n\n.site-mobile-menu-body ul li a{\n  font-size: 20px;\n  color: #fff;\n  font-family: mor;\n\n}\n.sosb {\n      width: 100%;\n      padding: 0;\n          margin-bottom: 25px;\n    }\n    .sosb li {\n      display: inline-block;\n    }\n      .sosbs {\n      width: 100%;\n      padding: 0;\n    }\n    .sosbs li {\n      display: inline-block;\n    }\n      .sosbs{\n      display: none;\n    }\n@media (max-width: 992px) {\n .btn.btn-primary {\n  \n    width: 25%;\n}\n#padtops{\n  padding-bottom: 20px;\n}\n.sosbs{\n        display: block;\n    padding-left: 30px;\n    padding-right: 10%;\n    margin-bottom: 0;\n    }\n      .sosbs li span {\n           width: 80px;\n    margin: 20px;\n    display: block;\n      }\n      #lkps{\n    padding-bottom: 30px;\n    margin-top: 10%;\n    margin-bottom: 1%;\n}\n\n}\n\n@media (max-width: 860px) {\n\n \n}\n\n    @media (max-width: 800px) {\n\n#plo{\n     height: 150px;\n   \n    width: 100%;\n    }\n#plox{\n     height: 150px;\n     width: 100%;\n    \n}\n\n\n\n\n\n #plomini{\ndisplay: block;\n    height: 80px;\n     background-image: url(https://res.cloudinary.com/forestrun/image/upload/v1554636231/Logo_Run.png);\n    width: 35%;\n    background-position: center;\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n\n     #ploxmini{\ndisplay: block;\n    height: 80px;\n       background-image: url(https://res.cloudinary.com/forestrun/image/upload/v1554636231/Logo_Run2.png);\n\n     width: 65%;\n    background-position: center;\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n  #ccl{\n    display: none;\n  }\n    #plo{\n  }\ndisplay: none;\n  }\n\n}\n\n}\n\n")}}),i.a.createElement("div",{className:"site-wrap"},i.a.createElement("div",{className:"site-mobile-menu"},i.a.createElement("div",{className:"site-mobile-menu-header"},i.a.createElement("div",{className:"site-mobile-menu-close mt-3"})),i.a.createElement("div",{className:"site-mobile-menu-body"},i.a.createElement("ul",{id:"lb"},n,t,i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"REGISTRATION")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"CONTACT")))))),i.a.createElement("header",{id:l,className:"site-navbar",role:"banner"},i.a.createElement("div",{className:"site-navbar-top"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"order-3 order-md-3 text-right"},i.a.createElement("div",{className:"site-top-icons"},i.a.createElement("ul",{className:"sosb"},i.a.createElement("li",null,i.a.createElement("span",{id:"pg",className:"icon-instagram"})),i.a.createElement("li",null,i.a.createElement("span",{id:"pg",className:"icon-twitter"})),i.a.createElement("li",null,i.a.createElement("span",{id:"pg",className:"icon-facebook-f"}))))),i.a.createElement("div",{className:"row align-items-center"},i.a.createElement("div",{className:"col-6 col-md-4 order-2 order-md-1 site-search-icon text-left"}),i.a.createElement("div",{id:"ccl",className:"col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center"},i.a.createElement("div",{id:"plo",className:"site-logo"}),i.a.createElement("div",{id:"plox",className:"site-logo"})),i.a.createElement("div",{className:"col-12 col-md-4 order-3 order-md-3 text-right"},i.a.createElement("div",{id:"rel",className:"site-top-icons"},i.a.createElement("div",{id:"ggb"},i.a.createElement("div",{id:"plomini",className:"site-logo"}),i.a.createElement("div",{id:"ploxmini",className:"site-logo"})),i.a.createElement("ul",null,i.a.createElement("li",{className:"d-inline-block d-md-none ml-md-0"},i.a.createElement("a",{href:"#",className:"site-menu-toggle js-menu-toggle"},i.a.createElement("span",{className:"icon-menu"}))))))))),i.a.createElement("nav",{id:a,className:"site-navigation text-right text-md-center",role:"navigation"},i.a.createElement("div",{id:"gh",className:"container"},i.a.createElement("ul",{className:"site-menu js-clone-nav d-none d-md-block"},n,t,i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"REGISTRATION")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"CONTACT"))))),o))}}]),n}(a.Component)),y=function(e){function n(){return Object(m.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("style",{dangerouslySetInnerHTML:{__html:h()("\n        #los{\n              max-width: 100%;\n    padding: 0;\n        }\n.App{\n\ttext-align: center;\n}\n@media (max-width: 992px) {\n \n}")}}),i.a.createElement("div",{className:"site-section block-8",id:"grn"},i.a.createElement("div",{className:"container",id:"los"},i.a.createElement("img",{className:"thumb-image loaded",src:"https://res.cloudinary.com/forestrun/image/upload/v1554635818/Bagan_Hijau.jpg"}))))}}]),n}(a.Component),k=function(e){function n(){return Object(m.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("style",{dangerouslySetInnerHTML:{__html:h()("")}}),i.a.createElement("div",{className:"site-section block-8"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-lg-12 text-center pl-md-5"},i.a.createElement("h2",{id:"pbb",className:"text-black h1 site-section-heading text-center"},"About"),i.a.createElement("p",{className:"ops"},"Cikole Forest Run adalah rangkaian sport tourism dan wisata alam yang diselenggarakan oleh Wievent yang bekerjasama dengan perum Perhutani Divre Jabar Banten. Kegiatan yang terdiri dari camping ground, olahraga lari marathon, dan edukasi akan hutan Cikole, serta manfaat ekologi masyarakat dalam pemanfaatan dan pelestarian alam hutan di Cikole, Lembang.")))))}}]),n}(a.Component),w=function(e){function n(){return Object(m.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("style",{dangerouslySetInnerHTML:{__html:h()("\n        #mmg{\n          max-width: 50%;\n          margin-bottom: 40px;\n        }\n          .obb{\n        margin: 0 5%;\n    font-family: mor;\n    color: #fff;\n        font-size: 16px;\n    letter-spacing: .3px;\n  }\n   #lok{\n      padding-top: 0 !important;\n      margin-top:  0 !important;\n    }\n.App{\n\ttext-align: center;\n}\n@media (max-width: 992px) {\n         .obb{\n       font-size: 10px;\n  }\n #mmg {\n    max-width: 70%;\n }\n}")}}),i.a.createElement("footer",{className:"site-footer border-top"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{id:"lok",className:"row pt-5 mt-5 text-center"},i.a.createElement("ul",{className:"sosb"},i.a.createElement("li",null,i.a.createElement("span",{id:"pg",className:"icon-instagram"})),i.a.createElement("li",null,i.a.createElement("span",{id:"pg",className:"icon-twitter"})),i.a.createElement("li",null,i.a.createElement("span",{id:"pg",className:"icon-facebook-f"}))),i.a.createElement("div",{className:"col-md-12"},i.a.createElement("img",{id:"mmg",className:"thumb-image loaded",src:"https://res.cloudinary.com/forestrun/image/upload/v1554636230/logo_sponsor.png"}),i.a.createElement("div",{className:"obb"},"Copyright \xa92019 by Cikole Forest Run. All rights reserved. | Design by Larva7 Studio"))))))}}]),n}(a.Component),N=function(e){function n(){return Object(m.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("style",{dangerouslySetInnerHTML:{__html:h()("\n      \n \n   \n    .ppt{\n        margin-top: 50px !important;\n    }\n    #grn{\n      padding: 0;\n      /*background-color: #B8FF45;*/\n    }\n    .text{\n      width: 100%;\n    }\n    .text-uppercase-p{\n        font-size: 60px;\n    font-family: mor;\n    font-style: italic;\n    font-weight: bold;\n    color: #2B315E;\n    }\n   \n  #ttx h2{\n    font-size: 30px;\n    font-family: mor;\n\n     font-weight: bold !important;\n    color: #2B315E;\n  }\n\n  #pbb{\n       \n        font-size: 30px;\n    color: #25262a;\n    position: relative;\n    font-weight: bold;\n    font-family: mor;\n    text-transform: uppercase;\n  }\n \n.tight {\n   font-size: 25px;\n    line-height: 0.5em;\n    color: #fff;\n    padding: 15px;\n    letter-spacing: 1.5px;\n    font-family: mor;\n    font-weight: bold !important;\n    background-color: #2B315E;\n}\n    #ttx{margin: 0 50px;\n\n    }\n    .ops{\n          font-family: mol;\n       color: #25262a;\n    margin: 80px 8%;\n    font-weight: 600;\n    margin-bottom: 0;\n    }\n \n#krow{\n      margin: 0 50px;\n}\n#krows{\n         margin: 30px 25%;\n    margin-right: 29%;\n}\n\n \n#rel{\n  position: relative;\n}\n    #gls{\n          color: #2B315E;\n    font-family: mor;\n    font-weight: 900;\n    letter-spacing: 2px;\n    margin-bottom: 50px !important;\n    }\n \n\n    @media (max-width: 992px) {\n\n\n.site-section-heading.text-center:before {\n    \n    width: 10%;\n  \n}\n\n#pbb{\n  font-size: 25px;\n}\n\n\n.ops {\n   \n    margin-top: 100px;\n}\n\n \n      .tight {\n   font-size: 18px;\n     \n}\n      .site-blocks-cover, .site-blocks-cover .row{\n        min-height: 200px;\n      }\n        \n      #krow{\n      margin: 0;\n}\n.obb {\n     margin: 0;\n}\n#krows{\n         margin: 0;\n    margin-right: 0;\n    display: none;\n}\n  #ttx{margin: 0;\n\n    }\n    .site-section {\n    padding: 3.5em 0;\n}\n\n      .h1, h1 {\n    font-size: 1.5rem;\n}\n\n \n}\n@media (max-width: 860px) {\n\n \n}\n\n    @media (max-width: 800px) {\n\n\n}\n\n\n")}}),i.a.createElement(x,null),i.a.createElement(b,null),i.a.createElement(y,null),i.a.createElement(k,null),i.a.createElement(w,null))}}]),n}(a.Component),O=function(e){function n(){return Object(m.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=window.location.hash.substr(2);/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e)&&(window.location.href="/")}},{key:"render",value:function(){var e=window.location.hash.substr(2);if(!/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e)){return i.a.createElement("div",null,i.a.createElement("style",{dangerouslySetInnerHTML:{__html:h()("\n.App{\n\ttext-align: center;\n}\n@media (max-width: 992px) {\n \n}")}}),i.a.createElement("h1",{className:"App"},"Sorry page not found"))}window.location.href="/"}}]),n}(a.Component),j=(t(62),t(31)),I=function(e){function n(){return Object(m.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){window.location.pathname;return i.a.createElement("div",null,i.a.createElement("style",{dangerouslySetInnerHTML:{__html:h()("\n#magsx{\n\t    margin-bottom: 80px;\n}\n#jkm {\n\tmax-width: 980px;\n}\n#kkti{\n\n    padding-top: 90px;\n    font-weight: 800;\n    font-family: mol;\n    color: #212D61;\n        padding-bottom: 10px;\n}\n\n.pswp--animated-in .pswp__bg, .pswp--animated-in .pswp__zoom-wrap {\n    -webkit-transition: none;\n    transition: none!important;\n}\n.pswp--animate_opacity {\n    opacity: 0.001;\n    will-change: opacity;\n    transition: none!important;\n}\n    .pswp__button--share{\n  display: none;\n }\n    @media (max-width: 992px) {\n\n\n#kkti {\n    padding-top: 50px;\n     \n    font-size: 13px;\n     \n    padding-bottom: 30px;\n}\n\n\n}\n\n\n    \t\t")}}),i.a.createElement("div",{id:"jkm",className:"container"},i.a.createElement("p",{id:"kkti",className:"ops"},"Cikole Forest Run adalah rangkaian sport tourism dan wisata alam yang diselenggarakan oleh Wievent yang bekerjasama dengan perum Perhutani Divre Jabar Banten. Kegiatan yang terdiri dari camping ground, olahraga lari marathon, dan edukasi akan hutan Cikole, serta manfaat ekologi masyarakat dalam pemanfaatan dan pelestarian alam hutan di Cikole, Lembang."),i.a.createElement(j.PhotoSwipeGallery,{items:[{src:"https://res.cloudinary.com/forestrun/image/upload/v1554636282/Medal.jpg",thumbnail:"https://res.cloudinary.com/forestrun/image/upload/v1554636282/Medal.jpg",w:3e3,h:1876}],options:{bgOpacity:1,showHideOpacity:!0,closeOnScroll:!1,preloaderEl:!0,showAnimationDuration:0,hideAnimationDuration:0},thumbnailContent:function(e){return i.a.createElement("img",{id:"magsx",isOpen:"true",itemprop:"contentUrl",className:"thumb-image loaded",src:"https://res.cloudinary.com/forestrun/image/upload/v1554636282/Medal.jpg"})}})))}}]),n}(a.Component),_=function(e){function n(){return Object(m.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(x,null),i.a.createElement(I,null),i.a.createElement(w,null))}}]),n}(a.Component);var C=function(){return i.a.createElement(r.a,null,i.a.createElement("div",null,i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/",exact:!0,component:N}),i.a.createElement(c.a,{path:"/information",component:_}),i.a.createElement(c.a,{path:"/information/:id",component:_}),i.a.createElement(c.a,{component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.f8dc9593.chunk.js.map