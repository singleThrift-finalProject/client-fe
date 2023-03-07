<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/counter";

export default {
  props: ["product"],
  methods: {
    ...mapActions(useAppStore, ["getDetailProduct", "deleteProduct"]),
    async getDetails(id) {
      await this.getDetailProduct(id);
    },
    destroyPro(id) {
      this.deleteProduct(id);
    },
  },
  computed: {
    summaryDesc() {
      return this.product.description?.length > 50
        ? this.product.description.substring(0, 50) + `...`
        : this.product.description;
    },
  },
};
</script>

<template>
  <tr>
    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
      {{ product.name }}
    </td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
      <p class="w-[130px]">{{ summaryDesc }}</p>
    </td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
      {{ product.price }}
    </td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
      <img class="" :src="product.Images[0].imageUrl" alt="ini errror" />
    </td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
      {{ product.User.username }}
    </td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
      {{ product.Category.name }}
    </td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
      {{ product.status }}
    </td>
    <td class="whitespace-nowrap px-4 py-2">
      <a
        @click.prevent="getDetails(product.id)"
        class="mr-2 inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
      >
        Details
      </a>
      <a
        @click.prevent="destroyPro(product.id)"
        class="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white"
      >
        Delete
      </a>
    </td>
  </tr>
</template>