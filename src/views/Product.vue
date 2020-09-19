<template>

	<div class="bg-gray-200 p-2 rounded m-2 flex flex-col justify-center">
		<div class="text-2xl font-semibold text-center">Confiture Extra d'abricot</div>

		<div class="flex justify-center py-4"> 
			<div class="w-3/4">
				<div class="relative" style="padding-bottom: 100%">
					<img src="https://ik.imagekit.io/pl6zwucqxr/confiture-abricot_GbG9v0GWV.jpg"
					class="absolute h-full w-full object-cover rounded-lg">
				</div>
			</div>
		</div>

		<div>
			Confiture extra artisanale, fait maison, cuite en bassine de cuivre avec des mirabelles fraîches venant directement de producteurs du Lot et Garonne.
		</div>

		<div>
			Composition: 60% de fruits frais, 40% de sucre, pectine végétale
		</div>
		

		<div>Poids net 340g</div>
		<div>Prix: 3.3 €</div>
		
		<div class="flex justify-center py-4">
			<button class="bg-green-400 px-4 py-2 rounded-lg text-lg font-semibold">Ajouter au panier</button>
		</div>
			
		
	</div>
</template>
<script>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
export default {
	setup() {
		const route = ref('')
		route.value = useRoute()

		return { route }
	}
}
</script>