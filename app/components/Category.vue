<template>
    <div class="p-8">
        <h1 class="text-2xl font-bold text-center mb-6 underline">Category</h1>



        :autoplay="{ delay: 2500, disableOnInteraction: false }" :breakpoints="{
                320: { slidesPerView: 2, spaceBetween: 10 },
                640: { slidesPerView: 3, spaceBetween: 15 },
                1024: { slidesPerView: 4, spaceBetween: 20 }
            }" class="mySwiper">
            <SwiperSlide v-for="(category, index) in categories" :key="index" class="text-center">
                <a href="#">
                    <img :src="category.image" class="m-auto rounded-full w-32 h-32 object-cover" alt="not found" />
                    <h2 class="mt-2 text-lg font-semibold">{{ category.name }}</h2>
                </a>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'   // ✅ correct import for Swiper 10+
import 'swiper/css'
import 'swiper/css/autoplay'

const categories = [

    { name: 'Mobile', image: 'https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?w=1060' },

    { name: 'Mobile2', image: 'https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?w=1060' },

    { name: 'Mobile3', image: 'https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?w=1060' },


    { name: 'Mobile4', image: 'https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?w=1060' },

    { name: 'Mobile5', image: 'https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?w=1060' },

    { name: 'Mobile6', image: 'https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?w=1060' },

    { name: 'Mobile7', image: 'https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?w=1060' },

    { name: 'Laptop', image: 'https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?w=1060' },

    { name: 'Camera', image: 'https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?w=1060' },

    { name: 'Watch', image: 'https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?w=1060' },

    { name: 'Headphone', image: 'https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?w=1060' },

    { name: 'Tablet', image: 'https://img.freepik.com/premium-vector/round-gray-circle-with-simple-human-silhouette-light-gray-shadow-around-circle_213497-4963.jpg?w=1060' }
]

</script>

<style scoped>
.mySwiper {
    width: 100%;
    padding-bottom: 20px;
}
</style>
