import { html } from "lit"
import { css } from "nested-css-to-flat/lit-css"
import { pureLit, useOnce } from "pure-lit"
import 'animate.css';

const createAnimation = (animation, duration, delay, repeat, mode) => 
  css`
  :host {
    display: inline-block;
  }
  ::slotted(*) {
    animation: ${animation};
    animation-delay: ${delay};
    animation-duration: ${duration};
    animation-iteration-count: ${repeat};
    animation-fill-mode: ${mode} !important;
  }`

document.querySelector("[data-animation-restart]").addEventListener("click", (event) => {
  const {animationRestart} = event.target.dataset
  if (!animationRestart) return
  window.postMessage({ type: "animation-restart", target: animationRestart}, window.location.origin)
})

pureLit("animated-element", (ele) => {
  const { animation, duration, delay, repeat, name, mode } = ele
  console.log({ animation, duration, delay, repeat })
  if (animation) {
    ele.shadowRoot.adoptedStyleSheets = [
      createAnimation(animation, duration, delay, repeat, mode).styleSheet
    ];
  }
  useOnce(ele, () => {
    window.addEventListener("message", (event) => {
      if (event.origin !== window.location.origin ||
        event.data.type !== "animation-restart" ||
        event.data.target !== name) {
          return
        }
        ele.shadowRoot.querySelector('slot')?.assignedElements()[0]?.style.animation = 'none';
        ele.shadowRoot.querySelector('slot')?.assignedElements()[0]?.offsetHeight; /* trigger reflow */
        ele.shadowRoot.querySelector('slot')?.assignedElements()[0]?.style.animation = null; 
    })
  })
  return html`<slot></slot>`
},
  {
    defaults: {
      name: "",
      animation: undefined,
      duration: '2s',
      delay: '0s',
      repeat: 1,
      mode: "both"
    }
  })