import Alpine from "alpinejs";
import tippy from "tippy.js";

window.Alpine = Alpine;

Alpine.directive('tooltip', (el, { expression }) => {
  tippy(el, { content: expression })
})

Alpine.start();
