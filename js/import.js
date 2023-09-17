import { jsonOutput } from './module/output.js'
import { slideFunc } from './module/slide.js'

window.addEventListener("DOMContentLoaded", () => {
  jsonOutput()
})
window.addEventListener("load", () => {
  slideFunc()
})