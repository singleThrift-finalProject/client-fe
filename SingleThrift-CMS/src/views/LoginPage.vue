<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/counter';
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(useAppStore, ['doLogin']),
    login() {
      this.doLogin(this.form);
    },
  },
};
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="max-w-lg">
      <article
        class="overflow-hidden rounded-lg shadow-xl transition hover:shadow-2xl"
      >
        <div class="p-10">
          <div class="flex justify-center pb-3">
            <img
              class="h-20 w-20"
              src="https://cdn.discordapp.com/attachments/1078712407863595140/1082812266409373726/7dngh6.gif"
            />
          </div>
          <h1
            style="font-family: 'Inter', sans-serif"
            class="text-center text-2xl font-bold text-gray-800 sm:text-3xl"
          >
            Single Thrift
          </h1>

          <form
            @submit.prevent="login"
            class="mt-6 mb-0 py-3 space-y-5 rounded-lg"
          >
            <!-- <p class="text-center text-lg font-medium">Sign in</p> -->

            <div>
              <label class="sr-only">Email</label>

              <div class="relative rounded-2xl">
                <input
                  type="email"
                  v-model="form.email"
                  class="border w-full rounded-lg border-gray-200 p-3 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label for="password" class="sr-only">Password</label>

              <div class="relative rounded-2xl">
                <input
                  type="password"
                  v-model="form.password"
                  class="border w-full rounded-lg border-gray-200 p-3 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <button
              type="submit"
              class="block w-full rounded-lg bg-pink-500 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
          </form>
        </div>
      </article>
    </div>
  </div>
</template>
