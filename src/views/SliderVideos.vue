<template>
  <div class="video-container">
    <video
      src="@/assets/videos/AssoPresentation.mp4"
      controls
      autoplay
      muted
      playsinline
      class="video-player"
    ></video>
  </div>
</template>

<style scoped>
.video-container {
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 1rem; /* seulement en bas */
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-player {
  width: 100%;
  max-height: 90vh; /* Adapte à la hauteur de l’écran */
  object-fit: contain; /* Évite le rognage */
  border-radius: 10px;
  background-color: black; /* Pour éviter l'effet de bande transparente si la vidéo n'est pas plein écran */
  display: block;
}
</style>
