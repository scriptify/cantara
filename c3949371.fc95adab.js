(window.webpackJsonp=window.webpackJsonp||[]).push([[37,29],{142:function(e,t,a){"use strict";var n=a(0),r=a(32);t.a=function(){return Object(n.useContext)(r.a)}},143:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),s=a(17);const o=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,i=t||a,u=o.test(i),l=Object(r.useRef)(!1),m="undefined"!=typeof window&&"IntersectionObserver"in window;let f;return Object(r.useEffect)(()=>(!m&&u&&window.docusaurus.prefetch(i),()=>{m&&f&&f.disconnect()}),[i,m,u]),i&&u?c.a.createElement(s.b,Object(n.a)({},e,{onMouseEnter:()=>{l.current||(window.docusaurus.preload(i),l.current=!0)},innerRef:e=>{var t,a;m&&e&&u&&(t=e,a=()=>{window.docusaurus.prefetch(i)},f=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),a())})}),f.observe(t))},to:i})):c.a.createElement("a",Object(n.a)({},e,{href:i}))}},145:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(142);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},84:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(0),r=a.n(n),c=a(145);a(91);function s(){return r.a.createElement("div",{className:"cantara__techstack"},r.a.createElement("img",{src:Object(c.a)("img/ts.svg")}),r.a.createElement("img",{src:Object(c.a)("img/react.svg")}),r.a.createElement("img",{src:Object(c.a)("img/sls.svg")}),r.a.createElement("img",{src:Object(c.a)("img/nodejs.svg")}))}},92:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(0),r=a.n(n),c=a(143),s=a(145),o=(a(94),a(84)),i=function(){return r.a.createElement("div",{className:"cantara__wave-container"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},r.a.createElement("path",{fill:"#fff",fillOpacity:"1",d:"M0,32L40,42.7C80,53,160,75,240,80C320,85,400,75,480,64C560,53,640,43,720,85.3C800,128,880,224,960,261.3C1040,299,1120,277,1200,229.3C1280,181,1360,107,1400,69.3L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"})))};function u(){return r.a.createElement("header",{className:"cantara__hero"},r.a.createElement("div",{style:{backgroundColor:"#fff",width:"100%"}},r.a.createElement("div",{className:"cantara__hero__container"},r.a.createElement("span",{className:"badge badge--secondary"},"Alpha"),r.a.createElement("div",{className:"cantara__hero__logo"},r.a.createElement("img",{src:Object(s.a)("img/cantara.svg"),alt:"Cantara"})),r.a.createElement("h1",{className:"cantara__slogan"},"A CLI tool to create Fullstack React apps in minutes"),r.a.createElement("div",{className:"cantara__hero__buttons"},r.a.createElement(c.a,{href:Object(s.a)("docs/introduction"),className:"button button--primary button--lg"},"Get Started"),r.a.createElement(c.a,{className:"button button--secondary button--lg",href:"#features"},"Features"))),r.a.createElement(o.default,null)),r.a.createElement(i,null))}}}]);