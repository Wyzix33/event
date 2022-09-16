export const e = {};
export const ws = {};

export function addSocket(type, fc, ns) {
 if (!ws[ns]) ws[ns] = [];
 ws[ns].push({ type, fc });
}

export function add(el, type, fc, ns, opts = { passive: true }) {
 el.addEventListener(type, fc, opts);
 if (!e[ns]) e[ns] = [];
 e[ns].push({ el, type, fc, opts });
}

export function rem(ns) {
 if (ns && e[ns] && e[ns].length > 0) {
  for (let i = 0; i < e[ns].length; i += 1) {
   const ev = e[ns][i];
   ev.el.removeEventListener(ev.type, ev.fc, ev.opts);
  }
  e[ns] = null;
  delete e[ns];
 }
 if (ns && ws[ns] && ws[ns].length > 0) {
  ws[ns] = null;
  delete ws[ns];
 }
}
