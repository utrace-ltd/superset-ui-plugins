(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1539:function(e,n,i){var t=i(285),r=i(1540);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},a=(t(r,o),r.locals?r.locals:{});e.exports=a},1540:function(e,n,i){(n=i(286)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-world-map {\n  position: relative;\n}\n\n.superset-legacy-chart-world-map svg {\n  background-color: #feffff;\n}\n',""]),e.exports=n},2216:function(e,n,i){"use strict";i.r(n);var t=i(978),r=i(68),o=i.n(r),a=i(3),l=i.n(a),s=i(1537),h=i.n(s),c=i(301);i(1539);function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}const d={data:l.a.arrayOf(l.a.shape({country:l.a.string,latitude:l.a.number,longitude:l.a.number,name:l.a.string,m1:l.a.number,m2:l.a.number})),height:l.a.number,maxBubbleSize:l.a.number,showBubbles:l.a.bool},u=Object(c.c)();function g(e,n){const{data:i,height:t,maxBubbleSize:r,showBubbles:a}=n,l=o.a.select(e);l.classed("superset-legacy-chart-world-map",!0),e.style.height=t+"px",l.selectAll("*").remove();const s=i.filter(e=>e.country&&"XXX"!==e.country),c=o.a.extent(s,e=>e.m1),d=o.a.extent(s,e=>e.m2),g=o.a.scale.linear().domain([d[0],d[1]]).range([1,r]),f=o.a.scale.linear().domain([c[0],c[1]]).range(["#c7e9c0","#00441b"]),b=s.map(e=>p({},e,{radius:g(e.m2),fillColor:f(e.m1)})),m={};b.forEach(e=>{m[e.country]=e});const y=new h.a({element:e,data:b,fills:{defaultFill:"#eee"},geographyConfig:{popupOnHover:!0,highlightOnHover:!0,borderWidth:1,borderColor:"#feffff",highlightBorderColor:"#feffff",highlightFillColor:"#00749A",highlightBorderWidth:1,popupTemplate:(e,n)=>'<div class="hoverinfo"><strong>'+n.name+"</strong><br>"+u(n.m1)+"</div>"},bubblesConfig:{borderWidth:1,borderOpacity:1,borderColor:"#00749A",popupOnHover:!0,radius:null,popupTemplate:(e,n)=>'<div class="hoverinfo"><strong>'+n.name+"</strong><br>"+u(n.m2)+"</div>",fillOpacity:.5,animate:!0,highlightOnHover:!0,highlightFillColor:"#00749A",highlightBorderColor:"black",highlightBorderWidth:2,highlightBorderOpacity:1,highlightFillOpacity:.85,exitDelay:100,key:JSON.stringify}});y.updateChoropleth(m),a&&(y.bubbles(b),l.selectAll("circle.datamaps-bubble").style("fill","#00749A"))}g.displayName="WorldMap",g.propTypes=d;var f=g;n.default=Object(t.a)(f)}}]);