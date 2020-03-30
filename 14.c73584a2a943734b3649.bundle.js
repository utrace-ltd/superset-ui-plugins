(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1550:function(e,t,n){var a=n(285),r=n(1551);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},o=(a(r,i),r.locals?r.locals:{});e.exports=o},1551:function(e,t,n){(t=n(286)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.superset-legacy-chart-big-number {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,\n    Open Sans, Helvetica Neue, sans-serif;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.superset-legacy-chart-big-number.no-trendline .subheader-line {\n  padding-bottom: 0.3em;\n}\n\n.superset-legacy-chart-big-number .text-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.superset-legacy-chart-big-number .text-container .alert {\n  font-size: 11px;\n  margin: -0.5em 0 0.4em;\n  line-height: 1;\n  padding: 2px 4px 3px;\n  border-radius: 3px;\n}\n\n.superset-legacy-chart-big-number .header-line {\n  position: relative;\n  line-height: 1em;\n  font-weight: 600;\n}\n\n.superset-legacy-chart-big-number .header-line span {\n  position: absolute;\n  bottom: 0;\n}\n\n.superset-legacy-chart-big-number .subheader-line {\n  line-height: 1em;\n  padding-bottom: 0;\n  font-weight: 200;\n}\n\n.superset-legacy-chart-big-number.is-fallback-value .header-line,\n.superset-legacy-chart-big-number.is-fallback-value .subheader-line {\n  opacity: 0.5;\n}\n\n.superset-data-ui-tooltip {\n  z-index: 1000;\n  background: #000;\n}\n',""]),e.exports=t},2176:function(e,t,n){"use strict";n.r(t),n.d(t,"renderTooltipFactory",(function(){return S}));var a=n(0),r=n.n(a),i=n(1541),o=n.n(i),s=n(919),l=n(301),c=n(2191),d=n(1552),u=n(1553),h=n(1554),m=n(117),b=n(2177),p=n(927);n(1550);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const f=Object(l.c)(),y={top:4,right:4,bottom:4,left:4},x=.3,N=.125,w=.3;function S(e=p.a,t=f){return function({datum:{x:n,y:a}}){return r.a.createElement("div",{style:{padding:"4px 8px"}},e(new Date(n)),r.a.createElement("br",null),r.a.createElement("strong",null,null===a?Object(s.b)("N/A"):t(a)))}}class v extends r.a.PureComponent{constructor(...e){super(...e),g(this,"gradientId",o.a.generate())}getClassName(){const{className:e,showTrendLine:t,bigNumberFallback:n}=this.props,a="superset-legacy-chart-big-number ".concat(e," ").concat(n?"is-fallback-value":"");return t?a:"".concat(a," no-trendline")}createTemporaryContainer(){const e=document.createElement("div");return e.className=this.getClassName(),e.style.position="absolute",e.style.opacity="0",e}renderFallbackWarning(){const{bigNumberFallback:e,formatTime:t}=this.props;return e?r.a.createElement("span",{className:"alert alert-warning",role:"alert",title:Object(s.b)("Last available value seen on %s",t(e.x))},Object(s.b)("Not up to date")):null}renderHeader(e){const{bigNumber:t,formatNumber:n,width:a}=this.props,i=null===t?Object(s.b)("No data"):n(t),o=this.createTemporaryContainer();document.body.append(o);const l=Object(b.a)({text:i,maxWidth:a,maxHeight:e,className:"header-line",container:o});return document.body.removeChild(o),r.a.createElement("div",{className:"header-line",style:{fontSize:l,height:e}},i)}renderSubheader(e){const{bigNumber:t,subheader:n,width:a,bigNumberFallback:i}=this.props;let o=0;const l=Object(s.b)("No data after filtering or data is NULL for the latest time record"),c=Object(s.b)("Try applying different filters or ensuring your datasource has data");let d=n;if(null===t&&(d=i?c:l),d){const t=this.createTemporaryContainer();return document.body.append(t),o=Object(b.a)({text:d,maxWidth:a,maxHeight:e,className:"subheader-line",container:t}),document.body.removeChild(t),r.a.createElement("div",{className:"subheader-line",style:{fontSize:o,height:e}},d)}return null}renderTrendline(e){const{width:t,trendLineData:n,mainColor:a,subheader:i,startYAxisAtZero:o,formatNumber:s,formatTime:l,fromDatetime:m,timeRangeFixed:b}=this.props;if(!(null==n?void 0:n.some(e=>null!==e.y)))return null;const p={type:"timeUtc"},g=n&&[...n];if(g&&b&&m){var f;const e=null!==(f=this.props.toDatetime)&&void 0!==f?f:Date.now();g[0].x>m&&g.unshift({x:m,y:null}),g[g.length-1].x<e&&g.push({x:e,y:null}),p.domain=[m,e]}return r.a.createElement(c.a,{snapTooltipToDataX:!0,ariaLabel:"Big number visualization ".concat(i),renderTooltip:S(l,s),xScale:p,yScale:{type:"linear",includeZero:o},width:Math.floor(t),height:e,margin:y,eventTrigger:"container"},r.a.createElement(d.a,{id:this.gradientId,from:a,to:"#fff"}),r.a.createElement(u.a,{data:g,fill:"url(#".concat(this.gradientId,")"),stroke:a}),r.a.createElement(h.a,{fullHeight:!0,stroke:a,circleFill:a,circleStroke:"#fff",showHorizontalLine:!1,strokeDasharray:"5,2"}))}render(){const{showTrendLine:e,height:t,headerFontSize:n,subheaderFontSize:a}=this.props,i=this.getClassName();if(e){const e=Math.floor(w*t),o=t-e;return r.a.createElement("div",{className:i},r.a.createElement("div",{className:"text-container",style:{height:o}},this.renderFallbackWarning(),this.renderHeader(Math.ceil(n*(1-w)*t)),this.renderSubheader(Math.ceil(a*(1-w)*t))),this.renderTrendline(e))}return r.a.createElement("div",{className:i,style:{height:t}},this.renderHeader(Math.ceil(n*t)),this.renderSubheader(Math.ceil(a*t)))}}g(v,"defaultProps",{className:"",formatNumber:e=>String(e),formatTime:p.a.formatFunc,headerFontSize:x,mainColor:m.BRAND_COLOR,showTrendLine:!1,startYAxisAtZero:!0,subheader:"",subheaderFontSize:N,timeRangeFixed:!1}),t.default=v}}]);