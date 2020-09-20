<template>
  <div>
	<PresentationCard class="m-4" />

	<div class="grid grid-cols-2 gap-4 m-4">
		<ProductCard v-for="product of products"
		:key="product.url"
		:product="product" />
		
	</div>
	<router-link to="/admin" >
		<div class="text-sm text-green-700">
			-
		</div>
	</router-link>

  </div>
</template>

<script>
import PresentationCard from '@/components/PresentationCard'
import ProductCard from '@/components/ProductCard'
import { getProducts } from '@/composables/useFirestore'

export default {
  components: {
	PresentationCard,
	ProductCard
  },
  setup() {
	const products = getProducts()

	return { products }
  }
}
</script>
