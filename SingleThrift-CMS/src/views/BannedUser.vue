<script>
import { mapActions, mapState } from 'pinia';
import TableRowUser from '../components/TableRowUser.vue';
import TableUser from '../components/TableUser.vue';
import { useAppStore } from '../stores/counter';
export default {
  components: { TableUser, TableRowUser },
   computed:{
    ...mapState(useAppStore,['users'])
  },
  methods:{
    ...mapActions(useAppStore,['getUsers'])
  },
  created(){
    this.getUsers()
  }
  };
</script>

<template>
     <div>
    <div class="text-center mb-12 mt-11">
      <p
        class="px-8 py-3 text-3xl font-bold text-gray-900 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
      >
        Banned User List
      </p>
    </div>

    <table class="w-[150vh] divide-y-2 divide-gray-200 mx-auto text-sm">
     <TableRowUser/>

      <tbody class="divide-y divide-gray-200">
        <TableUser v-for="user in users" :key="user.id" :user="user"/>
      </tbody>
    </table>
  </div>
</template>