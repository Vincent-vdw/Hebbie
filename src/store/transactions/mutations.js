export function save (state, payload) {
  state.content.push(payload)
}

export function remove (state, key) {
  delete state[key]
}
