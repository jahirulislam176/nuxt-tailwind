<template>
    <nav class="container-full bg-gray-200  flex justify-between items-center p-4 ">
        <!-- logo part -->
        <div class="w-20 h-20">
            <a href="">
                <img class="rounded-lg ring"
                    src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_incoming&w=740&q=80"
                    alt="">
            </a>
        </div>
        <!-- search part -->
        <div class="flex flex-col-1 mx-4">
            <input type="text" placeholder="Search..." class="rounded-lg w-[500px] border-4" />
        </div>
        <!-- menu part -->
        <div>
            <ul class="flex space-x-4">
                <li class="relative group">
                    <a class="text-xl" href="">Home</a>
                    <ul class="absolute left-0  w-40 bg-sky-300 p-4 rounded-lg space-y-2 hidden group-hover:block">
                        <li><a class="block text-xl" href="">Submenu1</a></li>
                        <li><a class="text-xl" href="">Submenu2</a></li>
                        <li><a class="text-xl" href="">Submenu3</a></li>
                    </ul>
                </li>
                <li><a class="text-xl" href="">About</a></li>
                <li><a class="text-xl" href="">Contact</a></li>
                <li><a class="text-xl" href="">Services</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
</script>