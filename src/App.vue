<template>
  <div class="bg-green-600 h-10 flex items-center justify-between">
    <HomeIcon :activated="route.path == '/'"/>
    <InfoIcon :activated="route.path == '/about'"/>
    <CartIcon :activated="route.path == '/cart'"/>
    <FacebookIcon/>
    <InstagramIcon/>
  </div>
  <router-view/> 
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import FacebookIcon from '@/components/icons/FacebookIcon'
import InstagramIcon from '@/components/icons/InstagramIcon'
import HomeIcon from '@/components/icons/HomeIcon'
import CartIcon from '@/components/icons/CartIcon'
import InfoIcon from '@/components/icons/InfoIcon'

export default {
  components: {
    FacebookIcon,
    InstagramIcon,
    HomeIcon,
    InfoIcon,
    CartIcon
  },
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