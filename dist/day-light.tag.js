document.head.insertAdjacentHTML('beforeend', `<template id="day-light"><style>svg{width:200px;transform-origin:50% 50%;background:transparent}path{fill:orange}circle{fill:#222}</style><svg viewbox="0 0 100 100" preserveaspectratio="xMinYMin"><circle cx="50" cy="50" r="50"/><path/></svg></template>`);window.customElements.define('day-light',class extends HTMLElement{constructor(){super(),this.attachShadow({mode:'open'}).appendChild(document.querySelector('template#day-light').content.cloneNode(true));;}$(a){return this.shadowRoot.querySelector(a)}static get observedAttributes(){return['value','sunrise','sunset']}attributeChangedCallback(){var a=this.getAttribute('value')*180/100;var b=this.getTime(this.getAttribute('sunrise'));var c=this.getTime(this.getAttribute('sunset'));if(b>12&&(b=11),c<12&&(c=13),void 0,b&&c)var d=this.pieSlice(50,50,50,b*15-180,c*15-180);else var d=this.pieSlice(50,50,50,-a,a);this.$('path').setAttribute('d',d)}getTime(a){if(a){var b=a.split(':');return(b[0]*1+b[1]/60).toFixed(2)}}pieSlice(a,b,c,e,f){var g=(a,b,c,d)=>{var e=(d-90)*Math.PI/180;return{x:a+c*Math.cos(e),y:b+c*Math.sin(e)}};var h=g(a,b,c,f);var i=g(a,b,c,e);var j=f-e<=180?'0':'1';var k=['M',a,b,'L',h.x,h.y,'A',c,c,0,j,0,i.x,i.y,'L',a,b].join(' ');return k}});