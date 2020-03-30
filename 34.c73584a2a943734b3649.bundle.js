(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1475:function(e,t,n){var a=n(285),i=n(1476);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},o=(a(i,r),i.locals?i.locals:{});e.exports=o},1476:function(e,t,n){(t=n(286)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-histogram {\n  overflow: hidden;\n}\n',""]),e.exports=t},2209:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n.n(a),r=n(0),o=n.n(r),s=n(2188),l=n(2193),c=n(2171),d=n(2172),u=n(2204),h=n(2194),p=n(2190),m=n(117),g=n(2159);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const y={className:i.a.string,width:i.a.oneOfType([i.a.number,i.a.string]),height:i.a.oneOfType([i.a.number,i.a.string]),renderChart:i.a.func.isRequired,renderLegend:i.a.func.isRequired,position:i.a.oneOf(["top","left","bottom","right"]),legendJustifyContent:i.a.oneOf(["center","flex-start","flex-end"])},b={className:"",width:"auto",height:"auto",position:"top",legendJustifyContent:void 0},w={display:"flex",flexGrow:0,flexShrink:0,order:-1,paddingTop:"5px",fontSize:"0.9em"},x={flexGrow:1,flexShrink:1,flexBasis:"auto",position:"relative"};class v extends o.a.Component{getContainerDirection(){const{position:e}=this.props;switch(e){case"left":return"row";case"right":return"row-reverse";case"bottom":return"column-reverse";default:case"top":return"column"}}getLegendJustifyContent(){const{legendJustifyContent:e,position:t}=this.props;if(e)return e;switch(t){case"left":case"right":return"flex-start";case"bottom":return"flex-end";default:case"top":return"flex-end"}}render(){const{className:e,width:t,height:n,position:a,renderChart:i,renderLegend:r}=this.props,s="left"===a||"right"===a,l={display:"flex",flexDirection:this.getContainerDirection()};t&&(l.width=t),n&&(l.height=n);const c=f({},x);s?c.width=0:c.height=0;const d=s?"column":"row",u=f({},w,{flexDirection:d,justifyContent:this.getLegendJustifyContent()});return o.a.createElement("div",{className:"with-legend "+e,style:l},o.a.createElement("div",{className:"legend-container",style:u},r({direction:d})),o.a.createElement("div",{className:"main-container",style:c},o.a.createElement(g.a,null,e=>e.width>0&&e.height>0?i(e):null)))}}v.propTypes=y,v.defaultProps=b;var C=v;n(1475);const L={className:i.a.string,data:i.a.arrayOf(i.a.shape({key:i.a.string,values:i.a.arrayOf(i.a.number)})).isRequired,width:i.a.number.isRequired,height:i.a.number.isRequired,colorScheme:i.a.string,normalized:i.a.bool,binCount:i.a.number,opacity:i.a.number,xAxisLabel:i.a.string,yAxisLabel:i.a.string};class E extends o.a.PureComponent{render(){const{className:e,data:t,width:n,height:a,binCount:i,colorScheme:r,normalized:g,opacity:f,xAxisLabel:y,yAxisLabel:b}=this.props,w=m.CategoricalColorNamespace.getScale(r),x=t.map(e=>e.key),v=Object(p.a)({domain:x,range:x.map(e=>w(e))});return o.a.createElement(C,{className:"superset-legacy-chart-histogram "+e,width:n,height:a,position:"top",renderLegend:({direction:e})=>o.a.createElement(h.a,{scale:v,direction:e,shape:"rect",labelMargin:"0 15px 0 0"}),renderChart:e=>o.a.createElement(s.a,{width:e.width,height:e.height,ariaLabel:"Histogram",normalized:g,binCount:i,binType:"numeric",margin:{top:20,right:20},renderTooltip:({datum:e,color:t})=>o.a.createElement("div",null,o.a.createElement("strong",{style:{color:t}},e.bin0," to ",e.bin1),o.a.createElement("div",null,o.a.createElement("strong",null,"count "),e.count),o.a.createElement("div",null,o.a.createElement("strong",null,"cumulative "),e.cumulative)),valueAccessor:e=>e,theme:u.a},t.map(e=>o.a.createElement(l.a,{key:e.key,animated:!0,rawData:e.values,fill:v(e.key),fillOpacity:f})),o.a.createElement(c.a,{label:y}),o.a.createElement(d.a,{label:b}))})}}E.propTypes=L,E.defaultProps={binCount:15,className:"",colorScheme:"",normalized:!1,opacity:1,xAxisLabel:"",yAxisLabel:""};t.default=E}}]);