(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,h=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/bodypix-sample/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},"3e6d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("BodyPix")],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"bodypix"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],ref:"loading",style:{height:e.windowHeight+"px"},attrs:{id:"loading"}},[n("div",{staticClass:"sk-spinner sk-spinner-pulse"})]),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],style:{height:e.windowHeight+"px"},attrs:{id:"main"}},[n("video",{ref:"video",staticStyle:{"-moz-transform":"scaleX(-1)","-o-transform":"scaleX(-1)","-webkit-transform":"scaleX(-1)",transform:"scaleX(-1)",display:"none"},attrs:{id:"video",playsinline:""}}),n("canvas",{ref:"output",attrs:{id:"output"}}),n("div",{attrs:{id:"menu"}},[n("ul",[n("li",{on:{click:e.changeCamera}},[n("i",{staticClass:"material-icons"},[e._v("flip_camera_ios")])])])])]),n("div",{attrs:{id:"footer"}})])},s=[],c=(n("cb29"),n("4de4"),n("4160"),n("d3b7"),n("159b"),n("e587")),u=(n("96cf"),n("8726")),d=n("5479"),l={name:"BodyPix",data:function(){return{net:{},video:{},cameras:[],cameraIndex:0,changingCamera:!1,mode:"mask",loading:!0,windowHeight:0,colorScale:[[110,64,170],[143,61,178],[178,60,178],[210,62,167],[238,67,149],[255,78,125],[255,94,99],[255,115,75],[255,140,56],[239,167,47],[217,194,49],[194,219,64],[175,240,91],[135,245,87],[96,247,96],[64,243,115],[40,234,141],[28,219,169],[26,199,194],[33,176,213],[47,150,224],[65,125,224],[84,101,214],[99,81,195]]}},methods:{changeCamera:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.changingCamera){e.next=2;break}return e.abrupt("return");case 2:return this.changingCamera=!0,this.cameraIndex++,this.cameraIndex>=this.cameras.length&&(this.cameraIndex=0),e.next=7,regeneratorRuntime.awrap(this.loadVideo());case 7:case"end":return e.stop()}}),null,this)},changeMode:function(e){this.mode=e},loadBodyPix:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(d["c"]());case 2:this.net=e.sent;case 3:case"end":return e.stop()}}),null,this)},loadVideo:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.setupCamera());case 2:this.video=e.sent,this.video.play();case 4:case"end":return e.stop()}}),null,this)},setupCamera:function(){var e,t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){n.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:return e=this.$refs.video,this.stopExistingVideoCapture(),n.next=6,regeneratorRuntime.awrap(navigator.mediaDevices.getUserMedia({audio:!1,video:{deviceId:this.cameras[this.cameraIndex].deviceId}}));case 6:return t=n.sent,window.console.log("using camera: "+this.cameras[this.cameraIndex].label),e.srcObject=t,n.abrupt("return",new Promise((function(t){e.onloadedmetadata=function(){var n=e.videoWidth,r=e.videoHeight;e.width=n,e.height=r,t(e)}})));case 10:case"end":return n.stop()}}),null,this)},getVideoInputs:function(){var e,t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices){n.next=3;break}return window.console.log("enumerateDevices() not supported."),n.abrupt("return",[]);case 3:return n.next=5,regeneratorRuntime.awrap(navigator.mediaDevices.enumerateDevices());case 5:return e=n.sent,t=e.filter((function(e){return"videoinput"===e.kind})),n.abrupt("return",t);case 8:case"end":return n.stop()}}))},stopExistingVideoCapture:function(){this.video&&this.video.srcObject&&(this.video.srcObject.getTracks().forEach((function(e){e.stop()})),this.video.srcObject=null)},doBodyPix:function(){var e=this.$refs.output,t=this;function n(){var r,i,a;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:if(o.prev=0,!t.changingCamera){o.next=5;break}return o.next=4,regeneratorRuntime.awrap(t.loadBodyPix());case 4:t.changingCamera=!1;case 5:o.t0=t.mode,o.next="pixel"===o.t0?8:"mask"===o.t0?13:"pose"===o.t0?18:24;break;case 8:return o.next=10,regeneratorRuntime.awrap(t.estimatePartSegmentation());case 10:return r=o.sent,t.drawPixelatedMask(r,e,t.video),o.abrupt("break",24);case 13:return o.next=15,regeneratorRuntime.awrap(t.estimateSegmentation());case 15:return i=o.sent,t.drawMask(i,e,t.video,{r:61,g:220,b:132,a:0}),o.abrupt("break",24);case 18:return o.next=20,regeneratorRuntime.awrap(t.estimateSegmentation());case 20:return a=o.sent,t.drawMask(a,e,t.video,{r:0,g:0,b:0,a:0}),t.drawPose(a,e),o.abrupt("break",24);case 24:o.next=29;break;case 26:o.prev=26,o.t1=o["catch"](0),window.console.log("Retrying...");case 29:return o.prev=29,requestAnimationFrame(n),o.finish(29);case 32:case"end":return o.stop()}}),null,null,[[0,26,29,32]])}n()},drawPixelatedMask:function(e,t,n){var r=t.getContext("2d"),i=d["d"](e,self.colorScale);null!=i?d["a"](t,n,i,1,0,!0,10):r.clearRect(0,0,t.width,t.height)},drawMask:function(e,t,n){var r=t.getContext("2d"),i=document.createElement("canvas");i.width=n.videoWidth,t.width=n.videoWidth,i.height=n.videoHeight,t.height=n.videoHeight;var a=i.getContext("2d"),o=d["e"](e);a.putImageData(o,0,0),r.drawImage(n,0,0,t.width,t.height),r.save(),r.globalCompositeOperation="destination-out",r.drawImage(i,0,0,t.width,t.height),r.restore()},drawPose:function(e,t){var n=this,r=t.getContext("2d"),i=1,a=10,o="aqua",s=.1;e.forEach((function(e){var t=e.pose;t=d["b"](t,e.width);for(var c=0;c<t.keypoints.length;c++){var l=t.keypoints[c];if(!(l.score<s)){var h=l.position,p=h.y,g=h.x;n.drawPoint(r,p*i,g*i,a,o)}}var m=u["a"](t.keypoints,s);m.forEach((function(e){n.drawSegment(n.toTuple(e[0].position),n.toTuple(e[1].position),i,a/2,o,r)}))}))},drawPoint:function(e,t,n,r,i){e.beginPath(),e.arc(n,t,r,0,2*Math.PI),e.fillStyle=i,e.fill()},drawSegment:function(e,t,n,r,i,a){var o=Object(c["a"])(e,2),s=o[0],u=o[1],d=Object(c["a"])(t,2),l=d[0],h=d[1];a.beginPath(),a.moveTo(u*n,s*n),a.lineTo(h*n,l*n),a.lineWidth=5,a.strokeStyle=i,a.stroke()},toTuple:function(e){var t=e.y,n=e.x;return[t,n]},estimateSegmentation:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.net.segmentMultiPerson(this.video,{internalResolution:"medium",segmentationThreshold:.7,maxDetections:8,scoreThreshold:.2,nmsRadius:20,numKeypointForMatching:17,refineSteps:10}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),null,this)},estimatePartSegmentation:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.net.segmentMultiPersonParts(this.video,{flipHorizontal:!0,internalResolution:"medium",segmentationThreshold:.7,maxDetections:5,scoreThreshold:.3,nmsRadius:20,numKeypointForMatching:17,refineSteps:10}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),null,this)},isAndroid:function(){return/Android/i.test(navigator.userAgent)},isiOS:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)},isMobile:function(){return this.isAndroid()||this.isiOS()}},mounted:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return this.windowHeight=window.innerHeight,this.loading=!0,e.next=4,regeneratorRuntime.awrap(this.loadBodyPix());case 4:return e.next=6,regeneratorRuntime.awrap(this.getVideoInputs());case 6:return this.cameras=e.sent,e.next=9,regeneratorRuntime.awrap(this.loadVideo());case 9:this.loading=!1,this.doBodyPix();case 11:case"end":return e.stop()}}),null,this)}},h=l,p=(n("6878"),n("2877")),g=Object(p["a"])(h,o,s,!1,null,null,null),m=g.exports,f={name:"app",components:{BodyPix:m}},v=f,w=(n("034f"),Object(p["a"])(v,i,a,!1,null,null,null)),x=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(x)}}).$mount("#app")},6878:function(e,t,n){"use strict";var r=n("3e6d"),i=n.n(r);i.a},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.f883aadf.js.map