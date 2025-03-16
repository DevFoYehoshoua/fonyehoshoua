<template>
  <div class="slider-container">
    <div class="slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div 
        class="slide" 
        v-for="(image, index) in images"
        :key="index"
      >
        <img :src="image.src" :alt="image.alt">
        <div class="overlay"></div>
        <div class="text">{{ image.caption }}</div>
      </div>
    </div>

    <!-- Boutons de navigation -->
    <button class="prev" @click="prevSlide">❮</button>
    <button class="next" @click="nextSlide">❯</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Images
import img1 from '@/assets/photos/slides/chu3.jpeg';
import img2 from '@/assets/photos/slides/chu2.jpeg';
import img3 from '@/assets/photos/slides/chu1.jpeg';
import img4 from '@/assets/photos/slides/enfant_cantine1.jpeg';
import img5 from '@/assets/photos/slides/enfant_cantine2.jpg';
import img6 from '@/assets/photos/slides/nilaina1.jpg';
import img7 from '@/assets/photos/slides/prisonniers1.jpg';
import img8 from '@/assets/photos/slides/prisonniers2.jpg';
import img9 from '@/assets/photos/slides/prisonniers3.jpg';

const images = ref([
  { src: img1, alt: 'Image 1', caption: 'Texte sur l\'image 1' },
  { src: img2, alt: 'Image 2', caption: 'Texte sur l\'image 2' },
  { src: img3, alt: 'Image 3', caption: 'Texte sur l\'image 3' },
  { src: img4, alt: 'Image 4', caption: 'Texte sur l\'image 4' },
  { src: img5, alt: 'Image 5', caption: 'Texte sur l\'image 5' },
  { src: img6, alt: 'Image 6', caption: 'Texte sur l\'image 6' },
  { src: img7, alt: 'Image 7', caption: 'Texte sur l\'image 7' },
  { src: img8, alt: 'Image 8', caption: 'Texte sur l\'image 8' },
  { src: img9, alt: 'Image 9', caption: 'Texte sur l\'image 9' },
]);


const currentIndex = ref(0);
let interval = null;

// Fonction pour passer à l'image suivante
const nextSlide = () => {
  if (currentIndex.value < images.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Revient à la première image
  }
};

// Fonction pour revenir à l'image précédente
const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = images.value.length - 1; // Revient à la dernière image
  }
};

// Auto-slide toutes les 5 secondes
const startAutoSlide = () => {
  interval = setInterval(nextSlide, 5000);
};

onMounted(startAutoSlide);
onUnmounted(() => clearInterval(interval));
</script>

<style scoped>
/* Conteneur principal */
.slider-container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
  height: auto;
  max-height: 90vh; /* Pour éviter un trop grand agrandissement */
}


/* Wrapper des slides */
.slider {
  display: flex;
  transition: transform 1s ease-in-out;
  width: 100%;
}

/* Chaque slide */
.slide {
  min-width: 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: auto; /* Évite la déformation */
  object-fit: cover;
  display: block;
  max-height: 500px; /* Fixe une hauteur max pour éviter l’agrandissement */
  object-fit: cover; /* Ajuste pour bien remplir le cadre */
}


/* Overlay sombre */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

/* Texte */
.text {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 5px;
}

/* Boutons */
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
  z-index: 3;
}

.prev { left: 10px; }
.next { right: 10px; }

.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

@media screen and (max-width: 768px) {
  .slide img {
    max-height: 300px; /* Moins grand sur mobile */
  }
}
</style>
