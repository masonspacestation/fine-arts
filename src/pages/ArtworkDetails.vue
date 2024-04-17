<script setup>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";

const artworks = computed(()=> AppState.artworks)
const active = computed(() => AppState.activeArtwork)
const admirers = computed(() => AppState.activeArtwork.admirers)

</script>


<template>
<h1>Detail Page</h1>
<div class="row">
<div class="col-4">
  <img class="img-fluid" :src="active.small" alt="">
</div>
<div class="col-8">
  <p>{{ active.description }}</p>
  <p v-for="admirer in admirers" :key="admirer.account ">{{admirer.account.picture}}</p>
</div>
</div>
</template>


<style lang="scss" scoped>

</style>