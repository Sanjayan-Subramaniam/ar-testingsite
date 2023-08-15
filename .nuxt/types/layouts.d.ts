import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "diego"
declare module "/Users/swizzleverse/Documents/August Robotics/Xstagingsite/ar-website-nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}