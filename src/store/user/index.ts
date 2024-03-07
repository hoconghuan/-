import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("User", () => {
  let visible = ref(false);
  return { visible };
});
