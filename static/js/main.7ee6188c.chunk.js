(this["webpackJsonpcached-react"]=this["webpackJsonpcached-react"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(4),i=n(0),o=n.n(i),c=n(15),l=(n(49),n(41)),u=(n(74),n(75),n(76),n(44)),f=Object(i.createContext)({rowData:[],orFilteredRowData:[],setOrFilteredRowData:function(){}}),s=n(42),d=n.n(s),b=n(43),j=n.n(b),O=(n(103),n(3)),m=j()(d.a),h=function(e){var t=Object(i.useState)({}),n=Object(r.a)(t,2),c=n[0],l=n[1],s=Object(i.useState)({}),d=Object(r.a)(s,2),b=d[0],j=d[1],h=o.a.useContext(f);Object(i.useEffect)((function(){h.rowData&&h.rowData.length>0&&e.columnDefs&&e.columnDefs.length>0&&w()}),[h.rowData,e.columnDefs]),Object(i.useEffect)((function(){v()}),[b]);var w=function(){var t={},n={};e.columnDefs.forEach((function(e){var a=e.field;t[a]=new Set,n[a]=[]})),h.rowData.forEach((function(e){Object.entries(e).forEach((function(e){var n=Object(r.a)(e,2),a=n[0],i=n[1];return t[a]&&t[a].add(i)}))})),Object.entries(t).forEach((function(e){var n=Object(r.a)(e,2),a=n[0],i=n[1];t[a]=Object(u.a)(i).sort()})),l(t),j(n)},v=function(){var e;e=Object.values(b).every((function(e){return 0===e.length}))?h.rowData.map((function(e){return Object(a.a)({},e)})):h.rowData.map((function(e){return Object(a.a)({},e)})).filter((function(e){return Object.entries(e).some((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];return b[n]&&b[n].some((function(e){return e===a}))}))})),h.setOrFilteredRowData(e)};return Object(O.jsxs)("form",{children:[Object(O.jsx)("h2",{children:"Or-Filter Panel"}),e.columnDefs.map((function(e){var t,n=e.field;return c[n]?Object(O.jsxs)("div",{className:"my-form-control",children:[Object(O.jsx)("label",{children:(t=n,t[0].toUpperCase()+t.slice(1))}),Object(O.jsx)(m,{multiple:!0,virtualized:!0,options:Array.from(c[n]).map((function(e){return{value:e,label:e}})),value:b[n].map((function(e){return{value:e,label:e}})),onChange:function(e){return function(e,t){var n=Object(a.a)({},b);n[t]=e.map((function(e){return e.value})),j(n)}(e,n)},searchable:!0,onSearch:function(e){return function(e,t){var n=h.rowData.filter((function(n){return n[t]&&n[t].toString().toLowerCase().indexOf(e.toLowerCase())>-1})).map((function(e){return e[t]})),r=Object(a.a)({},c);r[t]=new Set(n),l(r)}(e,n)}})]},n):null}))]})},w=function(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),n=(t[0],t[1]),a=Object(i.useState)(null),c=Object(r.a)(a,2),u=(c[0],c[1]),s=o.a.useContext(f),d=Object(i.useState)([{field:"athlete",minWidth:150},{field:"age",maxWidth:90},{field:"country",minWidth:150},{field:"year",maxWidth:90},{field:"date",minWidth:150},{field:"sport",minWidth:150},{field:"gold"},{field:"silver"},{field:"bronze"},{field:"total"}]),b=Object(r.a)(d,2),j=b[0];b[1];return Object(O.jsx)("div",{style:{width:"100%",height:"100vh"},children:Object(O.jsx)("div",{id:"myGrid",style:{height:"100%",width:"100%"},className:"ag-theme-alpine",children:Object(O.jsx)(l.AgGridReact,{defaultColDef:{flex:1,minWidth:100,filter:!0,filterParams:{newRowsAction:"keep"},menuTabs:["filterMenuTab","generalMenuTab","columnsMenuTab"]},columnDefs:j,onGridReady:function(e){n(e.api),u(e.columnApi)},rowData:s.orFilteredRowData,immutableData:!0,getRowNodeId:function(e){return e.id},sideBar:{toolPanels:[{id:"or-filtering",labelDefault:"OR-filtering",labelKey:"or-filtering",iconKey:"filter",toolPanel:"orFilterPanel",toolPanelParams:{columnDefs:j}},{id:"and-filtering",labelDefault:"AND-filtering",labelKey:"and-filtering",iconKey:"filter",toolPanel:"agFiltersToolPanel"}],defaultToolPanel:"or-filtering"},frameworkComponents:{orFilterPanel:h}})})})},v=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],c=Object(i.useState)([]),l=Object(r.a)(c,2),u=l[0],s=l[1];return Object(i.useEffect)((function(){fetch("https://www.ag-grid.com/example-assets/olympic-winners.json").then((function(e){return e.json()})).then((function(e){e.forEach((function(e,t){return e.id=t})),o(e);var t=e.map((function(e){return Object(a.a)({},e)}));s(t)})).catch((function(e){return console.log(e)}))}),[]),Object(O.jsx)(f.Provider,{value:{rowData:n,orFilteredRowData:u,setOrFilteredRowData:s},children:Object(O.jsx)(w,{})})};Object(c.render)(Object(O.jsx)(v,{}),document.querySelector("#root"))},49:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.7ee6188c.chunk.js.map