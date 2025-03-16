<template>
    <div class="timeline">
      <div 
        v-for="(event, index) in events" 
        :key="index" 
        class="timeline-item" 
        :class="{ 'right': index % 2 === 0, 'left': index % 2 !== 0 }"
        ref="timelineItems"
      >
        <div class="timeline-content">
          <img :src="event.image" alt="Event image" class="timeline-image">
          <div class="timeline-text">
            <h3>{{ event.title }}</h3>
            <p>{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Utilisation de import.meta.url pour charger les images dans src/assets
  import img1 from '@/assets/photos/img1.jpg';
  import img2 from '@/assets/photos/img2.jpg';
  import img3 from '@/assets/photos/img3.jpg';
  
  const events = ref([
    { title: 'Événement 1', description: 'Description 1', image: img1 },
    { title: 'Événement 2', description: 'Description 2', image: img2 },
    { title: 'Événement 3', description: 'Description 3', image: img3 },
  ]);
  
  const timelineItems = ref([]);
  
  onMounted(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
  
    timelineItems.value.forEach(item => observer.observe(item));
  });
  </script>
  
  <style scoped>
  /* Conteneur principal de la timeline */
  .timeline {
    position: relative;
    max-width: 800px;
    margin: 50px auto;
  }
  
  /* Ligne centrale de la timeline */
  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: #ddd;
    transform: translateX(-50%);
  }
  
  /* Items de la timeline */
  .timeline-item {
    display: flex;
    align-items: center;
    width: 45%;
    position: relative;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-in-out;
  }
  
  /* Apparition progressive */
  .timeline-item.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Positionnement des items */
  .timeline-item.right {
    left: 55%;
  }
  
  .timeline-item.left {
    left: 0;
  }
  
  /* Contenu des événements */
  .timeline-content {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
  }
  
  /* Image des événements */
  .timeline-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 50%;
  }
  
  /* Texte des événements */
  .timeline-text {
    max-width: 250px;
  }
  </style>
  