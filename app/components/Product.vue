<template>
    <div class="flex flex-wrap justify-center items-center min-h-screen bg-sky-900">
        
        <div v-for="(product, index) in products" :key="index" class="bg-sky-800 w-60 border-4 border-black p-4 m-4 ">
            <div>
                <img class="h-64 w-full" :src="product.image" alt="Product Image" />
            </div>

            <div class="justify-center items-center text-center space-y-2 mt-1">
                <h1 class="font-bold text-xl">{{ product.title }}</h1>
                <p class="text-sm">{{ product.description }}</p>
                <span class="font-bold">${{ product.price }}</span>
                <button class="bg-sky-700 text-sm border rounded-2xl p-1">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import phone from '~/assets/img/phone7.jpg'

const products = [
    { title: 'Product 1', description: 'Product Description', price: 99.99, image: phone },
    { title: 'Product 2', description: 'Product Description', price: 149.99, image: phone },
    { title: 'Product 3', description: 'Product Description', price: 79.99, image: phone },
    { title: 'Product 4', description: 'Product Description', price: 199.99, image: phone },
    { title: 'Product 5', description: 'Product Description', price: 59.99, image: phone },
    { title: 'Product 6', description: 'Product Description', price: 89.99, image: phone },
    { title: 'Product 6', description: 'Product Description', price: 89.99, image: phone },
    { title: 'Product 6', description: 'Product Description', price: 89.99, image: phone },
    { title: 'Product 6', description: 'Product Description', price: 89.99, image: phone },
    { title: 'Product 6', description: 'Product Description', price: 89.99, image: phone },
]
</script>
