<script>
import { mapActions, mapState } from 'pinia'
import TableCategory from '../components/TableCategory.vue'
import { useAppStore } from '../stores/counter'
export default {
  components: { TableCategory },
  methods:{
    ...mapActions(useAppStore,['getCategories'])
  },
  computed:{
    ...mapState(useAppStore,['categories'])
  },
  created(){
    this.getCategories()
  }
    
}
</script>

<template>
  <div>
    <div class="text-center mb-12 mt-11">
      <p
        class="px-8 py-3 text-3xl font-bold text-gray-900 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
      >
        Category List
      </p>
    </div>

    <table class="w-[150vh] divide-y-2 divide-gray-200 mx-auto text-sm">
      <thead>
        <tr>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Id
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Name
          </th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>

      <tbody class="divide-y divide-gray-200">
        <TableCategory v-for="category in categories" :key="category.id" :category="category"/>
      </tbody>
    </table>
  </div>
</template>