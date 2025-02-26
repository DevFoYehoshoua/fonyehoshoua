<template>
  <div class="h-full w-full lang-[locale]">
      <header :class="[ 
        'xl:grid grid-cols-4 xl:grid-cols-8 items-center gap-4 sticky top-0 z-10 h-32 flex items-center',
        locale === 'fr' ? 'bg-gradient-to-r from-orange-950 to-foni-bg2' : 'bg-gradient-to-r from-[#006747] to-[#74C69D]'
      ]">
      <!-- Logo -->
      <a href="#top-home" class="col-span-2 col-start-1 flex items-center cursor-pointer self-center gap-1 sm:gap-2">
        <img
          alt="Vue logo"
          class="w-12 sm:w-20 md:w-24 xl:w-32 h-auto object-contain"
          src="@/assets/logo-nobg.png"
        />
        <img
          alt="fon'i yehoshoa text"
          src="@/assets/text-nobg-white.png"
          class="w-16 sm:w-24 md:w-28 xl:w-36 object-contain"
        />
      </a>

      <!-- Sélecteur de langue avec images -->
      <div class="absolute right-8 sm:right-12 flex items-center space-x-2 mr-12">
        <img 
          src="@/assets/fr-flag.png" 
          alt="Français" 
          class="w-8 h-8 cursor-pointer" 
          @click="changeLanguage('fr')"
        />
        <img 
          src="@/assets/mg-flag.png" 
          alt="Malagasy" 
          class="w-8 h-8 cursor-pointer" 
          @click="changeLanguage('mg')"
        />
      </div>

      <!-- Menu -->
      <div id="full-menu" class="hidden xl:flex xl:justify-center xl:items-center xl:gap-8 col-span-5">
        <a @click="scrollToSection('qui')" class="text-lg text-foni-white font-bold hover:text-foni-green cursor-pointer self-center">
          {{ $t('whoAreWe') }}
        </a>
        <a @click="scrollToSection('objectifs')" class="text-lg text-foni-white font-bold hover:text-foni-green cursor-pointer self-center">
          {{ $t('objectives') }}
        </a>
        <a @click="scrollToSection('actions')" class="text-lg text-foni-white font-bold hover:text-foni-green cursor-pointer self-center">
          {{ $t('actions') }}
        </a>
        <a @click="scrollToSection('fsoutien')" class="text-lg text-foni-white font-bold hover:text-foni-green cursor-pointer self-center">
          {{ $t('supportForms') }}
        </a>
        <a @click="scrollToSection('soutien')" class="text-lg text-foni-white font-bold hover:text-foni-green cursor-pointer self-center">
          {{ $t('support') }}
        </a>
        <a @click="scrollToSection('contact')" class="text-lg text-foni-white font-bold hover:text-foni-green cursor-pointer self-center">
          {{ $t('contactUs') }}
        </a>
      </div>

      <!-- Menu burger pour mobile -->
      <span @click="toggleMenu" class="absolute xl:hidden right-8 cursor-pointer text-2xl">
        <i class="text-white" :class="[open ? 'fa fa-chevron-down' : 'fa fa-bars']"></i>
      </span>

      <ul class="justify-center xl:pb-0 xl:px-0 px-8 pb-8 xl:static absolute w-full xl:hidden bg-gradient-to-r from-orange-950 to-foni-bg2 top-24 md:top-32 duration-700 ease-in" 
          :class="[open ? 'left-0 opacity-100' : 'left-[-100%] opacity-0']">
        <li class="my-6" v-for="(key, section) in { qui: 'whoAreWe', objectifs: 'objectives', actions: 'actions', fsoutien: 'supportForms', soutien: 'support', contact: 'contactUs'}" :key="section">
          <a @click="scrollToSection(section)" class="text-xl text-foni-white font-bold hover:text-foni-green cursor-pointer">
            {{ $t(key) }}
          </a>
        </li>
      </ul>
    </header>

    <RouterView />
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const open = ref(false)
const { locale } = useI18n()

onMounted(() => {
  // Vérifie si c'est Firefox et ajoute une classe au body
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
  if (isFirefox) {
    document.body.classList.add('firefox')
  }

  // Récupère la langue sauvegardée ou utilise 'fr' par défaut
  const savedLang = localStorage.getItem('language') || 'fr'
  locale.value = savedLang
  document.documentElement.className = savedLang
})

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
  } else if (sectionId === 'top-home' && open.value) {
    toggleMenu()
  }
}

const changeLanguage = (lang) => {
  locale.value = lang
  document.documentElement.className = lang // Change la classe HTML pour adapter le CSS
  localStorage.setItem('language', lang) // Sauvegarde la langue choisie
}
</script>
