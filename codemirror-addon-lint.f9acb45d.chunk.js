(self.webpackChunkokadashboard=self.webpackChunkokadashboard||[]).push([[2781],{3256:(t,e,n)=>{!function(t){"use strict";var e="CodeMirror-lint-markers",n="CodeMirror-lint-line-";function o(e,n,o){var i=document.createElement("div");function r(e){if(!i.parentNode)return t.off(document,"mousemove",r);i.style.top=Math.max(0,e.clientY-i.offsetHeight-5)+"px",i.style.left=e.clientX+5+"px"}return i.className="CodeMirror-lint-tooltip cm-s-"+e.options.theme,i.appendChild(o.cloneNode(!0)),e.state.lint.options.selfContain?e.getWrapperElement().appendChild(i):document.body.appendChild(i),t.on(document,"mousemove",r),r(n),null!=i.style.opacity&&(i.style.opacity=1),i}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function r(t){t.parentNode&&(null==t.style.opacity&&i(t),t.style.opacity=0,setTimeout((function(){i(t)}),600))}function a(e,n,i,a){var s=o(e,n,i);function l(){t.off(a,"mouseout",l),s&&(r(s),s=null)}var u=setInterval((function(){if(s)for(var t=a;;t=t.parentNode){if(t&&11==t.nodeType&&(t=t.host),t==document.body)return;if(!t){l();break}}if(!s)return clearInterval(u)}),400);t.on(a,"mouseout",l)}function s(t,e,n){for(var o in this.marked=[],e instanceof Function&&(e={getAnnotations:e}),e&&!0!==e||(e={}),this.options={},this.linterOptions=e.options||{},l)this.options[o]=l[o];for(var o in e)l.hasOwnProperty(o)?null!=e[o]&&(this.options[o]=e[o]):e.options||(this.linterOptions[o]=e[o]);this.timeout=null,this.hasGutter=n,this.onMouseOver=function(e){y(t,e)},this.waitingFor=0}var l={highlightLines:!1,tooltips:!0,delay:500,lintOnChange:!0,getAnnotations:null,async:!1,selfContain:null,formatAnnotation:null,onUpdateLinting:null};function u(t){var n=t.state.lint;n.hasGutter&&t.clearGutter(e),n.options.highlightLines&&c(t);for(var o=0;o<n.marked.length;++o)n.marked[o].clear();n.marked.length=0}function c(t){t.eachLine((function(e){var n=e.wrapClass&&/\bCodeMirror-lint-line-\w+\b/.exec(e.wrapClass);n&&t.removeLineClass(e,"wrap",n[0])}))}function f(e,n,o,i,r){var s=document.createElement("div"),l=s;return s.className="CodeMirror-lint-marker CodeMirror-lint-marker-"+o,i&&((l=s.appendChild(document.createElement("div"))).className="CodeMirror-lint-marker CodeMirror-lint-marker-multiple"),0!=r&&t.on(l,"mouseover",(function(t){a(e,t,n,l)})),s}function p(t,e){return"error"==t?t:e}function m(t){for(var e=[],n=0;n<t.length;++n){var o=t[n],i=o.from.line;(e[i]||(e[i]=[])).push(o)}return e}function d(t){var e=t.severity;e||(e="error");var n=document.createElement("div");return n.className="CodeMirror-lint-message CodeMirror-lint-message-"+e,"undefined"!=typeof t.messageHTML?n.innerHTML=t.messageHTML:n.appendChild(document.createTextNode(t.message)),n}function h(e,n){var o=e.state.lint,i=++o.waitingFor;function r(){i=-1,e.off("change",r)}e.on("change",r),n(e.getValue(),(function(n,a){e.off("change",r),o.waitingFor==i&&(a&&n instanceof t&&(n=a),e.operation((function(){v(e,n)})))}),o.linterOptions,e)}function g(e){var n=e.state.lint;if(n){var o=n.options,i=o.getAnnotations||e.getHelper(t.Pos(0,0),"lint");if(i)if(o.async||i.async)h(e,i);else{var r=i(e.getValue(),n.linterOptions,e);if(!r)return;r.then?r.then((function(t){e.operation((function(){v(e,t)}))})):e.operation((function(){v(e,r)}))}}}function v(t,o){var i=t.state.lint;if(i){var r=i.options;u(t);for(var a=m(o),s=0;s<a.length;++s){var l=a[s];if(l){var c=[];l=l.filter((function(t){return!(c.indexOf(t.message)>-1)&&c.push(t.message)}));for(var h=null,g=i.hasGutter&&document.createDocumentFragment(),v=0;v<l.length;++v){var C=l[v],k=C.severity;k||(k="error"),h=p(h,k),r.formatAnnotation&&(C=r.formatAnnotation(C)),i.hasGutter&&g.appendChild(d(C)),C.to&&i.marked.push(t.markText(C.from,C.to,{className:"CodeMirror-lint-mark CodeMirror-lint-mark-"+k,__annotation:C}))}i.hasGutter&&t.setGutterMarker(s,e,f(t,g,h,a[s].length>1,r.tooltips)),r.highlightLines&&t.addLineClass(s,"wrap",n+h)}}r.onUpdateLinting&&r.onUpdateLinting(o,a,t)}}function C(t){var e=t.state.lint;e&&(clearTimeout(e.timeout),e.timeout=setTimeout((function(){g(t)}),e.options.delay))}function k(t,e,n){for(var o=n.target||n.srcElement,i=document.createDocumentFragment(),r=0;r<e.length;r++){var s=e[r];i.appendChild(d(s))}a(t,n,i,o)}function y(t,e){var n=e.target||e.srcElement;if(/\bCodeMirror-lint-mark-/.test(n.className)){for(var o=n.getBoundingClientRect(),i=(o.left+o.right)/2,r=(o.top+o.bottom)/2,a=t.findMarksAt(t.coordsChar({left:i,top:r},"client")),s=[],l=0;l<a.length;++l){var u=a[l].__annotation;u&&s.push(u)}s.length&&k(t,s,e)}}t.defineOption("lint",!1,(function(n,o,i){if(i&&i!=t.Init&&(u(n),!1!==n.state.lint.options.lintOnChange&&n.off("change",C),t.off(n.getWrapperElement(),"mouseover",n.state.lint.onMouseOver),clearTimeout(n.state.lint.timeout),delete n.state.lint),o){for(var r=n.getOption("gutters"),a=!1,l=0;l<r.length;++l)r[l]==e&&(a=!0);var c=n.state.lint=new s(n,o,a);c.options.lintOnChange&&n.on("change",C),0!=c.options.tooltips&&"gutter"!=c.options.tooltips&&t.on(n.getWrapperElement(),"mouseover",c.onMouseOver),g(n)}})),t.defineExtension("performLint",(function(){g(this)}))}(n(4631))}}]);