(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1488:function(e,a,t){var n=t(285),r=t(1489);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},s=(n(r,o),r.locals?r.locals:{});e.exports=s},1489:function(e,a,t){(a=t(286)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-horizon {\n  overflow: auto;\n  position: relative;\n}\n\n.superset-legacy-chart-horizon .horizon-row {\n  border-bottom: solid 1px #ddd;\n  border-top: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\n.superset-legacy-chart-horizon .horizon-row span.title {\n  position: absolute;\n  color: #333;\n  font-size: 0.8em;\n  margin: 0;\n  text-shadow: 1px 1px rgba(255, 255, 255, 0.75);\n}\n',""]),e.exports=a},2210:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),s=t.n(o),i=t(926),l=t(94);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const h=["#313695","#4575b4","#74add1","#abd9e9","#fee090","#fdae61","#f46d43","#d73027"],d={className:s.a.string,width:s.a.number,height:s.a.number,data:s.a.arrayOf(s.a.shape({y:s.a.number})).isRequired,bands:s.a.number,colors:s.a.arrayOf(s.a.string),colorScale:s.a.string,mode:s.a.string,offsetX:s.a.number,title:s.a.string,yDomain:s.a.arrayOf(s.a.number)},f={className:"",width:800,height:20,bands:h.length>>1,colors:h,colorScale:"series",mode:"offset",offsetX:0,title:"",yDomain:void 0};class p extends r.a.PureComponent{componentDidMount(){this.drawChart()}componentDidUpdate(){this.drawChart()}componentWillUnmount(){this.canvas=null}drawChart(){if(this.canvas){const{data:e,yDomain:a,width:t,height:n,bands:r,colors:o,colorScale:s,offsetX:h,mode:d}=this.props,f="change"===s?e.map(a=>c({},a,{y:a.y-e[0].y})):e,p=this.canvas.getContext("2d");p.imageSmoothingEnabled=!1,p.clearRect(0,0,t,n),p.setTransform(1,0,0,1,0,0),p.translate(.5,.5);const m=t/f.length,u=Math.floor(Math.max(0,-h/m)),g=Math.floor(Math.min(f.length,u+t/m));if(u>f.length)return;const[y,b]=a||Object(i.a)(f,e=>e.y),w=Object(l.a)().domain([0,Math.max(-y,b)]).range([0,n]);let v,S,O=!1;for(let e=0;e<r;e+=1){p.fillStyle=o[r+e],S=(e+1-r)*n,w.range([r*n+S,S]);for(let e=u;e<g;e++)v=f[e].y,v<=0?O=!0:void 0!==v&&p.fillRect(h+e*m,w(v),m+1,w(0)-w(v))}if(O){"offset"===d&&(p.translate(0,n),p.scale(1,-1));for(let e=0;e<r;e++){p.fillStyle=o[r-e-1],S=(e+1-r)*n,w.range([r*n+S,S]);for(let e=u;e<g;e++)v=f[e].y,v>=0||p.fillRect(h+e*m,w(-v),m+1,w(0)-w(-v))}}}}render(){const{className:e,title:a,width:t,height:n}=this.props;return r.a.createElement("div",{className:"horizon-row "+e},r.a.createElement("span",{className:"title"},a),r.a.createElement("canvas",{ref:e=>{this.canvas=e},width:t,height:n}))}}p.propTypes=d,p.defaultProps=f;var m=p;t(1488);const u={className:s.a.string,width:s.a.number,height:s.a.number,seriesHeight:s.a.number,data:s.a.arrayOf(s.a.shape({key:s.a.arrayOf(s.a.string),values:s.a.arrayOf(s.a.shape({y:s.a.number}))})).isRequired,bands:s.a.number,colors:s.a.arrayOf(s.a.string),colorScale:s.a.string,mode:s.a.string,offsetX:s.a.number},g={className:"",width:800,height:600,seriesHeight:20,bands:Math.floor(h.length/2),colors:h,colorScale:"series",mode:"offset",offsetX:0};class y extends r.a.PureComponent{render(){const{className:e,width:a,height:t,data:n,seriesHeight:o,bands:s,colors:l,colorScale:c,mode:h,offsetX:d}=this.props;let f;if("overall"===c){const e=n.reduce((e,a)=>e.concat(a.values),[]);f=Object(i.a)(e,e=>e.y)}return r.a.createElement("div",{className:"superset-legacy-chart-horizon "+e,style:{height:t}},n.map(e=>r.a.createElement(m,{key:e.key,width:a,height:o,title:e.key.join(", "),data:e.values,bands:s,colors:l,colorScale:c,mode:h,offsetX:d,yDomain:f})))}}y.propTypes=u,y.defaultProps=g;a.default=y}}]);