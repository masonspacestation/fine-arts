<script setup>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Artwork } from "../models/Artworks.js";
import { Account } from "../models/Account.js";
import { artsService } from "../services/ArtsService.js";
import Pop from "../utils/Pop.js";

defineProps({artwork: Artwork})
const artworks = computed(()=> AppState.artworks)
// const account = Account

async function likeArt(artwork){
  try {
    console.log('liking', artwork);
    await artsService.likeArt(artwork)

  }
  catch (error){
    Pop.toast('unable to like art', 'error');
  }
}


</script>


<template>
  <div class="artwork">
    <img :src="artwork.small" class="img-fluid" alt="" :title="artwork.description">
    <h4><i class="mdi mdi-heart-outline" role="button" @click="likeArt(artwork)"></i></h4>
    <!-- <h4 v-if="artworks.admirers.includes(!AppState.user.id)"><i class="mdi mdi-heart-outline" role="button" @click="likeArt(artwork)"></i></h4> -->
    <!-- <h4 v-else><i class="mdi mdi-heart" role="button" @click="likeArt(artwork.id)"></i></h4> -->
    
<!-- (this.creatorId == AppState.account?.id) -->
  </div>
</template>





<style lang="scss" scoped>

.masonry {
  columns: 300px;
  column-gap: 1rem;
}

.masonry-container {
 column-count: 3;
 column-gap: 15px;
}
.masonry-item {
 display: inline-block;
 width: 100%;
}
.masonry-item img {
 display:block;
 width: 100%;
}
</style>