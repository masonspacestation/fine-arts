<script setup>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Artwork } from "../models/Artworks.js";
import { Account } from "../models/Account.js";
import { artsService } from "../services/ArtsService.js";
import Pop from "../utils/Pop.js";

defineProps({artwork: Artwork})

// const account = Account

async function likeArt(id){
  try {
    await artsService.likeArt(id)
  }
  catch (error){
    Pop.toast('unable to like art', 'error');
  }
}
</script>


<template>
  <div class="artwork">
    <img :src="artwork.small" class="img-fluid" alt="" :title="artwork.description">
    <h4><i class="mdi mdi-heart-outline" role="button" @click="likeArt(artwork.id)"></i></h4>
    

  </div>
</template>





<style lang="scss" scoped>

</style>