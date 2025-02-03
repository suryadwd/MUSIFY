import {create} from "zustand"
import { axiosInstance } from "../lib/axios"

interface ChatStore{
  users: any[],
  isLoading: boolean,
  fetchUsers: () => Promise<void>,
}

export const useChatStore = create<ChatStore>((set) => ({

  users: [],
  isLoading: false,
 

  fetchUsers: async () => {
    set({isLoading: true})
    try {
      const res = await axiosInstance.post("/users")
      set({users: res.data})
      
    } catch (error) {
      console.log("error in useChattore fetchUser",error)
    }finally{
      set({isLoading: false})
    }
  }

}))
