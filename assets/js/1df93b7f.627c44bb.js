"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{6198:(e,t,a)=>{a.d(t,{Z:()=>_});const r={watermark_id:"wm_div_id",watermark_prefix:"mask_div_id",watermark_txt:"\u6d4b\u8bd5\u6c34\u5370",watermark_x:20,watermark_y:20,watermark_rows:0,watermark_cols:0,watermark_x_space:20,watermark_y_space:20,watermark_font:"\u5fae\u8f6f\u96c5\u9ed1",watermark_color:"black",watermark_fontsize:"18px",watermark_alpha:.15,watermark_width:200,watermark_height:100,watermark_angle:15,watermark_parent_width:0,watermark_parent_height:0,watermark_parent_node:"body",monitor:!0};let m=r;const l=window.MutationObserver;let n=!1,o=new l((function(e){var t,a,r,l,o;n?n=!1:(1===e.length&&((null==(t=e[0].removedNodes[0])?void 0:t.id)===m.watermark_id||String((null==(a=e[0].target.parentNode)?void 0:a.id).includes(m.watermark_prefix)))||1===e.length&&(null==(r=e[0].target)?void 0:r.id)===m.watermark_id||2===e.length&&(null==(l=e[0].target)?void 0:l.id)===m.watermark_id||(null==(o=e[0].removedNodes[0])?void 0:o.id)===m.watermark_id&&e.every((e=>!e.addedNodes.length)))&&w(m)}));const i={attributeFilter:["style"],attributeOldValue:!0,attributes:!0,characterData:!0,childList:!0,subtree:!0};function w(e){m={...r,...e};let t=document.getElementById(m.watermark_id);t&&t.parentNode&&t.parentNode.removeChild(t);let a=document.getElementById(m.watermark_parent_node),l=a||document.body,n=Math.max(l.scrollWidth,l.clientWidth),w=Math.max(l.scrollHeight,l.clientHeight),_=l,s=0,d=0;e&&(e.watermark_parent_width||e.watermark_parent_height)?_&&(s=_.offsetTop||0,d=_.offsetLeft||0,m.watermark_x=m.watermark_x+d,m.watermark_y=m.watermark_y+s):_&&(s=_.offsetTop||0,d=_.offsetLeft||0);let k=document.getElementById(m.watermark_id);if(!k){k=document.createElement("div"),k.id=m.watermark_id,k.setAttribute("style","pointer-events: none !important; display: block !important");let e=l.children,t=Math.floor(Math.random()*(e.length-1));e[t]?l.insertBefore(k,e[t]):l.appendChild(k)}m.watermark_cols=Number((n-m.watermark_x)/(m.watermark_width+m.watermark_x_space));let c,h=Number((n-m.watermark_x-m.watermark_width*m.watermark_cols)/m.watermark_cols);m.watermark_x_space=h?m.watermark_x_space:h,m.watermark_rows=Number((w-m.watermark_y)/(m.watermark_height+m.watermark_y_space));let p,u,y,g=Number((w-m.watermark_y-m.watermark_height*m.watermark_rows)/m.watermark_rows);m.watermark_y_space=g?m.watermark_y_space:g,a?(c=m.watermark_x+m.watermark_width*m.watermark_cols+m.watermark_x_space*(m.watermark_cols-1),p=m.watermark_y+m.watermark_height*m.watermark_rows+m.watermark_y_space*(m.watermark_rows-1)):(c=d+m.watermark_x+m.watermark_width*m.watermark_cols+m.watermark_x_space*(m.watermark_cols-1),p=s+m.watermark_y+m.watermark_height*m.watermark_rows+m.watermark_y_space*(m.watermark_rows-1));for(let r=0;r<m.watermark_rows;r++){y=a?s+m.watermark_y+(w-p)/2+(m.watermark_y_space+m.watermark_height)*r:m.watermark_y+(w-p)/2+(m.watermark_y_space+m.watermark_height)*r;for(let e=0;e<m.watermark_cols;e++){u=a?d+m.watermark_x+(n-c)/2+(m.watermark_width+m.watermark_x_space)*e:m.watermark_x+(n-c)/2+(m.watermark_width+m.watermark_x_space)*e;let t=document.createElement("div"),l=document.createTextNode(m.watermark_txt);t.appendChild(l),t.id=m.watermark_prefix+r+e,t.style.transform="rotate(-"+m.watermark_angle+"deg)",t.style.visibility="",t.style.position="fixed",t.style.left=u+"px",t.style.top=y+"px",t.style.overflow="hidden",t.style.zIndex="9999999",t.style.opacity=""+m.watermark_alpha,t.style.fontSize=m.watermark_fontsize,t.style.fontFamily=m.watermark_font,t.style.color=m.watermark_color,t.style.textAlign="center",t.style.width=m.watermark_width+"px",t.style.height=m.watermark_height+"px",t.style.display="block",k.appendChild(t)}}m.monitor&&(o.observe(document.body.getRootNode(),i),o.observe(document.getElementById(m.watermark_id).getRootNode(),i))}const _={loadMark:w,removeMark:function(){n=!0;let e=document.getElementById(m.watermark_id);if(e){let t=e.parentNode;t&&t.removeChild(e),o.disconnect()}}}},4919:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var r=a(7378),m=a(353),l=a(4531),n=a(6457);function o(e){let{children:t,fallback:a}=e;return(0,n.Z)()?r.createElement(r.Fragment,null,null==t?void 0:t()):null!=a?a:null}const i="heroBanner_c70D",w="buttons_lHLg",_="input_hHtI";var s=a(8944),d=a(1884);const k=function(e){const{watermark:t}=e,{siteConfig:a}=(0,m.Z)(),[l,n]=r.useState(!0),[o,k]=r.useState("");return r.createElement(r.Fragment,null,r.createElement("header",{className:(0,s.Z)("hero hero--primary",i)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},a.title),r.createElement("p",{className:"hero__subtitle"},a.tagline),r.createElement("div",{className:w},r.createElement(d.Z,{className:"button button--secondary button--lg",onClick:e=>{l?t.removeMark():t.loadMark({watermark_txt:o}),n(!l)}},l?"\u79fb\u9664\u6c34\u5370":"\u6dfb\u52a0\u6c34\u5370")))),r.createElement("div",{style:{display:"flex",justifyContent:"center",padding:"10px"}},r.createElement("label",null,"\u8bf7\u8f93\u5165\u6c34\u5370\u5185\u5bb9\uff1a"),r.createElement("input",{className:_,onChange:e=>k(e.target.value)})))};function c(){const{siteConfig:e}=(0,m.Z)();return r.createElement(l.Z,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},r.createElement(o,{fallback:r.createElement("div",null,"Loading...")},(()=>{const e=a(6198).Z;return console.log(e,"w"),e.loadMark(),r.createElement(k,{watermark:e})})))}}}]);