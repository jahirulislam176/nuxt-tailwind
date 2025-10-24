<template>

  <div class="max-w-6xl mx-auto my-8 p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="flex flex-col items-center p-6">
      <!-- Main Image -->
      <img :src="mainImage" alt="Main Image" class="w-96 h-96 object-contain rounded-lg shadow-md mb-4" />

      <!-- Thumbnail Images -->
      <div class="grid grid-cols-5 gap-4">
        <img v-for="(img, index) in images" :key="index" :src="img" alt="Thumbnail"
          class="w-20 h-20 object-cover border-2 border-transparent hover:border-blue-500 cursor-pointer rounded-md"
          @click="setMainImage(img)" />
      </div>
    </div>

    <div class="mr-2 p-4">
      <h1 class="text-2xl font-bold mb-8 break-normal">Smile Q9 Victory (RAM-3GB/ROM-32GB)3700mAH Mobile Phone</h1>


      <div class="p-10 text-4xl flex gap-6">
        <font-awesome-icon icon="user" class="text-red-800" />
        <font-awesome-icon :icon="['fab', 'facebook']" class="text-blue-700" />
      </div>


      <p class="mb-4">No Ratings</p>

      <p class="mb-4">Brand New  for users</p>

      <p class="mb-4 text-xl" >$99.99</p>

      <p>Quanity </p>
      <p class="">This is a detailed description of the product. It provides all the necessary information that a
        potential buyer might need to make an informed decision.</p>
      <span class="flex gap-2 mt-4">
        <button class="bg-red-500 text-white rounded p-2 hover:bg-blue-600 transition-colors duration-300 w-1/2">
          Buy Now
        </button>
        <button class="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition-colors duration-300 w-1/2">
          Add to Cart
        </button>
      </span>
    </div>

    <div>

      
      <p>Delivery Options </p>
      <h5>Dhaka, Dhaka North, Banani Road No. 12 - 19</h5>


      <p>Return & Warranty </p>
      <p>14 days easy return</p>
      <p>Warranty not available</p>
    </div>
  </div>


  <div>
    <h2 class="text-2xl font-bold p-4">Product details of Vivo V60 > 12--256</h2>
    <article>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
    </article>
  </div>
  <hr>


  <div class="my-8">
    <h2 class="text-2xl font-bold p-4">Vivo V60</h2>
    <article>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
    </article>
  </div>

  <hr>


  <div class="my-8">
    <h2 class="text-2xl font-bold p-4">Vivo V60</h2>
    <article>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
      <p>10-day seller replacement guarantee</p>
    </article>

    <img src="https://img.drz.lazcdn.com/static/bd/p/471023acb0b6a0a11d60790a24829826.png_2200x2200q80.png_.webp"
      alt="">
  </div>

  <div>
    <h2 class="text-2xl font-bold p-4">Specifications of Vivo V60 > 12--256</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">

      <div>
        <ul>
          <li>Brand</li>
        </ul>
        <ul>
          <li>Brand</li>
        </ul>
        <ul>
          <li>Brand</li>
        </ul>
        <ul>
          <li>Brand</li>
        </ul>
        <ul>
          <li>Brand</li>
        </ul>
        <ul>
          <li>Brand</li>
        </ul>
        <ul>
          <li>Brand</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>Brand</li>
        </ul>
        <ul>
          <li>Brand</li>
        </ul>
        <ul>
          <li>Brand</li>
        </ul>
        <ul>
          <li>Brand</li>
        </ul>
        <ul>
          <li>Brand</li>
        </ul>
        <ul>
          <li>Brand</li>
        </ul>
        <ul>
          <li>Brand</li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>

import pixel from '~/assets/img/pixel.jpg'
import iphone from '~/assets/img/iphone.jpeg'
import grameen from '~/assets/img/download.png'

export default {
  data() {
    return {
      mainImage: "https://img.drz.lazcdn.com/static/bd/p/e372e4c74e0e6e30d488ca7891de9d36.png_720x720q80.png_.webp",
      images: [pixel, iphone, grameen],
    };
  },
  methods: {
    setMainImage(img) {
      this.mainImage = img;
    },
  },
};

</script>