<template>
  <div>
	<PresentationCard class="m-4" />

	<div class="grid grid-cols-2 gap-4 m-4">
		<ProductCard imagePath="https://ik.imagekit.io/pl6zwucqxr/confiture-figues_0Zmf392RWZU.jpg" title="Figues" url="/figues"/>
		<ProductCard imagePath="https://ik.imagekit.io/pl6zwucqxr/confiture-banane_xTG2Oq0DE.jpg" title="Banane" url="/banane"/>
		<ProductCard imagePath="https://ik.imagekit.io/pl6zwucqxr/confiture-cerise_DTdS_ZOl1_.jpg" title="Cerise" url="/cerise"/>
		<ProductCard imagePath="https://ik.imagekit.io/pl6zwucqxr/confiture-framboise_Wh_I1bPOeQ3F.jpg" title="Framboise" url="/framboise"/>
		<ProductCard imagePath="https://ik.imagekit.io/pl6zwucqxr/confiture-abricot_GbG9v0GWV.jpg" title="Abricot" url="/abricot"/>
		
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
