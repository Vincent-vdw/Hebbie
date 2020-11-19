import Transaction from '../transactions/model.js'
export function save (state, payload) {
  const data = new Transaction(payload)
  if (state.content.find(x => x.getId === data.getId())) {
    // Update
  } else {
    // Create
    state.content.push(data)
  }
}

export function remove (state, key) {
  delete state[key]
}
