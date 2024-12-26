<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
import { ref } from 'vue'
import { onMounted } from 'vue'

const open = ref(false)

function toggleMenu() {
  open.value = !open.value
}

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
  if (sectionId !== 'top-home') {
    toggleMenu()
  } else if (sectionId === 'top-home' && open.value == true) {
    toggleMenu()
  }
}
</script>

<template>
  <div class="h-full w-full">
    <header
      class="bg-gradient-to-r from-orange-950 to-foni-bg2 xl:grid grid-cols-4 xl:grid-cols-8 items-center gap-4 sticky top-0 z-10 xl:h-32 xl:max-h-28"
    >
      <div
        id="full-menu"
        class="hidden xl:grid xl:grid-cols-5 col-span-5 xl:row-span-3 col-start-3 gap-4 justify-items-center items-center justify-center text-center xl:mb-28"
      >
        <a
          @click="scrollToSection('qui')"
          class="text-lg text-foni-white font-bold hover:text-foni-green cursor-pointer"
          >Qui sommes nous?</a
        >

        <a
          @click="scrollToSection('objectifs')"
          class="text-lg text-foni-white font-bold hover:text-foni-green cursor-pointer"
          >Nos objectifs</a
        >

        <a
          @click="scrollToSection('actions')"
          class="text-lg text-foni-white font-bold hover:text-foni-green cursor-pointer"
          >Nos actions dans le monde</a
        >

        <a
          @click="scrollToSection('fsoutien')"
          class="text-lg text-foni-white font-bold hover:text-foni-green cursor-pointer"
          >Formes de soutien</a
        >

        <a
          @click="scrollToSection('soutien')"
          class="text-lg text-foni-white font-bold hover:text-foni-green cursor-pointer"
          >Soutenir</a
        >
      </div>

      <div
        @click="scrollToSection('top-home')"
        class="col-span-2 col-start-1 flex w-24 sm:w-32 md:w-36 xl:w-28 cursor-pointer items-center self-center xl:mb-16 xl:max-h-32"
      >
        <img
          alt="Vue logo"
          class="logo 2xl:w-full place-self-start xl:ml-4"
          src="@/assets/logo-nobg.png"
          width="125"
          height="125"
        />
        <img
          alt="fon'i yehoshoa text"
          src="@/assets/text-nobg-white.png"
          class="2xl:w-full xl:mb-10 xl:ml-4"
          width="125"
          height="125"
        />
      </div>

      <span
        @click="toggleMenu"
        class="absolute xl:hidden right-8 top-7 sm:top-10 sm:right-12 cursor-pointer text-2xl sm:text-4xl"
      >
        <i class="text-white" :class="[open ? 'fa fa-chevron-down' : 'fa fa-bars']"></i>
      </span>

      <ul
        class="justify-center xl:pb-0 xl:px-0 px-8 pb-8 xl:static absolute w-full xl:hidden bg-gradient-to-r from-orange-950 to-foni-bg2 top-24 md:top-32 duration-700 ease-in"
        :class="[open ? 'left-0 opacity-100' : 'left-[-100%] opacity-0']"
      >
        <li class="my-6">
          <!-- <RouterLink to="/" class="text-xl text-foni-white font-bold hover:text-foni-green">Home</RouterLink> -->
          <a
            @click="scrollToSection('qui')"
            class="text-xl text-foni-white font-bold hover:text-foni-green cursor-pointer"
            >Qui sommes nous?</a
          >
        </li>
        <li class="my-6">
          <a
            @click="scrollToSection('objectifs')"
            class="text-xl text-foni-white font-bold hover:text-foni-green cursor-pointer"
            >Nos objectifs</a
          >
        </li>
        <li class="my-6">
          <a
            @click="scrollToSection('actions')"
            class="text-xl text-foni-white font-bold hover:text-foni-green cursor-pointer"
            >Nos actions dans le monde</a
          >
        </li>
        <li class="my-6">
          <a
            @click="scrollToSection('fsoutien')"
            class="text-xl text-foni-white font-bold hover:text-foni-green cursor-pointer"
            >Formes de soutien</a
          >
        </li>
        <li class="my-6">
          <a
            @click="scrollToSection('soutien')"
            class="text-xl text-foni-white font-bold hover:text-foni-green cursor-pointer"
            >Soutenir</a
          >
        </li>
        <!-- <li class="md:mx-4"> 
        <RouterLink to="/about" class="text-xl text-foni-white font-bold hover:text-foni-green">About</RouterLink>
      </li> -->
      </ul>

      <!-- <div class="col-span-3 justify-self-end mr-4">
      <i class="fa fa-bars w3-xlarge text-white"></i>
    </div> -->
    </header>

    <RouterView />
  </div>
</template>
