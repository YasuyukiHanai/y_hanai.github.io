(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,h=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/y_hanai.github.io/bodypix/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},"3e6d":function(e,t,n){},"515b":function(e,t,n){e.exports=n.p+"img/galaxy.fb9de83f.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("BodyPix")],1)},i=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"bodypix"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],ref:"loading",style:{height:e.windowHeight+"px"},attrs:{id:"loading"}},[r("div",{staticClass:"sk-spinner sk-spinner-pulse"})]),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],style:{height:e.windowHeight+"px"},attrs:{id:"main"}},[r("video",{ref:"video",staticStyle:{"-moz-transform":"scaleX(-1)","-o-transform":"scaleX(-1)","-webkit-transform":"scaleX(-1)",transform:"scaleX(-1)",display:"none"},attrs:{id:"video",playsinline:""}}),r("canvas",{ref:"output",attrs:{id:"output"}}),e._m(0),r("img",{attrs:{id:"bg-img",src:n("515b"),alt:""}})]),e._m(1)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"menu"}},[n("ul",[n("li",{attrs:{id:"capture"}},[n("i",{staticClass:"material-icons"},[e._v("camera_ios")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footer"}},[n("div",{attrs:{id:"capture_result"}},[n("div",{attrs:{id:"capture_result_inner"}},[n("div",{staticClass:"capture_result_close",attrs:{id:"result_close"}}),n("div",{staticClass:"capture_result_icon"},[e._v("画像を長押しして保存！")]),n("div",{staticClass:"capture_result__img"},[n("img",{attrs:{id:"capture_result_img",src:"",alt:""}})])])])])}],c=(n("cb29"),n("4de4"),n("4160"),n("ace4"),n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a9"),n("72f7"),n("159b"),n("ddb0"),n("2b3d"),n("e587")),u=(n("96cf"),n("8726")),d=n("5479"),l={name:"BodyPix",data:function(){return{net:{},video:{},cameras:[],cameraIndex:0,changingCamera:!1,mode:"mask",loading:!0,windowHeight:0,colorScale:[[110,64,170],[143,61,178],[178,60,178],[210,62,167],[238,67,149],[255,78,125],[255,94,99],[255,115,75],[255,140,56],[239,167,47],[217,194,49],[194,219,64],[175,240,91],[135,245,87],[96,247,96],[64,243,115],[40,234,141],[28,219,169],[26,199,194],[33,176,213],[47,150,224],[65,125,224],[84,101,214],[99,81,195]]}},methods:{changeCamera:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.changingCamera){e.next=2;break}return e.abrupt("return");case 2:return this.changingCamera=!0,this.cameraIndex++,this.cameraIndex>=this.cameras.length&&(this.cameraIndex=0),e.next=7,regeneratorRuntime.awrap(this.loadVideo());case 7:case"end":return e.stop()}}),null,this)},changeMode:function(e){this.mode=e},loadBodyPix:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(d["c"]());case 2:this.net=e.sent;case 3:case"end":return e.stop()}}),null,this)},loadVideo:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.setupCamera());case 2:this.video=e.sent,this.video.play();case 4:case"end":return e.stop()}}),null,this)},setupCamera:function(){var e,t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){n.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:return e=this.$refs.video,this.stopExistingVideoCapture(),n.next=6,regeneratorRuntime.awrap(navigator.mediaDevices.getUserMedia({audio:!1,video:{deviceId:this.cameras[this.cameraIndex].deviceId}}));case 6:return t=n.sent,window.console.log("using camera: "+this.cameras[this.cameraIndex].label),e.srcObject=t,n.abrupt("return",new Promise((function(t){e.onloadedmetadata=function(){var n=e.videoWidth,r=e.videoHeight;e.width=n,e.height=r,t(e)}})));case 10:case"end":return n.stop()}}),null,this)},getVideoInputs:function(){var e,t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices){n.next=3;break}return window.console.log("enumerateDevices() not supported."),n.abrupt("return",[]);case 3:return n.next=5,regeneratorRuntime.awrap(navigator.mediaDevices.enumerateDevices());case 5:return e=n.sent,t=e.filter((function(e){return"videoinput"===e.kind})),n.abrupt("return",t);case 8:case"end":return n.stop()}}))},stopExistingVideoCapture:function(){this.video&&this.video.srcObject&&(this.video.srcObject.getTracks().forEach((function(e){e.stop()})),this.video.srcObject=null)},doBodyPix:function(){var e=this.$refs.output,t=this;function n(){var r,a,i;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:if(o.prev=0,!t.changingCamera){o.next=5;break}return o.next=4,regeneratorRuntime.awrap(t.loadBodyPix());case 4:t.changingCamera=!1;case 5:o.t0=t.mode,o.next="pixel"===o.t0?8:"mask"===o.t0?13:"pose"===o.t0?18:24;break;case 8:return o.next=10,regeneratorRuntime.awrap(t.estimatePartSegmentation());case 10:return r=o.sent,t.drawPixelatedMask(r,e,t.video),o.abrupt("break",24);case 13:return o.next=15,regeneratorRuntime.awrap(t.estimateSegmentation());case 15:return a=o.sent,t.drawMask(a,e,t.video,{r:61,g:220,b:132,a:0}),o.abrupt("break",24);case 18:return o.next=20,regeneratorRuntime.awrap(t.estimateSegmentation());case 20:return i=o.sent,t.drawMask(i,e,t.video,{r:0,g:0,b:0,a:0}),t.drawPose(i,e),o.abrupt("break",24);case 24:o.next=29;break;case 26:o.prev=26,o.t1=o["catch"](0),window.console.log("Retrying...");case 29:return o.prev=29,requestAnimationFrame(n),o.finish(29);case 32:case"end":return o.stop()}}),null,null,[[0,26,29,32]])}n()},drawPixelatedMask:function(e,t,n){var r=t.getContext("2d"),a=d["d"](e,self.colorScale);null!=a?d["a"](t,n,a,1,0,!0,10):r.clearRect(0,0,t.width,t.height)},drawMask:function(e,t,n){var r=t.getContext("2d"),a=document.createElement("canvas");a.width=n.videoWidth,t.width=n.videoWidth,a.height=n.videoHeight,t.height=n.videoHeight;var i=a.getContext("2d"),o=d["e"](e);i.putImageData(o,0,0),r.drawImage(n,0,0,t.width,t.height),r.save(),r.globalCompositeOperation="destination-out",r.drawImage(a,0,0,t.width,t.height),r.restore()},drawPose:function(e,t){var n=this,r=t.getContext("2d"),a=1,i=10,o="aqua",s=.1;e.forEach((function(e){var t=e.pose;t=d["b"](t,e.width);for(var c=0;c<t.keypoints.length;c++){var l=t.keypoints[c];if(!(l.score<s)){var h=l.position,m=h.y,p=h.x;n.drawPoint(r,m*a,p*a,i,o)}}var g=u["a"](t.keypoints,s);g.forEach((function(e){n.drawSegment(n.toTuple(e[0].position),n.toTuple(e[1].position),a,i/2,o,r)}))}))},drawPoint:function(e,t,n,r,a){e.beginPath(),e.arc(n,t,r,0,2*Math.PI),e.fillStyle=a,e.fill()},drawSegment:function(e,t,n,r,a,i){var o=Object(c["a"])(e,2),s=o[0],u=o[1],d=Object(c["a"])(t,2),l=d[0],h=d[1];i.beginPath(),i.moveTo(u*n,s*n),i.lineTo(h*n,l*n),i.lineWidth=5,i.strokeStyle=a,i.stroke()},toTuple:function(e){var t=e.y,n=e.x;return[t,n]},estimateSegmentation:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.net.segmentMultiPerson(this.video,{internalResolution:"medium",segmentationThreshold:.7,maxDetections:8,scoreThreshold:.2,nmsRadius:20,numKeypointForMatching:17,refineSteps:10}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),null,this)},estimatePartSegmentation:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.net.segmentMultiPersonParts(this.video,{flipHorizontal:!0,internalResolution:"medium",segmentationThreshold:.7,maxDetections:5,scoreThreshold:.3,nmsRadius:20,numKeypointForMatching:17,refineSteps:10}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),null,this)},isAndroid:function(){return/Android/i.test(navigator.userAgent)},isiOS:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)},isMobile:function(){return this.isAndroid()||this.isiOS()}},mounted:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return this.windowHeight=window.innerHeight,this.loading=!0,e.next=4,regeneratorRuntime.awrap(this.loadBodyPix());case 4:return e.next=6,regeneratorRuntime.awrap(this.getVideoInputs());case 6:return this.cameras=e.sent,e.next=9,regeneratorRuntime.awrap(this.loadVideo());case 9:this.loading=!1,this.doBodyPix();case 11:case"end":return e.stop()}}),null,this)}};function h(){document.getElementById("capture").addEventListener("click",(function(e){var t,n,r=document.getElementById("bg-img"),a=document.querySelector("canvas"),i=document.getElementsByTagName("video")[0];if(a&&i){var o=function(e){for(var t=e.split(","),n=atob(t[1]),r=t[0].split(":")[1].split(";")[0],a=new Uint8Array(n.length),i=0;i<n.length;i++)a[i]=n.charCodeAt(i);var o=new Blob([a],{type:r});return o},s=function(e,t){var n=window.URL||window.webkitURL,r=(n.createObjectURL(e),document.createEvent("MouseEvents"));r.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null);document.createElementNS("http://www.w3.org/1999/xhtml","a");var a=document.getElementById("capture_result");a.classList.add("is-captured"),document.getElementById("capture_result_img").src=h};t=i.videoWidth,n=i.videoHeight;var c=document.createElement("canvas");c.width=t,c.height=n;var u=c.getContext("2d");u.drawImage(r,0,0,t,n),u.drawImage(a,0,0,t,n),a.setAttribute("screenshot","width:"+t+"; height: "+n+";");var d="image/png",l="camera.png",h=c.toDataURL(d),m=o(h);s(m,l),document.addEventListener("touchmove",(function(e){e.preventDefault()}),{passive:!1});var p=function(){document.getElementById("capture_result").classList.remove("is-captured"),document.getElementById("capture_flash").classList.remove("is-capStart")};document.getElementById("result_close").onclick=function(){p()}}}))}document.onreadystatechange=function(){"complete"===document.readyState&&h()};var m=l,p=(n("6878"),n("2877")),g=Object(p["a"])(m,o,s,!1,null,null,null),v=g.exports,f={name:"app",components:{BodyPix:v}},w=f,b=(n("034f"),Object(p["a"])(w,a,i,!1,null,null,null)),x=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(x)}}).$mount("#app")},6878:function(e,t,n){"use strict";var r=n("3e6d"),a=n.n(r);a.a},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.bcce6809.js.map