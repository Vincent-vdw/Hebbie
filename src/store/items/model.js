// const Crypto = require('crypto-js')

export default class Item {
  constructor (itemContent) {
    const id = +new Date()
    this.name = itemContent?.name ?? ''
    this.description = itemContent?.description ?? ''
    this.photo = itemContent?.photo ?? ''
    this.getId = () => id
  }
}
