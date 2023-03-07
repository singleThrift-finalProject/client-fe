<script>
import { mapActions } from 'pinia'
import { useAppStore } from '../stores/counter'
export default {
    data(){
      return{
        form:{
          email:'',
          password:''
        }
      }
    },
    methods:{
      ...mapActions(useAppStore,['doLogin']),
      login(){
        this.doLogin(this.form)
      }
    }
}
</script>

<template>
<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    
  <div class="mx-auto max-w-lg">
  
<article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <div class="bg-yellow-500 p-4 sm:p-6">
    <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
        Single Thrift
    </h1>

    <p class="mx-auto mt-4 max-w-md text-lg font-bold text-center text-gray-900">
     Admin Panel
    </p>

    <form
      @submit.prevent="login"
      class="mt-6 mb-0 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8"
    >
      <p class="text-center text-lg font-medium">Sign in</p>

      <div>
        <label class="sr-only">Email</label>

        <div class="relative">
          <input
            type="email"
            v-model="form.email"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

        </div>
      </div>

      <div>
        <label for="password" class="sr-only">Password</label>

        <div class="relative">
          <input
            type="password"
            v-model="form.password"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter password"
          />

        </div>
      </div>

      <button
        type="submit"
        class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>

    </form>

  </div>
</article>

  </div>
</div>

</template>