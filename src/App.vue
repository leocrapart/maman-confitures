<template>
  <div class="bg-green-600 h-10 flex items-center justify-between">
    <router-link class="font-semibold w-full h-full flex justify-center items-center" 
      :class="route.path == '/' ? 'bg-green-700' : '' "
      to="/">
      <svg class=" h-8 w-8 fill-current"
      :class="route.path == '/' ? 'text-gray-200' : 'text-gray-700' "
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18.672 11H17v6c0 .445-.194 1-1 1h-4v-6H8v6H4c-.806 0-1-.555-1-1v-6H1.328c-.598 0-.47-.324-.06-.748L9.292 2.22c.195-.202.451-.302.708-.312.257.01.513.109.708.312l8.023 8.031c.411.425.539.749-.059.749z"/></svg>
    </router-link>
    <router-link to="/about" 
      class="font-semibold w-full h-full flex justify-center items-center" 
        :class="route.path == '/about' ? 'bg-green-700' : '' "
    >
      <svg class=" h-8 w-8 fill-current"
      :class="route.path == '/about' ? 'text-gray-200' : 'text-gray-700' "
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path  d="M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0010 19.601c5.301 0 9.6-4.298 9.6-9.601 0-5.302-4.299-9.6-9.6-9.6zm.896 3.466c.936 0 1.211.543 1.211 1.164 0 .775-.62 1.492-1.679 1.492-.886 0-1.308-.445-1.282-1.182 0-.621.519-1.474 1.75-1.474zM8.498 15.75c-.64 0-1.107-.389-.66-2.094l.733-3.025c.127-.484.148-.678 0-.678-.191 0-1.022.334-1.512.664l-.319-.523c1.555-1.299 3.343-2.061 4.108-2.061.64 0 .746.756.427 1.92l-.84 3.18c-.149.562-.085.756.064.756.192 0 .82-.232 1.438-.719l.362.486c-1.513 1.512-3.162 2.094-3.801 2.094z"/>
      </svg>
    </router-link>
    <router-link to="/cart" 
      class="font-semibold w-full h-full flex justify-center items-center" 
        :class="route.path == '/cart' ? 'bg-green-700' : '' ">
     <svg class="h-8 w-8 fill-current"
     :class="route.path == '/cart' ? 'text-gray-200' : 'text-gray-700' "
     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 17a2 2 0 103.999.001A2 2 0 0013 17zM3 17a2 2 0 104 0 2 2 0 00-4 0zm3.547-4.828L17.615 9.01A.564.564 0 0018 8.5V3H4V1.4c0-.22-.181-.4-.399-.4H.399A.401.401 0 000 1.4V3h2l1.91 8.957.09.943v1.649c0 .219.18.4.4.4h13.2c.22 0 .4-.182.4-.4V13H6.752c-1.15 0-1.174-.551-.205-.828z"/></svg>
   </router-link>
    <a href="https://www.facebook.com/lesconfituresdevalerie/"
    class="font-semibold text-gray-200 w-full h-full flex justify-center items-center">
      <svg class=" h-8 w-8 fill-current text-gray-700 hover:text-gray-200"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"/>
      </svg>
    </a>
  </div>
  <router-view/> 
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = ref('')
    route.value = useRoute()

    return { route }
  }
}
</script>

<style>
body {
  background-image: url('/grass-background.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>