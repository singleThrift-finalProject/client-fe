<script>
import { mapState, mapActions } from "pinia";
import { useAppStore } from "../stores/counter";
import TableProduct from "../components/TableProduct.vue";
import FilterCategory from "../components/FilterCategory.vue";
import Paginate from "vuejs-paginate-next";
export default {
  data() {
    return {
      page: 1,
    };
  },
  components: { TableProduct, FilterCategory, Paginate },
  computed: {
    ...mapState(useAppStore, ["products",'totalData']),
  },
  methods: {
    ...mapActions(useAppStore, ["getProducts"]),
  },
  created() {
    this.getProducts(this.page);
  },
};
</script>

<template>
  <div>
    <div class="text-center mb-12 mt-11">
      <p
        class="px-8 py-3 text-3xl font-bold text-gray-900 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
      >
        Product List
      </p>
    </div>
    
    <div class="mb-5">
      <FilterCategory />
    </div>
    
    <table class="w-[150vh] mx-auto divide-y-2 divide-gray-200 text-sm">
      <thead>
        <tr>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Product Name
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Description
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Price
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Image
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Created By
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Category
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Status
          </th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>

      <tbody class="divide-y divide-gray-200">
        <TableProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </tbody>
    </table>
    <div class="mt-4">
      <Paginate
        class="justify-content-center"
        v-model="page"
        :page-count="this.totalData.products / 3"
        :page-range="3"
        :margin-pages="2"
        :click-handler="this.getProducts"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      />
    </div>
  </div>
</template>