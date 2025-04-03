
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 10578, hash: '49be44e3265fc12eebde820b136d158320a643f8ed72c484e9dee97627cd1eb3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: '15c97bfddc5918a0e91c408e27dbcde0640679b02194720009356a44eb6f479c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-C573YRIU.css': {size: 10224, hash: 'UpEsvAARVn0', text: () => import('./assets-chunks/styles-C573YRIU_css.mjs').then(m => m.default)}
  },
};
