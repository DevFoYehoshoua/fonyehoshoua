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
import img1 from '@/assets/photos/slides/chPainQuot3.png';
import img2 from '@/assets/photos/slides/chPainQuot4.png';
import img3 from '@/assets/photos/slides/chu1.jpeg';
import img4 from '@/assets/photos/slides/chu3.jpeg';
import img5 from '@/assets/photos/slides/chu4.jpeg';
import img6 from '@/assets/photos/slides/chu5.jpeg';
import img7 from '@/assets/photos/slides/cantineTulear3.png';
import img8 from '@/assets/photos/slides/cantineT1.jpeg';
import img9 from '@/assets/photos/slides/cantineT2.jpeg';
import img10 from '@/assets/photos/slides/cantineT3.jpeg';
import img11 from '@/assets/photos/slides/cantineT4.jpeg';
import img12 from '@/assets/photos/slides/cantineT5.jpeg';
import img13 from '@/assets/photos/slides/cantineT6.jpeg';
import img14 from '@/assets/photos/slides/cantineT7.jpeg';
import img15 from '@/assets/photos/slides/cantineT8.jpeg';
import img16 from '@/assets/photos/slides/cantineT9.jpeg';
import img17 from '@/assets/photos/slides/cantineT10.jpeg';
import img18 from '@/assets/photos/slides/soutiensPrison3.png';
import img19 from '@/assets/photos/slides/soutiensPrisonniers6.png';
import img20 from '@/assets/photos/slides/soutiensPrisonniers2.jpeg';
import img21 from '@/assets/photos/slides/soutiensPrisonniers3.jpeg';
import img22 from '@/assets/photos/slides/soutiensPrisonniers4.jpeg';
import img23 from '@/assets/photos/slides/soutiensPrisonniers7.png';
import img24 from '@/assets/photos/slides/nilaina3.png';
import img25 from '@/assets/photos/img5.jpg';
import img26 from '@/assets/photos/slides/nilaina1.jpg';
import img27 from '@/assets/photos/slides/cantineTanaMPY3.png';
import img28 from '@/assets/photos/slides/cantineTana1.jpeg';
import img29 from '@/assets/photos/slides/cantineTana2.jpeg';
import img30 from '@/assets/photos/slides/cantineTana3.jpeg';
import img31 from '@/assets/photos/slides/cantineTana4.jpeg';
import img32 from '@/assets/photos/slides/cantineTana5.jpeg';
import img33 from '@/assets/photos/slides/cantineTana6.jpeg';
import img34 from '@/assets/photos/slides/cantineTana7.jpeg';
import img35 from '@/assets/photos/slides/cantineTana8.jpeg';
import img36 from '@/assets/photos/slides/cantineTana9.jpeg';
import img37 from '@/assets/photos/slides/cantineTana10.jpeg';
import img38 from '@/assets/photos/slides/cantineTana11.jpeg';
import img39 from '@/assets/photos/slides/cantineTana12.jpeg';
import img40 from '@/assets/photos/slides/cantineTana13.jpeg';
import img41 from '@/assets/photos/slides/cantineTana14.jpeg';

const images = ref([
  { src: img1, alt: 'Image 1'},
  { src: img2, alt: 'Image 2'},
  { src: img3, alt: 'Image 3'},
  { src: img4, alt: 'Image 4'},
  { src: img5, alt: 'Image 5'},
  { src: img6, alt: 'Image 6'},
  { src: img7, alt: 'Image 7'},
  { src: img8, alt: 'Image 8'},
  { src: img9, alt: 'Image 9'},
  { src: img10, alt: 'Image 10'},
  { src: img11, alt: 'Image 11'},
  { src: img12, alt: 'Image 12'},
  { src: img13, alt: 'Image 13'},
  { src: img14, alt: 'Image 14'},
  { src: img15, alt: 'Image 15'},
  { src: img16, alt: 'Image 16'},
  { src: img17, alt: 'Image 17'},
  { src: img18, alt: 'Image 18'},
  { src: img19, alt: 'Image 19'},
  { src: img20, alt: 'Image 20'},
  { src: img21, alt: 'Image 21'},
  { src: img22, alt: 'Image 22'},
  { src: img23, alt: 'Image 23'},
  { src: img24, alt: 'Image 24'},
  { src: img25, alt: 'Image 25'},
  { src: img26, alt: 'Image 26'},
  { src: img27, alt: 'Image 27'},
  { src: img28, alt: 'Image 28'},
  { src: img29, alt: 'Image 29'},
  { src: img30, alt: 'Image 30'},
  { src: img31, alt: 'Image 31'},
  { src: img32, alt: 'Image 32'},
  { src: img33, alt: 'Image 33'},
  { src: img34, alt: 'Image 34'},
  { src: img35, alt: 'Image 35'},
  { src: img36, alt: 'Image 36'},
  { src: img37, alt: 'Image 37'},
  { src: img38, alt: 'Image 38'},
  { src: img39, alt: 'Image 39'},
  { src: img40, alt: 'Image 40'},
  { src: img41, alt: 'Image 41'},
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
  interval = setInterval(nextSlide, 30000);
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
  height: 400px;
  object-fit: cover;
}


/* Overlay sombre */
 .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2); /* Moins foncé */
} 

/* Texte */
.text {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
}

/* Boutons de navigation */
.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1); /* Fond très transparent */
  backdrop-filter: blur(5px); /* Effet de flou pour un look moderne */
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 50%;
  z-index: 3;
  transition: all 0.3s ease-in-out;
  opacity: 0.3; /* Moins visible au repos */
}

/* Positionnement */
.prev { left: 10px; }
.next { right: 10px; }

/* Supprimer la surbrillance lors du clic */
.prev:focus,
.next:focus {
  outline: none;
  box-shadow: none;
}

/* Effet au survol adouci */
.prev:hover, .next:hover {
  background: rgba(255, 255, 255, 0.2); /* Un effet plus subtil */
  opacity: 0.9; /* Légèrement moins visible */
  transform: translateY(-30%) scale(1.05); /* Agrandissement plus discret */
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.3); /* Ombre plus légère */
  transition: all 0.2s ease-in-out; /* Animation fluide */
}


/* Réinitialiser l'opacité après clic */
.prev:active, .next:active {
  opacity: 0.3; /* Rendre les boutons transparents après clic */
  background: rgba(255, 255, 255, 0.1); /* Réinitialiser le fond */
  transform: translateY(-50%) scale(1); /* Réduire l'agrandissement */
  box-shadow: none; /* Supprimer l'ombre */
}

/* Ajustement sur grands écrans */
@media screen and (min-width: 1024px) {
  .slide img {
    height: 500px; /* Augmente la hauteur */
    object-fit: contain; /* Évite de couper les images */
  }
}

/* Ajustement sur petits écrans */
@media screen and (max-width: 768px) {
  .slide img {
    max-height: 400px; /* Réduit encore sur mobiles */
    min-height: 300px;
  }
}


</style>
