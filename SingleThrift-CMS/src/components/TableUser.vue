<script>
export default {
    props:['user']
}
</script>

<template>
    <tr>
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
             {{user.id}}  
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{user.username}}</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{user.email}}</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{user.role}}</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{user.status}}</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{user.phoneNumber}}</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{user.address}}</td>
            <td class="whitespace-nowrap px-4 py-2">
                <a
                    class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                    View
                </a>
            </td>
        </tr>
</template>