var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello World',
		sum: 10,
		value: 5,
	},
	computed: {
		// Guarda en cache los la info
		reversedMessage: function () {
			return this.message.split('').reverse().join('');
		},
		test: function () {
			return 1 + 2;
		},
	},

	methods: {
		// no guarda cache. Ejecuta proceso cada vez que se llama al método
		calculateSum(val1, val2) {
			return val1 + val2;
		},
	},
});
