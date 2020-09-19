<template>
	<router-link to="/cart" 
      class="font-semibold w-full h-full flex justify-center items-center" 
        :class="activated ? 'bg-green-700' : '' ">
     <svg class="h-8 w-8 fill-current"
     :class="activated ? 'text-gray-200' : 'text-gray-700' "
     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 17a2 2 0 103.999.001A2 2 0 0013 17zM3 17a2 2 0 104 0 2 2 0 00-4 0zm3.547-4.828L17.615 9.01A.564.564 0 0018 8.5V3H4V1.4c0-.22-.181-.4-.399-.4H.399A.401.401 0 000 1.4V3h2l1.91 8.957.09.943v1.649c0 .219.18.4.4.4h13.2c.22 0 .4-.182.4-.4V13H6.752c-1.15 0-1.174-.551-.205-.828z"/></svg>
    </router-link>
</template>

<script>
export default {
	props: {
		activated: Boolean
	}
}
</script>