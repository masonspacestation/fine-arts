import axios from "axios"
import { baseURL } from "../env.js"
import { AppState } from "../AppState.js"
import { Artwork } from "../models/Artworks.js"

// const artApi = 'baseURL/artworks'
const artApi = axios.create({
  baseURL: 'https://sandbox.codeworksacademy.com/api/artworks',
})


class ArtsService {
  async likeArt(artwork) {
    console.log('liking this art', artwork);
    const response = await artApi.post(`/:${artwork.id}/admire`)
  }


  async changePage(url) {
    const response = await artApi.get(url)
    console.log('page 2 art', response.data);
    const artworks = response.data.artworks.map(artworkData => new Artwork(artworkData))
    AppState.artworks = artworks
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }


  async discoverArt() {
    const response = await artApi.get('')
    console.log(response.data);
    const artworks = response.data.artworks.map(artworkData => new Artwork(artworkData))
    AppState.artworks = artworks
    console.log(response.data.pages);
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }

}


export const artsService = new ArtsService