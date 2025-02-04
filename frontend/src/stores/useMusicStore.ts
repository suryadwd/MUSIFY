import {create} from "zustand"
import { axiosInstance } from "../lib/axios"
import { Album, Song, Stats } from "../types"

interface MusicStore{
  songs: Song[],
  albums: Album[],
  isLoading: boolean,
  error: string | null,
  fetchAlbums: () => Promise<void>
  fetchAlbumById: (id: string) => Promise<void>
  currentAlbum: Album | null

  featureSongs: Song[],
  madeForYouSongs: Song[],
  trendingSongs: Song[],

  fetchFeaturedSongs: () => Promise<void>,
  fetchMadeForYouSongs: () => Promise<void>,
  fetchTrendingSongs: () => Promise<void>,


  stats:Stats

  fetchSongs: () => Promise<void>
  fetchStats: () => Promise<void>

}

export const useMusicStore = create<MusicStore>((set) => ({

  albums: [],
  songs: [],
  isLoading: true,
  error:null,
  currentAlbum: null,
  featureSongs: [],
  madeForYouSongs: [],
  trendingSongs: [],
  stats:{
    totalSongs:0,
    totalAlbums:0,
    totalUsers:0,
    totalArtists:0
  },

  fetchAlbums: async () => {

    set({isLoading: true})

    try {
      const res = await axiosInstance.get("/albums")
      set({albums: res.data})
      
    } catch (error) {
      console.log("error in albumfetch in zustand useMusic",error)
    }
    finally{
      set({isLoading: false})
    }

  },

  fetchAlbumById: async (id: string) => {

    set({isLoading: true})

    try {
      
      const res = await axiosInstance.get(`/albums/${id}`)

      set({currentAlbum: res.data})
      

    } catch (error) {
      console.log("error in albumfetchbyId ",error)
    }finally{
      set({isLoading: false})
    }
  },

  fetchFeaturedSongs: async () => {
    set({isLoading: true})

    try {
      const res = await axiosInstance.post("/songs/featured")
    set({featureSongs: res.data})
    } catch (error) {
      console.log(error)
    }finally{
      set({isLoading: false})
    }

  },

  fetchMadeForYouSongs: async () => {
    set({isLoading: true})

    try {
      const res = await axiosInstance.post("/songs/made-for-you")
      set({madeForYouSongs: res.data})
    } catch (error) {
      console.log(error)
    }finally{
      set({isLoading: false})
    }
  },

  fetchTrendingSongs: async () => {
    set({isLoading: true})
    try {
     const res = await axiosInstance.post("/songs/trending")
     set({trendingSongs: res.data}) 
    } catch (error) {
      console.log(error)
    }finally{
      set({isLoading: false})
    }
  },

  fetchSongs: async () => {
    set({isLoading: true})

    try {
      const res = await axiosInstance.get("/songs")
      set({songs: res.data})
    } catch (error) {
      console.log(error)
    }finally{
      set({isLoading: false})
    }
    
  },

  fetchStats: async () => {
    set({isLoading: true})
    try {
      const res = await axiosInstance.get("/stats")
      set({stats: res.data})
    } catch (error) {
      console.log(error)
    }
  }
}))