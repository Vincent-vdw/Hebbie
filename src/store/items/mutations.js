import Item from '../items/model.js'

export function save (state, payload) {
  const data = new Item(payload)
  state.content.push(data)
}

export function remove (state, key) {
  delete state[key]
}
