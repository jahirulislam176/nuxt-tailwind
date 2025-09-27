<template>
 <Nav></Nav>
 <Footer></Footer>
</template>

<script>

import AppAlert from '~/components/AppAlert.vue'
import Nav from '~/layouts/nav.vue'
import Footer from '~/layouts/footer.vue'

export default {
  components: {
    AppAlert,
    Nav,
    Footer
  }
}
</script>
