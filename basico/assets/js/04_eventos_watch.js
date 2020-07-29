var app = new Vue({
	el: '#app',
	data: {
		numero: 10,
	},
	methods: {
		incrementar() {
			this.numero++;
		},
		decrementar() {
			this.numero--;
		},
	},
	/* Disparador que se acciona cuando una propiedad es actualizada */
	watch: {
		numero: function (val) {
			console.log("watch", val);
		},
	},
});
