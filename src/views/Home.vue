<template>
  <div>
	<PresentationCard class="m-4" />
	<div class="grid grid-cols-2 gap-4 m-4">
		<ProductCard v-for="i of array" :key="i" imagePath="/img/confiture-figues.jpg" title="Figues"/>
	</div>

  </div>
</template>

<script>
import PresentationCard from '@/components/PresentationCard'
import ProductCard from '@/components/ProductCard'

export default {
  components: {
	PresentationCard,
	ProductCard
  },
  setup() {
	const array = [1,2,3,4,5,6,7,8,9,10]
	return { array }
  }
}
</script>
