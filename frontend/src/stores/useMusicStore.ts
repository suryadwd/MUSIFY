import {create} from "zustand"
import { axiosInstance } from "../lib/axios"
import { Album, Song } from "../types"

interface MusicStore{
  songs: Song[],
  albums: Album[],
  isLoading: boolean,
  error: string | null,
  fetchAlbums: () => Promise<void>
}

export const useMusicStore = create<MusicStore>((set) => ({

  albums: [],
  songs: [],
  isLoading: true,
  error:null,

  fetchAlbums: async () => {

    set({isLoading: false})

    try {
      const res = await axiosInstance.get("/albums")
      set({albums: res.data})
    } catch (error) {
      console.log("error in albumfetch in zustand useMusic",error)
    }
    finally{
      set({isLoading: false})
    }

  }

}))