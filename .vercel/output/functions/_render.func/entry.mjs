import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_Bvl5EvAL.mjs';
import { manifest } from './manifest_3YcxqvAg.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_DG1gFIKE.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_CPUfdAbR.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.5.2_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@4.9.5/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "402916cb-9812-4f50-b12e-8e0459151f88",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
