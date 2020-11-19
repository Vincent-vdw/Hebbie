// const Crypto = require('crypto-js')

export default class Item {
  constructor (transaction) {
    const id = transaction?.owner ?? +new Date()
    this.getId = () => id
    this.owner = transaction?.owner ?? 'me' // String or object
    this.reciever = transaction?.reciever ?? 'me' // String or object
    this.item = transaction?.itemId ?? '0' // Number
    this.from = transaction?.from ?? '0000-00-00' // Date
    this.till = transaction?.till ?? '0000-00-00' // Date
    this.remark = transaction?.remark ?? '[no remark]' // String
  }
}
