import { defineStore } from "pinia";

interface Tag {
  label: string;
  classes: string;
}
export const useStore = defineStore("store", () => {
  const newsTags = reactive([
    {
      label: "All",
      classes: "text-gray-400 border-gray-400",
    },
    {
      label: "Exhibitions",
      classes: "text-black- border-black",
    },
    {
      label: "Construction",
      classes: "text-gray-500 border-gray-500",
    },
    {
      label: "Lionel",
      classes: "text-ardarkgreen border-ardarkgreen",
    },
    {
      label: "Property",
      classes: "text-arblue border-arblue",
    },
    {
      label: "General",
      classes: "text-ardarkgray border-ardarkgray",
    },
  ]);

  return { newsTags };
});
