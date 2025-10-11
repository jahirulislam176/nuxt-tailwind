<template>
  

 <Slider></Slider>
 <Category></Category>
 <Popular></Popular>
 <Product></Product>
 <Footer></Footer>

</template>

<script>


import Slider from '~/components/Slider.vue'
import Category from '~/components/Category.vue'
import Popular from '~/components/PopularProduct.vue'
import Product from '~/components/Product.vue'


export default {

  components: {

    Slider,
    Category,
    Popular,
    Product,
    Footer
  }

}

</script>
