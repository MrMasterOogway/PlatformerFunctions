function initPlatform() {
	// Initiatize a Platform Object
	platform = {
		// Properties (STATE)
		x: 400,
		y: 250,
		w: 200,
		h: 20,
		col: GREY,
		topCol: ORANGE,
		xSpeed: 2,
		// Methods (BEHAVIOUR)
		show: function() {
			noStroke();
			// Main Platform
			fill(this.col);
			rect(this.x, this.y, this.w, this.h);
			// Platform Top
			fill(this.topCol);
			rect(this.x, this.y, this.w, 2);
		},
		move: function() {
			// Move & Bounce Horizontally
			this.x += this.xSpeed;
			if (this.x + this.w > width || this.x < 0) {
				this.xSpeed = -this.xSpeed
			}
		}
	};
}
