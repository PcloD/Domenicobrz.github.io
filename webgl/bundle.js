!function(e){var t={};function i(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);i(2);var a={MosaicoContainer:document.querySelector(".mosaicogrid"),MosaicoHeader:document.querySelector(".mosaico_header"),HeaderContainer:document.querySelector(".header"),TagSelectors:document.getElementsByClassName("TagSelector")},n=[{imgPath:"images/caustics.jpg",link:"",description:"",tags:["webgl"]},{imgPath:"images/sidescroller.jpg",link:"",description:"",tags:["webgl"]},{imgPath:"images/webglheader.jpg",link:"",description:"",tags:["webgl"]},{imgPath:"images/thematrix.jpg",link:"",description:"",tags:["webgl"]},{imgPath:"images/reflections.jpg",link:"",description:"",tags:["webgl"]},{imgPath:"images/2dsoftshadows.jpg",link:"",description:"",tags:["webgl","geometry"]},{imgPath:"images/flyingsimulator.jpg",link:"",description:"",tags:["webgl"]},{imgPath:"images/marchingcubes.jpg",link:"",description:"",tags:["webgl","geometry"]},{imgPath:"images/cpufluid.jpg",link:"",description:"",tags:["webgl"]},{imgPath:"images/audiowaves.jpg",link:"",description:"",tags:["webgl"]},{imgPath:"images/dxfparser.jpg",link:"",description:"",tags:["webgl"]},{imgPath:"images/marblenoise.jpg",link:"",description:"",tags:["webgl"]},{imgPath:"images/noisefield.jpg",link:"",description:"",tags:["webgl"]},{imgPath:"images/tdv.jpg",link:"",description:"",tags:["webgl"]},{imgPath:"images/mainpage1.jpg",link:"",description:"",tags:["webgl","geometry","misc"]},{imgPath:"images/mainpage2.jpg",link:"",description:"",tags:["webgl","geometry"]},{imgPath:"images/dofcannon.jpg",link:"",description:"",tags:["threejs"]},{imgPath:"images/threedof.jpg",link:"",description:"",tags:["threejs"]},{imgPath:"images/threetest1.jpg",link:"",description:"",tags:["threejs","misc"]},{imgPath:"images/variablelines.jpg",link:"",description:"",tags:["webgl","geometry"]},{imgPath:"images/webglclock.jpg",link:"",description:"",tags:["webgl","misc"]},{imgPath:"images/bpshadows.jpg",link:"",description:"",tags:["webgl"]},{imgPath:"images/dualcontouring.jpg",link:"",description:"",tags:["webgl","misc","geometry"]},{imgPath:"images/webglpathtracer.jpg",link:"",description:"",tags:["webgl"]},{imgPath:"images/lineint.jpg",link:"",description:"",tags:["webgl","misc"]}],r=n;function o(e){if(r=[],"all"!=e)for(var t=0;t<n.length;t++)n[t].tags.includes(e)&&r.push(n[t]);else r=n}var s,g,l=2,c=20,d=0,p=0;function m(e){!function(){for(;a.MosaicoContainer.firstChild;)a.MosaicoContainer.removeChild(a.MosaicoContainer.firstChild);h=u,d=0}(),s=c*e,g=c*(e+1),r.length<g&&(g=r.length),p=e,requestAnimationFrame(y)}var h,u=0,f=1,b=2;function y(){if(!(d+s>=g)){if(requestAnimationFrame(y),h===u){var e=document.createElement("div");e.className="mosaicogrid_cell";var t=document.createElement("a");t.setAttribute("href",r[d+s].link),h=f;var i=new Image;i.onload=function(){v(!1),h=b},i.src=r[d+s].imgPath,e.appendChild(t),t.appendChild(i),a.MosaicoContainer.appendChild(e)}h===b&&(d++,h=u)}}function v(e){var t=innerWidth-2*l;innerWidth>600&&(t=580-2*l),innerWidth>900&&(t=700),innerWidth>1200&&(t=770),innerWidth>1400&&(t=820),innerWidth>1600&&(t=1050),a.MosaicoContainer.style.width=t+"px",a.MosaicoHeader.style.width=t+"px";var i=a.MosaicoContainer.getElementsByClassName("mosaicogrid_cell"),n=[0,0];innerWidth>900&&n.push(0),innerWidth>1200&&n.push(0);for(var r=t/n.length-l,o=0;o<i.length;o++){for(var s=0,g=1;g<n.length;g++)n[g]<n[s]&&(s=g);var c=i[o],p=c.firstChild,m=p.firstChild.naturalWidth,h=p.firstChild.naturalHeight;c.style.width=r+"px";var u=Math.round(r/m*h);e?(c.style.top=n[s]+"px",c.style.left=t/n.length*s+"px",c.style.height=u+"px",c.style.opacity=1):o===d&&w(c,n[s],t/n.length*s,u),n[s]+=u+l}var f=0;for(o=0;o<n.length;o++)n[o]>f&&(f=n[o]);a.MosaicoContainer.style.height=f+"px"}function w(e,t,i,a){e.style.top=t-200+"px",e.style.left=i+"px",e.style.height=a+"px",e.style.opacity=0;var n=function(e,t,i,a){return function(){void 0!==e&&(e.style.top=t+"px",e.style.left=i+"px",e.style.height=a+"px",e.style.opacity=1)}}(e,t,i,a);setTimeout(n,50)}window.addEventListener("resize",function(){v(!0)}),window.addEventListener("keydown",function(e){"k"==e.key&&m((p+1)%2)});var j=document.querySelector(".paginator_container"),k=0;function P(){for(;j.firstChild;)j.removeChild(j.firstChild);for(var e=Math.floor((r.length-1)/c)+1,t=0;t<e;t++){var i=document.createElement("a");i.className=t==k?"paginator_page_selector active":"paginator_page_selector",i.textContent=""+(t+1),i.setAttribute("page",""+(t+1)),i.setAttribute("href","#mosaico_header"),i.addEventListener("click",function(e){var t=parseInt(e.target.getAttribute("page"))-1;if(t!==k){k=t;for(var i=0;i<j.children.length;i++)j.children[i].className="paginator_page_selector";e.target.className="paginator_page_selector active",m(k)}}),j.appendChild(i)}}!function(){for(var e=0;e<a.TagSelectors.length;e++)a.TagSelectors[e].addEventListener("click",function(e){for(var t=0;t<a.TagSelectors.length;t++)a.TagSelectors[t].className="TagSelector";e.target.className="TagSelector active",o(e.target.getAttribute("tag")),k=0,P(),m(0)});P(),m(k)}()},,function(e,t,i){}]);