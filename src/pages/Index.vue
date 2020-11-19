<template>
  <q-page class="flex flex-center">
    <h3>Info</h3>
    <q-input outlined v-model="tOwner" label="Owner" />
    <q-input outlined v-model="tReciever" label="Reciever" />
    <q-input outlined v-model="tFrom" type="date" label="From" />
    <q-input outlined v-model="tTill" type="date" label="Till" />

    <q-input outlined v-model="tRemark" type="textarea" label="Remark" />
    <hr>
    <h3>Item</h3>
    <q-input outlined v-model="iName" label="Name" />
    <q-input outlined v-model="iDesc" type="textarea" label="Description" />
    <q-input outlined v-model="iDesc" type="textarea" label="Photo" />

    <q-btn style = "margin: 0 30px;" color="primary" @click = "saveItem({'yoo':'blah', name:'rtyblah'})">+</q-btn>
    <!-- <q-input v-model="tel" filled type="tel" hint="Telephone number" /> -->

    <q-btn color="primary">Lend Out ({{transactionsOut.length}})</q-btn>

    <q-btn style = "margin: 0 30px;" color="primary" @click = "saveItem({'yoo':'blah', name:'rtyblah'})">+</q-btn>

    <q-btn color="primary">Lend In ({{transactionsIn.length}})</q-btn>

    <ul>
        <li :key = "`ii-${index}`" v-for = "(item, index) in items">{{JSON.stringify(item)}} {{item.getId()}}</li>
    </ul>
  </q-page>
</template>

<script>
import { mapState, mapMutations } from 'Vuex'

export default {
  name: 'PageIndex',
  data () {
    return {
      tOwner: '',
      tReciever: '',
      tItem: '',
      tFrom: '',
      tTill: '',
      tRemark: '',

      iName: '',
      iDesc: '',
      iPhoto: ''

    }
  },
  methods: {

    ...mapMutations({
      saveItem: 'items/save',
      removeItem: 'items/remove',
      saveTransaction: 'transactions/save',
      removeTransaction: 'transactions/remove'
    })
  },
  computed: {
    transactionsOut () { return this.transactions.filter(x => x.owner === 'me') },
    transactionsIn () { return this.transactions.filter(x => x.owner !== 'me') },
    ...mapState('items', { items: 'content' }),
    ...mapState('transactions', { transactions: 'content' })
  },
  mounted () {
    console.log(this)
  }
}
</script>
