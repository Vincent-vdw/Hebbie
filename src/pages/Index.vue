<template>
  <q-page class="flex flex-center">
        <q-btn color="primary">Lend Out ({{transactionsOut.length}})</q-btn>
        <q-btn style = "margin: 0 30px;" color="primary" @click = "saveItem({'yoo':'blah', name:'rtyblah'})">+</q-btn>
        <q-btn color="primary">Lend In ({{transactionsIn.length}})</q-btn>

        <ul>
            <li :key = "`ii-${index}`" v-for = "(item, index) in items">{{JSON.stringify(item)}}</li>
        </ul>
  </q-page>
</template>

<script>
import { mapState, mapMutations } from 'Vuex'

export default {
  name: 'PageIndex',
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
