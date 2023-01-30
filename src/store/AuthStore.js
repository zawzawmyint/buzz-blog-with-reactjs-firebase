import { create } from "zustand";

const authStore = create((set) => ({
  isAuth: localStorage.getItem("isAuth"),
  setIsAuth: (value) => set((state) => ({ isAuth: value })),
}));

export default authStore;
