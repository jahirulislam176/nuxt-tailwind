<template>
  
   <Nav></Nav>

  <NuxtPage />

  <Footer></Footer>

</template>

<script>
import Nav from '~/layouts/nav.vue'
import Footer from '~/layouts/footer.vue'
export default {
  components: {
      Nav,
      Footer
  }
}
</script>