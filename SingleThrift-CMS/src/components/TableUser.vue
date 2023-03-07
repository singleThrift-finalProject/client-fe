<script>
import { mapActions } from "pinia";
import { useAppStore } from "../stores/counter";
export default {
  props: ["user"],
  methods: {
    ...mapActions(useAppStore, ["patchStatusUser"]),
    changeStatus(status, id) {
      this.patchStatusUser(status, id);
    },
  },
};
</script>

<template>
  <tr>
    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
      {{ user.id }}
    </td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
      {{ user.username }}
    </td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ user.email }}</td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ user.role }}</td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
      <select
        v-model="user.status"
        class="form-select"
        @change="changeStatus(user.status, user.id)"
      >
        <option value="Active">Active</option>
        <option value="Banned">Banned</option>
      </select>
    </td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
      {{ user.phoneNumber }}
    </td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
      {{ user.address }}
    </td>
  </tr>
</template>