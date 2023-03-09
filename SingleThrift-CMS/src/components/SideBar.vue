<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/counter';
export default {
  data() {
    return {
      emailUser: '',
    };
  },
  methods: {
    ...mapActions(useAppStore, ['doLogout']),
    logout() {
      this.doLogout();
    },
  },
  computed: {
    ...mapState(useAppStore, ['email']),
  },
  watch: {
    email(newEmail) {
      this.emailUser = newEmail;
    },
  },
};
</script>

<template>
  <div class="col-span-1 fixed">
    <div
      class="flex h-screen w-full flex-col justify-between border-r-4 bg-gray-100 shadow-2xl"
    >
      <div class="flex flex-col py-5 px-3">
        <div class="flex justify-center">
          <img class="grid h-16 w-auto" src="../assets/ST.png" alt="" />
        </div>

        <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1">
          <div class="flex flex-col gap-2 py-3">
            <router-link to="/newAdmin">
              <a
                class="flex items-center gap-2 rounded-xl px-4 py-2 text-gray-900 hover:bg-pink-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span class="text-sm font-medium hover:text-white">
                  New Admin
                </span>
              </a>
            </router-link>

            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-900 hover:bg-pink-400 hover:text-white"
              >
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>

                  <span class="text-sm font-medium hover:text-white">
                    Users
                  </span>
                </div>

                <span
                  class="shrink-0 transition duration-300 group-open:-rotate-180"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
                <router-link to="/bannedUsers">
                  <a
                    href="#"
                    class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-900 hover:bg-pink-400 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>

                    <span class="text-sm font-medium hover:text-white">
                      Banned Users
                    </span>
                  </a>
                </router-link>
                <router-link to="/users">
                  <a
                    href="#"
                    class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-900 hover:bg-pink-400 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>

                    <span class="text-sm font-medium hover:text-white">
                      User List
                    </span>
                  </a>
                </router-link>
              </nav>
            </details>
            <router-link to="/">
              <a
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-900 hover:bg-pink-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>

                <span class="text-sm font-medium"> Dashboard </span>
              </a>
            </router-link>
            <router-link to="/products">
              <a
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-900 hover:bg-pink-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>

                <span class="text-sm font-medium"> Products List </span>
              </a>
            </router-link>
            <router-link to="/categories">
              <a
                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-900 hover:bg-pink-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>

                <span class="text-sm font-medium"> Category List </span>
              </a>
            </router-link>
            <form @submit.prevent="logout">
              <button
                type="submit"
                class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-900 hover:bg-pink-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>

                <span class="text-sm font-medium"> Logout </span>
              </button>
            </form>
          </div>
        </nav>
      </div>

      <div class="sticky inset-x-0 bottom-0 border-t border-gray-900">
        <a class="flex items-center gap-2 bg-gray-100 p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>

          <div>
            <p class="text-xs">
              <strong class="block font-medium">{{ email }}</strong>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
