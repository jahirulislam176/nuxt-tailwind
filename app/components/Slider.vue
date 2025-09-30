<template>
  <!-- slider start -->
  <div class="relative w-full h-80 overflow-hidden ">
    <img
      class="w-full h-80 object-cover transition-all duration-700"
      :src="images[currentIndex]"
      alt="not found"
    />

    <!-- Controls -->
    <button
      class="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      @click="prevSlide"
    >
      ‹
    </button>
    <button
      class="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      @click="nextSlide"
    >
      ›
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

// Import your images
import phone1 from '~/assets/img/phone.jpg'
import phone2 from '~/assets/img/slider.jpg'

const images = [phone1, phone2]
const currentIndex = ref(0)
let intervalId = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 3000) // auto-slide every 3s
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>
