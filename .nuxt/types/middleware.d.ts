import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/swizzleverse/Documents/August Robotics/Corporate Website/ar-website-nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}