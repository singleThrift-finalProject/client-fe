<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../stores/counter";
export default {
  computed: {
    ...mapState(useAppStore, ["totalData"]),
  },
  methods: {
    ...mapActions(useAppStore, [
      "getProducts",
      "getCategories",
      "getUsers",
      "getBannedUsers",
    ]),
  },
  created() {
    this.getProducts();
    this.getCategories();
    this.getUsers();
    this.getBannedUsers();
  },
};
</script>

<template>
  <div class="items-center">
    <div>
      <p class="ml-24 font-extrabold text-2xl mt-5">Dashboard</p>
    </div>

    <div class="justify-center flex p-9 gap-36">
      <article
        class="w-60 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      >
        <div class="rounded-[10px] h-48 bg-white p-4 sm:p-6">
          <a>
            <h3 class="mt-0.5 text-lg font-medium text-gray-900">
              Total: User Active
            </h3>
          </a>
          <p class="text-5xl text-center mt-3 font-extrabold text-gray-900">
            {{ this.totalData.users }}
          </p>
        </div>
      </article>
      <article
        class="w-60 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      >
        <div class="rounded-[10px] h-48 bg-white p-4 sm:p-6">
          <a>
            <h3 class="mt-0.5 text-lg font-medium text-gray-900">
              Total: Banned User
            </h3>
          </a>
          <p class="text-5xl text-center mt-3 font-extrabold text-gray-900">
            {{this.totalData.banned}}
          </p>
        </div>
      </article>
      <article
        class="w-60 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      >
        <div class="rounded-[10px] h-48 bg-white p-4 sm:p-6">
          <a>
            <h3 class="mt-0.5 text-lg font-medium text-gray-900">
              Total: Products
            </h3>
          </a>
          <p class="text-5xl text-center mt-3 font-extrabold text-gray-900">
            {{ this.totalData.products }}
          </p>
        </div>
      </article>
      <article
        class="w-60 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      >
        <div class="rounded-[10px] h-48 bg-white p-4 sm:p-6">
          <a>
            <h3 class="mt-0.5 text-lg font-medium text-gray-900">
              Total: Category
            </h3>
          </a>
          <p class="text-5xl text-center mt-3 font-extrabold text-gray-900">
            {{ this.totalData.categories }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>
