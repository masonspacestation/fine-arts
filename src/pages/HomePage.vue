<script setup>
import { AppState } from "../AppState.js";
import { computed, onMounted } from "vue";
import { artsService } from "../services/ArtsService.js";
import Pop from "../utils/Pop.js";
import ArtworkCard from "../components/ArtworkCard.vue";


const artworks = computed(() => AppState.artworks)

onMounted(()=>{
  discoverArt()
})


async function discoverArt() {
  try {
    await artsService.discoverArt()
  }
  catch (error){
    Pop.toast('could not discover art', 'error');
    console.error(error)
  }
}


async function changePage(pageNumber){
  try {
    await artsService.changePage(`?page=${pageNumber}`)
  }
  catch (error){
    Pop.toast('unable to change page', 'error');
  }
}





</script>

<template>
<div class="container-fluid">

  <section class="row justify-content-between text-center px-5 my-3">
    <div class="col-3"><button :disabled="AppState.currentPage==1" @click="changePage(AppState.currentPage -1)" class="btn btn-secondary w-50"><i class="mdi mdi-arrow-left"></i> Previous</button></div>
    <div class="col-3">Page {{AppState.currentPage}} of {{ AppState.totalPages }}</div>
    <div class="col-3"><button :disabled="AppState.currentPage==AppState.totalPages" @click="changePage(AppState.currentPage +1)" class="btn btn-secondary w-50">Next <i class="mdi mdi-arrow-right"></i></button></div>
  </section>
  <section class="row">
    <!-- <div v-for="artwork in artworks" :key="artwork.id" class="col-3"> -->
      <!-- <img :src="artwork.full" class="img-fluid" alt=""> -->
      
      <ArtworkCard v-for="artwork in artworks" :key="artwork.id" :artwork="artwork" class="col-4 p-3 g-3" title="{{ art }}"/>  
      <!-- </div> -->
  </section>
</div>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
