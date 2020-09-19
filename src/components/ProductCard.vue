<template>
	<div class="bg-gray-200 bg-opacity-75 flex flex-col rounded">
		<div class="relative" style="padding-bottom: 50%">
			<img :src="imagePath" alt="No image corresponding"
			class="absolute w-full h-full object-cover">
		</div>
		<div class="py-1 px-4 font-semibold text-center">{{ title }}</div>
	</div>
</template>

<script>
export default {
	props: {
		imagePath: String,
		title: String
	}
}
</script>