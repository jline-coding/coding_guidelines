// Wrap all markdown tables with <div class="table-wrap"> to enable
// horizontal scrolling on narrow screens or wide tables.
export function tableWrapPlugin(md) {
  const open = md.renderer.rules.table_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))
  const close = md.renderer.rules.table_close || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

  md.renderer.rules.table_open = (...args) => '<div class="table-wrap">' + open(...args)
  md.renderer.rules.table_close = (...args) => close(...args) + '</div>'
}

