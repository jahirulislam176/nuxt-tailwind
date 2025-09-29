<template>
 <Nav></Nav>
<slider></slider>
 <Product></Product>
 <Footer></Footer>
</template>

<script>

import Nav from '~/layouts/nav.vue'
import Footer from '~/layouts/footer.vue'
import Product from '~/components/Product.vue'
import Slider from '~/components/Slider.vue'

export default {
  components: {
    Nav,
    Product,
    Slider,
    Footer
  }
}
</script>
