<template>
  <div>
	<PresentationCard class="m-4" />

	<div class="grid grid-cols-2 gap-4 m-4">
		<ProductCard imagePath="/img/confiture-figues.jpg" title="Figues" url="/figues"/>
		<ProductCard imagePath="/img/confiture-banane.jpg" title="Banane" url="/banane"/>
		<ProductCard imagePath="/img/confiture-cerise.jpg" title="Cerise" url="/cerise"/>
		<ProductCard imagePath="/img/confiture-framboise.jpg" title="Framboise" url="/framboise"/>
		<ProductCard imagePath="/img/confiture-abricot.jpg" title="Abricot" url="/abricot"/>

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
