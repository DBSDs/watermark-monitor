(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{4919:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>k});var r=a(7378),m=a(353),n=a(4531),o=a(6457);function l(e){let{children:t,fallback:a}=e;return(0,o.Z)()?r.createElement(r.Fragment,null,null==t?void 0:t()):null!=a?a:null}const i="heroBanner_c70D",_="buttons_lHLg",w="input_hHtI";var s=a(8944),c=a(1884);const d=function(e){const{watermark:t}=e,{siteConfig:a}=(0,m.Z)(),[n,o]=r.useState(!0),[l,d]=r.useState("");return r.createElement(r.Fragment,null,r.createElement("header",{className:(0,s.Z)("hero hero--primary",i)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},a.title),r.createElement("p",{className:"hero__subtitle"},a.tagline),r.createElement("div",{className:_},r.createElement(c.Z,{className:"button button--secondary button--lg",onClick:e=>{n?t.removeMark():t.loadMark({watermark_txt:l}),o(!n)}},n?"\u79fb\u9664\u6c34\u5370":"\u6dfb\u52a0\u6c34\u5370")))),r.createElement("div",{style:{display:"flex",justifyContent:"center",padding:"10px"}},r.createElement("label",null,"\u8bf7\u8f93\u5165\u6c34\u5370\u5185\u5bb9\uff1a"),r.createElement("input",{className:w,onChange:e=>d(e.target.value)})))};function k(){const{siteConfig:e}=(0,m.Z)();return r.createElement(n.Z,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},r.createElement(l,{fallback:r.createElement("div",null,"Loading...")},(()=>{const e=a(7539).default;return console.log(e,"dd"),e.loadMark(),r.createElement(d,{watermark:e})})))}},7539:function(e,t){!function(e){"use strict";var t=function(){return t=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var m in t=arguments[a])Object.prototype.hasOwnProperty.call(t,m)&&(e[m]=t[m]);return e},t.apply(this,arguments)},a={watermark_id:"wm_div_id",watermark_prefix:"mask_div_id",watermark_txt:"\u6d4b\u8bd5\u6c34\u5370",watermark_x:20,watermark_y:150,watermark_rows:0,watermark_cols:0,watermark_x_space:100,watermark_y_space:200,watermark_font:"\u5fae\u8f6f\u96c5\u9ed1",watermark_color:"black",watermark_fontsize:"18px",watermark_alpha:.15,watermark_width:400,watermark_height:300,watermark_angle:15,watermark_parent_width:0,watermark_parent_height:0,watermark_parent_node:"body",monitor:!0},r=a,m=window.MutationObserver,n=!1,o=new m((function(e){n?n=!1:(1===e.length&&(e[0].removedNodes[0].id===r.watermark_id||String(e[0].target.parentNode.id).includes(r.watermark_prefix))||1===e.length&&e[0].target.id===r.watermark_id||2===e.length&&e[0].target.id===r.watermark_id||e[0].removedNodes[0].id===r.watermark_id&&e.every((function(e){return!e.addedNodes.length})))&&i(r)})),l={attributeFilter:["style"],attributeOldValue:!0,attributes:!0,characterData:!0,childList:!0,subtree:!0};function i(e){r=t(t({},a),e);var m=document.getElementById(r.watermark_id);m&&m.parentNode&&m.parentNode.removeChild(m);var n=document.getElementById(r.watermark_parent_node),i=n||document.body,_=Math.max(i.scrollWidth,i.clientWidth),w=Math.max(i.scrollHeight,i.clientHeight),s=i,c=0,d=0;e&&(e.watermark_parent_width||e.watermark_parent_height)?s&&(c=s.offsetTop||0,d=s.offsetLeft||0,r.watermark_x=r.watermark_x+d,r.watermark_y=r.watermark_y+c):s&&(c=s.offsetTop||0,d=s.offsetLeft||0);var k=document.getElementById(r.watermark_id);if(!k){(k=document.createElement("div")).id=r.watermark_id,k.setAttribute("style","pointer-events: none !important; display: block !important");var h=i.children,p=Math.floor(Math.random()*(h.length-1));h[p]?i.insertBefore(k,h[p]):i.appendChild(k)}r.watermark_cols=Number((_-r.watermark_x)/(r.watermark_width+r.watermark_x_space));var u,y=Number((_-r.watermark_x-r.watermark_width*r.watermark_cols)/r.watermark_cols);r.watermark_x_space=y?r.watermark_x_space:y,r.watermark_rows=Number((w-r.watermark_y)/(r.watermark_height+r.watermark_y_space));var f,g,v,x=Number((w-r.watermark_y-r.watermark_height*r.watermark_rows)/r.watermark_rows);r.watermark_y_space=x?r.watermark_y_space:x,n?(u=r.watermark_x+r.watermark_width*r.watermark_cols+r.watermark_x_space*(r.watermark_cols-1),f=r.watermark_y+r.watermark_height*r.watermark_rows+r.watermark_y_space*(r.watermark_rows-1)):(u=d+r.watermark_x+r.watermark_width*r.watermark_cols+r.watermark_x_space*(r.watermark_cols-1),f=c+r.watermark_y+r.watermark_height*r.watermark_rows+r.watermark_y_space*(r.watermark_rows-1));for(var b=0;b<r.watermark_rows;b++){v=n?c+r.watermark_y+(w-f)/2+(r.watermark_y_space+r.watermark_height)*b:r.watermark_y+(w-f)/2+(r.watermark_y_space+r.watermark_height)*b;for(var E=0;E<r.watermark_cols;E++){g=n?d+r.watermark_x+(_-u)/2+(r.watermark_width+r.watermark_x_space)*E:r.watermark_x+(_-u)/2+(r.watermark_width+r.watermark_x_space)*E;var N=document.createElement("div"),C=document.createTextNode(r.watermark_txt);N.appendChild(C),N.id=r.watermark_prefix+b+E,N.style.transform="rotate(-"+r.watermark_angle+"deg)",N.style.visibility="",N.style.position="fixed",N.style.left="".concat(g,"px"),N.style.top="".concat(v,"px"),N.style.overflow="hidden",N.style.zIndex="9999999",N.style.opacity="".concat(r.watermark_alpha),N.style.fontSize=r.watermark_fontsize,N.style.fontFamily=r.watermark_font,N.style.color=r.watermark_color,N.style.textAlign="center",N.style.width=r.watermark_width+"px",N.style.height=r.watermark_height+"px",N.style.display="block",k.appendChild(N)}}r.monitor&&(o.observe(document.body.getRootNode(),l),o.observe(document.getElementById(r.watermark_id).getRootNode(),l))}var _={loadMark:i,removeMark:function(){n=!0;var e=document.getElementById(r.watermark_id);if(e){var t=e.parentNode;t&&t.removeChild(e),o.disconnect()}}};e.default=_,Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);