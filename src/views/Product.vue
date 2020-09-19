<template>

	<div class="bg-gray-200 p-2 rounded m-2 flex flex-col justify-center">
		<div class="text-2xl font-semibold text-center">{{ product.title }}</div>

		<div class="flex justify-center py-4"> 
			<div class="w-3/4">
				<div class="relative" style="padding-bottom: 100%">
					<img :src="product.imagePath"
					class="absolute h-full w-full object-cover rounded-lg">
				</div>
			</div>
		</div>

		<div>
			{{ product.description }}
		</div>

		<div>
			Composition: {{ product.composition}}
		</div>
		<div class=" border flex justify-between">
			<button v-for="(variant) of product.variants"
				:key="variant.weight"
				class="bg-gray-400 w-full py-1"
				:class="selectedVariant == variant ? 'bg-gray-500 ' : ''"
				@click="selectVariant(variant)"
				>
				{{ variant.weight }}
			</button>
		</div>

		<div class="flex py-4">
			<button class="bg-red-400 w-full rounded py-1"
				@click="modifyQuantity(-1)">
				-
			</button>
			<div class="w-full text-center border-t border-b py-1">{{ quantity }}</div>
			<button class="bg-green-400 w-full rounded py-1"
				@click="modifyQuantity(+1)">
				+
			</button>
		</div>
		
		<div class="flex justify-center">
			<div class="text-xl font-semibold text-center py-4">
				<div class=" bg-gray-500 rounded px-4">{{ totalPrice }} €</div>
			</div>
		</div>
		
		
		
		<div class="flex justify-center py-4">
			<button class="bg-green-400 px-4 py-2 rounded-lg text-lg font-semibold">
				<div class="flex flex-row items-center">
					<svg class="mr-2 h-8 w-8 fill-current text-gray-700"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M13 17a2 2 0 103.999.001A2 2 0 0013 17zM3 17a2 2 0 104 0 2 2 0 00-4 0zm3.547-4.828L17.615 9.01A.564.564 0 0018 8.5V3H4V1.4c0-.22-.181-.4-.399-.4H.399A.401.401 0 000 1.4V3h2l1.91 8.957.09.943v1.649c0 .219.18.4.4.4h13.2c.22 0 .4-.182.4-.4V13H6.752c-1.15 0-1.174-.551-.205-.828z"/>
					</svg>
					Ajouter au panier</div>
			
			</button>
		</div>
			
		
	</div>
</template>
<script>
import { useRoute } from 'vue-router'
import { ref, watch, computed } from 'vue'
import { getProductByUrl } from '@/composables/useFirestore'

export default {
	setup() {
		const route = ref('')
		route.value = useRoute()

		const rawUrl = route.value.path
		const url = rawUrl.slice(1)
		const product = getProductByUrl(url)


		const selectedVariant = ref({})
		watch(product, (newOne) => {
			selectedVariant.value = newOne.variants[0]
		})

		const selectVariant = (variant) => {
			selectedVariant.value = variant
		}

		const quantity = ref(1)
		const modifyQuantity = (modifier) => {
			if (modifier == -1 && quantity.value > 1) quantity.value += modifier
			if (modifier == +1 ) quantity.value += modifier
			
		}

		const totalPrice = computed(() => {
			const rawTotalPrice = selectedVariant.value.price * quantity.value
			return rawTotalPrice.toFixed(2)
		})

		return { product, selectedVariant, selectVariant, quantity, modifyQuantity, totalPrice }
	}
}
</script>