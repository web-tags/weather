document.head.insertAdjacentHTML('beforeend', `<template id="moon-phase"><style>svg{width:200px;transform-origin:50% 50%;background:transparent}#r1,#l0{fill:var(--background, #222)}#r0,#l1{fill:var(--color, #ccc)}</style><svg viewbox="0 0 100 100" preserveaspectratio="xMinYMin"><path id="r0"/><path id="r1"/><path id="l0"/><path id="l1"/></svg></template>`);
			window.customElements.define('moon-phase', class extends HTMLElement {
				constructor() {
					super();
					this.attachShadow({mode: 'open'}).appendChild(document.querySelector('template#moon-phase').content.cloneNode(true));
					
				}
				$(q){return this.shadowRoot.querySelector(q)}
				
			 	
	connectedCallback(){
		// var hemisphere = this.hasAttribute('S') ? 'S' : 'N';
		var viewPointRotation = this.hasAttribute('S') ? 180 : 0;
		var phase = this.getAttribute('value')*1;
		if(phase < 50){ // waxing
			this.$('svg').setAttribute('transform',`rotate(${viewPointRotation})`);
			var complete = phase*2;

		} else { // waning
			this.$('svg').setAttribute('transform',`rotate(${viewPointRotation+180})`);
			var complete = 200 - phase*2;
		}
		// var direction = phase < 50 ? 'waxing' : 'waning';
		var r1 = 0; var l1 = 0;
		if(complete>50) l1 = (complete-50);
		else r1 = (50-complete);
		// console.log('x',phase, complete, r1, l1);

		this.setPath('r0',50,1);
		this.setPath('r1',r1,1);

		this.setPath('l0',50,0);
		this.setPath('l1',l1,0);

		// if(this.hasAttribute('waxing')) 
		// 	this.$('svg').setAttribute('transform',"rotate(180)");
	}
	setPath(id,rad,mirror){
		this.$('#'+id).setAttribute('d',`M50,0 A${rad},50 0,0,${mirror} 50,100 z`);
	}

			});