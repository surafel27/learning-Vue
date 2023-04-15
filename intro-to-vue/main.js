const app = Vue.createApp({
	data: function() {
		return {
			cart: 0,
			product: "Socks",
			brand: "Mastery",
			description: "This is a discription",
			image: "./assets/images/socks_green.jpg",
			url: "https://vuejs.org/",
			inventory: 100,
			inStock: true,
			onSale: true,
			details: ["50% cotton", "30% wool", "20% polyester"],
			variants: [
			{id: 2234, color: 'green', image: "./assets/images/socks_green.jpg", quantity: 0},
			{id: 2235, color: 'blue', image: "./assets/images/socks_blue.jpg", quantity: 15}],
			sizes_avil: true,
			sizes: [
			{type: "smal", avil: true}, 
			{type: "mid", avil: true},
			{type: "large", avil: false}, 
			{type: "Extra Large", avil: false}]
		}
	},
	methods: {
		addToCart() {
			this.cart += 1
		},
		removeFromCart() {
			this.cart -= 1
		},
		updateImage(variantImage) {
			this.image = variantImage
		}
	},
	computed: {
		title() {
			return this.brand + ' ' + this.product
		}
	}
})