<template>
    <div class="slider-container">
      <div class="slider">
        <div 
          v-for="(media, index) in medias" 
          :key="index"
          :class="{ active: index === currentIndex }"
          class="slide"
        >
          <!-- Si c'est une image -->
          <img v-if="media.type === 'image'" :src="media.src" :alt="media.alt">
  
          <!-- Si c'est une vidéo -->
          <video 
            v-else-if="media.type === 'video'" 
            :src="media.src" 
            autoplay 
            loop 
            muted 
            playsinline
            controls
          ></video>
        </div>
      </div>
  
      <!-- Flèches de navigation -->
      <button class="prev" @click="prevSlide">❮</button>
      <button class="next" @click="nextSlide">❯</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  // Import des images
  import img1 from '@/assets/photos/slides/chu3.jpeg';
  import img2 from '@/assets/photos/slides/chu2.jpeg';
  import img3 from '@/assets/photos/slides/enfant_cantine1.jpeg';
  import img4 from '@/assets/photos/slides/agri1.jpeg';
  
  // Définition des médias (images + vidéos)
  const medias = ref([
    { type: 'image', src: img1, alt: 'Image 1' },
    { type: 'video', src: '/videos/video1.MP4', alt: 'Vidéo 1' }, // Vidéo depuis public/
    { type: 'image', src: img2, alt: 'Image 2' },
    { type: 'image', src: img3, alt: 'Image 3' },
    { type: 'image', src: img4, alt: 'Image 4' },
  ]);
  
  const currentIndex = ref(0);
  let interval = null;
  
  // Changer l'image précédente
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + medias.value.length) % medias.value.length;
  };
  
  // Changer l'image suivante
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % medias.value.length;
  };
  
  // Lancer l'auto-slide toutes les 5 secondes
  const startAutoSlide = () => {
    interval = setInterval(nextSlide, 5000);
  };
  
  // Arrêter l'auto-slide lorsqu'on quitte la page
  onMounted(startAutoSlide);
  onUnmounted(() => clearInterval(interval));
  </script>
  
  <style scoped>
  /* Conteneur principal */
  .slider-container {
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: auto;
    overflow: hidden;
  }
  
  /* Wrapper pour les slides */
  .slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  /* Style des slides */
  .slide {
    flex: 0 0 100%;
    display: none;
    text-align: center;
  }
  
  /* Images */
  .slide img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }
  
  /* Vidéos */
  .slide video {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 10px;
  }
  
  /* Affichage de l'élément actif */
  .slide.active {
    display: block;
  }
  
  /* Boutons de navigation */
  .prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 24px;
    border-radius: 50%;
  }
  
  .prev { left: 10px; }
  .next { right: 10px; }
  
  .prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  </style>
  