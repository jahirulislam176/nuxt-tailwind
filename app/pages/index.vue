<template>
  
 <Nav></Nav>
 <Slider></Slider>
 <Category></Category>
 <Popular></Popular>
 <Product></Product>
 <Footer></Footer>

</template>

<script>

import Nav from '~/layouts/nav.vue'
import Slider from '~/components/Slider.vue'
import Category from '~/components/Category.vue'
import Popular from '~/components/PopularProduct.vue'
import Product from '~/components/Product.vue'
import Footer from '~/layouts/footer.vue'

export default {

  components: {
    Nav,
    Slider,
    Category,
    Popular,
    Product,
    Footer
  }

}

</script>
