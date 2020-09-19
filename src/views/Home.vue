<template>
  <div>
	<PresentationCard class="m-4" />
	<div class="grid grid-cols-2 gap-4 m-4">
		<ProductCard imagePath="/img/confiture-figues.jpg" title="noix de coco"/>
		<ProductCard imagePath="/img/confiture-figues.jpg" title="noix de coco"/>
		<ProductCard imagePath="/img/confiture-figues.jpg" title="noix de coco"/>
		<ProductCard imagePath="/img/confiture-figues.jpg" title="noix de coco"/>
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
  }
}
</script>
