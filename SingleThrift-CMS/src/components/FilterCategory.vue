<script>
import { mapState, mapActions } from "pinia";
import { useAppStore } from "../stores/counter";
export default {
  data() {
    return {
      filter: "",
      search: "",
    };
  },
  computed: {
    ...mapState(useAppStore, ["categories"]),
  },
  methods: {
    ...mapActions(useAppStore, ["getCategories", "getProducts"]),
  },
  created() {
    this.getCategories();
    this.getProducts(null, this.filter);
  },
};
</script>

<template>
  <div class="flex justify-between">
    <div>
      <select
        v-model="filter"
        @change.prevent="this.getProducts(null, this.filter)"
        class="w-full h-10 border rounded-sm"
      >
        <option disabled selected>select by category</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>
    <div >
      <form class="flex" @submit.prevent="this.getProducts(null, null, search)">
        <input
          v-model="search"
          type="text"
          placeholder="Search by name"
          class="w-full mr-4 h-10 border rounded-sm"
        />
        <button
          class="inline-block rounded border border-indigo-600 px-6 py-2 text-sm font-medium text-white bg-indigo-600"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  </div>
</template>