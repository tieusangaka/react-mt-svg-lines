!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("react"),require("react-dom"));else if("function"==typeof define&&define.amd)define(["react","react-dom"],n);else{var e="object"==typeof exports?n(require("react"),require("react-dom")):n(t.react,t["react-dom"]);for(var a in e)("object"==typeof exports?exports:t)[a]=e[a]}}(this,function(t,n){return function(t){function n(a){if(e[a])return e[a].exports;var r=e[a]={exports:{},id:a,loaded:!1};return t[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function r(t,n){var e={};for(var a in t)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function u(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var s=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},c=function(){function t(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(n,e,a){return e&&t(n.prototype,e),a&&t(n,a),n}}(),f=e(1),l=a(f),p=e(2),h=e(3),m=e(4),y=a(m),d={ease:y["default"].Easing.Quadratic.InOut,"ease-in":y["default"].Easing.Cubic.In,"ease-out":y["default"].Easing.Cubic.Out,"ease-in-out":y["default"].Easing.Cubic.InOut,linear:y["default"].Easing.Linear.None,"step-start":y["default"].Easing.Bounce.In,"step-end":y["default"].Easing.Bounce.Out},v=function(t){function n(t){o(this,n);var e=i(this,Object.getPrototypeOf(n).call(this,t));return e._onTweenUpdate=function(){e._setStrokeDashoffset(e._pathElems,e._tweenData),e._animate()},e._onAnimComplete=function(){e.props.callback(),e._animStart=0},e.state={classKey:"",css:"",tweenElapsed:0,tweenProgress:0},e._lastAnimate="",e._lastClassKey="",e._animStart=0,e._pathElems=[],e._pathDataFrom={},e._pathDataTo={},e._tweenData={},e}return u(n,t),c(n,[{key:"componentWillMount",value:function(){this._setClassKey(this.props.animate)}},{key:"componentWillReceiveProps",value:function(t){this._setClassKey(t.animate)}},{key:"render",value:function(){var t=this,n=this.props,e=n.className,a=n.animate,o=(n.duration,n.stagger,n.timing,n.playback,n.fade,n.jsOnly,n.children),i=(n.callback,r(n,["className","animate","duration","stagger","timing","playback","fade","jsOnly","children","callback"])),u=this.state,c=u.classKey,f=u.css,p="hide"===a;return l["default"].createElement("span",s({ref:function(n){return t._svgWrapper=n},className:e+" "+c,style:{opacity:p?.01:1}},i),l["default"].createElement("style",null,f),o)}},{key:"componentDidMount",value:function(){this._animate()}},{key:"componentDidUpdate",value:function(){this._animate()}},{key:"_animate",value:function(){var t=this,n=this.props,e=n.animate,a=n.duration,r=n.stagger,o=n.timing,i=n.playback,u=n.jsOnly,c=this.state.classKey,f=e!==!1&&c!==this._lastClassKey,l=(0,h.isMsBrowser)()||u;f?!function(){t._animStart=Date.now(),t._lastClassKey=c;var n="number"==typeof e?e:0,u=parseInt(i,10)||0;l?!function(){u>0&&(u-=1),(0,h.contains)(i,"infinite")&&(u=1/0);var e=(0,h.contains)(i,"alternate");t._pathElems=t._selectPathElems();var r=t._getPathData(t._pathElems);t._pathDataFrom=r.from,t._pathDataTo=r.to,t._tweenData=s({},t._pathDataFrom),t._setStrokeDasharray(t._pathElems,t._pathDataFrom),t._setStrokeDashoffset(t._pathElems,t._tweenData);var c=new y["default"].Tween(t._tweenData).to(t._pathDataTo,a).easing(d[o]).repeat(u).yoyo(e).onUpdate(t._onTweenUpdate).onComplete(t._onAnimComplete),f=setTimeout(function(){c.start(),y["default"].update(),clearTimeout(f)},Math.max(1,n))}():!function(){var e="",o=t._getPathLengths(),i=o.length||1,s=(0,h.clamp)(r,0,100)/100,c=r>0?a/i*s:0,f=r>0?a-c*(i-1)*(2-s):a;o.forEach(function(a,r){e+=t._getPathCSS(r,a,n,c,f)});var l=setTimeout(function(){clearTimeout(l),t._onAnimComplete()},n+a*u);t.setState({css:e})}()}():this._animStart&&l&&requestAnimationFrame(y["default"].update)}},{key:"_selectPathElems",value:function(){var t=(0,p.findDOMNode)(this._svgWrapper).getElementsByTagName("svg")[0];return t?t.querySelectorAll("path"):[]}},{key:"_getPathData",value:function(t){var n=this,e={from:{},to:{}};return[].forEach.call(t,function(t,a){if(!n._hasSkipAttr(t.attributes)){var r=(0,h.trimFloat)(t.getTotalLength());e.to[a]=0,e.from[a]=r}}),e}},{key:"_hasSkipAttr",value:function(t){var n=!1;for(var e in t){var a=t[e],r=a.name,o=a.value;if(!n&&"data-mt"===r&&"skip"===o){n=!0;break}}return n}},{key:"_setStrokeDasharray",value:function(t,n){[].forEach.call(t,function(t,e){n[e]&&(t.style.strokeDasharray=n[e])})}},{key:"_setStrokeDashoffset",value:function(t,n){[].forEach.call(t,function(t,e){n[e]&&(t.style.strokeDashoffset=n[e])})}},{key:"_getPathLengths",value:function(){var t=this,n=this._selectPathElems();return[].map.call(n,function(n){return t._hasSkipAttr(n.attributes)?0:(0,h.trimFloat)(n.getTotalLength())})}},{key:"_getPathCSS",value:function(t,n,e,a,r){var o=this.state.classKey,i=this.props,u=i.timing,s=i.playback,c=i.fade,f=o+"-"+(t+1),l=n?(0,h.trimFloat)((e+a*t)/1e3):0,p=c?.01:1;return r=r?(0,h.trimFloat)(r/1e3):0,"\n      @-webkit-keyframes "+f+" {\n        0%   { stroke-dashoffset: "+n+"; opacity: "+p+"; }\n        100% { stroke-dashoffset: 0; opacity: 1; }\n      }\n      @keyframes "+f+" {\n        0%   { stroke-dashoffset: "+n+"; opacity: "+p+"; }\n        100% { stroke-dashoffset: 0; opacity: 1; }\n      }\n      ."+o+" path:nth-of-type( "+(t+1)+" ) {\n        opacity:                 0.01;\n        stroke-dasharray:        "+n+";\n        stroke-dashoffset:       "+n+";\n        -webkit-animation:       "+f+" "+r+"s "+u+" "+s+";\n        animation:               "+f+" "+r+"s "+u+" "+s+";\n        -webkit-animation-delay: "+l+"s;\n        animation-delay:         "+l+"s;\n      }\n    "}},{key:"_setClassKey",value:function(t){t!==this._lastAnimate&&(this._lastAnimate=t,this.setState({classKey:"mt-"+(0,h.shortUID)()}))}}]),n}(l["default"].Component);v.propTypes={className:f.PropTypes.string,animate:f.PropTypes.oneOfType([f.PropTypes.string,f.PropTypes.number,f.PropTypes.bool]),duration:f.PropTypes.number,stagger:f.PropTypes.number,timing:l["default"].PropTypes.oneOf(["ease","ease-in","ease-out","ease-in-out","linear","step-start","step-end"]),playback:f.PropTypes.string,fade:f.PropTypes.bool,callback:f.PropTypes.func,jsOnly:f.PropTypes.bool},v.defaultProps={className:"mt-svg",animate:!1,duration:1e3,stagger:0,timing:"ease",playback:"forwards",fade:!1,callback:function(){},jsOnly:!1},n["default"]=v},function(n,e){n.exports=t},function(t,e){t.exports=n},function(t,n){"use strict";function e(t,n,e){return Math.min(Math.max(t,n),e)}function a(t){return Math.round(100*t)/100}function r(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}function o(){return Boolean(document.documentMode||/Edge/.test(navigator.userAgent))}function i(t,n){return t.indexOf(n)>-1}Object.defineProperty(n,"__esModule",{value:!0}),n.clamp=e,n.trimFloat=a,n.shortUID=r,n.isMsBrowser=o,n.contains=i},function(t,n,e){var a,r;"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(){if("performance"in window==!1&&(window.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in window.performance==!1){var t=window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:Date.now();window.performance.now=function(){return Date.now()-t}}}();var o=o||function(){var t=[];return{getAll:function(){return t},removeAll:function(){t=[]},add:function(n){t.push(n)},remove:function(n){var e=t.indexOf(n);e!==-1&&t.splice(e,1)},update:function(n){if(0===t.length)return!1;var e=0;for(n=void 0!==n?n:window.performance.now();e<t.length;)t[e].update(n)?e++:t.splice(e,1);return!0}}}();o.Tween=function(t){var n=t,e={},a={},r={},i=1e3,u=0,s=!1,c=!1,f=!1,l=0,p=null,h=o.Easing.Linear.None,m=o.Interpolation.Linear,y=[],d=null,v=!1,g=null,_=null,w=null;for(var b in t)e[b]=parseFloat(t[b],10);this.to=function(t,n){return void 0!==n&&(i=n),a=t,this},this.start=function(t){o.add(this),c=!0,v=!1,p=void 0!==t?t:window.performance.now(),p+=l;for(var i in a){if(a[i]instanceof Array){if(0===a[i].length)continue;a[i]=[n[i]].concat(a[i])}void 0!==e[i]&&(e[i]=n[i],e[i]instanceof Array==!1&&(e[i]*=1),r[i]=e[i]||0)}return this},this.stop=function(){return c?(o.remove(this),c=!1,null!==w&&w.call(n),this.stopChainedTweens(),this):this},this.stopChainedTweens=function(){for(var t=0,n=y.length;t<n;t++)y[t].stop()},this.delay=function(t){return l=t,this},this.repeat=function(t){return u=t,this},this.yoyo=function(t){return s=t,this},this.easing=function(t){return h=t,this},this.interpolation=function(t){return m=t,this},this.chain=function(){return y=arguments,this},this.onStart=function(t){return d=t,this},this.onUpdate=function(t){return g=t,this},this.onComplete=function(t){return _=t,this},this.onStop=function(t){return w=t,this},this.update=function(t){var o,c,w;if(t<p)return!0;v===!1&&(null!==d&&d.call(n),v=!0),c=(t-p)/i,c=c>1?1:c,w=h(c);for(o in a)if(void 0!==e[o]){var b=e[o]||0,O=a[o];O instanceof Array?n[o]=m(O,w):("string"==typeof O&&(O=O.startsWith("+")||O.startsWith("-")?b+parseFloat(O,10):parseFloat(O,10)),"number"==typeof O&&(n[o]=b+(O-b)*w))}if(null!==g&&g.call(n,w),1===c){if(u>0){isFinite(u)&&u--;for(o in r){if("string"==typeof a[o]&&(r[o]=r[o]+parseFloat(a[o],10)),s){var M=r[o];r[o]=a[o],a[o]=M}e[o]=r[o]}return s&&(f=!f),p=t+l,!0}null!==_&&_.call(n);for(var k=0,I=y.length;k<I;k++)y[k].start(p+i);return!1}return!0}},o.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){var n,e=.1,a=.4;return 0===t?0:1===t?1:(!e||e<1?(e=1,n=a/4):n=a*Math.asin(1/e)/(2*Math.PI),-(e*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a)))},Out:function(t){var n,e=.1,a=.4;return 0===t?0:1===t?1:(!e||e<1?(e=1,n=a/4):n=a*Math.asin(1/e)/(2*Math.PI),e*Math.pow(2,-10*t)*Math.sin((t-n)*(2*Math.PI)/a)+1)},InOut:function(t){var n,e=.1,a=.4;return 0===t?0:1===t?1:(!e||e<1?(e=1,n=a/4):n=a*Math.asin(1/e)/(2*Math.PI),(t*=2)<1?-.5*(e*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a)):e*Math.pow(2,-10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a)*.5+1)}},Back:{In:function(t){var n=1.70158;return t*t*((n+1)*t-n)},Out:function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1},InOut:function(t){var n=2.5949095;return(t*=2)<1?.5*(t*t*((n+1)*t-n)):.5*((t-=2)*t*((n+1)*t+n)+2)}},Bounce:{In:function(t){return 1-o.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*o.Easing.Bounce.In(2*t):.5*o.Easing.Bounce.Out(2*t-1)+.5}}},o.Interpolation={Linear:function(t,n){var e=t.length-1,a=e*n,r=Math.floor(a),i=o.Interpolation.Utils.Linear;return n<0?i(t[0],t[1],a):n>1?i(t[e],t[e-1],e-a):i(t[r],t[r+1>e?e:r+1],a-r)},Bezier:function(t,n){for(var e=0,a=t.length-1,r=Math.pow,i=o.Interpolation.Utils.Bernstein,u=0;u<=a;u++)e+=r(1-n,a-u)*r(n,u)*t[u]*i(a,u);return e},CatmullRom:function(t,n){var e=t.length-1,a=e*n,r=Math.floor(a),i=o.Interpolation.Utils.CatmullRom;return t[0]===t[e]?(n<0&&(r=Math.floor(a=e*(1+n))),i(t[(r-1+e)%e],t[r],t[(r+1)%e],t[(r+2)%e],a-r)):n<0?t[0]-(i(t[0],t[0],t[1],t[1],-a)-t[0]):n>1?t[e]-(i(t[e],t[e],t[e-1],t[e-1],a-e)-t[e]):i(t[r?r-1:0],t[r],t[e<r+1?e:r+1],t[e<r+2?e:r+2],a-r)},Utils:{Linear:function(t,n,e){return(n-t)*e+t},Bernstein:function(t,n){var e=o.Interpolation.Utils.Factorial;return e(t)/e(n)/e(t-n)},Factorial:function(){var t=[1];return function(n){var e=1;if(t[n])return t[n];for(var a=n;a>1;a--)e*=a;return t[n]=e,e}}(),CatmullRom:function(t,n,e,a,r){var o=.5*(e-t),i=.5*(a-n),u=r*r,s=r*u;return(2*n-2*e+o+i)*s+(-3*n+3*e-2*o-i)*u+o*r+n}}},function(e){a=[],r=function(){return o}.apply(n,a),!(void 0!==r&&(t.exports=r))}(void 0)}])});
