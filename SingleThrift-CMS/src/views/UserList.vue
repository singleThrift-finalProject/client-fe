<script>
import TableUser from '../components/TableUser.vue';
export default {
  components: { TableUser }
  };
</script>


<template>
  <div>
    <div class="text-center mb-12 mt-11">
      <p
        class="px-8 py-3 text-3xl font-bold text-gray-900 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
      >
        User List
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
            Username
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Email
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Role
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Status
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Phone Number
          </th>
          <th
            class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
            Address
          </th>
          <th class="px-4 py-2"></th>
        </tr>
      </thead>

      <tbody class="divide-y divide-gray-200">
        <TableUser />
      </tbody>
    </table>
  </div>
</template>