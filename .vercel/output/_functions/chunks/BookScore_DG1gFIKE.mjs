import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_Bag2_VyE.mjs';

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  let score = "N/A";
  const response = await fetch("https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new");
  const scoreValue = await response.text();
  score = `⭐️${scoreValue} sobre 5`;
  return renderTemplate`${maybeRenderHead()}<span class="text-xs" id="score">${score}</span>`;
}, "/Users/marioortizcuadrado/Desktop/Projects/astro-5/src/components/BookScore.astro", void 0);
const $$file = "/Users/marioortizcuadrado/Desktop/Projects/astro-5/src/components/BookScore.astro";
const $$url = void 0;

export { $$BookScore as default, $$file as file, $$url as url };
