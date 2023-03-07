<script>
import { mapActions } from 'pinia'
import { useAppStore } from '../stores/counter'
export default {
    props:['category'],
    methods:{
        ...mapActions(useAppStore,['deleteCategory']),
        destroyCat(id){
            this.deleteCategory(id)
        }
    }
}
</script>

<template>
    <tr>
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {{category.id}}
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{category.name}}</td>
            <td class="whitespace-nowrap px-4 py-2">
                <a
                @click.prevent="destroyCat(category.id)"
                    class="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white"
                >
                    Delete
                </a>
            </td>

        </tr>
</template>