import tippy from "tippy.js";

export default (el, { expression }) => {
  tippy(el, { content: expression })
}