<template>
  <div :class="['h-full w-full', `lang-${locale}`]">
    <header
      :class="[
        'xl:grid grid-cols-4 xl:grid-cols-8 items-center gap-4 sticky top-0 z-10 h-32 flex',
        headerGradientClass
      ]"
    >
      <!-- Logo -->
      <a
        @click="scrollToSection('top-home')"
        class="col-span-2 col-start-1 flex items-center cursor-pointer self-center gap-1 sm:gap-2"
      >
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
      <div
        id="full-menu"
        class="hidden xl:flex xl:justify-center xl:items-center xl:gap-8 col-span-5"
      >
        <a
          v-for="link in navLinks"
          :key="link.id"
          @click="scrollToSection(link.id)"
          class="text-lg text-foni-white font-bold cursor-pointer self-center"
          :class="hoverColorClass"
        >
          {{ $t(link.label) }}
        </a>
      </div>

      <!-- Menu burger pour mobile -->
      <span @click="toggleMenu" class="absolute xl:hidden right-8 cursor-pointer text-2xl">
        <i class="text-white" :class="[open ? 'fa fa-chevron-down' : 'fa fa-bars']"></i>
      </span>

      <ul
        class="justify-center xl:pb-0 xl:px-0 px-8 pb-8 xl:static absolute w-full xl:hidden top-24 md:top-32 duration-700 ease-in"
        :class="[
          open ? 'left-0 opacity-100' : 'left-[-100%] opacity-0',
          locale === 'fr'
            ? 'bg-gradient-to-r from-orange-950 to-foni-bg2' // Couleur du fond pour la langue française
            : //: 'bg-gradient-to-r from-[#006f73] to-[#00a6b6]' // Couleur du fond pour la langue malgache
              'bg-gradient-to-r from-green-950 to-green-600' // Couleur du fond pour la langue malgache
        ]"
      >
        <li
          class="my-6"
          v-for="link in navLinks"
          :key="link.id"
        >
          <a
            @click="scrollToSection(link.id)"
            class="text-xl text-foni-white font-bold hover:text-foni-green cursor-pointer"
          >
            {{ $t(link.label) }}
          </a>
        </li>
      </ul>
    </header>
    <main
    :class="mainGradientClass"
    >
      <!-- <Timeline /> -->
      <!-- <Slider /> -->
      <SliderVideos />
    </main>
    <RouterView />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SliderVideos from './views/SliderVideos.vue'

// Menu et langue
const open = ref(false)
const { locale } = useI18n()

// Liens du menu principal (ajouter/retirer ici pour mettre à jour le header)
const navLinks = [
  { id: 'qui', label: 'whoAreWe' },
  { id: 'objectifs', label: 'objectives' },
  { id: 'actions', label: 'actions' },
  { id: 'fsoutien', label: 'supportForms' },
  { id: 'soutien', label: 'support' },
  { id: 'contact', label: 'contactUs' }
]

// Classes dynamiques selon la langue
const headerGradientClass = computed(() =>
  locale.value === 'fr'
    ? 'bg-gradient-to-r from-orange-950 to-foni-bg2'
    : 'bg-gradient-to-r from-green-950 to-green-600 brightness-110 bg-opacity-90'
)
const mainGradientClass = computed(() =>
  locale.value === 'fr'
    ? 'bg-gradient-to-b from-orange-50 to-orange-100'
    : 'bg-gradient-to-br from-green-100 to-green-50'
)
const hoverColorClass = computed(() =>
  locale.value === 'mg' ? 'hover:text-[#FF6347]' : 'hover:text-foni-green'
)

onMounted(() => {
  // Détecter Firefox pour appliquer une classe spécifique
  const isFirefox = navigator.userAgent.toLowerCase().includes('firefox')
  if (isFirefox) {
    document.body.classList.add('firefox')
  }

  // Initialiser la langue depuis le stockage local
  const savedLang = localStorage.getItem('language') || 'fr'
  locale.value = savedLang
  document.documentElement.className = savedLang
})

// Ouvre/ferme le menu burger
function toggleMenu() {
  open.value = !open.value
}

// Scroll fluide vers une section et ferme le menu mobile
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
  if (sectionId !== 'top-home' || open.value) {
    open.value = false
  }
}

// Change la langue et enregistre le choix
const changeLanguage = (lang) => {
  locale.value = lang
  document.documentElement.className = lang
  localStorage.setItem('language', lang)
}
</script>
