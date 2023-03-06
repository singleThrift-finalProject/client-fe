<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/counter";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useAppStore, ["doRegister"]),
    register() {
      this.doRegister(this.form);
    },
  },
};
</script>

<template>
  <section class="mt-40">
    <main
      aria-label="Main"
      class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
    >
      <div class="max-w-xl lg:max-w-3xl">
        <h1
          class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
        >
          Register New Admin
        </h1>

        <form @submit.prevent="register" class="mt-8 grid grid-cols-6 gap-6">
          <div class="col-span-6">
            <label for="Email" class="block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
            type="email"
              v-model="form.email"
              class="mt-1 h-8 w-full rounded-md border border-solid border-gray-900 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div class="col-span-6">
            <label
              for="Password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
            type="password"
              v-model="form.password"
              class="mt-1 h-8 w-full rounded-md border border-solid border-gray-900 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Create an account
            </button>
          </div>
        </form>
      </div>
    </main>
  </section>
</template>